import { Link } from 'react-router-dom'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'

const pastoral = [
  { to: '/questions', title: 'Questions to ask', desc: '18 essential newcomer / catechumen questions' },
  { to: '/family', title: 'Family & friends', desc: 'Unsupportive loved ones · spouse & children' },
  { to: '/priest', title: 'Priest & blessings', desc: 'Father Symeon · how to ask a blessing' },
  { to: '/challenges', title: 'Conversion challenges', desc: 'Protestant hurdles · pastoral ways through' },
]

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
    <div className="space-y-4 pb-8">
      <h1 className="font-display text-3xl text-orthodox-gold-light">More</h1>
      <PastoralDisclaimer compact />

      <section>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-orthodox-gold">
          Pastoral life
        </h2>
        <ul className="space-y-3">
          {pastoral.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="tap-target block rounded-2xl border border-orthodox-gold/40 bg-gradient-to-br from-orthodox-deep to-orthodox-blue px-4 py-4 hover:border-orthodox-gold"
              >
                <p className="font-semibold text-orthodox-gold">{l.title}</p>
                <p className="text-sm text-orthodox-cream/75">{l.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-orthodox-muted">
          Learn & live
        </h2>
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
      </section>
    </div>
  )
}
