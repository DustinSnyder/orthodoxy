import { addressTips, blessingSteps, priestPastoralNotes, whenToAskBlessing } from '../data/priest'
import { Link } from 'react-router-dom'

export function Priest() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold md:text-4xl">Priest & blessings</h1>
      <p className="text-sm text-orthodox-cream/85">
        How to address clergy and ask a blessing in Antiochian / US parish life — especially with{' '}
        <strong>Father Symeon</strong> at Saint Raphael.
      </p>

      <section className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Quick answer</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Address him as <span className="text-orthodox-gold-light">Father Symeon</span>. In conversation,{' '}
          <span className="text-orthodox-gold-light">“Father”</span> alone is fine. To ask a blessing: approach,
          cup your hands (right over left), say <span className="text-orthodox-gold-light">“Father, bless”</span>,
          receive the blessing, and kiss the hand if that is the parish custom.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl text-orthodox-gold">Addressing clergy</h2>
        {addressTips.map((t) => (
          <div key={t.title} className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep px-4 py-3">
            <p className="font-semibold text-orthodox-gold-light">{t.title}</p>
            <p className="mt-1 text-sm text-orthodox-cream/85">{t.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">When to ask a blessing</h2>
        <ul className="mt-3 space-y-2">
          {whenToAskBlessing.map((w) => (
            <li key={w} className="flex gap-2 text-sm">
              <span className="text-orthodox-gold" aria-hidden>
                ✦
              </span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/60 bg-gradient-to-b from-orthodox-deep to-orthodox-blue p-4">
        <h2 className="font-display text-xl text-orthodox-gold">How to receive a blessing</h2>
        <p className="mt-1 text-xs text-orthodox-muted">Visual step list — practice once in your mind before Sunday</p>

        {/* Simple visual diagram */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-orthodox-gold/55 bg-orthodox-parchment p-4">
          <svg viewBox="0 0 320 120" className="mx-auto h-auto w-full max-w-sm" role="img" aria-label="Diagram of hands cupped right over left to receive a blessing">
            <text x="160" y="18" textAnchor="middle" fill="#e8d48b" fontSize="11">
              Hands: right over left, palms up
            </text>
            <ellipse cx="130" cy="70" rx="48" ry="28" fill="#1a3a5c" stroke="#c9a227" strokeWidth="2" />
            <ellipse cx="175" cy="62" rx="48" ry="28" fill="#13294b" stroke="#c9a227" strokeWidth="2" />
            <text x="130" y="74" textAnchor="middle" fill="#f7f1e3" fontSize="10">
              Left
            </text>
            <text x="175" y="66" textAnchor="middle" fill="#e8d48b" fontSize="10">
              Right
            </text>
            <path d="M 230 55 L 280 40" stroke="#c9a227" strokeWidth="2" markerEnd="url(#arrow)" />
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#c9a227" />
              </marker>
            </defs>
            <text x="290" y="36" textAnchor="middle" fill="#e8d48b" fontSize="9">
              Father
            </text>
          </svg>
          <p className="mt-2 text-center text-xs text-orthodox-gold-light">“Father, bless.” → receive Cross → kiss hand (if customary)</p>
        </div>

        <ol className="mt-4 space-y-3">
          {blessingSteps.map((s) => (
            <li key={s.step} className="flex gap-3 rounded-xl bg-orthodox-parchment px-3 py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orthodox-gold text-sm font-bold text-orthodox-navy">
                {s.step}
              </span>
              <div>
                <p className="font-semibold text-orthodox-gold-light">{s.title}</p>
                <p className="mt-1 text-sm text-orthodox-cream/85">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Pastoral notes</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-orthodox-cream/85">
          {priestPastoralNotes.map((n) => (
            <li key={n.slice(0, 32)}>{n}</li>
          ))}
        </ul>
      </section>

      <Link to="/parish" className="text-sm text-orthodox-gold underline">
        Saint Raphael parish page →
      </Link>
    </div>
  )
}
