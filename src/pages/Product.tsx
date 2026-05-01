import { Link } from 'react-router-dom'

const specs = [
  { label: '产品名称', value: '冷萃金花黑茶固体饮料' },
  { label: '品牌', value: '黑氪金球（HK）' },
  { label: '规格', value: '15g（1g × 15 条）' },
  { label: '金花菌含量', value: '≥ 290 万/g，超国标 14 倍' },
  { label: '干燥工艺', value: '≤45°C 药品级冻干，21 道纯物理工艺' },
  { label: '冲泡方式', value: '冷热双溶 · 3 秒速溶' },
  { label: '安全承诺', value: '0 糖 · 0 香精 · 0 激素 · 0 色素 · 0 防腐剂 · 纯天然' },
  { label: '生产环境', value: 'GMP 10 万级洁净车间' },
  { label: '菌种保藏', value: '湘丰 1 号，CGMCC No.41485，中科院微生物研究所' },
  { label: '专利体系', value: '湘丰茶业 111 项专利，16 项保护精准发花技术' },
]

const formula = [
  { role: '君', name: '冻干金花黑茶', tag: '刮油降脂', desc: '金花菌代谢茯茶素 A/B，直接分解油腻，主攻脂肪' },
  { role: '臣', name: '柑橘纤维', tag: '促进排便', desc: '水溶性膳食纤维，刺激肠道蠕动，辅助通便' },
  { role: '佐', name: '冻干陈皮', tag: '理气消胀', desc: '橙皮苷 + 挥发油，促进脂肪分解，缓解腹胀' },
  { role: '使', name: '冻干普洱', tag: '醇香陈化', desc: '增强口感层次，协同金花菌作用' },
]

const dryingRows = [
  { label: '加工温度', ours: '≤45°C', theirs: '≥120°C' },
  { label: '茶多糖保留', ours: '≥90%', theirs: '≤30%' },
  { label: '茶多酚保留', ours: '≥85%', theirs: '≤50%' },
  { label: 'SOD 酶活性', ours: '基本保留', theirs: '完全失活' },
  { label: '溶解性', ours: '冷热双溶 · 无沉淀', theirs: '仅热水 · 易结块' },
  { label: '营养当量', ours: '1 条 ≈ 3–5 条普通', theirs: '流失 >70%' },
]

const compRows = [
  { label: '金花菌含量', ours: '≥ 290 万/g', theirs: '≈ 210 万/g' },
  { label: '发花技术', ours: '精准双锁工艺 · 99% 发花率', theirs: '国奖成果 · 99%' },
  { label: '干燥工艺', ours: '≤45°C 药品级冻干', theirs: '未知' },
  { label: '安全承诺', ours: '6 大不添加 · 纯天然', theirs: '未知' },
  { label: '黄曲霉风险', ours: '0%（菌种自带拮抗）', theirs: '存在风险' },
]

function CompareTable({
  title,
  subtitle,
  colA,
  colB,
  rows,
}: {
  title: string
  subtitle: string
  colA: string
  colB: string
  rows: { label: string; ours: string; theirs: string }[]
}) {
  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-100">
      <div className="border-b border-stone-100 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-stone-900">{title}</h2>
        <p className="mt-2 text-sm text-stone-500">{subtitle}</p>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-stone-50">
          <tr className="border-b border-stone-100">
            <th className="px-8 py-3 text-left text-xs font-medium text-stone-400 md:px-10">对比维度</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-amber-600">{colA}</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-stone-400">{colB}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-50">
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="px-8 py-3.5 text-stone-500 md:px-10">{row.label}</td>
              <td className="px-4 py-3.5 font-medium text-stone-800">{row.ours}</td>
              <td className="px-4 py-3.5 text-stone-400">{row.theirs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default function Product() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* ── Header ── */}
      <section className="grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <div className="space-y-7">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-amber-700">
            产品介绍
          </span>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-stone-900">
            冷萃金花黑茶
            <br />
            <span className="text-amber-600">固体饮料</span>
          </h1>
          <p className="text-base leading-relaxed text-stone-500">
            湘丰 1 号纯菌种 × 精准发花双锁工艺 × ≤45°C 药品级冻干 × 4 味黄金配方——
            一克金花，胜十两茶砖。3 秒冷萃，替你扛住每一餐。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-amber-400"
            >
              索取合作资料
            </Link>
            <Link
              to="/shop"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-stone-700 shadow-sm ring-1 ring-stone-200 hover:bg-stone-50"
            >
              立即选购
            </Link>
          </div>
        </div>

        <div className="relative flex items-end justify-center gap-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.12),transparent_65%)]" />
          <div className="relative hidden translate-y-5 sm:block">
            <img
              src="/products/product-open.jpg"
              alt="黑氪金球 开盖展示"
              className="w-44 rotate-[-5deg] rounded-3xl shadow-xl shadow-stone-300/60"
            />
          </div>
          <img
            src="/products/product-box.jpg"
            alt="黑氪金球 礼盒装"
            className="relative w-52 rounded-3xl shadow-2xl shadow-stone-400/40"
          />
        </div>
      </section>

      {/* ── Product photos ── */}
      <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-100">
        <div className="grid sm:grid-cols-2">
          <div className="bg-gradient-to-br from-amber-50 to-stone-100 p-10">
            <img
              src="/products/product-box.jpg"
              alt="礼盒外观"
              className="mx-auto max-w-xs rounded-2xl shadow-lg shadow-stone-300/50"
            />
            <div className="mt-6 text-center">
              <div className="text-sm font-semibold text-stone-800">礼盒外观</div>
              <div className="mt-1 text-xs text-stone-500">黑色哑光外盒，金色品牌标识，适合送礼与精品零售</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-stone-50 to-amber-50/50 p-10">
            <img
              src="/products/product-open.jpg"
              alt="内部结构"
              className="mx-auto max-w-xs rounded-2xl shadow-lg shadow-stone-300/50"
            />
            <div className="mt-6 text-center">
              <div className="text-sm font-semibold text-stone-800">内部结构</div>
              <div className="mt-1 text-xs text-stone-500">金色内托，15 条独立铝箔袋，开盒即见档次，保鲜防潮</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs ── */}
      <section className="mt-20">
        <h2 className="mb-8 text-2xl font-bold text-stone-900">产品规格</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {specs.map((s) => (
            <div
              key={s.label}
              className="flex items-start gap-4 rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-stone-100"
            >
              <div className="w-24 flex-shrink-0 text-xs text-stone-400">{s.label}</div>
              <div className="text-sm font-medium text-stone-800">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Formula ── */}
      <section className="mt-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-stone-900">4 味黄金冻干配方</h2>
          <p className="mt-2 text-stone-500">君臣佐使，刮油 · 通便 · 理气 · 陈化，协同增效。</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formula.map((f) => (
            <div key={f.role} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-100">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  {f.role}
                </span>
                <span className="text-xs text-stone-400">{f.tag}</span>
              </div>
              <div className="mt-3 text-base font-semibold text-stone-900">{f.name}</div>
              <div className="mt-1.5 text-xs leading-5 text-stone-500">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Compare tables ── */}
      <div className="mt-20 space-y-6">
        <CompareTable
          title="≤45°C 冻干 vs 普通喷雾干燥"
          subtitle="市面 90% 速溶茶是喷干——喝起来有茶味，营养早就被烫没了。"
          colA="黑氪金球冻干"
          colB="普通喷雾干燥"
          rows={dryingRows}
        />
        <CompareTable
          title="竞品全维对比"
          subtitle="黑氪金球 vs 市场同类金花黑茶。"
          colA="黑氪金球"
          colB="市场同类"
          rows={compRows}
        />
      </div>

      {/* ── CTA ── */}
      <section className="my-20 overflow-hidden rounded-3xl bg-stone-900 px-10 py-14 md:px-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">获取合作资料与样品</h2>
            <p className="mt-2 text-stone-400">资料按合作场景定向发放，不提供公开下载。</p>
          </div>
          <Link
            to="/contact"
            className="w-fit rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-amber-400"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}
