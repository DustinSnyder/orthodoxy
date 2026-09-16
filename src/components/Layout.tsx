import { Outlet, NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Today', icon: '✝' },
  { to: '/catechesis', label: 'Learn', icon: '📖' },
  { to: '/prayer', label: 'Prayer', icon: '🙏' },
  { to: '/more', label: 'More', icon: '✦' },
]

export function Layout() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col bg-orthodox-navy text-orthodox-cream">
      <header className="sticky top-0 z-20 border-b border-orthodox-gold/20 bg-orthodox-navy/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-xl font-semibold text-orthodox-gold">Orthodox Path</p>
            <p className="text-xs text-orthodox-cream/70">St. Raphael · Iowa City catechumen companion</p>
          </div>
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orthodox-gold/50 text-orthodox-gold"
            aria-hidden
          >
            ✝
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-4 safe-bottom">
        <Outlet />
      </main>

      <nav
        className="sticky bottom-0 z-20 border-t border-orthodox-gold/20 bg-orthodox-deep/95 safe-bottom backdrop-blur"
        aria-label="Primary"
      >
        <ul className="grid grid-cols-4 gap-1 px-2 pt-2">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `tap-target flex flex-col items-center rounded-xl px-2 py-2 text-xs font-medium ${
                    isActive
                      ? 'bg-orthodox-gold/15 text-orthodox-gold'
                      : 'text-orthodox-cream/70 hover:text-orthodox-cream'
                  }`
                }
              >
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
