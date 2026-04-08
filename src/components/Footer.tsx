export default function Footer() {
  return (
    <footer className="border-t border-amber-200/70 bg-[#f0e2cf]/80">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-gray-900">黑氪金球（HK）</div>
            <div className="text-xs text-gray-600">
              科技转化 · 药品级生产 · 专业化运营
            </div>
          </div>

          <div className="space-y-2 text-xs text-gray-600">
            <div className="text-gray-900">联系</div>
            <div>微信：aodixiu0327</div>
            <div>工作时间：周一至周五 9:30-18:30</div>
          </div>

          <div className="space-y-2 text-xs text-gray-600 md:text-right">
            <div>© {new Date().getFullYear()} HK. All rights reserved.</div>
            <div>本站为品牌信息展示用途，不提供资料下载。</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
