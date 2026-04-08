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
    <header className="sticky top-0 z-50 border-b border-amber-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-base font-semibold tracking-wide text-gray-900"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white/90">
            <img
              src="/docs/logol/logol2.jpg"
              alt="黑氪金球（HK）"
              className="h-9 w-9 object-cover"
            />
          </span>
          <span className="hidden sm:inline">黑氪金球</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-2 text-sm transition',
                  isActive
                    ? 'bg-amber-100/80 font-semibold text-amber-700'
                    : 'text-gray-700 hover:bg-white/60 hover:text-amber-600',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="rounded-lg bg-gradient-to-r from-amber-600 to-amber-800 px-3 py-2 text-sm font-medium text-[#fffaf2] hover:from-amber-700 hover:to-amber-900"
        >
          合作咨询
        </NavLink>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-4 md:hidden">
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-2 text-sm transition',
                  isActive
                    ? 'bg-amber-100/85 font-semibold text-amber-700'
                    : 'bg-white/60 text-gray-700 hover:bg-white/80 hover:text-amber-600',
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
