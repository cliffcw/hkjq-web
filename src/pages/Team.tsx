export default function Team() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <header className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 md:p-10">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
          团队
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          小团队，高执行
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-200">
          围绕产品、渠道与运营协同推进。对外展示保持简洁，具体合作可在联系页沟通。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
          <div className="text-base font-semibold text-white">丢丢</div>
          <div className="mt-1 text-sm text-zinc-200">合伙人</div>
          <div className="mt-4 text-sm leading-6 text-zinc-200">
            商务对接、内容运营、渠道协同
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
          <div className="text-base font-semibold text-white">豆米花</div>
          <div className="mt-1 text-sm text-zinc-200">合伙人</div>
          <div className="mt-4 text-sm leading-6 text-zinc-200">
            渠道拓展与客户合作
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
          <div className="text-base font-semibold text-white">老邓</div>
          <div className="mt-1 text-sm text-zinc-200">合伙人 / 产品供应</div>
          <div className="mt-4 text-sm leading-6 text-zinc-200">产品供应与品质支持</div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/15 via-white/0 to-violet-500/15 p-8 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">合作沟通</h2>
            <p className="mt-2 text-zinc-200">
              索取资料、样品与渠道政策，请到联系页获取对接方式。
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
          >
            去联系
          </a>
        </div>
      </section>
    </div>
  )
}
