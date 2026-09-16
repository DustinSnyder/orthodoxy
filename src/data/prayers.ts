export interface PrayerSection {
  title: string
  text: string
}

export interface PrayerRule {
  id: string
  title: string
  summary: string
  sections: PrayerSection[]
  note?: string
}

/** Traditional common prayers — public-domain / commonly shared Church prayers */
export const prayers: PrayerRule[] = [
  {
    id: 'morning',
    title: 'Morning Prayers',
    summary: 'A simple morning rule suitable for a catechumen. Expand gradually as you grow.',
    note: 'Traditional common prayers of the Church. For a fuller rule, see an Antiochian or Jordanville pocket prayer book.',
    sections: [
      {
        title: 'Trisagion Prayers',
        text: `In the Name of the Father, and of the Son, and of the Holy Spirit. Amen.

Glory to Thee, our God, glory to Thee.

O Heavenly King, Comforter, Spirit of Truth, Who art everywhere present and fillest all things, Treasury of good things and Giver of life: come and dwell in us, and cleanse us of all impurity, and save our souls, O Good One.

Holy God, Holy Mighty, Holy Immortal, have mercy on us. (3×)

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.

O Most Holy Trinity, have mercy on us. O Lord, cleanse us from our sins. O Master, pardon our transgressions. O Holy One, visit and heal our infirmities for Thy Name’s sake.

Lord, have mercy. (3×)

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.

Our Father, Who art in heaven, hallowed be Thy Name. Thy Kingdom come. Thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from the evil one.`,
      },
      {
        title: 'Morning Troparia',
        text: `Having risen from sleep, we fall down before Thee, O Good One, and cry out to Thee, O Mighty One, the angelic hymn: Holy, Holy, Holy art Thou, O God; through the Theotokos, have mercy on us.

Glory to the Father, and to the Son, and to the Holy Spirit.

Having raised me from bed and sleep, O Lord, enlighten my mind and heart, and open my lips that I may praise Thee, O Holy Trinity: Holy, Holy, Holy art Thou, O God; through the Theotokos, have mercy on us.

Now and ever and unto ages of ages. Amen.

The Judge shall come suddenly, and the deeds of each shall be laid bare; but with fear let us cry out in the middle of the night: Holy, Holy, Holy art Thou, O God; through the Theotokos, have mercy on us.`,
      },
      {
        title: 'Prayer of St. Philaret (short form often used)',
        text: `O Lord, grant me to greet the coming day in peace. Help me in all things to rely upon Thy holy will. In every hour of the day reveal Thy will to me. Bless my dealings with all who surround me. Teach me to treat all that comes to me throughout the day with peace of soul and with firm conviction that Thy will governs all. In all my deeds and words, guide my thoughts and feelings. In unforeseen events, let me not forget that all are sent by Thee. Teach me to act firmly and wisely, without embittering and embarrassing others. Give me strength to bear the fatigue of the coming day with all that it shall bring. Direct my will, teach me to pray, pray Thou Thyself in me. Amen.`,
      },
    ],
  },
  {
    id: 'evening',
    title: 'Evening Prayers',
    summary: 'End the day with repentance, thanksgiving, and rest in God’s mercy.',
    note: 'Traditional common prayers. Keep the evening rule short enough to finish with peace.',
    sections: [
      {
        title: 'Trisagion Prayers',
        text: `In the Name of the Father, and of the Son, and of the Holy Spirit. Amen.

Glory to Thee, our God, glory to Thee.

O Heavenly King, Comforter, Spirit of Truth, Who art everywhere present and fillest all things, Treasury of good things and Giver of life: come and dwell in us, and cleanse us of all impurity, and save our souls, O Good One.

Holy God, Holy Mighty, Holy Immortal, have mercy on us. (3×)

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.

O Most Holy Trinity, have mercy on us. O Lord, cleanse us from our sins. O Master, pardon our transgressions. O Holy One, visit and heal our infirmities for Thy Name’s sake.

Lord, have mercy. (3×)

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.

Our Father, Who art in heaven, hallowed be Thy Name. Thy Kingdom come. Thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from the evil one.`,
      },
      {
        title: 'Prayer of Confession before Sleep',
        text: `O Lord our God, if during this day I have sinned in word, deed, or thought, forgive me all, for Thou art good and lovest mankind. Grant me peaceful and undisturbed sleep; send me Thy guardian angel to protect and keep me from all evil. For Thou art the Guardian of our souls and bodies, and unto Thee we ascribe glory: to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.`,
      },
      {
        title: 'To the Theotokos',
        text: `O good Mother of the Good King, most pure and blessed Theotokos Mary, pour out the mercy of thy Son and our God upon my passionate soul, and by thy prayers guide me unto good works, that I may pass the remaining time of my life without blemish and attain paradise through thee, O Virgin Theotokos, who alone art pure and blessed.`,
      },
    ],
  },
  {
    id: 'meals',
    title: 'Prayers Before & After Meals',
    summary: 'Bless what you receive; give thanks when you finish.',
    sections: [
      {
        title: 'Before Meals',
        text: `Christ God, bless the food and drink of Thy servants, for Thou art holy, always, now and ever and unto ages of ages. Amen.

Or simply: Our Father… then: Bless, O Lord.`,
      },
      {
        title: 'After Meals',
        text: `We thank Thee, O Christ our God, that Thou hast satisfied us with Thine earthly gifts; deprive us not of Thy heavenly Kingdom, but as Thou camest among Thy disciples, O Savior, and gavest them peace, come also among us and save us.`,
      },
    ],
  },
  {
    id: 'jesus-prayer',
    title: 'The Jesus Prayer',
    summary: 'The heart of Orthodox prayer practice: invoking the Name of Jesus with humility.',
    note: 'Begin simply. A prayer rope (komboskini / chotki) helps count repetitions. Avoid jumping to a large number too soon.',
    sections: [
      {
        title: 'The Prayer',
        text: `Lord Jesus Christ, Son of God, have mercy on me, a sinner.

(Sometimes shortened: Lord Jesus Christ, have mercy on me.)`,
      },
      {
        title: 'How to Practice',
        text: `1. Stand or sit quietly before your icons.
2. Breathe gently; do not force unusual breathing techniques without guidance.
3. Say the prayer slowly on each knot of a prayer rope (often 33, 50, or 100).
4. When the mind wanders, return gently to the words — without anger at yourself.
5. Let the prayer move from lips, to mind, toward the heart over time.
6. End with a simple thanksgiving and the Trisagion or “Through the prayers of our holy Fathers…”`,
      },
      {
        title: 'A gentle note',
        text: `The Jesus Prayer is powerful medicine. More is not always better at the start. Consistency matters more than heroic numbers.`,
      },
    ],
  },
]

export function getPrayer(id: string): PrayerRule | undefined {
  return prayers.find((p) => p.id === id)
}
