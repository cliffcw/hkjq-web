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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-base font-semibold tracking-wide text-white"
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
                  isActive ? 'bg-white/10 text-white' : 'text-zinc-200 hover:text-white',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
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
                  isActive ? 'bg-white/10 text-white' : 'bg-white/5 text-zinc-200 hover:text-white',
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
