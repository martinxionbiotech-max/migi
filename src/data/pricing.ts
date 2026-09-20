/**
 * 全站价格唯一来源 —— JSON-LD 与页面可见文案均取自此处，避免「schema 有价、页面无价」的不一致。
 * 数据来源：客户 2026-09-20 给定的对外报价区间（试剂 20–80 USD / 分析仪 1000–2000 USD）。
 */
export type PriceRange = { low: number; high: number; currency: string };

export const PRICE_RANGES: Record<'reagent' | 'analyzer', PriceRange> = {
  /** 试剂盒（/reagents/，34 个 SKU） */
  reagent: { low: 20, high: 80, currency: 'USD' },
  /** 分析仪（/equipment/，FIA680 / FIA880） */
  analyzer: { low: 1000, high: 2000, currency: 'USD' },
};

/** US$20–80 / US$1,000–2,000 */
export function formatRange(r: PriceRange): string {
  const fmt = (n: number) => n.toLocaleString('en-US');
  const sym = r.currency === 'USD' ? 'US$' : `${r.currency} `;
  return `${sym}${fmt(r.low)}–${fmt(r.high)}`;
}
