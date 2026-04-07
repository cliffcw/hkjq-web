import { Link } from 'react-router-dom'

export default function Brand() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <header className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 md:p-10">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
          品牌定位
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          用可验证的技术与标准，重新定义高端速溶黑茶
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-200">
          黑氪金球（HK）围绕菌种体系、低温冻干工艺与标准化生产能力，构建稳定、可追溯的产品交付。对外表达坚持专业、克制与合规。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
          <div className="text-base font-semibold text-white">科技转化</div>
          <div className="mt-2 text-sm leading-6 text-zinc-200">
            以科研与产业能力为基础，将核心技术转化为标准化产品方案。
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
          <div className="text-base font-semibold text-white">药品级生产</div>
          <div className="mt-2 text-sm leading-6 text-zinc-200">
            以严格的生产环境与质量控制流程，保障批次一致性与稳定交付。
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
          <div className="text-base font-semibold text-white">专业化运营</div>
          <div className="mt-2 text-sm leading-6 text-zinc-200">
            面向私域、达人、公域与经销商，提供渠道资料、培训与运营支持。
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-white">品牌背书（展示位）</h2>
        <p className="mt-2 text-zinc-200">
          主要围绕专利、菌种体系、生产标准与品质管理进行说明。资料按需提供，不在官网公开下载。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-semibold text-white">专利与工艺体系</div>
            <div className="mt-2 text-sm leading-6 text-zinc-200">
              以关键工艺与流程为核心，形成具备可解释性的技术壁垒。
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-semibold text-white">菌种可追溯</div>
            <div className="mt-2 text-sm leading-6 text-zinc-200">
              强调可验证与稳定性，面向渠道与合作伙伴提供对应证明材料。
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-semibold text-white">标准化生产</div>
            <div className="mt-2 text-sm leading-6 text-zinc-200">
              以药品级标准与质量控制流程，支持规模化生产与合规交付。
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-semibold text-white">品质与合规</div>
            <div className="mt-2 text-sm leading-6 text-zinc-200">
              不做夸张宣传，避免医疗功效宣称，强调客观信息与可核验资料。
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/15 via-white/0 to-violet-500/15 p-8 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">合作咨询</h2>
            <p className="mt-2 text-zinc-200">
              索取资料、沟通渠道政策与合作方式，请进入联系页。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
            >
              去联系
            </Link>
            <Link
              to="/product"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              了解产品
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
