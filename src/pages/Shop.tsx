import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <section className="py-10 sm:py-14 lg:py-20">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-amber-700">
          选购中心
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
          选购功能
          <br />
          <span className="text-amber-600">即将上线</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-500 sm:mt-5 sm:text-base">
          商城模块正在建设与流程联调中，上线后可在此直接下单购买。
          如需立即采购或咨询渠道价格，请通过以下方式联系我们。
        </p>
        <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
          <Link
            to="/contact"
            className="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-900 shadow-sm hover:bg-amber-400 sm:px-7 sm:py-3.5"
          >
            联系购买
          </Link>
          <Link
            to="/product"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-stone-700 shadow-sm ring-1 ring-stone-200 hover:bg-stone-50 sm:px-7 sm:py-3.5"
          >
            查看产品详情
          </Link>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-100">
        <div className="grid sm:grid-cols-2">
          <div className="bg-gradient-to-br from-amber-50 to-stone-100 p-6 sm:p-10">
            <img
              src="/products/product-box.jpg"
              alt="黑氪金球 冷萃金花黑茶"
              className="mx-auto max-w-xs rounded-2xl shadow-lg shadow-stone-300/50"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 p-6 sm:p-10">
            <h2 className="text-lg font-bold text-stone-900 sm:text-xl">冷萃金花黑茶固体饮料</h2>
            <ul className="space-y-3">
              {[
                '15g 礼盒装（1g × 15 条）',
                '冷热双溶 · 3 秒速溶',
                '0 糖 · 0 香精 · 6 大不添加',
                '适合自用 · 送礼 · 渠道动销',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-stone-600">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-1 text-xs text-stone-400">
              微信联系获取购买链接与渠道价格：
              <span className="ml-1 font-mono text-stone-600">aodixiu0327</span>
            </div>
          </div>
        </div>
      </section>

      <div className="my-12 sm:my-20" />
    </div>
  )
}
