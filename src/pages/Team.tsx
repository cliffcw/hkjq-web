export default function Team() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <header className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-[0_24px_70px_rgba(120,53,15,0.07)] md:p-10">
        <div className="inline-flex rounded-full border border-amber-900/10 bg-amber-50/70 px-4 py-2 text-sm text-amber-800">
          团队
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          专业团队，协同推进
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          围绕产品、品牌、渠道与运营协同推进，为合作伙伴提供稳定而高效的服务支持。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.5rem] border border-amber-900/10 bg-white/75 p-6">
          <div className="text-base font-semibold text-gray-900">丢丢</div>
          <div className="mt-1 text-sm text-gray-600">合伙人</div>
          <div className="mt-4 text-sm leading-7 text-gray-700">
            商务对接、内容运营、渠道协同
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-amber-900/10 bg-white/75 p-6">
          <div className="text-base font-semibold text-gray-900">豆米花</div>
          <div className="mt-1 text-sm text-gray-600">合伙人</div>
          <div className="mt-4 text-sm leading-7 text-gray-700">
            渠道拓展与客户合作
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-amber-900/10 bg-white/75 p-6">
          <div className="text-base font-semibold text-gray-900">老邓</div>
          <div className="mt-1 text-sm text-gray-600">合伙人 / 产品供应</div>
          <div className="mt-4 text-sm leading-7 text-gray-700">产品供应与品质支持</div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-[0_20px_60px_rgba(120,53,15,0.06)] md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">合作沟通</h2>
            <p className="mt-2 text-gray-700">
              如需了解合作方式与服务支持，可前往联系页预约沟通。
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 px-5 py-3 text-sm font-medium text-[#fffaf2] hover:from-amber-700 hover:to-amber-900"
          >
            联系咨询
          </a>
        </div>
      </section>
    </div>
  )
}
