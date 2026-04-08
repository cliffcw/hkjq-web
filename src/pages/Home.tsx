import { Link } from 'react-router-dom'

const heroFeatures = [
  '国家科技进步奖技术转化',
  '低温萃取与冻干结晶',
  '药品级 GMP 标准生产',
]

const valueCards = [
  {
    title: '专属菌种',
    desc: '湘丰 1 号金花菌种体系，强调可追溯、可验证与稳定交付。',
  },
  {
    title: '低温工艺',
    desc: '40°C 以下低温萃取 + 冻干结晶，尽量保持产品一致性。',
  },
  {
    title: '标准化生产',
    desc: '以药品级标准与质量控制流程，支撑品牌传播与渠道合作。',
  },
]

const menuLinks = [
  {
    to: '/brand',
    label: '品牌',
    desc: '品牌定位、技术表达与对外口径。',
  },
  {
    to: '/product',
    label: '产品',
    desc: '主打产品、工艺卖点与应用场景。',
  },
  {
    to: '/team',
    label: '团队',
    desc: '团队角色、协作分工与合作信任。',
  },
  {
    to: '/shop',
    label: '选购中心',
    desc: '当前购买入口预留，后续承接下单路径。',
  },
  {
    to: '/contact',
    label: '联系',
    desc: '样品、资料、合作方式统一在此承接。',
  },
]

const processItems = [
  { step: '01', title: '原料与菌种', desc: '源头筛选与菌种体系管理，保证基础稳定。' },
  { step: '02', title: '低温萃取', desc: '低温条件下完成工艺处理，降低热敏损耗。' },
  { step: '03', title: '冻干结晶', desc: '形成便捷的一致形态，方便展示与饮用。' },
  { step: '04', title: '品控放行', desc: '批次检测与留样追踪，确保交付质量。' },
]

export default function Home() {
  return (
    <div className="space-y-16 pb-4">
      <section className="overflow-hidden rounded-[2.25rem] border border-amber-200/70 bg-[#f4eadf] text-gray-900 shadow-[0_30px_100px_rgba(120,53,15,0.08)]">
        <div className="flex flex-col gap-2 border-b border-amber-200/70 px-6 py-3 text-center text-xs tracking-[0.24em] text-gray-600 md:flex-row md:items-center md:justify-between md:px-10">
          <span>黑氪金球官网展示页</span>
          <span>科技转化 · 药品级生产 · 专业化运营</span>
        </div>

        <div className="grid gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-14">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-900/10 bg-white/70 px-4 py-2 text-sm text-gray-700">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
                <img
                  src="/docs/logol/logol2.jpg"
                  alt="黑氪金球 logo"
                  className="h-8 w-8 object-cover"
                />
              </span>
              黑氪金球（HK）· 金花速溶黑茶
            </div>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[0.03em] text-gray-900 md:text-5xl lg:text-6xl">
                简洁大方的首页，
                <br />
                先把品牌气质讲清楚。
              </h1>
              <p className="max-w-xl text-base leading-8 text-gray-700 md:text-lg">
                首页用更克制的视觉方式呈现品牌，重点展示黑氪金球的品牌识别、产品气质与合作入口，其他菜单页再展开详细文案。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-amber-900/10 bg-white/75 px-4 py-4 text-sm leading-6 text-gray-700"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/product"
                className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 px-6 py-3 text-sm font-medium text-[#fffaf2] hover:from-amber-700 hover:to-amber-900"
              >
                查看产品亮点
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-amber-900/15 bg-white/80 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-white"
              >
                索取资料与合作
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.05fr_0.78fr] sm:items-end">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#f8efe5] shadow-[0_24px_60px_rgba(120,53,15,0.1)]">
              <img
                src="/docs/logol/logol1.jpg"
                alt="黑氪金球主视觉"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2f241d]/55 via-[#2f241d]/15 to-transparent p-5">
                <div className="text-lg font-semibold text-[#fffaf2]">主打产品展示</div>
                <div className="mt-2 max-w-md text-sm leading-6 text-[#f6efe5]">
                  以产品图作为视觉核心，保持首页足够简洁，同时让品牌质感更直接。
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/75 p-5">
                <div className="text-sm uppercase tracking-[0.22em] text-gray-500">HK</div>
                <div className="mt-3 text-2xl font-semibold text-gray-900">品牌识别</div>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  保留 logo、产品图和少量说明，让页面看起来更完整，但不过度堆叠。
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/75 p-5">
                <div className="text-sm uppercase tracking-[0.22em] text-gray-500">Vision</div>
                <div className="mt-3 text-2xl font-semibold text-gray-900">大留白</div>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  首页更接近品牌官网，而不是信息列表页，视觉会更轻、更稳。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/55">
          <img
            src="/docs/logol/pic3.jpg"
            alt="黑氪金球宣传图"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-300">
              Core Value
            </div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              不用把全部图片都放进首页，
              <br />
              但要把关键价值讲到位。
            </h2>
            <p className="max-w-2xl text-base leading-8 text-zinc-200">
              首页负责建立第一印象，产品页和品牌页负责展开更多细节。这样结构更清楚，也更适合后续持续补充内容。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {valueCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-slate-900/55 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-200">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-slate-900/55 p-8 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-300">
              Brand Structure
            </div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              其余栏目继续承担文案介绍，
              <br />
              首页只做导览和承接。
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-zinc-200">
            品牌页讲定位，产品页讲卖点，团队页讲分工，联系页承接咨询。首页作为“第一印象页”，保持轻一点会更耐看。
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {menuLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-lg font-semibold text-white">{item.label}</div>
                <span className="text-sm text-zinc-300 transition group-hover:text-white">查看</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-200">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-300">
            Process
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">工艺与交付流程</h2>
          <p className="max-w-3xl text-base leading-8 text-zinc-200">
            用结构化内容补充首页深度，让品牌表达既有视觉感，也有专业度。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processItems.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-white/10 bg-slate-900/55 p-6"
            >
              <div className="text-sm font-medium text-amber-100">{item.step}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-200">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-emerald-500/15 via-white/0 to-violet-500/15 p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-4">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-300">
              Cooperation
            </div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              适合作为品牌官网首页，
              <br />
              也适合作为合作对外入口。
            </h2>
            <p className="max-w-2xl text-base leading-8 text-zinc-200">
              面向私域、公域电商、达人选品与经销商合作，官网提供品牌展示、产品介绍与合作咨询入口。完整资料与版本按合作场景发放，不在官网公开下载。
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="rounded-xl bg-emerald-400 px-6 py-3 text-sm font-medium text-zinc-950 hover:bg-emerald-300"
            >
              联系我们
            </Link>
            <Link
              to="/team"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              了解团队
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
