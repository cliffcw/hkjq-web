import { Link } from 'react-router-dom'

const cooperationTypes = [
  '私域社群 / 团购团长',
  '达人 / 主播选品',
  '经销商 / 代理',
  '平台入驻与品牌联名',
]

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <section className="py-10 sm:py-14 lg:py-20">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-amber-700">
          联系我们
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
          开始合作
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-500 sm:mt-5 sm:text-base">
          获取合作资料、沟通渠道政策与样品事宜，请通过微信联系我们。
          为避免资料外流，官网不提供下载，所有资料按合作场景定向发放。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 md:gap-6">
        {/* cooperation types */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-100 sm:p-8">
          <div className="text-sm font-semibold text-stone-900 sm:text-base">合作方向</div>
          <ul className="mt-4 space-y-3 sm:mt-5">
            {cooperationTypes.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-stone-600">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-stone-100 pt-5 text-xs text-stone-400 sm:mt-6 sm:pt-6 sm:text-sm">
            工作时间：周一至周五 9:30–18:30
          </div>
        </div>

        {/* wechat contact */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-100 sm:p-8">
          <div className="text-sm font-semibold text-stone-900 sm:text-base">微信对接</div>
          <p className="mt-2 text-sm text-stone-500">添加微信后备注来意，我们会在 24 小时内回复。</p>

          <div className="mt-5 flex items-start gap-4 sm:mt-6 sm:gap-5">
            <img
              src="/docs/logol/diudiuwchat.png"
              alt="丢丢微信二维码"
              className="h-24 w-24 flex-shrink-0 rounded-xl bg-white object-contain p-1 shadow-sm ring-1 ring-stone-200 sm:h-28 sm:w-28"
            />
            <div className="space-y-3">
              <div>
                <div className="text-xs text-stone-400">微信号</div>
                <div className="mt-1 font-mono text-sm font-medium text-stone-900">aodixiu0327</div>
              </div>
              <div>
                <div className="text-xs text-stone-400">负责人</div>
                <div className="mt-1 text-sm text-stone-700">丢丢</div>
              </div>
              <div className="text-xs text-stone-400">
                备注：<span className="text-stone-600">渠道合作 / 达人选品 / 经销商</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12 overflow-hidden rounded-3xl bg-stone-900 px-6 py-10 sm:my-20 sm:px-10 sm:py-14 md:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">还没了解产品？</h2>
            <p className="mt-1.5 text-sm text-stone-400 sm:mt-2">先看看产品详情，了解核心优势与竞品对比。</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/product"
              className="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-amber-400 sm:px-6 sm:py-3"
            >
              查看产品
            </Link>
            <Link
              to="/brand"
              className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium text-stone-300 hover:border-white/40 hover:text-white sm:px-6 sm:py-3"
            >
              了解品牌
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
