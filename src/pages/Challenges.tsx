import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { conversionChallenges } from '../data/challenges'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'
import { ProtestantBridge } from '../components/ProtestantBridge'

export function Challenges() {
  const [openId, setOpenId] = useState<string | null>(conversionChallenges[0]?.id ?? null)
  const count = conversionChallenges.length

  const summary = useMemo(
    () =>
      conversionChallenges.map((c, i) => ({
        id: c.id,
        n: i + 1,
        title: c.title.split('→')[0].trim().split('—')[0].trim(),
      })),
    [],
  )

  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold-light">Conversion challenges</h1>
      <p className="text-sm text-orthodox-cream/85">
        Honest obstacles many Protestants meet on the way into Orthodoxy — and pastoral ways to walk
        through them. Your sincerity in seeking Christ is honored here; nothing below mocks that past.
      </p>
      <PastoralDisclaimer />

      <ProtestantBridge>
        These pages name real fears: Scripture, salvation, icons, communion, worship style, family, and
        identity. Bring each one to Fr. Symeon at St. Raphael. This guide is a companion for courage and
        clarity — never a substitute for his care or parish life.
      </ProtestantBridge>

      <section className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
        <h2 className="font-display text-lg text-orthodox-gold">At a glance ({count})</h2>
        <ol className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {summary.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => {
                  setOpenId(s.id)
                  document.getElementById(`challenge-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="tap-target flex w-full items-center gap-2 rounded-xl border border-orthodox-gold/20 bg-orthodox-navy/40 px-3 py-2 text-left text-sm text-orthodox-cream/90 hover:border-orthodox-gold/50"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orthodox-gold/20 text-xs font-bold text-orthodox-gold">
                  {s.n}
                </span>
                <span className="font-medium">{s.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <ul className="space-y-4">
        {conversionChallenges.map((c, idx) => {
          const open = openId === c.id
          return (
            <li
              key={c.id}
              id={`challenge-${c.id}`}
              className="overflow-hidden rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep scroll-mt-4"
            >
              <button
                type="button"
                className="tap-target flex w-full items-start gap-3 px-4 py-4 text-left"
                onClick={() => setOpenId(open ? null : c.id)}
                aria-expanded={open}
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orthodox-gold/30 to-orthodox-gold/10 text-sm font-bold text-orthodox-gold">
                  {idx + 1}
                </span>
                <span className="flex-1">
                  <span className="font-display text-lg text-orthodox-gold-light">{c.title}</span>
                </span>
                <span className="text-orthodox-gold" aria-hidden>
                  {open ? '−' : '+'}
                </span>
              </button>

              {open && (
                <div className="space-y-4 border-t border-orthodox-gold/15 px-4 py-4">
                  <div className="rounded-xl border border-rose-400/25 bg-rose-950/30 px-3 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-rose-200/90">
                      The challenge
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-orthodox-cream/90">{c.challenge}</p>
                  </div>

                  <div className="rounded-xl border border-orthodox-gold/30 bg-orthodox-navy/50 px-3 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-orthodox-gold">
                      Orthodox framing
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-orthodox-cream/90">{c.framing}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-orthodox-muted">
                      Practical steps
                    </p>
                    <ol className="mt-2 space-y-2">
                      {c.steps.map((step, i) => (
                        <li
                          key={step.slice(0, 48)}
                          className="flex gap-2 rounded-xl bg-orthodox-navy/40 px-3 py-2 text-sm text-orthodox-cream/90"
                        >
                          <span className="font-bold text-orthodox-gold">{i + 1}.</span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <ProtestantBridge>{c.bridge}</ProtestantBridge>

                  <p className="rounded-xl border border-orthodox-gold/30 bg-orthodox-navy/50 px-3 py-2 text-sm text-orthodox-gold-light">
                    <strong>With Fr. Symeon:</strong> Bring this challenge by name. Parish pace and blessing
                    always come first — see{' '}
                    <Link to="/priest" className="underline">
                      Priest & blessings
                    </Link>{' '}
                    and{' '}
                    <Link to="/parish" className="underline">
                      Parish
                    </Link>
                    .
                  </p>
                </div>
              )}
            </li>
          )
        })}
      </ul>

      <p className="text-sm text-orthodox-cream/75">
        Related:{' '}
        <Link to="/questions" className="text-orthodox-gold underline">
          Questions to ask
        </Link>
        {' · '}
        <Link to="/family" className="text-orthodox-gold underline">
          Family & friends
        </Link>
        {' · '}
        <Link to="/catechesis" className="text-orthodox-gold underline">
          Catechesis
        </Link>
        {' · '}
        <Link to="/priest" className="text-orthodox-gold underline">
          Fr. Symeon
        </Link>
      </p>
    </div>
  )
}
