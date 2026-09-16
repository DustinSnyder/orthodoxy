export interface DailyEntry {
  date: string // YYYY-MM-DD
  civilNote: string
  liturgicalNote: string
  fasting: {
    status: 'fast' | 'fast-free' | 'fish-allowed' | 'wine-oil' | 'strict'
    label: string
    detail: string
  }
  saintIds: string[]
  saintName: string
  iconId: string
  epistle: string
  gospel: string
  catechesisLessonId: string
  audio: { title: string; url: string }
}

/** Sample mid-September 2026 week+ (educational). Always verify live at antiochian.org/liturgicday */
export const dailyEntries: DailyEntry[] = [
  {
    date: '2026-09-14',
    civilNote: 'Monday',
    liturgicalNote: 'Elevation of the Precious Cross (observed context — verify calendar)',
    fasting: {
      status: 'strict',
      label: 'Strict fast day (feast of the Cross pattern)',
      detail: 'Many keep a strict fast on the Exaltation. Confirm parish practice.',
    },
    saintIds: [],
    saintName: 'Universal Exaltation of the Precious and Life-Giving Cross',
    iconId: 'christ-pantocrator',
    epistle: '1 Corinthians 1:18–24 (typical Cross readings — verify)',
    gospel: 'John 19:6–11, 13–20, 25–28, 30–35 (typical — verify)',
    catechesisLessonId: 'week-02',
    audio: { title: 'Ancient Faith — browse Cross / feast talks', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-15',
    civilNote: 'Tuesday',
    liturgicalNote: 'Afterfeast of the Cross',
    fasting: { status: 'fast-free', label: 'No seasonal fast', detail: 'Ordinary day unless personal rule.' },
    saintIds: ['nicholas'],
    saintName: 'Holy Martyrs / afterfeast commemorations (sample)',
    iconId: 'christ-pantocrator',
    epistle: 'Galatians 2:21–3:7 (sample weekday — verify live)',
    gospel: 'Mark 6:1–7 (sample — verify live)',
    catechesisLessonId: 'week-02',
    audio: { title: 'Intro to Orthodoxy podcast', url: 'https://www.ancientfaith.com/podcasts' },
  },
  {
    date: '2026-09-16',
    civilNote: 'Wednesday',
    liturgicalNote: 'Wednesday — weekly Cross remembrance',
    fasting: {
      status: 'fast',
      label: 'Wednesday fast',
      detail: 'Traditional abstinence from meat, dairy, and eggs; fish/wine/oil per local custom.',
    },
    saintIds: ['chrysostom'],
    saintName: 'Holy Hieromartyr / weekday saints (sample)',
    iconId: 'st-john-chrysostom',
    epistle: 'Galatians 3:15–22 (sample)',
    gospel: 'Mark 6:7–13 (sample)',
    catechesisLessonId: 'week-05',
    audio: { title: 'Orthodoxy Live', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-17',
    civilNote: 'Thursday',
    liturgicalNote: 'Thursday in the afterfeast',
    fasting: { status: 'fast-free', label: 'No seasonal fast', detail: 'Ordinary day.' },
    saintIds: ['sophia'],
    saintName: 'Holy Martyrs Faith, Hope, Love & Sophia (often near this date)',
    iconId: 'theotokos-vladimir',
    epistle: 'Galatians 3:23–4:5 (sample)',
    gospel: 'Mark 6:30–45 (sample)',
    catechesisLessonId: 'week-04',
    audio: { title: 'Ancient Faith Radio', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-18',
    civilNote: 'Friday',
    liturgicalNote: 'Friday — weekly Cross remembrance',
    fasting: {
      status: 'fast',
      label: 'Friday fast',
      detail: 'Abstain from meat/dairy/eggs per traditional outline; confirm exceptions with your priest.',
    },
    saintIds: ['raphael'],
    saintName: 'Weekday saints (sample) — keep St. Raphael in prayer',
    iconId: 'st-raphael-brooklyn',
    epistle: 'Galatians 4:8–21 (sample)',
    gospel: 'Mark 6:45–56 (sample)',
    catechesisLessonId: 'week-03',
    audio: { title: 'Search AFM: fasting', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-19',
    civilNote: 'Saturday',
    liturgicalNote: 'Saturday — prepare for Sunday; Vespers tonight',
    fasting: { status: 'fast-free', label: 'No seasonal fast', detail: 'Attend Great Vespers if able (typically 6pm).' },
    saintIds: ['raphael'],
    saintName: 'Saturday saints (sample)',
    iconId: 'st-raphael-brooklyn',
    epistle: '1 Corinthians 1:26–29 (sample Saturday)',
    gospel: 'John 8:21–30 (sample)',
    catechesisLessonId: 'week-47',
    audio: { title: 'Prepare heart for Liturgy', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-20',
    civilNote: 'Sunday',
    liturgicalNote: 'Sunday after the Elevation — Resurrectional hymns',
    fasting: { status: 'fast-free', label: 'No seasonal fast', detail: 'Feast of the Resurrection each Sunday.' },
    saintIds: ['raphael'],
    saintName: 'Sunday of the afterfeast context (verify tone & saints)',
    iconId: 'resurrection',
    epistle: 'Galatians 2:16–20 (sample Sunday — verify)',
    gospel: 'Mark 8:34–9:1 (sample Sunday — verify)',
    catechesisLessonId: 'week-25',
    audio: { title: 'Sunday sermon archives (AFM)', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-21',
    civilNote: 'Monday',
    liturgicalNote: 'Beginning of a new week',
    fasting: { status: 'fast-free', label: 'No seasonal fast', detail: 'Ordinary day.' },
    saintIds: ['apostle'],
    saintName: 'Holy Apostle Quadratus / weekday saints (sample)',
    iconId: 'peter-paul',
    epistle: 'Galatians 4:28–5:10 (sample)',
    gospel: 'Luke 3:19–22 (sample — Luke year patterns vary)',
    catechesisLessonId: 'week-16',
    audio: { title: 'Intro to Orthodoxy', url: 'https://www.ancientfaith.com/podcasts' },
  },
  {
    date: '2026-09-22',
    civilNote: 'Tuesday',
    liturgicalNote: 'Tuesday',
    fasting: { status: 'fast-free', label: 'No seasonal fast', detail: 'Ordinary day.' },
    saintIds: ['athanasius'],
    saintName: 'Prophet Jonah / weekday saints (sample)',
    iconId: 'christ-pantocrator',
    epistle: 'Galatians 5:11–21 (sample)',
    gospel: 'Luke 3:23–4:1 (sample)',
    catechesisLessonId: 'week-26',
    audio: { title: 'AFM podcasts', url: 'https://www.ancientfaith.com/podcasts' },
  },
  {
    date: '2026-09-23',
    civilNote: 'Wednesday',
    liturgicalNote: 'Conception of the Forerunner (often nearby — verify)',
    fasting: {
      status: 'wine-oil',
      label: 'Wednesday fast (possible wine/oil for feast — verify)',
      detail: 'If a major feast falls on Wed/Fri, mitigations may apply. Confirm live calendar + priest.',
    },
    saintIds: [],
    saintName: 'Conception of St. John the Forerunner (verify exact 2026 date)',
    iconId: 'baptism-christ',
    epistle: 'Galatians 5:22–6:2 (sample)',
    gospel: 'Luke 4:1–15 (sample)',
    catechesisLessonId: 'week-08',
    audio: { title: 'AFM: prayer', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-24',
    civilNote: 'Thursday',
    liturgicalNote: 'Thursday',
    fasting: { status: 'fast-free', label: 'No seasonal fast', detail: 'Ordinary day.' },
    saintIds: ['mary-theotokos'],
    saintName: 'Holy Protomartyr Thekla (often nearby — verify)',
    iconId: 'theotokos-vladimir',
    epistle: 'Ephesians 1:1–9 (sample)',
    gospel: 'Luke 4:16–22 (sample)',
    catechesisLessonId: 'week-33',
    audio: { title: 'AFM: lives of saints', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-25',
    civilNote: 'Friday',
    liturgicalNote: 'Friday fast',
    fasting: {
      status: 'fast',
      label: 'Friday fast',
      detail: 'Keep the spirit: prayer, moderation, charity. Modify for health with blessing.',
    },
    saintIds: ['ignatius'],
    saintName: 'St. Sergius of Radonezh / weekday saints (sample)',
    iconId: 'rublev-trinity',
    epistle: 'Ephesians 1:7–17 (sample)',
    gospel: 'Luke 4:22–30 (sample)',
    catechesisLessonId: 'week-19',
    audio: { title: 'AFM: icons', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-26',
    civilNote: 'Saturday',
    liturgicalNote: 'Saturday — Repose of St. John the Theologian (often nearby)',
    fasting: { status: 'fast-free', label: 'No seasonal fast', detail: 'Vespers tonight at St. Raphael (confirm 6pm).' },
    saintIds: ['peter-paul'],
    saintName: 'Repose of the Holy Apostle and Evangelist John the Theologian (verify)',
    iconId: 'christ-pantocrator',
    epistle: '1 John 4:12–19 (sample for Theologian — verify)',
    gospel: 'John 19:25–27; 21:24–25 (sample — verify)',
    catechesisLessonId: 'week-09',
    audio: { title: 'AFM Scripture talks', url: 'https://www.ancientfaith.com/' },
  },
  {
    date: '2026-09-27',
    civilNote: 'Sunday',
    liturgicalNote: 'Sunday — Resurrection',
    fasting: { status: 'fast-free', label: 'No seasonal fast', detail: 'Orthros 8:45 · Liturgy 10:00 (confirm calendar).' },
    saintIds: ['raphael'],
    saintName: 'Sunday saints of the day (verify)',
    iconId: 'resurrection',
    epistle: '2 Corinthians 4:6–15 (sample — verify)',
    gospel: 'Luke 5:1–11 (sample Luke Sunday — verify)',
    catechesisLessonId: 'week-02',
    audio: { title: 'Listen while commuting to church', url: 'https://www.ancientfaith.com/' },
  },
]

export function getDaily(date: string): DailyEntry | undefined {
  return dailyEntries.find((d) => d.date === date)
}

export function getDailyOrNearest(date: string): DailyEntry {
  const exact = getDaily(date)
  if (exact) return exact
  // fallback to first sample day with a clear note
  return {
    ...dailyEntries[0],
    date,
    civilNote: new Date(date + 'T12:00:00').toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    liturgicalNote: 'Sample content unavailable for this date — use official liturgic day',
    epistle: 'See antiochian.org/liturgicday',
    gospel: 'See antiochian.org/liturgicday',
    audio: dailyEntries[0].audio,
  }
}

export function toISODate(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
