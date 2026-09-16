import { useState } from 'react'
import { fatherExcerpts, saints } from '../data/saints'
import { getIcon } from '../data/icons'
import { IconImage } from '../components/IconImage'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'

export function Saints() {
  const [tab, setTab] = useState<'saints' | 'fathers'>('saints')

  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold-light">Saints & Fathers</h1>
      <PastoralDisclaimer compact />

      <div className="flex gap-2">
        <button
          type="button"
          className={`tap-target rounded-full px-4 py-2 text-sm font-semibold ${
            tab === 'saints' ? 'bg-orthodox-gold text-orthodox-navy' : 'border border-orthodox-gold/40'
          }`}
          onClick={() => setTab('saints')}
        >
          Saints
        </button>
        <button
          type="button"
          className={`tap-target rounded-full px-4 py-2 text-sm font-semibold ${
            tab === 'fathers' ? 'bg-orthodox-gold text-orthodox-navy' : 'border border-orthodox-gold/40'
          }`}
          onClick={() => setTab('fathers')}
        >
          Father excerpts (PD)
        </button>
      </div>

      {tab === 'saints' && (
        <ul className="space-y-4">
          {saints.map((s) => {
            const icon = s.iconId ? getIcon(s.iconId) : undefined
            return (
              <li key={s.id} className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
                <div className="flex gap-3">
                  {icon && <IconImage icon={icon} size="sm" />}
                  <div>
                    <h2 className="font-display text-xl text-orthodox-gold">{s.name}</h2>
                    <p className="text-xs text-orthodox-muted">{s.feastDate}</p>
                    <p className="mt-1 text-sm font-medium">{s.summary}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-orthodox-cream/85">{s.bio}</p>
              </li>
            )
          })}
        </ul>
      )}

      {tab === 'fathers' && (
        <ul className="space-y-4">
          {fatherExcerpts.map((ex) => (
            <li key={ex.id} className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Public domain excerpt
              </p>
              <h2 className="font-display mt-1 text-xl text-orthodox-gold">{ex.father}</h2>
              <p className="text-sm text-orthodox-gold-light">{ex.title}</p>
              <blockquote className="mt-3 border-l-2 border-orthodox-gold/50 pl-3 text-sm italic leading-relaxed">
                {ex.text}
              </blockquote>
              <p className="mt-2 text-xs text-orthodox-muted">
                {ex.source}. {ex.attribution}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
