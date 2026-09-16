import { useCallback, useMemo } from 'react'
import { lessons } from '../data/lessons'
import { useLocalStorage } from './useLocalStorage'
import { toISODate } from '../data/daily'

const PROGRESS_KEY = 'orthodox-catechesis-progress'
const STREAK_KEY = 'orthodox-daily-streak'
const PRAYER_KEY = 'orthodox-prayer-checks'

export function useLessonProgress() {
  const [completed, setCompleted] = useLocalStorage<string[]>(PROGRESS_KEY, [])

  const markComplete = useCallback(
    (id: string) => {
      setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]))
    },
    [setCompleted],
  )

  const markIncomplete = useCallback(
    (id: string) => {
      setCompleted((prev) => prev.filter((x) => x !== id))
    },
    [setCompleted],
  )

  const isComplete = useCallback((id: string) => completed.includes(id), [completed])

  const percent = useMemo(
    () => Math.round((completed.length / Math.max(lessons.length, 1)) * 100),
    [completed.length],
  )

  return { completed, markComplete, markIncomplete, isComplete, percent, total: lessons.length }
}

export function usePrayerChecks() {
  const [checks, setChecks] = useLocalStorage<Record<string, { morning?: boolean; evening?: boolean }>>(
    PRAYER_KEY,
    {},
  )

  const today = toISODate(new Date())
  const todayChecks = checks[today] ?? {}

  const toggle = (which: 'morning' | 'evening') => {
    setChecks((prev) => {
      const cur = prev[today] ?? {}
      return { ...prev, [today]: { ...cur, [which]: !cur[which] } }
    })
  }

  return { todayChecks, toggle, today }
}

export function useStreak() {
  const [streak, setStreak] = useLocalStorage<{ count: number; lastDate: string | null }>(STREAK_KEY, {
    count: 0,
    lastDate: null,
  })

  const recordActivity = useCallback(() => {
    const today = toISODate(new Date())
    setStreak((prev) => {
      if (prev.lastDate === today) return prev
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yIso = toISODate(yesterday)
      const next = prev.lastDate === yIso ? prev.count + 1 : 1
      return { count: next, lastDate: today }
    })
  }, [setStreak])

  return { streak: streak.count, lastDate: streak.lastDate, recordActivity }
}
