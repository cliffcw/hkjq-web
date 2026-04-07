import { Link } from 'react-router-dom'

const highlights = [
  {
    title: '专属菌种',
    desc: '湘丰 1 号金花菌种（中科院收录，菌株身份证编号 CGMCC No: 41485）',
  },
  {
    title: '低温冻干工艺',
    desc: '全程 40°C 以下低温萃取 + 冻干结晶，更好保留热敏性功能成分',
  },
  { title: '专利与技术', desc: '24 项专利（含 4 项核心萃取工艺专利）' },
  { title: '药品级标准', desc: '药品级 GMP 标准生产，质量控制更严格' },
  { title: '国际品质', desc: '面向国际市场的品质体系与合规认证' },
]

const proofPoints = [
  { title: '专利体系', desc: '围绕萃取工艺与关键流程建立专利壁垒' },
  { title: '菌株可追溯', desc: '采用中科院收录菌株体系，强调可验证与稳定性' },
  { title: '生产标准', desc: '药品级标准生产与质量控制流程' },
  { title: '品质体系', desc: '面向多市场的品质与合规管理' },
]

const processSteps = [
  { title: '原料与菌种', desc: '源头管控与菌种体系管理，保证稳定性' },
  { title: '低温萃取', desc: '低温条件下完成萃取，降低热敏损耗风险' },
  { title: '冻干结晶', desc: '冻干形成可溶颗粒形态，提升便捷性与一致性' },
  { title: '品控与放行', desc: '批次检测与留样追踪，确保交付质量' },
]

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55">
        <div className="absolute -inset-24 bg-gradient-to-tr from-emerald-500/10 via-white/0 to-violet-500/10 blur-3xl" />
        <div className="relative p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
                黑氪金球（HK）· 金花速溶黑茶
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                科技转化 · 药品级生产 · 专业化运营
              </h1>
              <p className="text-base leading-7 text-zinc-200">
                以可追溯的菌种体系与低温冻干工艺为基础，交付更便捷、更一致的速溶黑茶产品体验。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/product"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
                >
                  查看产品亮点
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  索取资料与合作
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6">
                <div className="mx-auto flex max-w-sm items-center justify-center rounded-2xl bg-white p-4">
                  <img
                    src="/docs/logol/logol2.jpg"
                    alt="黑氪金球（HK）"
                    className="h-28 w-auto object-contain"
                  />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-zinc-200">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    国家科技进步奖技术转化
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    低温萃取与冻干结晶
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    专利与工艺体系
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    药品级生产标准
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">核心优势</h2>
            <p className="mt-2 text-zinc-200">
              围绕“菌种、工艺、标准、运营”，建立可验证、可追溯与可复制的产品交付体系。
            </p>
          </div>
          <Link
            to="/brand"
            className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 md:inline-flex"
          >
            查看品牌定位
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-white/10 bg-slate-900/55 p-6"
            >
              <div className="text-base font-semibold text-white">{h.title}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-200">{h.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">背书与资质（展示位）</h2>
          <p className="mt-2 text-zinc-200">
            官网不提供文件下载。需要材料可通过合作咨询获取。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {proofPoints.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-slate-900/55 p-6"
            >
              <div className="text-base font-semibold text-white">{p.title}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-200">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">工艺流程</h2>
          <p className="mt-2 text-zinc-200">以标准化流程保证一致性与交付质量。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-slate-900/55 p-6"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-xs">
                  {idx + 1}
                </span>
                {s.title}
              </div>
              <div className="mt-3 text-sm leading-6 text-zinc-200">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">合作与咨询</h2>
            <p className="mt-2 text-zinc-200">
              面向私域、达人、公域电商与经销商渠道开放合作。可按需提供介绍资料、培训素材与渠道赋能支持。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-300"
            >
              联系我们
            </Link>
            <Link
              to="/team"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              了解团队
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
