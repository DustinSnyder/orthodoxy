export function PastoralDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="rounded-xl border border-orthodox-gold/40 bg-orthodox-blue px-3 py-2 text-sm text-orthodox-gold-light">
        Companion only — Fr. Symeon’s guidance overrides this app.
      </p>
    )
  }

  return (
    <aside
      className="rounded-2xl border border-orthodox-gold/40 bg-gradient-to-br from-white to-orthodox-blue p-4 shadow-sm"
      role="note"
    >
      <h2 className="font-display text-lg text-orthodox-gold">Pastoral note</h2>
      <p className="mt-2 text-sm leading-relaxed text-orthodox-ink/90">
        This app is a <strong>personal learning companion</strong>. It never replaces Fr. Symeon’s guidance,
        parish catechesis, or the living worship of the Church. Fasting, prayer rule, and reception into the
        Church are always under his blessing.
      </p>
    </aside>
  )
}
