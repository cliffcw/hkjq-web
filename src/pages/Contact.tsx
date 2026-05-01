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
      <section className="py-14 lg:py-20">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-amber-700">
          联系我们
        </span>
        <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-stone-900">
          开始合作
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-500">
          获取合作资料、沟通渠道政策与样品事宜，请通过微信联系我们。
          为避免资料外流，官网不提供下载，所有资料按合作场景定向发放。
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {/* cooperation types */}
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-100">
          <div className="text-base font-semibold text-stone-900">合作方向</div>
          <ul className="mt-5 space-y-3">
            {cooperationTypes.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-stone-600">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-stone-100 pt-6 text-sm text-stone-500">
            工作时间：周一至周五 9:30–18:30
          </div>
        </div>

        {/* wechat contact */}
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-100">
          <div className="text-base font-semibold text-stone-900">微信对接</div>
          <p className="mt-2 text-sm text-stone-500">添加微信后备注来意，我们会在 24 小时内回复。</p>

          <div className="mt-5 flex items-start gap-5">
            <img
              src="/docs/logol/diudiuwchat.png"
              alt="丢丢微信二维码"
              className="h-28 w-28 flex-shrink-0 rounded-xl bg-white p-1 shadow-sm ring-1 ring-stone-200 object-contain"
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
                添加请备注：<span className="text-stone-600">渠道合作 / 达人选品 / 经销商</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-20 overflow-hidden rounded-3xl bg-stone-900 px-10 py-14 md:px-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">还没了解产品？</h2>
            <p className="mt-2 text-stone-400">先看看产品详情，了解核心优势与竞品对比。</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/product"
              className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-amber-400"
            >
              查看产品
            </Link>
            <Link
              to="/brand"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-stone-300 hover:border-white/40 hover:text-white"
            >
              了解品牌
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
