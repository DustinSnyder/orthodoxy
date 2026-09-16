export interface LibraryItem {
  id: string
  title: string
  author: string
  why: string
  kind: 'spine' | 'free' | 'audio' | 'parish'
  links: { label: string; url: string }[]
}

export const libraryItems: LibraryItem[] = [
  {
    id: 'antiochian-catechism',
    title: 'Catechism of the Orthodox Christian',
    author: 'Antiochian Archdiocese',
    why: 'Official Q&A oriented to Antiochian parish life — ideal spine for catechumens.',
    kind: 'spine',
    links: [
      { label: 'Antiochian Village Store', url: 'https://store.antiochianvillage.org/' },
    ],
  },
  {
    id: 'know-the-faith',
    title: 'Know the Faith',
    author: 'Fr. Michael Shanbour',
    why: 'Written for Western/Protestant inquirers; clear chapters on contested topics. Cite — do not paste.',
    kind: 'spine',
    links: [
      { label: 'Ancient Faith Store', url: 'https://store.ancientfaith.com/' },
      { label: 'Antiochian Village Store', url: 'https://store.antiochianvillage.org/' },
    ],
  },
  {
    id: 'orthodox-church-ware',
    title: 'The Orthodox Church',
    author: 'Met. Kallistos (Timothy) Ware',
    why: 'Classic history + faith overview for English readers.',
    kind: 'spine',
    links: [{ label: 'Find via Ancient Faith / booksellers', url: 'https://store.ancientfaith.com/' }],
  },
  {
    id: 'orthodox-way-ware',
    title: 'The Orthodox Way',
    author: 'Met. Kallistos Ware',
    why: 'Shorter spiritual introduction — God as mystery, prayer, and life.',
    kind: 'spine',
    links: [{ label: 'Ancient Faith Store', url: 'https://store.ancientfaith.com/' }],
  },
  {
    id: 'becoming-orthodox',
    title: 'Becoming Orthodox',
    author: 'Fr. Peter Gillquist',
    why: 'Evangelical → Antiochian convert narrative; encouragement for Protestant bridges.',
    kind: 'spine',
    links: [{ label: 'Ancient Faith Store', url: 'https://store.ancientfaith.com/' }],
  },
  {
    id: 'hopko-orthodox-faith',
    title: 'The Orthodox Faith (Vols. I–IV)',
    author: 'Fr. Thomas Hopko',
    why: 'Doctrine, worship, Bible/history, spirituality — free articles for deeper outlines.',
    kind: 'free',
    links: [
      { label: 'Read free on OCA.org', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
    ],
  },
  {
    id: 'ancient-faith',
    title: 'Ancient Faith Ministries',
    author: 'Ancient Faith (Antiochian-affiliated media)',
    why: 'Podcasts, articles, and books — deep-link legally; do not pirate audio.',
    kind: 'audio',
    links: [
      { label: 'ancientfaith.com', url: 'https://www.ancientfaith.com/' },
      { label: 'Podcasts', url: 'https://www.ancientfaith.com/podcasts' },
    ],
  },
  {
    id: 'antiochian-edu',
    title: 'Antiochian Archdiocese Education',
    author: 'antiochian.org',
    why: 'Official archdiocesan teaching, fasting, and liturgical resources.',
    kind: 'free',
    links: [{ label: 'antiochian.org', url: 'https://www.antiochian.org/' }],
  },
  {
    id: 'liturgicday',
    title: 'Daily Liturgical Readings',
    author: 'Antiochian Archdiocese',
    why: 'Authoritative daily Scripture and commemorations.',
    kind: 'free',
    links: [{ label: 'Liturgic Day', url: 'https://www.antiochian.org/liturgicday' }],
  },
  {
    id: 'parish',
    title: 'Saint Raphael of Brooklyn Orthodox Church',
    author: 'Iowa City parish',
    why: 'Your local altar — calendar, contact, and living catechesis.',
    kind: 'parish',
    links: [{ label: 'raphaelchurch.org', url: 'https://raphaelchurch.org/' }],
  },
]
