import { Outlet, NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Today', icon: '✝' },
  { to: '/catechesis', label: 'Learn', icon: '📖' },
  { to: '/prayer', label: 'Prayer', icon: '🙏' },
  { to: '/more', label: 'More', icon: '✦' },
]

function navClass({ isActive }: { isActive: boolean }) {
  return `tap-target flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-orthodox-gold/15 text-orthodox-gold'
      : 'text-orthodox-muted hover:bg-orthodox-parchment hover:text-orthodox-ink'
  }`
}

function navClassMobile({ isActive }: { isActive: boolean }) {
  return `tap-target flex flex-col items-center rounded-xl px-2 py-2 text-xs font-medium ${
    isActive
      ? 'bg-orthodox-gold/15 text-orthodox-gold'
      : 'text-orthodox-muted hover:text-orthodox-ink'
  }`
}

export function Layout() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col bg-white text-orthodox-ink md:max-w-4xl">
      <header className="sticky top-0 z-20 border-b border-orthodox-gold/35 bg-white/95 px-4 py-3 backdrop-blur md:px-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-2xl font-semibold text-orthodox-gold md:text-3xl">
              Orthodox Path
            </p>
            <p className="text-sm text-orthodox-muted">
              St. Raphael · Iowa City catechumen companion
            </p>
          </div>
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full border border-orthodox-gold/50 text-lg text-orthodox-gold"
            aria-hidden
          >
            ✝
          </div>
        </div>

        {/* Desktop / tablet top nav */}
        <nav className="mt-3 hidden border-t border-orthodox-gold/25 pt-3 md:block" aria-label="Primary">
          <ul className="flex flex-wrap gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={navClass}>
                  <span aria-hidden>{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-5 safe-bottom md:px-6 md:py-6">
        <Outlet />
      </main>

      {/* Mobile bottom nav */}
      <nav
        className="sticky bottom-0 z-20 border-t border-orthodox-gold/35 bg-white/95 safe-bottom backdrop-blur md:hidden"
        aria-label="Primary"
      >
        <ul className="grid grid-cols-4 gap-1 px-2 pt-2">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'} className={navClassMobile}>
                <span className="text-lg" aria-hidden>
                  {item.icon}
                </span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
