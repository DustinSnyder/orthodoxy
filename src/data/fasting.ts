export interface FastSeason {
  id: string
  name: string
  approx2026: string
  summary: string
}

export const fastSeasons2026: FastSeason[] = [
  {
    id: 'nativity-2025-26',
    name: 'Nativity Fast (Advent)',
    approx2026: 'Nov 15 – Dec 24, 2026',
    summary: 'Preparation for the Nativity of Christ. Intensity often increases near Dec 18–24. Confirm details yearly.',
  },
  {
    id: 'great-lent',
    name: 'Great Lent & Holy Week',
    approx2026: 'Ends at Pascha 2026 (Pascha is April 12, 2026 on the Orthodox calendar — verify)',
    summary: 'The most intense fasting season culminating in Holy Week and Pascha. Follow parish guidance closely.',
  },
  {
    id: 'apostles',
    name: 'Apostles’ Fast',
    approx2026: 'From Monday after All Saints to June 28 (length varies)',
    summary: 'Leads to the Feast of Peter and Paul (June 29). Variable length depending on Pascha.',
  },
  {
    id: 'dormition',
    name: 'Dormition Fast',
    approx2026: 'Aug 1–14, 2026',
    summary: 'Two-week fast before the Dormition of the Theotokos (Aug 15).',
  },
]

/** Simplified Wed/Fri awareness for 2026 display (not a full typikon). */
export function isWedOrFri(date: Date): boolean {
  const day = date.getDay()
  return day === 3 || day === 5
}

export function simplifiedFastLabel(date: Date): { label: string; detail: string } {
  if (isWedOrFri(date)) {
    return {
      label: date.getDay() === 3 ? 'Wednesday fast' : 'Friday fast',
      detail:
        'Traditional outline: abstain from meat, dairy, and eggs. Fish, wine, and oil depend on the day’s rank. Adjust for health, work, or travel as needed.',
    }
  }
  return {
    label: 'No weekly fast',
    detail: 'Not Wednesday or Friday. Seasonal fasts may still apply — check the seasons list and parish calendar.',
  }
}

export const fastingDisclaimer =
  'Educational outline only. Fasting practice varies; do not harm your health.'
