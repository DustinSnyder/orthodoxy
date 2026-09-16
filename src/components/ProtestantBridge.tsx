import type { ReactNode } from 'react'

export function ProtestantBridge({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-sky-400/30 bg-sky-950/40 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
        From a Protestant background
      </p>
      <div className="mt-2 text-sm leading-relaxed text-orthodox-cream/90">{children}</div>
    </div>
  )
}
