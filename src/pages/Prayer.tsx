import { useMemo, useState } from 'react'
import { prayers } from '../data/prayers'
import { TTSButton } from '../components/TTSButton'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'
import { usePrayerChecks } from '../hooks/useProgress'

export function Prayer() {
  const [activeId, setActiveId] = useState(prayers[0].id)
  const active = prayers.find((p) => p.id === activeId) ?? prayers[0]
  const fullText = useMemo(
    () => active.sections.map((s) => `${s.title}. ${s.text}`).join('\n\n'),
    [active],
  )
  const { todayChecks, toggle } = usePrayerChecks()

  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold md:text-4xl">Prayer</h1>
      <PastoralDisclaimer compact />

      <div className="flex flex-wrap gap-2">
        {prayers.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveId(p.id)}
            className={`tap-target rounded-full px-3 py-2 text-sm font-semibold ${
              activeId === p.id
                ? 'bg-orthodox-gold text-orthodox-navy'
                : 'border border-orthodox-gold/40 text-orthodox-gold-light'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {(active.id === 'morning' || active.id === 'evening') && (
        <button
          type="button"
          onClick={() => toggle(active.id === 'morning' ? 'morning' : 'evening')}
          className="tap-target rounded-xl border border-orthodox-gold/40 px-4 py-2 text-sm"
        >
          Mark {active.id} done today{' '}
          {(active.id === 'morning' ? todayChecks.morning : todayChecks.evening) ? '✓' : ''}
        </button>
      )}

      <p className="text-sm text-orthodox-cream/80">{active.summary}</p>
      {active.note && <p className="text-xs text-orthodox-muted">{active.note}</p>}

      <TTSButton text={fullText} label="Read aloud (TTS)" />

      {active.id === 'jesus-prayer' && (
        <div className="rounded-2xl border border-orthodox-gold/30 bg-orthodox-deep p-4">
          <p className="font-display text-lg text-orthodox-gold">Prayer rope</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2" aria-hidden>
            {Array.from({ length: 33 }).map((_, i) => (
              <span
                key={i}
                className="h-3 w-3 rounded-full bg-orthodox-gold/80 shadow"
                style={{ opacity: 0.55 + (i % 5) * 0.08 }}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-orthodox-muted">33 knots — a gentle beginner count</p>
        </div>
      )}

      <div className="space-y-4">
        {active.sections.map((s) => (
          <section key={s.title} className="rounded-2xl border border-orthodox-gold/30 bg-orthodox-deep p-4">
            <h2 className="font-display text-xl text-orthodox-gold">{s.title}</h2>
            <pre className="mt-3 whitespace-pre-wrap font-[family-name:var(--font-body)] text-sm leading-relaxed text-orthodox-cream/90">
              {s.text}
            </pre>
          </section>
        ))}
      </div>
    </div>
  )
}
