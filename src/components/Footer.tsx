export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-stone-900">黑氪金球（HK）</div>
            <div className="text-xs text-stone-500">冷萃金花黑茶固体饮料</div>
            <div className="text-xs text-stone-400">湘丰 1 号纯菌种 · 药品级冻干 · 6 大不添加</div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold text-stone-900">联系我们</div>
            <div className="text-xs text-stone-500">微信：aodixiu0327</div>
            <div className="text-xs text-stone-400">工作时间：周一至周五 9:30–18:30</div>
          </div>

          <div className="space-y-2 md:text-right">
            <div className="text-xs text-stone-400">© {new Date().getFullYear()} HK. All rights reserved.</div>
            <div className="text-xs text-stone-400">本站为品牌信息展示，不提供资料下载。</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
