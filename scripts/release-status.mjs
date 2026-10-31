#!/usr/bin/env node
/**
 * release-status.mjs — 查看分批披露进度
 *
 *   node scripts/release-status.mjs            # 当前状态
 *   node scripts/release-status.mjs 2026-11-15 # 模拟某天
 */
import { RELEASE_WAVES, isReleased, releaseDateFor } from '../src/data/release-schedule.mjs';

const arg = process.argv[2];
const today = arg ? new Date(`${arg}T00:00:00Z`) : new Date();
if (Number.isNaN(today.getTime())) {
  console.error('日期格式应为 YYYY-MM-DD');
  process.exit(2);
}

console.log(`分批披露状态（基准日 ${today.toISOString().slice(0, 10)}）\n`);

let released = 0;
let pending = 0;
for (const [date, paths] of Object.entries(RELEASE_WAVES)) {
  const live = today >= new Date(`${date}T00:00:00Z`);
  console.log(`${date}  ${live ? '已放行' : '待放行'}  ${paths.length} 个页面`);
  for (const p of paths) {
    const state = isReleased(p, today) ? 'index' : 'noindex';
    console.log(`   [${state.padEnd(7)}] ${p}`);
  }
  live ? (released += paths.length) : (pending += paths.length);
}

console.log(`\n合计：已放行 ${released} · 待放行 ${pending}`);

const unknown = ['/no-such-page/'];
console.log(`未列入计划 = 始终 indexable（示例 ${unknown[0]} → ${isReleased(unknown[0], today)}）`);
console.log(`查询单页：releaseDateFor('/technology/interference/') = ${releaseDateFor('/technology/interference/')}`);
