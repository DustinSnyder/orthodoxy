import { Link } from 'react-router-dom'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'

const links = [
  { to: '/fasting', title: 'Fasting', desc: 'Wed/Fri, seasons, 2026 overview' },
  { to: '/scripture', title: 'Scripture', desc: 'Daily readings + Gospel paths' },
  { to: '/saints', title: 'Saints & Fathers', desc: 'Icons, bios, PD excerpts' },
  { to: '/icons', title: 'Icons Gallery', desc: 'Veneration vs worship' },
  { to: '/library', title: 'Library', desc: 'Spine books & official links' },
  { to: '/parish', title: 'Parish', desc: 'St. Raphael · Iowa City' },
]

export function More() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-3xl text-orthodox-gold-light">More</h1>
      <PastoralDisclaimer compact />
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="tap-target block rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep px-4 py-4 hover:border-orthodox-gold/50"
            >
              <p className="font-semibold text-orthodox-gold">{l.title}</p>
              <p className="text-sm text-orthodox-cream/75">{l.desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
