import { Link } from 'react-router-dom'

const members = [
  { name: '丢丢', role: '合伙人', desc: '商务对接、内容运营、渠道协同' },
  { name: '豆米花', role: '合伙人', desc: '渠道拓展与客户合作' },
  { name: '老邓', role: '合伙人 / 产品供应', desc: '产品供应与品质支持' },
]

export default function Team() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <section className="py-10 sm:py-14 lg:py-20">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-amber-700">
          团队
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
          小团队
          <br />
          <span className="text-amber-600">高执行</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-500 sm:mt-5 sm:text-base">
          围绕产品、渠道与运营协同推进，专注把好产品送到需要它的人手中。
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3 sm:gap-6">
        {members.map((m) => (
          <div key={m.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-100 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-700">
              {m.name[0]}
            </div>
            <div className="mt-4 text-base font-semibold text-stone-900">{m.name}</div>
            <div className="mt-0.5 text-xs text-amber-600">{m.role}</div>
            <div className="mt-2.5 text-sm leading-6 text-stone-500">{m.desc}</div>
          </div>
        ))}
      </section>

      <section className="my-12 overflow-hidden rounded-3xl bg-stone-900 px-6 py-10 sm:my-20 sm:px-10 sm:py-14 md:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">合作沟通</h2>
            <p className="mt-1.5 text-sm text-stone-400 sm:mt-2">索取资料、样品与渠道政策，请到联系页获取对接方式。</p>
          </div>
          <Link
            to="/contact"
            className="w-fit rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-amber-400 sm:px-6 sm:py-3"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}
