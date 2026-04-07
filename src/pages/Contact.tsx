import { NavLink } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          联系我们
        </h1>
        <p className="mt-3 text-zinc-200">
          获取合作资料、沟通渠道政策与样品事宜，请通过以下方式联系我们。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
          <div className="text-base font-semibold text-white">合作方向</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-200">
            <li>私域平台合作</li>
            <li>达人/主播选品</li>
            <li>经销商渠道</li>
            <li>平台入驻与品牌联名</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
          <div className="text-base font-semibold text-white">对接方式</div>
          <p className="mt-3 text-sm leading-6 text-zinc-200">
            为避免资料外流，官网不提供下载。可通过合作咨询获取对应资料与版本。
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="text-sm font-semibold text-white">丢丢微信</div>
            <div className="mt-2 text-sm text-zinc-200">
              <span className="rounded bg-white/10 px-2 py-1 font-mono">aodixiu0327</span>
            </div>
            <div className="mt-4 flex items-start gap-4">
              <img
                src="/docs/logol/diudiuwchat.png"
                alt="丢丢微信二维码"
                className="h-24 w-24 rounded-lg border border-white/15 bg-white/90 p-1 object-contain"
              />
              <div className="space-y-2">
                <div className="text-xs text-zinc-200">扫码可直接添加微信</div>
                <div className="text-xs text-zinc-300">添加请备注：渠道合作 / 达人选品 / 经销商</div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <NavLink
              to="/product"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
            >
              查看产品信息
            </NavLink>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-6 text-sm text-amber-100">
        待补齐：公司主体信息、办公地址、工作时间、其它联系方式等。
      </div>
    </div>
  )
}
