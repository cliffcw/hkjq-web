import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8">
      <header className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 md:p-10">
        <div className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/15 px-4 py-2 text-sm text-amber-100">
          选购中心
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          选购功能正在建设中
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-200">
          商城模块已纳入官网规划，当前正在进行功能建设与流程联调。上线后可在此直接下单购买。
        </p>
      </header>

      <section className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-white">临时购买方式</h2>
        <p className="mt-2 text-zinc-200">
          如需立即采购、咨询渠道价格或样品，请先通过联系页对接，我们会提供当前可用购买路径。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
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
            查看产品
          </Link>
        </div>
      </section>
    </div>
  )
}
