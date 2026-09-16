import { Link } from 'react-router-dom'
import { lessons, modules } from '../data/lessons'
import { useLessonProgress } from '../hooks/useProgress'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'

export function Catechesis() {
  const { isComplete, percent, completed, total } = useLessonProgress()

  return (
    <div className="space-y-4 pb-8">
      <h1 className="font-display text-3xl text-orthodox-gold-light">Catechesis</h1>
      <PastoralDisclaimer compact />
      <div className="rounded-2xl border border-orthodox-gold/30 bg-orthodox-deep p-4">
        <p className="text-sm text-orthodox-cream/80">
          Progress: {completed.length} / {total} lessons
        </p>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-orthodox-navy">
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

      {modules.map((mod) => {
        const modLessons = lessons.filter((l) => l.moduleId === mod.id).sort((a, b) => a.order - b.order)
        if (!modLessons.length) return null
        return (
          <section key={mod.id} className="space-y-2">
            <div>
              <h2 className="font-display text-xl text-orthodox-gold">{mod.title}</h2>
              <p className="text-sm text-orthodox-cream/70">{mod.description}</p>
            </div>
            <ul className="space-y-2">
              {modLessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    to={`/catechesis/${lesson.id}`}
                    className="tap-target flex items-start justify-between gap-3 rounded-2xl border border-orthodox-gold/20 bg-orthodox-deep px-4 py-3 hover:border-orthodox-gold/50"
                  >
                    <div>
                      <p className="font-semibold">{lesson.title}</p>
                      <p className="text-sm text-orthodox-cream/70">{lesson.summary}</p>
                    </div>
                    <span className="shrink-0 text-orthodox-gold" aria-label={isComplete(lesson.id) ? 'Complete' : 'Incomplete'}>
                      {isComplete(lesson.id) ? '✓' : '○'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
