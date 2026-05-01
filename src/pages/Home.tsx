import { Link } from 'react-router-dom'

const stats = [
  { num: '290万', unit: '金花菌/g', note: '超国标 14 倍' },
  { num: '99%', unit: '精准发花率', note: '双锁工艺保障' },
  { num: '≤45°C', unit: '药品级冻干', note: '茶多糖保留 ≥90%' },
  { num: '111项', unit: '专利壁垒', note: '湘丰茶业' },
]

const features = [
  {
    n: '01',
    title: '湘丰 1 号纯菌种',
    desc: '中科院微生物研究所保藏，CGMCC No.41485，菌株可追溯，自带黄曲霉拮抗，安全有据可查。',
  },
  {
    n: '02',
    title: '精准发花双锁工艺',
    desc: '发花率 99%，污染率降低 97.1%，GMP 10 万级洁净车间生产，黄曲霉 0%。',
  },
  {
    n: '03',
    title: '≤45°C 药品级冻干',
    desc: '比普通喷雾干燥（≥120°C）多保留 60% 茶多糖，SOD 酶活性基本完整，1 条营养当量约等于 3–5 条普通速溶。',
  },
  {
    n: '04',
    title: '4 味黄金冻干配方',
    desc: '金花黑茶（刮油）+ 柑橘纤维（通便）+ 冻干陈皮（理气）+ 冻干普洱（醇香），君臣佐使协同增效。',
  },
]

const processSteps = [
  { n: '01', title: '安化冰碛岩产区', desc: '7 亿年冰碛岩土壤，含硒量世界均值 7 倍' },
  { n: '02', title: '精准发花双锁', desc: '湘丰 1 号纯菌种，恒温恒湿智能发花房' },
  { n: '03', title: '低温冷萃', desc: '全程 ≤45°C，保护热敏活性成分' },
  { n: '04', title: '冻干结晶成型', desc: '药品级冻干，3 秒速溶，批次可追溯' },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
        {/* copy */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-amber-700">
              黑氪金球（HK）· 冷萃金花黑茶
            </span>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-stone-900 md:text-6xl">
              一杯黑茶
              <br />
              <span className="text-amber-600">抵三餐油腻</span>
            </h1>
            <p className="text-lg leading-relaxed text-stone-500">
              3 秒冷萃，替你扛住每一餐。刮油 · 减脂 · 改善便秘——
              <br className="hidden md:block" />
              一克金花，胜十两茶砖。
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['0 糖', '0 香精', '0 激素', '冷热双溶', '3 秒速溶'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm text-stone-600 shadow-sm ring-1 ring-stone-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/product"
              className="rounded-xl bg-amber-500 px-7 py-3.5 text-sm font-semibold text-stone-900 shadow-sm hover:bg-amber-400"
            >
              查看产品详情
            </Link>
            <Link
              to="/contact"
              className="rounded-xl bg-white px-7 py-3.5 text-sm font-medium text-stone-700 shadow-sm ring-1 ring-stone-200 hover:bg-stone-50"
            >
              合作咨询
            </Link>
          </div>
        </div>

        {/* product images */}
        <div className="relative flex items-end justify-center gap-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.15),transparent_65%)]" />
          <div className="relative hidden translate-y-5 sm:block">
            <img
              src="/products/product-open.jpg"
              alt="黑氪金球 开盖展示"
              className="w-48 rotate-[-5deg] rounded-3xl shadow-xl shadow-stone-300/60 md:w-56"
            />
          </div>
          <img
            src="/products/product-box.jpg"
            alt="黑氪金球 礼盒装"
            className="relative w-56 rounded-3xl shadow-2xl shadow-stone-400/40 md:w-64"
          />
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-100">
        <div className="grid grid-cols-2 divide-x divide-y divide-stone-100 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((s) => (
            <div key={s.num} className="px-8 py-6 text-center">
              <div className="text-3xl font-bold text-amber-600">{s.num}</div>
              <div className="mt-1 text-sm font-medium text-stone-800">{s.unit}</div>
              <div className="mt-0.5 text-xs text-stone-400">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Product showcase ── */}
      <section className="mt-20 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-100">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-amber-50 to-stone-100 p-10 md:p-14">
            <img
              src="/products/product-open.jpg"
              alt="黑氪金球 开盒展示"
              className="mx-auto max-w-xs rounded-2xl shadow-xl shadow-stone-300/50"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6 p-10 md:p-14">
            <h2 className="text-3xl font-bold text-stone-900">
              冷萃金花黑茶
              <br />
              <span className="text-amber-600">固体饮料</span>
            </h2>
            <ul className="space-y-4">
              {[
                '15g 礼盒装（1g × 15 条），黑金哑光外盒 + 金色内托',
                '1g 含 290 万冠突散囊菌，超国家标准 14 倍',
                '≤45°C 药品级冻干，茶多糖保留 ≥90%',
                '6 大不添加：0 糖 · 0 香精 · 0 激素 · 0 色素 · 0 防腐剂 · 纯天然',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 pt-2">
              <Link
                to="/shop"
                className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-amber-400"
              >
                立即选购
              </Link>
              <Link
                to="/product"
                className="rounded-xl bg-stone-100 px-6 py-3 text-sm font-medium text-stone-700 hover:bg-stone-200"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="mt-20">
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-bold text-stone-900">核心优势</h2>
          <p className="mt-3 text-stone-500">
            菌种、工艺、配方、标准四重碾压，做让客户记得住、复购停不下来的金花黑茶。
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-100">
              <div className="mb-4 text-3xl font-bold text-stone-100">{f.n}</div>
              <div className="text-base font-semibold text-stone-900">{f.title}</div>
              <div className="mt-2 text-sm leading-7 text-stone-500">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="mt-20">
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-bold text-stone-900">从产地到杯中</h2>
          <p className="mt-3 text-stone-500">每一步都有标准，每一批次都可追溯。</p>
        </div>
        <div className="grid gap-x-2 gap-y-8 sm:grid-cols-4">
          {processSteps.map((s, idx) => (
            <div key={s.n} className="flex flex-col">
              {/* circle + connector line */}
              <div className="flex items-center">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-stone-900 shadow-sm">
                  {s.n}
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden flex-1 border-t border-dashed border-stone-300 sm:block" />
                )}
              </div>
              <div className="mt-5 pr-4">
                <div className="text-sm font-semibold text-stone-800">{s.title}</div>
                <div className="mt-1 text-xs leading-5 text-stone-500">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="my-20 overflow-hidden rounded-3xl bg-stone-900 px-10 py-14 md:px-16">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">合作与咨询</h2>
            <p className="mt-2 text-stone-400">
              面向私域、达人、公域电商与经销商开放合作。可按需提供资料、培训话术与渠道赋能支持。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-amber-400"
            >
              联系我们
            </Link>
            <Link
              to="/team"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-stone-300 hover:border-white/40 hover:text-white"
            >
              了解团队
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
