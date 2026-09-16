import { Link } from 'react-router-dom'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'
import { IconImage } from '../components/IconImage'
import { getDailyOrNearest, toISODate } from '../data/daily'
import { getIcon } from '../data/icons'
import { currentChurchLesson, getChurchWeek } from '../data/lessons'
import { usePrayerChecks, useStreak } from '../hooks/useProgress'
import { useEffect } from 'react'
import { liturgicDayUrl } from '../data/scripture'
import { simplifiedFastLabel } from '../data/fasting'

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

  return (
    <div className="space-y-4 pb-6">
      <PastoralDisclaimer />

      <section className="rounded-2xl bg-gradient-to-br from-orthodox-blue to-orthodox-deep p-4 ring-1 ring-orthodox-gold/30">
        <p className="text-sm text-orthodox-gold-light">{dateLabel}</p>
        <h1 className="font-display mt-1 text-3xl text-orthodox-ink md:text-4xl">Today</h1>
        <p className="mt-1 text-sm text-orthodox-cream/80">{entry.liturgicalNote}</p>
        {streak > 0 && (
          <p className="mt-3 inline-flex rounded-full bg-orthodox-gold/20 px-3 py-1 text-xs font-semibold text-orthodox-gold">
            Gentle streak: {streak} day{streak === 1 ? '' : 's'}
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Fasting</h2>
        <p className="mt-1 font-medium">{inSample ? entry.fasting.label : liveFast.label}</p>
        <p className="mt-1 text-sm text-orthodox-cream/80">
          {inSample ? entry.fasting.detail : liveFast.detail}
        </p>
        <p className="mt-2 text-xs text-orthodox-muted">Ask Fr. Symeon — this is educational only.</p>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Prayer checks</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => toggle('morning')}
            className={`tap-target rounded-xl border px-3 py-3 text-sm font-semibold ${
              todayChecks.morning
                ? 'border-orthodox-gold bg-orthodox-gold/20 text-orthodox-gold'
                : 'border-orthodox-cream/20'
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
                : 'border-orthodox-cream/20'
            }`}
          >
            Evening {todayChecks.evening ? '✓' : ''}
          </button>
        </div>
        <Link to="/prayer" className="mt-3 inline-block text-sm text-orthodox-gold-light underline">
          Open prayer rules
        </Link>
      </section>

      <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Scripture</h2>
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
      </section>

      <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Saint of the day</h2>
        <p className="mt-1 font-medium">{entry.saintName}</p>
        {icon && (
          <div className="mt-3">
            <IconImage icon={icon} size="md" />
          </div>
        )}
        <Link to="/saints" className="mt-2 inline-block text-sm text-orthodox-gold-light underline">
          Browse saints & Fathers
        </Link>
      </section>

      {lesson && (
        <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
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

      <section className="rounded-2xl border border-orthodox-gold/40 bg-gradient-to-br from-orthodox-deep to-orthodox-blue p-4">
        <h2 className="font-display text-xl text-orthodox-gold">Pastoral guides</h2>
        <p className="mt-1 text-sm text-orthodox-cream/80">
          Questions · family · priest · Protestant conversion challenges
        </p>
        <div className="mt-3 grid grid-cols-1 gap-2">
          <Link
            to="/questions"
            className="tap-target rounded-xl border border-orthodox-gold/30 bg-orthodox-parchment px-3 py-3 text-sm font-semibold text-orthodox-gold-light"
          >
            Top questions for newcomers →
          </Link>
          <Link
            to="/family"
            className="tap-target rounded-xl border border-orthodox-gold/30 bg-orthodox-parchment px-3 py-3 text-sm font-semibold text-orthodox-gold-light"
          >
            Friends, spouse & children →
          </Link>
          <Link
            to="/priest"
            className="tap-target rounded-xl border border-orthodox-gold/30 bg-orthodox-parchment px-3 py-3 text-sm font-semibold text-orthodox-gold-light"
          >
            Priest address & blessings →
          </Link>
          <Link
            to="/challenges"
            className="tap-target rounded-xl border border-orthodox-gold/30 bg-orthodox-parchment px-3 py-3 text-sm font-semibold text-orthodox-gold-light"
          >
            Protestant conversion challenges →
          </Link>
        </div>
      </section>


      <section className="rounded-2xl border border-orthodox-gold/40 bg-gradient-to-br from-orthodox-deep to-orthodox-blue p-4">
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

      <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
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
