import { NavLink } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          联系我们
        </h1>
        <p className="mt-3 text-gray-700">
          如需了解品牌资料、合作政策与产品信息，欢迎通过以下方式联系。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-amber-200/70 bg-white/75 p-6 shadow-[0_18px_50px_rgba(120,53,15,0.05)]">
          <div className="text-base font-semibold text-gray-900">合作方向</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>渠道合作</li>
            <li>礼赠合作</li>
            <li>品牌联名</li>
            <li>平台入驻</li>
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-amber-200/70 bg-white/75 p-6 shadow-[0_18px_50px_rgba(120,53,15,0.05)]">
          <div className="text-base font-semibold text-gray-900">对接方式</div>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            可根据合作方向提供对应资料与支持服务，请通过以下方式预约沟通。
          </p>
          <div className="mt-4 rounded-[1.25rem] border border-amber-900/10 bg-[#f8efe5] p-5">
            <div className="text-sm font-semibold text-gray-900">丢丢微信</div>
            <div className="mt-2 text-sm text-gray-700">
              <span className="rounded bg-white/80 px-2 py-1 font-mono text-gray-900">aodixiu0327</span>
            </div>
            <div className="mt-4 flex items-start gap-4">
              <img
                src="/docs/logol/diudiuwchat.png"
                alt="丢丢微信二维码"
                className="h-24 w-24 rounded-lg border border-amber-900/15 bg-white p-1 object-contain"
              />
              <div className="space-y-2">
                <div className="text-xs text-gray-700">扫码添加微信，获取一对一对接服务</div>
                <div className="text-xs text-gray-600">添加请备注：合作方向</div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <NavLink
              to="/product"
              className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 px-4 py-2 text-sm font-medium text-[#fffaf2] hover:from-amber-700 hover:to-amber-900"
            >
              查看产品信息
            </NavLink>
          </div>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-amber-300/50 bg-amber-100/60 p-6 text-sm text-amber-900">
        如需到访或线下沟通，请提前预约，以便安排接待。
      </div>
    </div>
  )
}
