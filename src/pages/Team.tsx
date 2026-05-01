import { Link } from 'react-router-dom'

const members = [
  {
    name: '丢丢',
    role: '合伙人',
    desc: '商务对接、内容运营、渠道协同',
  },
  {
    name: '豆米花',
    role: '合伙人',
    desc: '渠道拓展与客户合作',
  },
  {
    name: '老邓',
    role: '合伙人 / 产品供应',
    desc: '产品供应与品质支持',
  },
]

export default function Team() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <section className="py-14 lg:py-20">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-amber-700">
          团队
        </span>
        <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-stone-900">
          小团队
          <br />
          <span className="text-amber-600">高执行</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-500">
          围绕产品、渠道与运营协同推进，专注把好产品送到需要它的人手中。
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {members.map((m) => (
          <div key={m.name} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-700">
              {m.name[0]}
            </div>
            <div className="mt-5 text-base font-semibold text-stone-900">{m.name}</div>
            <div className="mt-0.5 text-xs text-amber-600">{m.role}</div>
            <div className="mt-3 text-sm leading-6 text-stone-500">{m.desc}</div>
          </div>
        ))}
      </section>

      <section className="my-20 overflow-hidden rounded-3xl bg-stone-900 px-10 py-14 md:px-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">合作沟通</h2>
            <p className="mt-2 text-stone-400">索取资料、样品与渠道政策，请到联系页获取对接方式。</p>
          </div>
          <Link
            to="/contact"
            className="w-fit rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-amber-400"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}
