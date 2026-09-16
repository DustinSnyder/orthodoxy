import { Link } from 'react-router-dom'
import { dailyEntries, getDailyOrNearest, toISODate } from '../data/daily'
import { liturgicDayUrl, scripturePaths } from '../data/scripture'

export function Scripture() {
  const today = getDailyOrNearest(toISODate(new Date()))

  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold md:text-4xl">Scripture</h1>

      <section className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Daily readings</h2>
        <p className="mt-2 text-sm">
          <span className="text-orthodox-gold-light">Epistle:</span> {today.epistle}
        </p>
        <p className="mt-1 text-sm">
          <span className="text-orthodox-gold-light">Gospel:</span> {today.gospel}
        </p>
        <a
          href={liturgicDayUrl}
          target="_blank"
          rel="noreferrer"
          className="tap-target mt-3 inline-flex rounded-full bg-orthodox-gold px-4 py-2 text-sm font-semibold text-orthodox-navy"
        >
          Open antiochian.org/liturgicday ↗
        </a>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Sample week · mid-Sept 2026</h2>
        <p className="mb-3 text-xs text-orthodox-muted">
          Curated for offline study when live fetch is unavailable. Always verify officially.
        </p>
        <ul className="space-y-2">
          {dailyEntries.map((d) => (
            <li key={d.date} className="rounded-xl bg-orthodox-parchment px-3 py-2 text-sm">
              <p className="font-semibold text-orthodox-gold-light">
                {d.date} · {d.civilNote}
              </p>
              <p>Epistle: {d.epistle}</p>
              <p>Gospel: {d.gospel}</p>
            </li>
          ))}
        </ul>
      </section>

      {scripturePaths.map((path) => (
        <section key={path.id} className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
          <h2 className="font-display text-xl text-orthodox-gold">{path.title}</h2>
          <p className="mt-1 text-sm text-orthodox-cream/80">{path.description}</p>
          <ul className="mt-3 space-y-2">
            {path.chapters.map((c) => (
              <li key={c.ref} className="rounded-xl border border-orthodox-gold/50 px-3 py-2 text-sm">
                <p className="font-semibold">{c.ref}</p>
                <p className="text-orthodox-gold-light">{c.focus}</p>
                <p className="text-orthodox-cream/75">{c.note}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <Link to="/catechesis/scripture-1" className="text-sm text-orthodox-gold underline">
        Related lesson: The Bible in the Church
      </Link>
    </div>
  )
}
