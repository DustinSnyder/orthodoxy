export interface GuidanceCard {
  id: string
  title: string
  body: string[]
}

export interface MythBust {
  myth: string
  gentleReply: string
}

export const friendsFamilyGuidance: GuidanceCard[] = [
  {
    id: 'posture',
    title: 'Start with posture, not a debate script',
    body: [
      'You are not assigned to win arguments. You are called to follow Christ with humility and to love the people already in your life.',
      'Speak calmly. Admit what you are still learning. “I’m becoming Orthodox because I want to follow Jesus in His Church” is often better than a lecture on Councils.',
      'If someone is angry or frightened, protect the relationship. Truth without love wounds; silence with prayer is sometimes faithfulness.',
    ],
  },
  {
    id: 'misunderstandings',
    title: 'Common misunderstandings (answer gently)',
    body: [
      'People may hear your journey through rumor, internet clips, or fear of change. Expect distortion before clarity.',
      'Correct one idea at a time. Do not unload the entire Orthodox encyclopedia at Thanksgiving.',
      'Invite questions. “What worries you most about this?” often opens more hearts than “Let me explain icons.”',
    ],
  },
  {
    id: 'witness',
    title: 'Witness without arguing',
    body: [
      'Live your prayer rule quietly. Keep your temper. Serve others. Go to church without advertising every detail.',
      'When asked, share a short personal reason: Scripture in worship, the Eucharist, the continuity of the Church, a hunger for holiness.',
      'Offer an invitation: “Would you come to Vespers with me once? No pressure — just see it.” Seeing worship often teaches better than PDFs.',
    ],
  },
  {
    id: 'when-quiet',
    title: 'When to stay quiet',
    body: [
      'Stay quiet when the other person is mocking, trapping, or performing for an audience (especially online).',
      'Stay quiet when you are angry, sleep-deprived, or tempted to “win.”',
      'Stay quiet about another person’s sins or your private conversations with Fr. Symeon.',
      'You may say: “I love you. I’m not going to debate this tonight. I’m happy to talk when we’re both calm.”',
    ],
  },
  {
    id: 'invite',
    title: 'Inviting to Vespers or Liturgy',
    body: [
      'Explain basics beforehand: length, standing, when to sit if needed, that Communion is for Orthodox faithful, that guests are welcome to pray.',
      'Sit/stand with them; don’t abandon them to figure out books alone. Introduce Fr. Symeon if appropriate.',
      'Afterward, ask what they noticed — listen more than you correct.',
    ],
  },
  {
    id: 'online',
    title: 'Not debating online',
    body: [
      'Social media rewards heat, not holiness. Public threads rarely convert relatives; they often harden them.',
      'Private, face-to-face (or voice) conversations are better. If you must write, keep it short, kind, and unfinished — leave room for relationship.',
      'Mute or step away when Orthodoxy becomes a brand you defend instead of a life you live.',
    ],
  },
  {
    id: 'peace',
    title: 'Protecting peace',
    body: [
      'Your catechumenate should not become a weapon in old family conflicts.',
      'Keep showing up as a son/daughter/sibling/friend: birthdays, help with chores, honest apologies when you are sharp.',
      'If hostility persists, ask Fr. Symeon for counsel. You may need boundaries without bitterness.',
    ],
  },
]

export const commonMyths: MythBust[] = [
  {
    myth: '“You left Jesus.”',
    gentleReply:
      'I’m seeking to follow Jesus more fully in the Church that has worshiped Him from the beginning. I’m not trying to leave Christ — I’m trying to belong to Him more completely.',
  },
  {
    myth: '“You worship Mary / idols.”',
    gentleReply:
      'Orthodox worship God alone. We honor Mary as the Mother of God and ask her prayers, the way I’d ask you to pray for me. Icons are holy images, not gods.',
  },
  {
    myth: '“It’s works salvation.”',
    gentleReply:
      'We believe salvation is God’s gift in Christ. Prayer, fasting, and obedience are how we cooperate with grace — not how we buy God’s love.',
  },
  {
    myth: '“It’s a cult / you joined something weird.”',
    gentleReply:
      'Orthodoxy is an ancient Christian Church with bishops, Scripture, sacraments, and open parish life. You’re welcome to visit and meet my priest. I won’t hide anything.',
  },
  {
    myth: '“You’re rejecting the Bible.”',
    gentleReply:
      'Orthodoxy loves the Bible. We hear it constantly in worship. We read it with the Church that preserved it, not against it.',
  },
]

export const spouseChildrenGuidance: GuidanceCard[] = [
  {
    id: 'love-first',
    title: 'Love first — do not pressure',
    body: [
      'A spouse or child who is not converting with you is not your project. They are persons to be cherished.',
      'Coercion, sarcasm, ultimatums, or “theological flooding” can damage the very communion you hope for.',
      'Your faithfulness is primarily obedience to Christ in humility — not managing another person’s timeline.',
    ],
  },
  {
    id: 'unity-home',
    title: 'Unity of the home',
    body: [
      'Where possible, keep shared peace: kindness in speech, fair division of time, respect for the other’s conscience.',
      'Do not use Orthodoxy as a scoreboard (“I’m more serious about God than you”).',
      'Agree on practical logistics (Sunday mornings, fasting meals, bedtime) as teammates when you can.',
    ],
  },
  {
    id: 'pray-priest',
    title: 'Pray — and involve Fr. Symeon',
    body: [
      'Pray for your household without announcing every prayer as a hint.',
      'Tell Fr. Symeon the real situation early. Ask for a sustainable rule that does not crush family life.',
      'This app is not marital, legal, or counseling advice. Complex situations need your spiritual father (and professional help if needed).',
    ],
  },
  {
    id: 'model',
    title: 'Model rather than coerce',
    body: [
      'Let them see joy, repentance, and steadiness — not anxiety and superiority.',
      'Answer children’s questions simply and age-appropriately. “We worship Jesus; icons help us remember Him and His saints” is enough for many ages.',
      'If a child is curious about church, invite without shaming a spouse who declines. Never put a child in the middle of a loyalty test.',
    ],
  },
  {
    id: 'mixed-practical',
    title: 'Practical tips for a mixed household',
    body: [
      'Mealtime prayer: keep it short and kind; don’t weaponize longer prayers against a reluctant spouse.',
      'Fasting: ask a blessing for a rule that doesn’t make others miserable — e.g. you keep the fast; you still cook respectfully; you don’t police their plate.',
      'Sunday schedule: communicate early; share childcare burdens fairly; express gratitude when they support your attendance.',
      'Feast days: celebrate with hospitality, not guilt trips.',
      'Books and podcasts: available, not forced. Leave room for “not now.”',
    ],
  },
  {
    id: 'patience',
    title: 'Patience without despair',
    body: [
      'Conversion is God’s work. Years may pass. Your job is fidelity today.',
      'Grieve quietly if needed — then return to love. Bitterness preaches louder than any catechism.',
      'If you are unsafe or in a destructive relationship, seek appropriate help; holiness is not enduring abuse. Tell your priest.',
    ],
  },
]

export const familyDisclaimer =
  'Pastoral companion only — not legal, medical, or marital counseling. Fr. Symeon’s guidance (and professional help when needed) overrides anything here. Never shame a spouse or child for not converting with you.'
