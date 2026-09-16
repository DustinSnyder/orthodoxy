import { Link } from 'react-router-dom'
import { IconImage } from '../components/IconImage'
import { getDailyOrNearest, toISODate } from '../data/daily'
import { getIcon } from '../data/icons'
import { currentChurchLesson, getChurchWeek } from '../data/lessons'
import { usePrayerChecks, useStreak } from '../hooks/useProgress'
import { useEffect, useMemo } from 'react'
import { liturgicDayUrl } from '../data/scripture'
import { simplifiedFastLabel } from '../data/fasting'
import { saints } from '../data/saints'

export function Today() {
  const today = new Date()
  const iso = toISODate(today)
  const entry = getDailyOrNearest(iso)
  const icon = getIcon(entry.iconId)
  const church = getChurchWeek(today)
  const lesson = currentChurchLesson(today)
  const { todayChecks, toggle } = usePrayerChecks()
  const { streak, recordActivity } = useStreak()
  const liveFast = simplifiedFastLabel(today)

  useEffect(() => {
    recordActivity()
  }, [recordActivity])

  const dateLabel = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const inSample = entry.date === iso && !entry.liturgicalNote.includes('unavailable')

  const daySaints = useMemo(() => {
    const fromIds = entry.saintIds
      .map((id) => saints.find((s) => s.id === id))
      .filter((s): s is (typeof saints)[number] => Boolean(s))
    return fromIds
  }, [entry.saintIds])

  return (
    <div className="space-y-4 pb-6">
      <section className="rounded-2xl border border-orthodox-gold/60 bg-gradient-to-br from-orthodox-blue to-orthodox-deep p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-sm text-orthodox-gold-light">{dateLabel}</p>
            <h1 className="font-display mt-1 text-3xl text-orthodox-ink md:text-4xl">Daily</h1>
            <p className="mt-1 text-sm text-orthodox-cream/80">{entry.liturgicalNote}</p>
          </div>
          {streak > 0 && (
            <p className="inline-flex rounded-full bg-orthodox-gold/20 px-3 py-1 text-xs font-semibold text-orthodox-gold">
              Gentle streak: {streak} day{streak === 1 ? '' : 's'}
            </p>
          )}
        </div>

        <div className="mt-4 space-y-4 border-t border-orthodox-gold/50 pt-4">
          <div>
            <h2 className="font-display text-lg text-orthodox-gold">Fasting</h2>
            <p className="mt-1 font-medium">{inSample ? entry.fasting.label : liveFast.label}</p>
            <p className="mt-1 text-sm text-orthodox-cream/80">
              {inSample ? entry.fasting.detail : liveFast.detail}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-orthodox-gold">Prayer checks</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => toggle('morning')}
                className={`tap-target rounded-xl border px-3 py-3 text-sm font-semibold ${
                  todayChecks.morning
                    ? 'border-orthodox-gold bg-orthodox-gold/20 text-orthodox-gold'
                    : 'border-orthodox-gold/55'
                }`}
              >
                Morning {todayChecks.morning ? '✓' : ''}
              </button>
              <button
                type="button"
                onClick={() => toggle('evening')}
                className={`tap-target rounded-xl border px-3 py-3 text-sm font-semibold ${
                  todayChecks.evening
                    ? 'border-orthodox-gold bg-orthodox-gold/20 text-orthodox-gold'
                    : 'border-orthodox-gold/55'
                }`}
              >
                Evening {todayChecks.evening ? '✓' : ''}
              </button>
            </div>
            <Link to="/prayer" className="mt-3 inline-block text-sm text-orthodox-gold-light underline">
              Open prayer rules
            </Link>
          </div>

          <div>
            <h2 className="font-display text-lg text-orthodox-gold">Scripture</h2>
            <p className="mt-2 text-sm">
              <span className="text-orthodox-gold-light">Epistle:</span> {entry.epistle}
            </p>
            <p className="mt-1 text-sm">
              <span className="text-orthodox-gold-light">Gospel:</span> {entry.gospel}
            </p>
            <a
              href={liturgicDayUrl}
              target="_blank"
              rel="noreferrer"
              className="tap-target mt-3 inline-flex rounded-full bg-orthodox-gold px-4 py-2 text-sm font-semibold text-orthodox-navy"
            >
              Official liturgic day ↗
            </a>
            <p className="mt-2 text-xs text-orthodox-muted">
              Sample mid-Sept 2026 data ships for offline study; always prefer the live Antiochian calendar.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-orthodox-gold">Saints of the day</h2>
            {daySaints.length > 0 ? (
              <ul className="mt-2 space-y-3">
                {daySaints.map((s) => {
                  const sIcon = s.iconId ? getIcon(s.iconId) : undefined
                  return (
                    <li key={s.id} className="rounded-xl border border-orthodox-gold/55 bg-orthodox-parchment/60 p-3">
                      <p className="font-medium">{s.name}</p>
                      <p className="mt-1 text-sm text-orthodox-cream/80">{s.summary}</p>
                      {sIcon && (
                        <div className="mt-2">
                          <IconImage icon={sIcon} size="sm" />
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="mt-1 font-medium">{entry.saintName}</p>
            )}
            {daySaints.length > 0 && entry.saintName && (
              <p className="mt-2 text-sm text-orthodox-muted">{entry.saintName}</p>
            )}
            {!daySaints.length && icon && (
              <div className="mt-3">
                <IconImage icon={icon} size="md" />
              </div>
            )}
            <Link to="/saints" className="mt-2 inline-block text-sm text-orthodox-gold-light underline">
              Browse saints & Fathers
            </Link>
          </div>
        </div>
      </section>

      {lesson && (
        <section className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
          <h2 className="font-display text-xl text-orthodox-gold">This week’s catechesis</h2>
          <p className="mt-1 text-xs uppercase tracking-wide text-orthodox-muted">
            Week {church.week}/52 · {lesson.moduleTitle} · {lesson.season}
          </p>
          <p className="mt-1 font-semibold">{lesson.title}</p>
          <p className="mt-1 text-sm text-orthodox-cream/80">{lesson.summary}</p>
          {lesson.feastNote && (
            <p className="mt-1 text-xs text-orthodox-gold-light">{lesson.feastNote}</p>
          )}
          <Link
            to={`/catechesis/${lesson.id}`}
            className="tap-target mt-3 inline-flex rounded-full border border-orthodox-gold px-4 py-2 text-sm font-semibold text-orthodox-gold"
          >
            Open Week {lesson.week} lesson
          </Link>
        </section>
      )}

      <section className="rounded-2xl border border-orthodox-gold/60 bg-gradient-to-br from-orthodox-deep to-orthodox-blue p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Guides</h2>
        <p className="mt-1 text-sm text-orthodox-cream/80">
          Questions · family · priest · Protestant conversion challenges
        </p>
        <div className="mt-3 grid grid-cols-1 gap-2">
          <Link
            to="/questions"
            className="tap-target rounded-xl border border-orthodox-gold/55 bg-orthodox-parchment px-3 py-3 text-sm font-semibold text-orthodox-gold-light"
          >
            Top questions for newcomers →
          </Link>
          <Link
            to="/family"
            className="tap-target rounded-xl border border-orthodox-gold/55 bg-orthodox-parchment px-3 py-3 text-sm font-semibold text-orthodox-gold-light"
          >
            Friends, spouse & children →
          </Link>
          <Link
            to="/priest"
            className="tap-target rounded-xl border border-orthodox-gold/55 bg-orthodox-parchment px-3 py-3 text-sm font-semibold text-orthodox-gold-light"
          >
            Priest address & blessings →
          </Link>
          <Link
            to="/challenges"
            className="tap-target rounded-xl border border-orthodox-gold/55 bg-orthodox-parchment px-3 py-3 text-sm font-semibold text-orthodox-gold-light"
          >
            Protestant conversion challenges →
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/60 bg-gradient-to-br from-orthodox-deep to-orthodox-blue p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Fr. Symeon media</h2>
        <p className="mt-1 text-sm text-orthodox-cream/80">
          YouTube & podcasts for catechumens — Paradosis Pavilion, Christian Saints, ReOrientNation.
        </p>
        <Link
          to="/father-symeon"
          className="tap-target mt-3 inline-flex rounded-full bg-orthodox-gold px-4 py-2 text-sm font-semibold text-orthodox-navy"
        >
          Listen / watch →
        </Link>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Audio suggestion</h2>
        <p className="mt-1 text-sm">{entry.audio.title}</p>
        <a
          href={entry.audio.url}
          target="_blank"
          rel="noreferrer"
          className="tap-target mt-3 inline-flex text-sm font-semibold text-orthodox-gold-light underline"
        >
          Open Ancient Faith ↗
        </a>
      </section>
    </div>
  )
}
