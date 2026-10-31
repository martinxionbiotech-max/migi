#!/usr/bin/env python3
"""
apply-fill.py — 把已填好的 CSV 数据写回站点源码。

用法:
    python3 scripts/apply-fill.py data/fill-priority-5.csv --dry-run
    python3 scripts/apply-fill.py data/fill-priority-5.csv

设计原则:
  * 逐行锚定替换，不做全局替换（避免串行 / 误伤其他项目）
  * 只填「本页面确实存在」的字段；缺字段跳过并报告
  * 空值视为未填，不动原文
  * --dry-run 只打印将要做的修改
"""

from __future__ import annotations
import argparse, csv, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONTENT = ROOT / "src" / "content"

# 每个 biomarker 页面里参考区间表的行标签（按出现顺序：成年 / 幼年 / 老年）
RI_LABELS = {
    "canine-crp": ["Adult dogs", "Puppies", "Geriatric dogs"],
    "feline-saa": ["Adult cats", "Kittens"],
    "sdma": ["Adult dogs", "Adult cats"],
    "canine-cpl": ["Reference interval (adult dogs)", "Upper reference limit", "Suggested decision limit"],
    "feline-fpl": ["Reference interval (adult cats)", "Suggested decision limit", "Precision at decision limit"],
}


def cell(v: str) -> str:
    return (v or "").strip()


def replace_row_values(line: str, values: list[str]) -> str:
    """把表格行第 2..n 列替换为给定值，跳过空值。"""
    parts = line.split("|")
    # parts[0] == "" (leading pipe), parts[-1] == "\n" 尾巴
    out = list(parts)
    for i, v in enumerate(values, start=2):
        if i < len(out) - 1 and cell(v):
            out[i] = f" {cell(v)} "
    return "|".join(out)


def fmt_ri(ll: str, ul: str, unit: str) -> str:
    if ll and ul:
        return f"{ll}–{ul} {unit}".strip()
    if ul:
        return f"< {ul} {unit}".strip()
    return ""


def patch_biomarker(slug: str, row: dict, dry: bool) -> list[str]:
    p = CONTENT / "biomarkers" / f"{slug}.md"
    if not p.exists():
        return [f"  ! 文件不存在: {p}"]
    lines = p.read_text(encoding="utf-8").split("\n")
    log = []
    labels = RI_LABELS.get(slug, [])

    # 参考区间：按行标签顺序填 成年 / 幼年 / 老年
    band_map = {
        0: [fmt_ri(row["RI_adult_LL"], row["RI_adult_UL"], row["unit"]), row["RI_n"], row["RI_method"]],
        1: [fmt_ri(row["RI_young_LL"], row["RI_young_UL"], row["unit"]), row["RI_n"], row["RI_method"]],
        2: [fmt_ri(row["RI_geriatric_LL"], row["RI_geriatric_UL"], row["unit"]), row["RI_n"], row["RI_method"]],
    }
    hit = 0
    for idx, label in enumerate(labels):
        for i, line in enumerate(lines):
            if line.startswith("|") and line.split("|")[1].strip().startswith(label):
                vals = band_map.get(idx, ["", "", ""])
                new = replace_row_values(line, vals)
                if new != line:
                    lines[i] = new
                    log.append(f"  RI[{label}] -> {vals[0] or '(空)'}")
                hit += 1
                break

    # 决策分档：找到 Band/分档表里连续 3 个 Pending 首列的行
    bands = [row["band_mild"], row["band_moderate"], row["band_marked"]]
    if any(bands):
        n = 0
        for i, line in enumerate(lines):
            if n >= 3:
                break
            if line.startswith("| Pending |") and bands[n]:
                lines[i] = replace_row_values(line, [bands[n]])
                log.append(f"  Band[{n+1}] -> {bands[n]}")
                n += 1

    # frontmatter referenceRange
    text = "\n".join(lines)
    ri_text = fmt_ri(row["RI_adult_LL"], row["RI_adult_UL"], row["unit"])
    if ri_text:
        text = re.sub(r'^referenceRange: ".*?"',
                      f'referenceRange: "{ri_text} (platform-specific; established on this analyzer)"',
                      text, count=1, flags=re.M)

    if not dry:
        p.write_text(text, encoding="utf-8")
    return log


def patch_central(table_file: str, analyte: str, row: dict, dry: bool) -> list[str]:
    """填 technology/ 下的汇总表（按 analyte 定位行）。"""
    p = CONTENT / "pages" / "technology" / table_file
    if not p.exists():
        return [f"  ! 文件不存在: {p}"]
    lines = p.read_text(encoding="utf-8").split("\n")
    log = []
    for i, line in enumerate(lines):
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.split("|")]
        if len(cells) > 2 and cells[1] == analyte:
            if table_file == "analytical-performance.md":
                vals = [row["species"], row["sample_type"] or "", row["LoB"], row["LoD"],
                        (f'{row["LoQ"]} ({row["LoQ_CV_target"]})' if row["LoQ"] else ""),
                        row["measuring_interval"], row["unit"]]
            else:  # reference-intervals.md
                ri = fmt_ri(row["RI_adult_LL"], row["RI_adult_UL"], "")
                vals = [row["species"], "Adult", ri, row["RI_n"], row["RI_method"],
                        row["unit"], row["study_id"], row["review_date"]]
            new = replace_row_values(line, vals)
            if new != line:
                lines[i] = new
                log.append(f"  {table_file}[{analyte}] 已更新")
    if log and not dry:
        p.write_text("\n".join(lines), encoding="utf-8")
    return log


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("csv_path")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    path = pathlib.Path(args.csv_path)
    if not path.exists():
        print(f"找不到 CSV: {path}")
        return 2

    rows = list(csv.DictReader(path.open(encoding="utf-8-sig")))
    if not rows:
        print("CSV 为空")
        return 2

    total_filled = 0
    for row in rows:
        slug, analyte = row["slug"].strip(), row["analyte"].strip()
        filled = sum(1 for k, v in row.items() if v.strip() and k not in ("analyte", "slug", "species", "unit"))
        print(f"\n[{analyte}] {filled} 个数据点")
        if filled == 0:
            print("  (未填，跳过)")
            continue
        for line in patch_biomarker(slug, row, args.dry_run):
            print(line)
        for line in patch_central("analytical-performance.md", analyte, row, args.dry_run):
            print(line)
        for line in patch_central("reference-intervals.md", analyte, row, args.dry_run):
            print(line)
        total_filled += filled

    # 统计剩余 Pending
    remaining = 0
    for p in CONTENT.rglob("*.md"):
        remaining += len(re.findall(r"\|\s*Pending\s*\|", p.read_text(encoding="utf-8")))
    print(f"\n合计填入 {total_filled} 个数据点；全站剩余 Pending 单元格 {remaining} 个")
    if args.dry_run:
        print("(dry-run，未写入)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
