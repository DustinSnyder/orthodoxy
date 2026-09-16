import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  featuredEpisodes,
  mediaChannels,
  reorientNotableTitles,
  startHerePicks,
} from '../data/frSymeonMedia'

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}

export function FatherSymeon() {
  return (
    <div className="space-y-4 pb-10">
      <header className="rounded-2xl bg-gradient-to-br from-orthodox-blue to-orthodox-deep p-4 ring-1 ring-orthodox-gold/50">
        <p className="text-xs font-semibold uppercase tracking-wide text-orthodox-gold">
          Public media · St. Raphael
        </p>
        <h1 className="font-display mt-1 text-3xl text-orthodox-gold-light">Fr. Symeon Kees</h1>
        <p className="mt-2 text-sm leading-relaxed text-orthodox-cream/90">
          Priest at <strong>Saint Raphael of Brooklyn Orthodox Church</strong>, Iowa City. These are his
          public YouTube and podcast resources — helpful for catechumens alongside parish life. Links open
          externally; this app does not host audio or video.
        </p>
      </header>

      <aside
        className="rounded-2xl border border-orthodox-gold/60 bg-gradient-to-br from-orthodox-deep to-orthodox-blue p-4"
        role="note"
      >
        <h2 className="font-display text-lg text-orthodox-gold">Listening note</h2>
        <p className="mt-2 text-sm leading-relaxed text-orthodox-cream/90">
          These resources <strong>complement</strong> parish worship and catechesis — they do not replace
          them. This page collects public links only; it does not speak for the parish.
        </p>
      </aside>

      <section>
        <h2 className="mb-2 font-display text-xl text-orthodox-gold">Channels</h2>
        <ul className="space-y-3">
          {mediaChannels.map((ch) => (
            <li
              key={ch.id}
              className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-orthodox-muted">
                {ch.kind === 'youtube' ? 'YouTube' : 'Podcast'}
              </p>
              <h3 className="font-display text-2xl text-orthodox-gold">{ch.title}</h3>
              <p className="mt-2 text-sm text-orthodox-cream/85">{ch.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ch.links.map((l) => (
                  <ExternalLink
                    key={l.url + l.label}
                    href={l.url}
                    className="tap-target inline-flex items-center rounded-full bg-orthodox-gold px-3 py-2 text-xs font-semibold text-orthodox-navy"
                  >
                    {l.label} ↗
                  </ExternalLink>
                ))}
              </div>
              {ch.id === 'reorientnation' && (
                <div className="mt-4 rounded-xl bg-orthodox-parchment px-3 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orthodox-gold-light">
                    Notable episode titles
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-orthodox-cream/80">
                    {reorientNotableTitles.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="text-orthodox-gold" aria-hidden>
                          ✦
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/60 bg-gradient-to-br from-orthodox-deep to-orthodox-blue p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Start here for catechumens</h2>
        <p className="mt-1 text-sm text-orthodox-cream/80">
          A shortlist for newcomers — prayer, formation, liturgics, and the Apostolic Fathers.
        </p>
        <ul className="mt-3 space-y-2">
          {startHerePicks.map((p) => (
            <li key={p.id}>
              <ExternalLink
                href={p.url}
                className="tap-target block rounded-xl border border-orthodox-gold/55 bg-orthodox-parchment px-3 py-3 hover:border-orthodox-gold/80"
              >
                <p className="font-semibold text-orthodox-gold-light">{p.title} ↗</p>
                <p className="text-xs text-orthodox-muted">{p.show}</p>
                <p className="mt-1 text-sm text-orthodox-cream/80">{p.why}</p>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 font-display text-xl text-orthodox-gold">Featured episodes</h2>
        <p className="mb-3 text-xs text-orthodox-muted">
          Christian Saints Podcast — catalog may grow; links verified Sep 2026.
        </p>
        <ul className="space-y-3">
          {featuredEpisodes.map((ep) => (
            <li
              key={ep.id}
              className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep px-4 py-3"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-orthodox-muted">
                {ep.show}
              </p>
              <h3 className="font-display text-lg text-orthodox-gold-light">{ep.title}</h3>
              <p className="mt-0.5 text-xs text-orthodox-cream/70">{ep.meta}</p>
              {ep.note && <p className="mt-1 text-xs text-amber-200/90">{ep.note}</p>}
              <ExternalLink
                href={ep.url}
                className="tap-target mt-2 inline-flex rounded-full bg-orthodox-gold/20 px-3 py-2 text-xs font-semibold text-orthodox-gold"
              >
                Listen / open ↗
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4 text-sm">
        <h2 className="font-display text-xl text-orthodox-gold">Parish first</h2>
        <p className="mt-2 text-orthodox-cream/85">
          Come to Vespers and Liturgy. Meet Fr. Symeon. Let the services teach you — then use these
          podcasts and videos as enrichment.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            to="/parish"
            className="tap-target inline-flex rounded-full border border-orthodox-gold px-4 py-2 text-sm font-semibold text-orthodox-gold"
          >
            Parish page →
          </Link>
          <Link
            to="/priest"
            className="tap-target inline-flex rounded-full border border-orthodox-gold/60 px-4 py-2 text-sm font-semibold text-orthodox-gold-light"
          >
            Priest & blessings →
          </Link>
        </div>
      </section>
    </div>
  )
}
