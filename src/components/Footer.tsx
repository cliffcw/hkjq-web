export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-sm text-zinc-300">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-zinc-200">黑氪金球（HK）</div>
            <div className="text-xs text-zinc-300">
              科技转化 · 药品级生产 · 专业化运营
            </div>
          </div>

          <div className="space-y-2 text-xs text-zinc-300">
            <div className="text-zinc-200">联系</div>
            <div>微信：aodixiu0327</div>
            <div>工作时间：周一至周五 9:30-18:30</div>
          </div>

          <div className="space-y-2 text-xs text-zinc-300 md:text-right">
            <div>© {new Date().getFullYear()} HK. All rights reserved.</div>
            <div>本站为品牌信息展示用途，不提供资料下载。</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
