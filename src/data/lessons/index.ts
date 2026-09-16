import type { Lesson, LessonTrack } from './types'
import { getChurchWeek } from './calendar'
import { part1 } from './part1'
import { part2 } from './part2'
import { part3 } from './part3'
import { part4 } from './part4'

export type { Lesson, LessonTrack } from './types'
export { TRACK_META, modules } from './types'
export {
  getChurchWeek,
  getIndictionSept1,
  getWeek1Monday,
  curriculumWeekStart,
  toISODateLocal,
} from './calendar'

export const lessons: Lesson[] = [...part1, ...part2, ...part3, ...part4].sort(
  (a, b) => a.week - b.week,
)

export function getLesson(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id)
}

export function getLessonByWeek(week: number): Lesson | undefined {
  return lessons.find((l) => l.week === week)
}

export function lessonsForModule(moduleId: string): Lesson[] {
  return lessons.filter((l) => l.moduleId === moduleId).sort((a, b) => a.order - b.order)
}

export function lessonsForTrack(track: LessonTrack): Lesson[] {
  return lessons.filter((l) => l.track === track).sort((a, b) => a.week - b.week)
}

export function lessonsForSeason(season: string): Lesson[] {
  return lessons.filter((l) => l.season === season).sort((a, b) => a.week - b.week)
}

export function currentChurchLesson(date: Date = new Date()): Lesson | undefined {
  const { week } = getChurchWeek(date)
  return getLessonByWeek(week)
}
