import { libraryItems } from '../data/library'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'

export function Library() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold-light">Library</h1>
      <PastoralDisclaimer compact />
      <p className="text-sm text-orthodox-cream/80">
        Curated spine for an Antiochian catechumen. Purchase or read official free sources — never pirate.
        This app summarizes teaching; it does not reproduce copyrighted book chapters.
      </p>
      <ul className="space-y-3">
        {libraryItems.map((item) => (
          <li key={item.id} className="rounded-2xl border border-orthodox-gold/25 bg-orthodox-deep p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-orthodox-muted">{item.kind}</p>
            <h2 className="font-display text-xl text-orthodox-gold">{item.title}</h2>
            <p className="text-sm text-orthodox-gold-light">{item.author}</p>
            <p className="mt-2 text-sm">{item.why}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.links.map((l) => (
                <a
                  key={l.url + l.label}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="tap-target rounded-full bg-orthodox-gold/20 px-3 py-2 text-xs font-semibold text-orthodox-gold"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
