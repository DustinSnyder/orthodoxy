export type LessonTrack =
  | 'intro'
  | 'history'
  | 'america'
  | 'bible'
  | 'protestant'
  | 'liturgical'
  | 'life'

export interface Lesson {
  id: string
  moduleId: LessonTrack
  moduleTitle: string
  order: number
  week: number
  weekStart: string
  season: string
  track: LessonTrack
  feastNote?: string
  title: string
  summary: string
  iconId?: string
  explainer: string[]
  protestantBridge: string
  keyTerms: { term: string; definition: string }[]
  studyQuestions: string[]
  readings: { title: string; detail: string; url?: string }[]
  audioSuggestion?: { title: string; url: string }
}

export const TRACK_META: {
  id: LessonTrack
  title: string
  description: string
}[] = [
  {
    id: 'intro',
    title: 'Introduction to Orthodoxy',
    description: 'Foundations: Church, Christ, Trinity, catechumen path, and living faith.',
  },
  {
    id: 'history',
    title: 'Church History',
    description: 'From Pentecost and the Fathers through Antioch, schism, and mission.',
  },
  {
    id: 'america',
    title: 'Orthodoxy in America',
    description: 'Immigration, St. Raphael, Antiochian witness, parish life, and mission.',
  },
  {
    id: 'bible',
    title: 'Scripture in the Church',
    description: 'Reading the Bible with the liturgy, lectionary, and Holy Tradition.',
  },
  {
    id: 'protestant',
    title: 'Protestant Bridges',
    description: 'Honest dialogue on Scripture, sacraments, authority, and communion.',
  },
  {
    id: 'liturgical',
    title: 'Liturgical Year',
    description: 'Feasts, fasts, and the sanctification of time from Indiction to Indiction.',
  },
  {
    id: 'life',
    title: 'Life in Christ',
    description: 'Prayer, confession, healing of the heart, and daily ascesis.',
  },
]

/** @deprecated Prefer TRACK_META; kept as alias for modules UI */
export const modules = TRACK_META
