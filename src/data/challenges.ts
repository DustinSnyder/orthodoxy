export interface ChallengeCard {
  id: string
  title: string
  /** Honest description of the Protestant experience / fear */
  challenge: string
  /** How Orthodoxy frames the issue */
  framing: string
  /** Practical steps to overcome */
  steps: string[]
  /** Short bridge note for Protestant readers */
  bridge: string
}

export const conversionChallenges: ChallengeCard[] = [
  {
    id: 'sola-scriptura',
    title: 'Sola Scriptura → Scripture in Tradition',
    challenge:
      'Many Protestants were taught that Scripture alone is the final rule of faith, and that “tradition” means human invention piled on top of the Bible. Coming to Orthodoxy can feel like betraying that loyalty to God’s Word.',
    framing:
      'Orthodoxy does not demote Scripture. The Church reads, chants, and lives the Bible as the heart of her worship. Tradition is the Holy Spirit’s life in the Church — how the same apostolic faith is handed down in liturgy, creed, councils, and holy lives — so that Scripture is heard as the Church has always heard it, not as a private tribunal.',
    steps: [
      'Notice how much Scripture already fills the Liturgy, Vespers, and Matins — then ask Fr. Symeon how the Church “reads” a hard passage.',
      'Read a short Gospel daily with the Church’s calendar rather than only with a study Bible alone.',
      'Study one creed or council summary under parish guidance instead of debating internet polemics.',
      'Keep loving the Bible; Orthodoxy wants more Scripture in you, not less — ordered by the Church that preserved it.',
    ],
    bridge:
      'Your hunger for the Word is a gift. Orthodoxy asks you to trust that the same Spirit who inspired Scripture also guides the Church that recognized, copied, and proclaimed it.',
  },
  {
    id: 'faith-alone',
    title: 'Faith alone / forensic salvation → theosis & synergy',
    challenge:
      'If you were formed around “justification by faith alone,” Orthodox language about cooperation with grace, theosis, and struggle can sound like earning salvation — and that fear is pastoral, not trivial.',
    framing:
      'Orthodoxy confesses that salvation is entirely of God’s grace in Christ. Synergy is not self-rescue; it is the free response of a healed will walking with the Physician. Theosis means becoming partakers of the divine nature (2 Peter 1:4) by communion with Christ — transformation, not a courtroom scorecard alone. Works do not purchase grace; they are the fruit and path of living faith.',
    steps: [
      'Ask Fr. Symeon to walk you through baptism, chrismation, and the Eucharist as God’s gifts — not your performance review.',
      'When anxiety spikes, pray the Jesus Prayer simply: “Lord Jesus Christ, Son of God, have mercy on me.”',
      'Read slowly about the Prodigal Son and the Good Samaritan as pictures of healing mercy, not self-justification.',
      'Do not weaponize this topic in arguments with Protestant family; live gratefully and let Fr. Symeon pace your catechesis.',
    ],
    bridge:
      'You do not have to discard Christ’s finished work. Orthodoxy invites you into the fullness of that work: forgiveness and healing, pardon and participation, cross and resurrection life in the Church.',
  },
  {
    id: 'mary-saints-icons',
    title: 'Mary, saints & icons — fear of idolatry',
    challenge:
      'Honoring the Theotokos, asking saints to pray, and kissing icons can trigger a sincere fear that you are breaking the commandments against idolatry. That fear often comes from love of God, not from hardness of heart.',
    framing:
      'Worship (latria) belongs to God alone. Veneration is honor given to those in whom Christ already shines — Mary as the Mother of God, the saints as friends of God, icons as windows into the kingdom. Orthodoxy rejects idolatry; it refuses to treat holiness as invisible or the Body of Christ as only the living on earth.',
    steps: [
      'Visit the Icons Gallery in this app, then ask Fr. Symeon to show you how the parish venerates without confusing honor and worship.',
      'Start with one icon of Christ; learn the difference between kissing an image and praying through it to the One depicted.',
      'Pray one Akathist or Marian hymn slowly and notice that every line leads back to Christ.',
      'If discomfort remains, tell your priest — do not force a practice faster than your conscience can be formed.',
    ],
    bridge:
      'Protestant caution against false gods is precious. Orthodoxy agrees: idols are false. Icons and the communion of saints are about the real God made flesh and His friends who share His life.',
  },
  {
    id: 'closed-communion',
    title: 'Closed communion & waiting as a catechumen',
    challenge:
      'Coming from open communion or weekly Lord’s Supper access, standing aside while others receive can feel like rejection — or like Orthodoxy is being “exclusive” for its own sake.',
    framing:
      'Closed communion protects the unity of faith and the seriousness of the Body and Blood of Christ. It is not a judgment that Protestants are worthless; it is pastoral honesty that Eucharistic communion means full communion with the Church. The catechumenate is hospitality with patience: you are welcome to pray, learn, and grow until reception under Fr. Symeon’s blessing.',
    steps: [
      'Receive the blessed bread (antidoron) when offered and stay for the whole Liturgy — presence is already participation in prayer.',
      'Ask Fr. Symeon what preparation for reception looks like in this parish; let him set the timeline.',
      'Use the waiting season for confession preparation, prayer rule, and steady attendance — not for resentment.',
      'Read the parish page and speak with Fr. Symeon rather than comparing your pace to online conversion stories.',
    ],
    bridge:
      'Many Protestants treasure reverence for the Lord’s Table. Orthodoxy shares that reverence so deeply that it will not rush the Table ahead of belonging to the Church that celebrates it.',
  },
  {
    id: 'liturgical-worship',
    title: 'Liturgical worship vs informal services',
    challenge:
      'Standing for long services, incense, chant, unfamiliar words, and little explanation can leave a newcomer feeling lost, exhausted, or “out of place” compared with a casual Protestant service.',
    framing:
      'Orthodox worship is heaven touching earth: bodily, sensory, and corporate. It is not entertainment and not a lecture with songs. The Liturgy forms you over years. Confusion at first is normal; the Church expects beginners to grow by repetition, not by mastering everything on visit one.',
    steps: [
      'Stand when you can; sit when you need to — piety is not measured by sore feet.',
      'Follow one thread: the Gospel reading, or “Lord, have mercy,” rather than trying to track every hymn.',
      'Arrive a little early, ask a friendly parishioner where to stand, and introduce yourself to Fr. Symeon after services.',
      'Attend Vespers once midweek if possible; shorter services often teach the “shape” of Orthodox prayer more gently.',
    ],
    bridge:
      'If you loved sincerity and heartfelt worship before, bring that sincerity here. Orthodoxy adds the ancient form; it does not ask you to fake emotion or suppress honesty before God.',
  },
  {
    id: 'fasting-prayer-rule',
    title: 'Fasting & prayer rule feeling legalistic',
    challenge:
      'Fixed prayer times, fasting seasons, and food rules can feel like the very “works-righteousness” many Protestants fled — especially if past religious environments were harsh or scrupulous.',
    framing:
      'Ascetic disciplines are medicines prescribed for healing, not ladders to earn God’s love. The Church fasts because the body and soul are one; prayer rules train attention toward God. Under a priest’s guidance, the rule is adapted to health, family, and stage of catechesis — never as a contest.',
    steps: [
      'Do nothing extreme without Fr. Symeon’s blessing; start smaller than your zeal suggests.',
      'Use this app’s Prayer and Fasting pages as companions, then confirm any practice with your priest.',
      'If scrupulosity or past legalism resurfaces, say so plainly — pastoral care matters more than perfect compliance.',
      'Keep one simple daily prayer consistent before adding longer rules.',
    ],
    bridge:
      'Discipline without love becomes law; Orthodoxy intends fasting and prayer as love’s training. Your priest’s blessing keeps the medicine from becoming a burden you invent alone.',
  },
  {
    id: 'clergy-authority',
    title: 'Clergy & episcopal authority vs congregationalism',
    challenge:
      'Coming from congregational or low-church settings, bishops, priests, and “obedience” language can sound authoritarian — or like surrendering the freedom of the Spirit to human hierarchy.',
    framing:
      'Orthodox authority is apostolic and sacramental: bishops in succession, priests as fathers, all under Christ the Head. It is meant to guard the faith and care for souls, not to crush conscience. Healthy obedience is relational and pastoral; it is not blind loyalty to personalities or abuse. Ask questions. A good priest welcomes them.',
    steps: [
      'Build a real relationship with Fr. Symeon: confession, honest doubts, and ordinary conversation.',
      'Learn how the Antiochian diocese and parish council relate — authority with accountability.',
      'Distinguish Church teaching from any one person’s opinions online.',
      'If something feels unsafe or coercive, seek help promptly; Orthodox pastoral care is not above moral scrutiny.',
    ],
    bridge:
      'Protestant love of Scripture and conscience need not die. Orthodoxy places conscience inside the living Body, guided by shepherds who answer for the flock before God.',
  },
  {
    id: 'ethnic-cultural',
    title: 'Ethnic & cultural unfamiliarity',
    challenge:
      'Food festivals, languages, name days, and “cradle” customs can make Orthodoxy feel like an ethnic club you will never join — even when the parish is welcoming.',
    framing:
      'The Orthodox Church is the Church of Pentecost: many cultures, one faith. Local customs are gifts, not entrance exams. American converts, Arabic hymns, Greek names, and Slavic foods can coexist because Christ is not owned by one ethnicity. Belonging grows through prayer and friendship more than through mastering every custom.',
    steps: [
      'Introduce yourself; ask someone to explain a custom you notice rather than guessing in silence.',
      'Learn a few liturgical responses in English first; other languages can wait.',
      'Attend coffee hour; cultural warmth often lives at the table after Liturgy.',
      'Remember St. Raphael of Brooklyn and Orthodox mission in America — this parish’s story includes converts and seekers.',
    ],
    bridge:
      'You are not asked to stop being who you are. You are invited into a household larger than any one culture, centered on Christ.',
  },
  {
    id: 'family-identity',
    title: 'Family conflict & identity shift',
    challenge:
      'Parents, spouse, or friends may feel betrayed. You may feel torn between the faith that formed you and the Church you are entering — an identity earthquake, not a neat doctrinal upgrade.',
    framing:
      'Conversion rearranges belonging. Orthodoxy does not require contempt for your Protestant past. Honor what was true: love of Christ, Scripture, prayer, moral seriousness. At the same time, follow where conscience and catechesis lead, with patience toward those who fear losing you.',
    steps: [
      'Use the Family & friends guide in this app; involve Fr. Symeon early when conflict escalates.',
      'Speak with humility: “I’m seeking fullness in Christ’s Church,” not “Everything you taught me was wrong.”',
      'Protect marriage and household peace; never coerce a spouse or child.',
      'Pray for loved ones more than you argue with them.',
    ],
    bridge:
      'The people who taught you to love Jesus are not enemies. Orthodoxy asks you to keep loving them while you grow — and to let Fr. Symeon help you pace hard conversations.',
  },
  {
    id: 'intellectual-overload',
    title: 'Intellectual overload vs formation',
    challenge:
      'Councils, canons, Fathers, calendars, and podcasts can drown a catechumen. Some respond by binge-studying; others freeze. Both miss that Orthodoxy is primarily formation in worship and virtue.',
    framing:
      'Doctrine matters, but the Church forms persons through Liturgy, sacraments, prayer, and repentance. Information without practice breeds anxiety or pride. Fr. Symeon’s catechesis sets a pace; the goal is a stable Orthodox Christian, not a walking encyclopedia by Pascha.',
    steps: [
      'Prioritize Sunday Liturgy and a simple prayer rule over finishing every recommended book this month.',
      'Follow the Catechesis path in this app one lesson at a time; mark progress without racing.',
      'When overwhelmed, stop Googling controversies; ask your priest one concrete question instead.',
      'Sleep, work, and family duties are part of Christian life — not interruptions to “real” Orthodoxy.',
    ],
    bridge:
      'If study helped you find Orthodoxy, thank God — then let study become servant to prayer. Formation is slower and kinder than a debate timeline.',
  },
  {
    id: 'contemporary-worship-habits',
    title: 'Missing contemporary worship & quiet-time-only piety',
    challenge:
      'Leaving band-led worship, altar calls, or a private “quiet time” as the main spiritual engine can feel like losing the only ways you knew how to feel close to God.',
    framing:
      'Orthodoxy does not mock emotion or personal prayer. It relocates the center of gravity to corporate Liturgy and the cycle of feasts, while still blessing personal prayer, Scripture reading, and tears of repentance. Feelings may quiet before they deepen; that is often growth, not spiritual death.',
    steps: [
      'Keep a daily prayer corner and short rule — personal piety remains essential.',
      'Allow yourself grief for what you leave behind; bring that grief to confession and to Fr. Symeon.',
      'Learn one Orthodox hymn well enough to sing at home when you miss familiar choruses.',
      'Give it months of steady attendance before judging whether “it feels like worship.”',
    ],
    bridge:
      'The sincerity of your old quiet times can travel with you. Orthodoxy adds the Church’s common prayer so your personal fire has a hearth that outlasts mood.',
  },
  {
    id: 'fear-leaving-christianity',
    title: 'Fear of “leaving true Christianity”',
    challenge:
      'Some Protestants fear that becoming Orthodox means abandoning the Gospel, joining a “different religion,” or imperiling their soul — especially if pastors or online voices frame Orthodoxy as apostasy.',
    framing:
      'Orthodoxy claims to be the continuity of the apostolic Church: the same Christ, the same Gospel of cross and resurrection, the same baptismal faith deepened in the fullness of sacramental life. You are not asked to leave Jesus. You are asked to follow Him into the Church that has confessed Him without interruption.',
    steps: [
      'Bring this fear to Fr. Symeon by name; do not carry it alone or only online.',
      'Reread the Nicene Creed slowly and notice what you already believe with the Orthodox.',
      'Compare rumor with parish reality: worship, Scripture, repentance, charity.',
      'Move at a conscientious pace — inquire, catechize, pray — without letting fear-mongering set your timeline.',
    ],
    bridge:
      'If your deepest loyalty is to Jesus Christ, Orthodoxy meets you there. The question is not “Must I leave Christianity?” but “Where is Christ’s Church in her fullness?” — a question Fr. Symeon and the parish will help you live, not just debate.',
  },
]
