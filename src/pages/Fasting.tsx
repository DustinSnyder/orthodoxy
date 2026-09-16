import { fastSeasons2026, fastingDisclaimer, isWedOrFri, simplifiedFastLabel } from '../data/fasting'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'
import { dailyEntries } from '../data/daily'

function buildSeptemberGrid(year: number) {
  // Educational Wed/Fri markers for Sep 2026 (+ nearby sample)
  const days: { date: Date; iso: string }[] = []
  for (let d = 1; d <= 30; d++) {
    const date = new Date(year, 8, d) // month index 8 = September
    const iso = `${year}-09-${String(d).padStart(2, '0')}`
    days.push({ date, iso })
  }
  return days
}

export function Fasting() {
  const today = new Date()
  const todayLabel = simplifiedFastLabel(today)
  const days = buildSeptemberGrid(2026)
  const sampleMap = Object.fromEntries(dailyEntries.map((e) => [e.date, e]))

  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold-light">Fasting</h1>
      <PastoralDisclaimer />
      <p className="rounded-xl border border-amber-400/40 bg-amber-950/40 px-3 py-2 text-sm text-amber-100">
        {fastingDisclaimer}
      </p>

      <section className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Spirit of fasting</h2>
        <div className="prose-orthodox mt-2 text-sm">
          <p>
            Fasting is not punishment. It is training: saying no to appetite so the heart can say yes to God.
            The Church fasts together — Wednesdays (betrayal) and Fridays (Cross), and in the great seasons —
            so that repentance, prayer, and almsgiving grow together.
          </p>
          <p>
            Beginners should ask Fr. Symeon for a starting measure. Illness, heavy labor, and other needs change
            the rule. Pride about fasting is worse than eating with humility.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Today</h2>
        <p className="font-medium">{todayLabel.label}</p>
        <p className="mt-1 text-sm text-orthodox-cream/80">{todayLabel.detail}</p>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Major seasons (2026 overview)</h2>
        <ul className="mt-3 space-y-3">
          {fastSeasons2026.map((s) => (
            <li key={s.id} className="rounded-xl bg-orthodox-navy/60 px-3 py-2 text-sm">
              <p className="font-semibold text-orthodox-gold-light">{s.name}</p>
              <p className="text-xs text-orthodox-muted">{s.approx2026}</p>
              <p className="mt-1">{s.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">September 2026 · Wed/Fri</h2>
        <p className="mb-3 text-xs text-orthodox-muted">
          Simplified view: Wednesdays and Fridays highlighted. Sample liturgic notes where provided.
        </p>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-orthodox-muted">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {Array.from({ length: days[0].date.getDay() }).map((_, i) => (
            <div key={`pad-${i}`} />
          ))}
          {days.map(({ date, iso }) => {
            const fast = isWedOrFri(date)
            const sample = sampleMap[iso]
            return (
              <div
                key={iso}
                title={sample?.fasting.label ?? (fast ? 'Weekly fast' : 'Ordinary')}
                className={`flex aspect-square items-center justify-center rounded-lg text-xs ${
                  fast
                    ? 'bg-orthodox-gold/25 font-semibold text-orthodox-gold'
                    : 'bg-orthodox-navy/50 text-orthodox-cream/80'
                }`}
              >
                {date.getDate()}
              </div>
            )
          })}
        </div>
        <p className="mt-3 text-xs text-orthodox-muted">
          Gold cells = Wed/Fri awareness. Not a full typikon. Confirm feast mitigations on the parish/archdiocese
          calendar.
        </p>
      </section>
    </div>
  )
}
