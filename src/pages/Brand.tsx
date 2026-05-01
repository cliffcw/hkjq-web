import { Link } from 'react-router-dom'

const pillars = [
  {
    title: '科技转化',
    desc: '国家科技进步奖成果转化，以中科院收录菌种体系与低温冻干技术为核心，将科研能力落地为标准化产品。',
  },
  {
    title: '药品级生产',
    desc: 'GMP 10 万级洁净车间，批次留样追踪，药品级质量控制流程，保障每盒产品一致、可追溯。',
  },
  {
    title: '专业化运营',
    desc: '面向私域、达人、公域电商与经销商渠道，提供渠道资料、培训话术与运营赋能，做让团长讲得清、客户记得住的产品。',
  },
]

const credentials = [
  {
    title: '专利与工艺体系',
    desc: '湘丰茶业 111 项专利，其中 16 项专门保护精准发花技术，形成可解释的技术壁垒。',
  },
  {
    title: '菌种可追溯',
    desc: '湘丰 1 号，CGMCC No.41485，中科院微生物研究所保藏，30+5 年保存期，菌株身份明确稳定。',
  },
  {
    title: '标准化生产',
    desc: '药品级标准与质量控制流程，支持规模化生产与合规交付。',
  },
  {
    title: '品质与合规',
    desc: '不做夸张宣传，避免医疗功效宣称，强调客观信息与可核验资料。对外表达保持专业、克制与合规。',
  },
]

export default function Brand() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* ── Header ── */}
      <section className="py-14 lg:py-20">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-amber-700">
          品牌定位
        </span>
        <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-stone-900">
          用可验证的技术与标准，
          <br />
          <span className="text-amber-600">重新定义高端速溶黑茶</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-500">
          黑氪金球（HK）围绕菌种体系、低温冻干工艺与标准化生产能力，构建稳定、可追溯的产品交付。
          对外表达坚持专业、克制与合规。
        </p>
      </section>

      {/* ── Pillars ── */}
      <section className="grid gap-6 sm:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-100">
            <div className="h-1 w-8 rounded-full bg-amber-500" />
            <div className="mt-5 text-base font-semibold text-stone-900">{p.title}</div>
            <div className="mt-2 text-sm leading-7 text-stone-500">{p.desc}</div>
          </div>
        ))}
      </section>

      {/* ── Credentials ── */}
      <section className="mt-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-stone-900">品牌背书</h2>
          <p className="mt-2 text-stone-500">
            主要围绕专利、菌种体系、生产标准与品质管理进行说明。资料按需提供，不在官网公开下载。
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {credentials.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-stone-100">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <div>
                  <div className="text-sm font-semibold text-stone-900">{c.title}</div>
                  <div className="mt-2 text-sm leading-6 text-stone-500">{c.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="my-20 overflow-hidden rounded-3xl bg-stone-900 px-10 py-14 md:px-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">合作咨询</h2>
            <p className="mt-2 text-stone-400">索取资料、沟通渠道政策与合作方式，请进入联系页。</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-amber-400"
            >
              联系我们
            </Link>
            <Link
              to="/product"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-stone-300 hover:border-white/40 hover:text-white"
            >
              了解产品
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
