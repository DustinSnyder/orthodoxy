export interface ScripturePathChapter {
  ref: string
  focus: string
  note: string
}

export interface ScripturePath {
  id: string
  title: string
  description: string
  chapters: ScripturePathChapter[]
}

export const scripturePaths: ScripturePath[] = [
  {
    id: 'matthew-starter',
    title: 'Gospel of Matthew — Catechumen Starter',
    description: 'Walk the life of Christ with the Church’s first Gospel in canonical order.',
    chapters: [
      { ref: 'Matthew 1–2', focus: 'Nativity & Magi', note: 'God with us; Gentile seekers welcome.' },
      { ref: 'Matthew 3–4', focus: 'Baptism & Temptation', note: 'Theophany light; spiritual warfare.' },
      { ref: 'Matthew 5–7', focus: 'Sermon on the Mount', note: 'The ethos of the Kingdom.' },
      { ref: 'Matthew 8–10', focus: 'Healings & Mission', note: 'Authority and sending.' },
      { ref: 'Matthew 14–17', focus: 'Bread, Transfiguration', note: 'Glimpse of uncreated light.' },
      { ref: 'Matthew 26–28', focus: 'Passion & Resurrection', note: 'Read slowly before Liturgy weeks.' },
    ],
  },
  {
    id: 'mark-starter',
    title: 'Gospel of Mark — Catechumen Starter',
    description: 'A swift, vivid proclamation of the Son of God.',
    chapters: [
      { ref: 'Mark 1', focus: 'Beginning of the Gospel', note: 'Immediate call to repent and follow.' },
      { ref: 'Mark 2–3', focus: 'Authority & Conflict', note: 'Who can forgive sins?' },
      { ref: 'Mark 4–5', focus: 'Parables & Power', note: 'Storm, demoniac, daughter raised.' },
      { ref: 'Mark 8–9', focus: 'Confession & Tabor', note: 'Cross and glory together.' },
      { ref: 'Mark 14–16', focus: 'Passion & Empty Tomb', note: 'Fear, wonder, and good news.' },
    ],
  },
]

export const liturgicDayUrl = 'https://www.antiochian.org/liturgicday'
