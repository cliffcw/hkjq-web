import { Link } from 'react-router-dom'

export default function Brand() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-12">
      <header className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-[0_24px_70px_rgba(120,53,15,0.07)] md:p-10">
        <div className="inline-flex rounded-full border border-amber-900/10 bg-amber-50/70 px-4 py-2 text-sm text-amber-800">
          品牌定位
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          用可验证的技术与标准，重新定义高端速溶黑茶
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          黑氪金球（HK）以专属菌种体系、低温冻干工艺与标准化生产能力为基础，建立稳定、可追溯且更具品质感的产品体系。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.5rem] border border-amber-900/10 bg-white/75 p-6">
          <div className="text-base font-semibold text-gray-900">科技转化</div>
          <div className="mt-2 text-sm leading-7 text-gray-700">
            将科研成果沉淀为兼具辨识度与长期价值的产品体系。
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-amber-900/10 bg-white/75 p-6">
          <div className="text-base font-semibold text-gray-900">药品级生产</div>
          <div className="mt-2 text-sm leading-7 text-gray-700">
            以严格的生产环境与质量控制流程，保障批次一致性与稳定交付。
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-amber-900/10 bg-white/75 p-6">
          <div className="text-base font-semibold text-gray-900">品牌化运营</div>
          <div className="mt-2 text-sm leading-7 text-gray-700">
            围绕礼赠、渠道与品牌合作场景，提供更完整的对接与支持服务。
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-[0_24px_70px_rgba(120,53,15,0.05)] md:p-10">
        <h2 className="text-2xl font-semibold text-gray-900">品牌背书</h2>
        <p className="mt-2 text-gray-700">
          围绕专利、菌种体系、生产标准与品质管理，构建清晰可信的品牌背书。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-amber-900/10 bg-[#f8efe5] p-6">
            <div className="text-sm font-semibold text-gray-900">专利与工艺体系</div>
            <div className="mt-2 text-sm leading-7 text-gray-700">
              以关键工艺与流程为核心，形成具备可解释性的技术壁垒。
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-amber-900/10 bg-[#f8efe5] p-6">
            <div className="text-sm font-semibold text-gray-900">菌种可追溯</div>
            <div className="mt-2 text-sm leading-7 text-gray-700">
              强调可验证与稳定性，面向渠道与合作伙伴提供对应证明材料。
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-amber-900/10 bg-[#f8efe5] p-6">
            <div className="text-sm font-semibold text-gray-900">标准化生产</div>
            <div className="mt-2 text-sm leading-7 text-gray-700">
              以药品级标准与质量控制流程，支持规模化生产与合规交付。
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-amber-900/10 bg-[#f8efe5] p-6">
            <div className="text-sm font-semibold text-gray-900">品质与合规</div>
            <div className="mt-2 text-sm leading-7 text-gray-700">
              坚持克制表达与合规沟通，以真实信息与可核验资料建立长期信任。
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-[0_20px_60px_rgba(120,53,15,0.06)] md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">合作咨询</h2>
            <p className="mt-2 text-gray-700">
              如需进一步了解品牌资料、合作方式与定制支持，可进入联系页沟通。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 px-5 py-3 text-sm font-medium text-[#fffaf2] hover:from-amber-700 hover:to-amber-900"
            >
              联系咨询
            </Link>
            <Link
              to="/product"
              className="rounded-xl border border-amber-900/15 bg-white/80 px-5 py-3 text-sm font-medium text-gray-800 hover:bg-white"
            >
              了解产品
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
