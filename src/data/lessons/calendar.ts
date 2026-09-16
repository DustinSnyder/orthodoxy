/** Ecclesiastical (Indiction) year helpers — weeks begin with the Monday of the week containing Sept 1. */

const DAY_MS = 24 * 60 * 60 * 1000

function startOfLocalDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

/** September 1 that opens the ecclesiastical year containing `date`. */
export function getIndictionSept1(date: Date = new Date()): Date {
  const local = startOfLocalDay(date)
  const y = local.getFullYear()
  const sept1This = new Date(y, 8, 1)
  if (local < sept1This) return new Date(y - 1, 8, 1)
  return sept1This
}

/** Monday of the calendar week that contains Sept 1 (Week 1 start). */
export function getWeek1Monday(sept1: Date): Date {
  const d = startOfLocalDay(sept1)
  const day = d.getDay() // 0 Sun … 6 Sat
  const diff = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diff)
  return d
}

export function toISODateLocal(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function addDays(d: Date, n: number): Date {
  const x = startOfLocalDay(d)
  x.setDate(x.getDate() + n)
  return x
}

/** Week 1–52 for the ecclesiastical year; clamps outside the 52-week span. */
export function getChurchWeek(date: Date = new Date()): {
  week: number
  weekStart: string
  sept1: string
  yearLabel: string
} {
  const sept1 = getIndictionSept1(date)
  const week1 = getWeek1Monday(sept1)
  const local = startOfLocalDay(date)
  let week = Math.floor((local.getTime() - week1.getTime()) / (7 * DAY_MS)) + 1
  if (week < 1) week = 1
  if (week > 52) week = 52
  const weekStartDate = addDays(week1, (week - 1) * 7)
  const endYear = sept1.getFullYear() + 1
  return {
    week,
    weekStart: toISODateLocal(weekStartDate),
    sept1: toISODateLocal(sept1),
    yearLabel: `${sept1.getFullYear()}–${endYear}`,
  }
}

/** Fixed weekStart ISO dates for curriculum year 2026-09-01 → 2027-08-31 (Week 1 Mon = 2026-08-31). */
export function curriculumWeekStart(week: number): string {
  const week1 = new Date(2026, 7, 31) // Aug 31, 2026
  return toISODateLocal(addDays(week1, (week - 1) * 7))
}
