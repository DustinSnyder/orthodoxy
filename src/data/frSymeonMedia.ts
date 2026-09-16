export interface MediaLink {
  label: string
  url: string
}

export interface MediaChannel {
  id: string
  title: string
  kind: 'youtube' | 'podcast'
  blurb: string
  links: MediaLink[]
}

export interface FeaturedEpisode {
  id: string
  title: string
  show: string
  meta: string
  note?: string
  url: string
}

export interface StartHerePick {
  id: string
  title: string
  why: string
  show: string
  url: string
}

/** Public outbound links only — verified Sep 2026. Do not host audio/video. */
export const mediaChannels: MediaChannel[] = [
  {
    id: 'paradosis-pavilion',
    title: 'Paradosis Pavilion',
    kind: 'youtube',
    blurb:
      'Fr. Symeon’s YouTube channel — video teaching and Paradosis Pavilion catalog linked from Christian Saints Podcast show notes.',
    links: [
      {
        label: 'YouTube channel',
        url: 'https://www.youtube.com/@paradosispavilion9555',
      },
    ],
  },
  {
    id: 'christian-saints',
    title: 'Christian Saints Podcast',
    kind: 'podcast',
    blurb:
      'Joint production of Paradosis Pavilion & Generative Sounds. Hosted by James John Marks (Chicago) with Fr. Symeon Kees (oversight / co-host; priest at St. Raphael, Iowa City).',
    links: [
      { label: 'Buzzsprout home', url: 'https://christiansaints.buzzsprout.com/' },
      { label: 'Show feed', url: 'https://www.buzzsprout.com/1443073' },
      {
        label: 'iHeart',
        url: 'https://www.iheart.com/podcast/269-christian-saints-podcast-73829563/',
      },
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/christiansaintspodcast',
      },
    ],
  },
  {
    id: 'reorientnation',
    title: 'ReOrientNation',
    kind: 'podcast',
    blurb:
      'By Fr. Symeon Kees (Paradosis Pavilion) — East Asian cultures in conversation with Eastern Orthodoxy; about 19 episodes.',
    links: [
      {
        label: 'Podcast listing',
        url: 'https://podcast.app/reorientnation-p6835632',
      },
    ],
  },
]

export const featuredEpisodes: FeaturedEpisode[] = [
  {
    id: 's8e9',
    title: 'Open the Doors, Gather As The People',
    show: 'Christian Saints Podcast',
    meta: 'Sep 11, 2026 · S8E9',
    note: 'Find on the show page',
    url: 'https://christiansaints.buzzsprout.com/',
  },
  {
    id: 's8e8',
    title: 'Thine own of Thine own, we offer unto Thee',
    show: 'Christian Saints Podcast',
    meta: 'Aug 28, 2026 · S8E8',
    url: 'https://christiansaints.buzzsprout.com/1443073/episodes/19710694-thine-own-of-thine-own-we-offer-unto-thee',
  },
  {
    id: 's8e7',
    title: 'Here Is The Church, a Dome Not a Steeple',
    show: 'Christian Saints Podcast',
    meta: 'Aug 14, 2026 · S8E7',
    url: 'https://christiansaints.buzzsprout.com/1443073/episodes/19641965-here-is-the-church-a-dome-not-a-steeple',
  },
  {
    id: 's8e6',
    title: 'How to Understand The Collapse of The West',
    show: 'Christian Saints Podcast',
    meta: 'Jul 31, 2026 · S8E6',
    url: 'https://christiansaints.buzzsprout.com/1443073/episodes/19579819-how-to-understand-the-collapse-of-the-west',
  },
  {
    id: 's8e5',
    title: 'What the Apostolic Fathers Believe About the Church',
    show: 'Christian Saints Podcast',
    meta: 'Jul 17, 2026 · S8E5',
    note: 'On Buzzsprout show page',
    url: 'https://christiansaints.buzzsprout.com/',
  },
  {
    id: 's7e20',
    title: 'This, too, Shall Pass (Season Finale)',
    show: 'Christian Saints Podcast',
    meta: 'S7E20',
    note: 'Includes Fr. Symeon’s Sermon segment',
    url: 'https://www.buzzsprout.com/1443073/episodes/18711577-this-too-shall-pass-season-finale',
  },
]

export const startHerePicks: StartHerePick[] = [
  {
    id: 'begin-pray',
    title: 'How Can I Begin to Pray?',
    why: 'Practical entry into Orthodox prayer life.',
    show: 'ReOrientNation',
    url: 'https://podcast.app/reorientnation-p6835632',
  },
  {
    id: 'theological-education',
    title: 'The Way of Orthodox Theological Education',
    why: 'How formation works — books, liturgy, and parish life together.',
    show: 'ReOrientNation',
    url: 'https://podcast.app/reorientnation-p6835632',
  },
  {
    id: 'dome-steeple',
    title: 'Here Is The Church, a Dome Not a Steeple',
    why: 'Liturgics — what the temple teaches catechumens.',
    show: 'Christian Saints Podcast',
    url: 'https://christiansaints.buzzsprout.com/1443073/episodes/19641965-here-is-the-church-a-dome-not-a-steeple',
  },
  {
    id: 'thine-own',
    title: 'Thine own of Thine own, we offer unto Thee',
    why: 'Offering and Divine Liturgy language for newcomers.',
    show: 'Christian Saints Podcast',
    url: 'https://christiansaints.buzzsprout.com/1443073/episodes/19710694-thine-own-of-thine-own-we-offer-unto-thee',
  },
  {
    id: 'apostolic-fathers',
    title: 'What the Apostolic Fathers Believe About the Church',
    why: 'Early Church witness — grounding for Protestant inquirers.',
    show: 'Christian Saints Podcast',
    url: 'https://christiansaints.buzzsprout.com/',
  },
]

export const reorientNotableTitles = [
  'How Can I Begin to Pray?',
  'Watchfulness',
  'The Way of Orthodox Theological Education',
  'Five Virtues of Confucianism for the Orthodox Way',
  'Spiritual Worship / Sacred Space',
  'How Do I Become a Gardener?',
] as const
