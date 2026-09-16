import { useState } from 'react'
import {
  commonMyths,
  familyDisclaimer,
  friendsFamilyGuidance,
  spouseChildrenGuidance,
} from '../data/family'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'
import { ProtestantBridge } from '../components/ProtestantBridge'
import { Link } from 'react-router-dom'

export function Family() {
  const [tab, setTab] = useState<'friends' | 'household'>('friends')

  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold md:text-4xl">Family & friends</h1>
      <p className="text-sm text-orthodox-cream/85">
        Practical guidance when loved ones don’t know Orthodoxy, aren’t supportive, or aren’t converting
        with you. Tone: humble, non-combative, loving.
      </p>
      <PastoralDisclaimer />
      <p className="rounded-xl border border-amber-400/40 bg-amber-950/40 px-3 py-2 text-sm text-amber-100">
        {familyDisclaimer}
      </p>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setTab('friends')}
          className={`tap-target flex-1 rounded-full px-3 py-2 text-sm font-semibold ${
            tab === 'friends' ? 'bg-orthodox-gold text-orthodox-navy' : 'border border-orthodox-gold/40'
          }`}
        >
          Friends & family
        </button>
        <button
          type="button"
          onClick={() => setTab('household')}
          className={`tap-target flex-1 rounded-full px-3 py-2 text-sm font-semibold ${
            tab === 'household' ? 'bg-orthodox-gold text-orthodox-navy' : 'border border-orthodox-gold/40'
          }`}
        >
          Spouse & children
        </button>
      </div>

      {tab === 'friends' && (
        <>
          <ProtestantBridge>
            Loved ones may fear you are abandoning the Gospel you learned with them. Honor what was real in
            your Protestant years. Explain Orthodoxy as seeking fullness in Christ — not scorning their faith.
          </ProtestantBridge>

          <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
            <h2 className="font-display text-xl text-orthodox-gold">Gentle replies to hard myths</h2>
            <ul className="mt-3 space-y-3">
              {commonMyths.map((m) => (
                <li key={m.myth} className="rounded-xl bg-orthodox-parchment px-3 py-3 text-sm">
                  <p className="font-semibold text-rose-200/90">{m.myth}</p>
                  <p className="mt-1 text-orthodox-cream/90">{m.gentleReply}</p>
                </li>
              ))}
            </ul>
          </section>

          {friendsFamilyGuidance.map((card) => (
            <section key={card.id} className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
              <h2 className="font-display text-xl text-orthodox-gold">{card.title}</h2>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-orthodox-cream/90">
                {card.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </>
      )}

      {tab === 'household' && (
        <>
          <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-blue p-4 text-sm">
            <p className="font-semibold text-orthodox-gold-light">Especially sensitive</p>
            <p className="mt-2 text-orthodox-cream/90">
              If your spouse or children are not becoming Orthodox with you: do not pressure. Love first.
              Protect the unity of the home. Pray. Involve Fr. Symeon. Model the faith rather than coerce it.
              Never shame.
            </p>
          </section>

          {spouseChildrenGuidance.map((card) => (
            <section key={card.id} className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
              <h2 className="font-display text-xl text-orthodox-gold">{card.title}</h2>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-orthodox-cream/90">
                {card.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <Link
            to="/parish"
            className="tap-target inline-flex rounded-full border border-orthodox-gold px-4 py-2 text-sm text-orthodox-gold"
          >
            Parish times — invite without pressure
          </Link>
        </>
      )}
    </div>
  )
}
