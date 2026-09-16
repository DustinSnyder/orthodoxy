import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  lessons,
  modules,
  getChurchWeek,
  type LessonTrack,
} from '../data/lessons'
import { useLessonProgress } from '../hooks/useProgress'

const TRACKS: { id: LessonTrack | 'all'; label: string }[] = [
  { id: 'all', label: 'All tracks' },
  { id: 'intro', label: 'Intro' },
  { id: 'history', label: 'History' },
  { id: 'america', label: 'America' },
  { id: 'bible', label: 'Bible' },
  { id: 'protestant', label: 'Protestant' },
  { id: 'liturgical', label: 'Liturgical' },
  { id: 'life', label: 'Life' },
]

export function Catechesis() {
  const { isComplete, percent, completed, total } = useLessonProgress()
  const church = getChurchWeek()
  const [trackFilter, setTrackFilter] = useState<LessonTrack | 'all'>('all')
  const [seasonFilter, setSeasonFilter] = useState<string>('all')
  const [groupBy, setGroupBy] = useState<'track' | 'season' | 'week'>('week')

  const seasons = useMemo(() => {
    const s = Array.from(new Set(lessons.map((l) => l.season)))
    return s
  }, [])

  const filtered = useMemo(() => {
    return lessons
      .filter((l) => (trackFilter === 'all' ? true : l.track === trackFilter))
      .filter((l) => (seasonFilter === 'all' ? true : l.season === seasonFilter))
      .sort((a, b) => a.week - b.week)
  }, [trackFilter, seasonFilter])

  const current = lessons.find((l) => l.week === church.week)

  return (
    <div className="space-y-4 pb-8">
      <h1 className="font-display text-3xl text-orthodox-gold md:text-4xl">Catechesis</h1>
      <p className="text-sm text-orthodox-cream/80">
        52-week Antiochian church-year companion ({church.yearLabel}). Week {church.week} of 52.
      </p>
      <p className="rounded-xl border border-orthodox-gold/55 bg-orthodox-deep px-3 py-2 text-xs text-orthodox-cream/75">
        A personal companion for study — not an official AOCEM Sunday School curriculum. Sources linked to
        antiochian.org.
      </p>

      <section className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
        <h2 className="font-display text-lg text-orthodox-gold">Orientation extras</h2>
        <p className="mt-1 text-sm text-orthodox-cream/75">
          Quick pastoral pages for daily life as a catechumen from a Protestant background.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <Link to="/questions" className="text-sm font-semibold text-orthodox-gold-light underline">
            Questions you should be asking
          </Link>
          <Link to="/family" className="text-sm font-semibold text-orthodox-gold-light underline">
            Friends, family, spouse & children
          </Link>
          <Link to="/priest" className="text-sm font-semibold text-orthodox-gold-light underline">
            Addressing Father Symeon & blessings
          </Link>
          <Link to="/challenges" className="text-sm font-semibold text-orthodox-gold-light underline">
            Challenges Protestants face converting
          </Link>
        </div>
      </section>

      {current && (
        <section className="rounded-2xl border border-orthodox-gold bg-gradient-to-br from-orthodox-deep to-orthodox-blue p-4 ring-1 ring-orthodox-gold/50">
          <p className="text-xs uppercase tracking-wide text-orthodox-gold">This church week · Week {current.week}/52</p>
          <h2 className="mt-1 font-display text-xl text-orthodox-gold">{current.title}</h2>
          <p className="mt-1 text-sm text-orthodox-cream/80">{current.summary}</p>
          <p className="mt-1 text-xs text-orthodox-muted">
            {current.season} · {current.moduleTitle}
            {current.feastNote ? ` · ${current.feastNote}` : ''}
          </p>
          <Link
            to={`/catechesis/${current.id}`}
            className="tap-target mt-3 inline-flex rounded-full bg-orthodox-gold px-4 py-2 text-sm font-semibold text-orthodox-navy"
          >
            Open this week’s lesson
          </Link>
        </section>
      )}

      <div className="rounded-2xl border border-orthodox-gold/55 bg-orthodox-deep p-4">
        <p className="text-sm text-orthodox-cream/80">
          Progress: {completed.length} / {total} lessons (of 52)
        </p>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-orthodox-parchment">
          <div
            className="h-full rounded-full bg-orthodox-gold transition-all"
            style={{ width: `${percent}%` }}
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-2xl border border-orthodox-gold/50 bg-orthodox-deep p-3 sm:flex-row sm:flex-wrap">
        <label className="text-xs text-orthodox-muted">
          Track
          <select
            className="mt-1 block w-full rounded-lg border border-orthodox-gold/55 bg-orthodox-parchment px-2 py-2 text-sm text-orthodox-ink"
            value={trackFilter}
            onChange={(e) => setTrackFilter(e.target.value as LessonTrack | 'all')}
          >
            {TRACKS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs text-orthodox-muted">
          Season
          <select
            className="mt-1 block w-full rounded-lg border border-orthodox-gold/55 bg-orthodox-parchment px-2 py-2 text-sm text-orthodox-ink"
            value={seasonFilter}
            onChange={(e) => setSeasonFilter(e.target.value)}
          >
            <option value="all">All seasons</option>
            {seasons.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs text-orthodox-muted">
          Group by
          <select
            className="mt-1 block w-full rounded-lg border border-orthodox-gold/55 bg-orthodox-parchment px-2 py-2 text-sm text-orthodox-ink"
            value={groupBy}
            onChange={(e) => setGroupBy(e.target.value as 'track' | 'season' | 'week')}
          >
            <option value="week">Week order</option>
            <option value="track">Track</option>
            <option value="season">Season</option>
          </select>
        </label>
      </div>

      {groupBy === 'week' && (
        <ul className="space-y-2">
          {filtered.map((lesson) => (
            <LessonRow
              key={lesson.id}
              lesson={lesson}
              isCurrent={lesson.week === church.week}
              done={isComplete(lesson.id)}
            />
          ))}
        </ul>
      )}

      {groupBy === 'track' &&
        modules.map((mod) => {
          const modLessons = filtered.filter((l) => l.track === mod.id)
          if (!modLessons.length) return null
          return (
            <section key={mod.id} className="space-y-2">
              <div>
                <h2 className="font-display text-xl text-orthodox-gold">{mod.title}</h2>
                <p className="text-sm text-orthodox-cream/70">{mod.description}</p>
              </div>
              <ul className="space-y-2">
                {modLessons.map((lesson) => (
                  <LessonRow
                    key={lesson.id}
                    lesson={lesson}
                    isCurrent={lesson.week === church.week}
                    done={isComplete(lesson.id)}
                  />
                ))}
              </ul>
            </section>
          )
        })}

      {groupBy === 'season' &&
        seasons.map((season) => {
          const seasonLessons = filtered.filter((l) => l.season === season)
          if (!seasonLessons.length) return null
          return (
            <section key={season} className="space-y-2">
              <h2 className="font-display text-xl text-orthodox-gold">{season}</h2>
              <ul className="space-y-2">
                {seasonLessons.map((lesson) => (
                  <LessonRow
                    key={lesson.id}
                    lesson={lesson}
                    isCurrent={lesson.week === church.week}
                    done={isComplete(lesson.id)}
                  />
                ))}
              </ul>
            </section>
          )
        })}
    </div>
  )
}

function LessonRow({
  lesson,
  isCurrent,
  done,
}: {
  lesson: (typeof lessons)[number]
  isCurrent: boolean
  done: boolean
}) {
  return (
    <li>
      <Link
        to={`/catechesis/${lesson.id}`}
        className={`tap-target flex items-start justify-between gap-3 rounded-2xl border px-4 py-3 ${
          isCurrent
            ? 'border-orthodox-gold bg-orthodox-gold/10'
            : 'border-orthodox-gold/55 bg-orthodox-deep hover:border-orthodox-gold/70'
        }`}
      >
        <div>
          <p className="text-xs uppercase tracking-wide text-orthodox-muted">
            Week {lesson.week}/52 · {lesson.track}
            {isCurrent ? ' · current' : ''}
          </p>
          <p className="font-semibold">{lesson.title}</p>
          <p className="text-sm text-orthodox-cream/70">{lesson.summary}</p>
        </div>
        <span className="shrink-0 text-orthodox-gold" aria-label={done ? 'Complete' : 'Incomplete'}>
          {done ? '✓' : '○'}
        </span>
      </Link>
    </li>
  )
}
