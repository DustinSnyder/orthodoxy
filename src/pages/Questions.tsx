import { useMemo, useState } from 'react'
import { topQuestions } from '../data/questions'
import { ProtestantBridge } from '../components/ProtestantBridge'
import { Link } from 'react-router-dom'

export function Questions() {
  const themes = useMemo(
    () => Array.from(new Set(topQuestions.map((q) => q.theme))),
    [],
  )
  const [theme, setTheme] = useState<string>('All')
  const [openId, setOpenId] = useState<string | null>(topQuestions[0]?.id ?? null)

  const filtered =
    theme === 'All' ? topQuestions : topQuestions.filter((q) => q.theme === theme)

  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold md:text-4xl">Questions to ask</h1>
      <p className="text-sm text-orthodox-cream/85">
        Excellent questions a newcomer or catechumen <em>should</em> be asking — with short Orthodox
        answers. Use these to study and to prepare thoughtful conversations.
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTheme('All')}
          className={`tap-target rounded-full px-3 py-2 text-xs font-semibold ${
            theme === 'All' ? 'bg-orthodox-gold text-orthodox-navy' : 'border border-orthodox-gold/60'
          }`}
        >
          All ({topQuestions.length})
        </button>
        {themes.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTheme(t)}
            className={`tap-target rounded-full px-3 py-2 text-xs font-semibold ${
              theme === t ? 'bg-orthodox-gold text-orthodox-navy' : 'border border-orthodox-gold/60'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="space-y-3">
        {filtered.map((q, idx) => {
          const open = openId === q.id
          return (
            <li key={q.id} className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep overflow-hidden">
              <button
                type="button"
                className="tap-target flex w-full items-start gap-3 px-4 py-3 text-left"
                onClick={() => setOpenId(open ? null : q.id)}
                aria-expanded={open}
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orthodox-gold/20 text-xs font-bold text-orthodox-gold">
                  {idx + 1}
                </span>
                <span className="flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-wide text-orthodox-muted">
                    {q.theme}
                  </span>
                  <span className="font-semibold text-orthodox-cream">{q.question}</span>
                </span>
                <span className="text-orthodox-gold" aria-hidden>
                  {open ? '−' : '+'}
                </span>
              </button>
              {open && (
                <div className="space-y-3 border-t border-orthodox-gold/50 px-4 py-4 text-sm">
                  <p className="leading-relaxed text-orthodox-cream/90">{q.answer}</p>
                  {q.protestantBridge && <ProtestantBridge>{q.protestantBridge}</ProtestantBridge>}
                  <p className="rounded-xl border border-orthodox-gold/55 bg-orthodox-parchment px-3 py-2 text-orthodox-gold-light">
                    <strong>Ask your priest:</strong> {q.askPriest}
                  </p>
                </div>
              )}
            </li>
          )
        })}
      </ul>

      <p className="text-sm text-orthodox-cream/75">
        Related:{' '}
        <Link to="/catechesis" className="text-orthodox-gold underline">
          Catechesis lessons
        </Link>
        {' · '}
        <Link to="/priest" className="text-orthodox-gold underline">
          Addressing Fr. Symeon
        </Link>
      </p>
    </div>
  )
}
