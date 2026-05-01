import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg ring-1 ring-stone-200">
            <img src="/docs/logol/logol2.jpg" alt="黑氪金球（HK）" className="h-8 w-8 object-cover" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-stone-900 sm:text-base">
            黑氪金球
          </span>
        </NavLink>

        {/* Desktop nav */}
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

        {/* Right side */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/contact"
            className="hidden rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-900 shadow-sm hover:bg-amber-400 md:block"
          >
            合作咨询
          </NavLink>

          {/* Hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-stone-600 hover:bg-stone-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? '关闭菜单' : '打开菜单'}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-stone-100 bg-white px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-4 py-2.5 text-sm transition-colors',
                    isActive
                      ? 'bg-amber-50 font-medium text-amber-700'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-stone-900 hover:bg-amber-400"
            >
              合作咨询
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
