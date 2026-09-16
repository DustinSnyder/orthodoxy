import type { ReactNode } from 'react'

export function ProtestantBridge({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-blue p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-orthodox-gold-light">
        From a Protestant background
      </p>
      <div className="mt-2 text-sm leading-relaxed text-orthodox-ink/90">{children}</div>
    </div>
  )
}
