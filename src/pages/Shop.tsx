import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8">
      <header className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-[0_24px_70px_rgba(120,53,15,0.07)] md:p-10">
        <div className="inline-flex rounded-full border border-amber-900/10 bg-amber-50/70 px-4 py-2 text-sm text-amber-800">
          选购中心
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          官方选购入口即将开放
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          线上选购服务正在完善中，官方购买入口将在此呈现。
        </p>
      </header>

      <section className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-[0_24px_70px_rgba(120,53,15,0.05)] md:p-10">
        <h2 className="text-2xl font-semibold text-gray-900">选购咨询</h2>
        <p className="mt-2 text-gray-700">
          如需选购咨询、礼赠采购或合作洽谈，欢迎通过联系页获取专属对接服务。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 px-5 py-3 text-sm font-medium text-[#fffaf2] hover:from-amber-700 hover:to-amber-900"
          >
            联系咨询
          </Link>
          <Link
            to="/product"
            className="rounded-xl border border-amber-900/15 bg-white/80 px-5 py-3 text-sm font-medium text-gray-800 hover:bg-white"
          >
            查看产品
          </Link>
        </div>
      </section>
    </div>
  )
}
