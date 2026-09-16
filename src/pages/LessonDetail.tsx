import { Link, useParams } from 'react-router-dom'
import { getLesson } from '../data/lessons'
import { getIcon } from '../data/icons'
import { IconImage } from '../components/IconImage'
import { ProtestantBridge } from '../components/ProtestantBridge'
import { useLessonProgress, useStreak } from '../hooks/useProgress'

export function LessonDetail() {
  const { lessonId } = useParams()
  const lesson = getLesson(lessonId ?? '')
  const { isComplete, markComplete, markIncomplete } = useLessonProgress()
  const { recordActivity } = useStreak()

  if (!lesson) {
    return (
      <div className="space-y-3">
        <p>Lesson not found.</p>
        <Link to="/catechesis" className="text-orthodox-gold underline">
          Back to catechesis
        </Link>
      </div>
    )
  }

  const icon = lesson.iconId ? getIcon(lesson.iconId) : undefined
  const done = isComplete(lesson.id)

  return (
    <article className="space-y-4 pb-10">
      <Link to="/catechesis" className="text-sm text-orthodox-gold-light underline">
        ← All lessons
      </Link>
      <p className="text-xs uppercase tracking-wide text-orthodox-muted">{lesson.moduleTitle}</p>
      <h1 className="font-display text-3xl text-orthodox-gold md:text-4xl">{lesson.title}</h1>
      <p className="text-orthodox-cream/85">{lesson.summary}</p>

      {icon && <IconImage icon={icon} size="lg" />}

      <div className="prose-orthodox space-y-3 text-sm">
        {lesson.explainer.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      <ProtestantBridge>{lesson.protestantBridge}</ProtestantBridge>

      <section>
        <h3 className="font-display text-xl text-orthodox-gold">Key terms</h3>
        <ul className="mt-2 space-y-2">
          {lesson.keyTerms.map((t) => (
            <li key={t.term} className="rounded-xl bg-orthodox-deep px-3 py-2 text-sm">
              <strong className="text-orthodox-gold-light">{t.term}:</strong> {t.definition}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="font-display text-xl text-orthodox-gold">Study questions</h3>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm">
          {lesson.studyQuestions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="font-display text-xl text-orthodox-gold">Further reading</h3>
        <p className="mb-2 text-xs text-orthodox-muted">
          Cite books; never paste copyrighted chapters. Prefer links and your own notes.
        </p>
        <ul className="space-y-2">
          {lesson.readings.map((r) => (
            <li key={r.title} className="rounded-xl border border-orthodox-gold/30 px-3 py-2 text-sm">
              <p className="font-semibold">{r.title}</p>
              <p className="text-orthodox-cream/75">{r.detail}</p>
              {r.url && (
                <a href={r.url} target="_blank" rel="noreferrer" className="text-orthodox-gold-light underline">
                  Open resource ↗
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {lesson.audioSuggestion && (
        <a
          href={lesson.audioSuggestion.url}
          target="_blank"
          rel="noreferrer"
          className="tap-target inline-flex rounded-full border border-orthodox-gold px-4 py-2 text-sm text-orthodox-gold"
        >
          Audio: {lesson.audioSuggestion.title} ↗
        </a>
      )}

      <button
        type="button"
        className="tap-target w-full rounded-2xl bg-orthodox-gold py-3 text-center font-semibold text-orthodox-navy"
        onClick={() => {
          if (done) markIncomplete(lesson.id)
          else {
            markComplete(lesson.id)
            recordActivity()
          }
        }}
      >
        {done ? 'Mark incomplete' : 'Mark complete'}
      </button>
    </article>
  )
}
