import { Link } from 'react-router-dom'

const productCards = [
  {
    title: '冻干速溶黑茶（主打单品）',
    desc: '冻干结晶颗粒形态，即溶即饮，兼顾便捷体验与礼赠质感。',
  },
  {
    title: '低温萃取与冻干结晶',
    desc: '以低温工艺保留茶感层次，并通过冻干结晶呈现更稳定细腻的产品状态。',
  },
  {
    title: '标准化生产与品控',
    desc: '以规范的生产与检测流程保障批次一致性，满足长期合作与高标准交付。',
  },
]

const scenarios = [
  { title: '商务茶叙', desc: '即溶即饮，适合商务接待与高效沟通场景。' },
  { title: '日常品饮', desc: '轻松冲调，适合作为高品质日常饮用选择。' },
  { title: '高端礼赠', desc: '以科技工艺与品质表达，提升礼赠场景的体面感。' },
  { title: '渠道陈列', desc: '兼顾展示质感与信息表达，适配门店陈列与合作洽谈。' },
]

export default function Product() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <header className="overflow-hidden rounded-[2rem] border border-amber-200/70 bg-white/75 shadow-[0_24px_70px_rgba(120,53,15,0.07)]">
        <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-amber-900/10 bg-amber-50/70 px-4 py-2 text-sm text-amber-800">
              产品
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                冻萃金花黑茶
              </h1>
              <p className="max-w-2xl text-base leading-8 text-gray-700">
                以专属菌种体系、低温萃取与冻干结晶工艺为基础，呈现兼具便捷体验与礼赠质感的产品形态。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-amber-900/10 bg-[#f8efe5] p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-gray-500">Form</div>
                <div className="mt-3 text-base font-semibold text-gray-900">独立条包</div>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  即溶即饮，适配办公、差旅、礼赠与高端接待场景。
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-amber-900/10 bg-[#f8efe5] p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-gray-500">Delivery</div>
                <div className="mt-3 text-base font-semibold text-gray-900">标准交付</div>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  稳定工艺与品控体系支撑礼赠、合作洽谈与渠道展示需求。
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 px-5 py-3 text-sm font-medium text-[#fffaf2] hover:from-amber-700 hover:to-amber-900"
              >
                了解合作
              </Link>
              <Link
                to="/brand"
                className="rounded-xl border border-amber-900/15 bg-white/80 px-5 py-3 text-sm font-medium text-gray-800 hover:bg-white"
              >
                了解品牌
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-amber-200/70 bg-[radial-gradient(circle_at_top,#fff6df,transparent_55%),linear-gradient(180deg,#f8efe5,#efe2d1)] p-6">
            <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/70">
              <img
                src="/docs/logol/tt3.jpg"
                alt="产品展示图"
                className="h-full max-h-[420px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {productCards.map((c) => (
          <div
            key={c.title}
            className="rounded-[1.5rem] border border-amber-900/10 bg-white/75 p-6 shadow-[0_16px_40px_rgba(120,53,15,0.04)]"
          >
            <div className="text-base font-semibold text-gray-900">{c.title}</div>
            <div className="mt-3 text-sm leading-7 text-gray-700">{c.desc}</div>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-[0_24px_70px_rgba(120,53,15,0.05)] md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">应用场景</h2>
            <p className="mt-2 text-gray-700">围绕便捷体验、品质表达与礼赠属性，适配多元消费与合作场景。</p>
          </div>
          <div className="text-sm text-gray-500">适用于品饮、礼赠、接待与品牌展示等场景</div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {scenarios.map((s) => (
            <div
              key={s.title}
              className="rounded-[1.5rem] border border-amber-900/10 bg-[#f8efe5] p-6"
            >
              <div className="text-sm font-semibold text-gray-900">{s.title}</div>
              <div className="mt-2 text-sm leading-7 text-gray-700">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-[0_20px_60px_rgba(120,53,15,0.06)] md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">合作支持</h2>
            <p className="mt-2 text-gray-700">可根据合作方向提供品牌资料、样品支持与专属沟通服务。</p>
          </div>
          <Link
            to="/contact"
            className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 px-5 py-3 text-sm font-medium text-[#fffaf2] hover:from-amber-700 hover:to-amber-900"
          >
            联系咨询
          </Link>
        </div>
      </section>
    </div>
  )
}
