import { Link } from 'react-router-dom'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'
import { getIcon } from '../data/icons'
import { IconImage } from '../components/IconImage'

export function Parish() {
  const icon = getIcon('st-raphael-brooklyn')

  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold-light">Parish</h1>
      <PastoralDisclaimer />

      {icon && <IconImage icon={icon} size="lg" />}

      <section className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
        <h2 className="font-display text-2xl text-orthodox-gold">Saint Raphael of Brooklyn Orthodox Church</h2>
        <p className="mt-2 text-sm">Antiochian Orthodox Christian Archdiocese of North America</p>
        <p className="mt-3 text-sm">
          <strong>Address:</strong> 722 E. College Street, Iowa City, IA
        </p>
        <p className="mt-1 text-sm">
          <strong>Priest:</strong> Father Symeon Kees
        </p>
        <a
          href="https://raphaelchurch.org/"
          target="_blank"
          rel="noreferrer"
          className="tap-target mt-3 inline-flex rounded-full bg-orthodox-gold px-4 py-2 text-sm font-semibold text-orthodox-navy"
        >
          raphaelchurch.org ↗
        </a>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Typical service times</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="rounded-xl bg-orthodox-navy/50 px-3 py-2">
            <strong>Saturday Great Vespers</strong> — 6:00 p.m.
          </li>
          <li className="rounded-xl bg-orthodox-navy/50 px-3 py-2">
            <strong>Sunday Orthros (Matins)</strong> — 8:45 a.m.
          </li>
          <li className="rounded-xl bg-orthodox-navy/50 px-3 py-2">
            <strong>Sunday Divine Liturgy</strong> — 10:00 a.m.
          </li>
        </ul>
        <p className="mt-3 text-xs text-amber-200">
          Always confirm on the parish calendar — feast days, special services, and seasonal changes happen.
        </p>
      </section>


      <section className="rounded-2xl border border-orthodox-gold/40 bg-gradient-to-br from-orthodox-deep to-orthodox-blue p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Listen to Fr. Symeon</h2>
        <p className="mt-2 text-sm text-orthodox-cream/85">
          Public YouTube and podcast resources for catechumens — Paradosis Pavilion, Christian Saints
          Podcast, and ReOrientNation. Outbound links only; ask him about anything confusing.
        </p>
        <Link
          to="/father-symeon"
          className="tap-target mt-3 inline-flex rounded-full bg-orthodox-gold px-4 py-2 text-sm font-semibold text-orthodox-navy"
        >
          Fr. Symeon media →
        </Link>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4 text-sm">
        <h2 className="font-display text-xl text-orthodox-gold">For catechumens</h2>
        <p className="mt-2">
          Arrive a little early. Stand with the people. Introduce yourself to Fr. Symeon when appropriate. Let
          the services teach you. Bring questions from this app to him — he is your spiritual father for the
          path into the Church.
        </p>
      </section>
    </div>
  )
}
