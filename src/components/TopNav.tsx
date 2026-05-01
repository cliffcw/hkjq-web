import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/brand', label: '品牌' },
  { to: '/product', label: '产品' },
  { to: '/shop', label: '选购中心' },
  { to: '/team', label: '团队' },
  { to: '/contact', label: '联系' },
]

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl ring-1 ring-stone-200">
            <img src="/docs/logol/logol2.jpg" alt="黑氪金球（HK）" className="h-9 w-9 object-cover" />
          </span>
          <span className="hidden text-base font-semibold tracking-wide text-stone-900 sm:inline">
            黑氪金球
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3.5 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-amber-50 font-medium text-amber-700'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-900 shadow-sm hover:bg-amber-400"
        >
          合作咨询
        </NavLink>
      </div>

      {/* mobile nav */}
      <div className="mx-auto w-full max-w-6xl border-t border-stone-100 px-6 pb-3 pt-2 md:hidden">
        <div className="flex flex-wrap gap-1.5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-1.5 text-sm transition-colors',
                  isActive
                    ? 'bg-amber-50 font-medium text-amber-700'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
