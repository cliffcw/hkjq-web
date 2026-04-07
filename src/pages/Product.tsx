import { Link } from 'react-router-dom'

const productCards = [
  {
    title: '冻干速溶黑茶（主打单品）',
    desc: '冻干结晶颗粒形态，即溶即饮，适配办公、差旅与日常饮用场景。',
  },
  {
    title: '低温萃取与冻干结晶',
    desc: '以低温流程降低热敏损耗风险，并通过冻干形成更稳定一致的形态。',
  },
  {
    title: '标准化生产与品控',
    desc: '以规范的生产与检测流程保障批次一致性，支持渠道规模化交付。',
  },
]

const scenarios = [
  { title: '办公便捷', desc: '一杯水即可冲调，减少冲泡门槛。' },
  { title: '餐后饮用', desc: '适合作为日常饮用习惯的一部分。' },
  { title: '送礼场景', desc: '以科技与标准作为沟通点，表达更体面。' },
  { title: '渠道动销', desc: '可配合素材与培训，做内容种草与渠道赋能。' },
]

export default function Product() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <header className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 md:p-10">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
          产品
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          以标准化工艺，交付一致的速溶体验
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-200">
          本页面以企业官网口径展示核心信息。更完整的渠道资料、培训话术与背书材料，按需通过合作咨询提供。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
          >
            索取资料
          </Link>
          <Link
            to="/brand"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            了解品牌
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {productCards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
            <div className="text-base font-semibold text-white">{c.title}</div>
            <div className="mt-2 text-sm leading-6 text-zinc-200">{c.desc}</div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-white">应用场景</h2>
        <p className="mt-2 text-zinc-200">围绕便捷性与一致性，适配多种生活与渠道场景。</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {scenarios.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="text-sm font-semibold text-white">{s.title}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-200">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/15 via-white/0 to-violet-500/15 p-8 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">合作资料与样品</h2>
            <p className="mt-2 text-zinc-200">对外不提供下载，资料按合作场景与版本管理进行发放。</p>
          </div>
          <Link
            to="/contact"
            className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-300"
          >
            去联系
          </Link>
        </div>
      </section>
    </div>
  )
}
