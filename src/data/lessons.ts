export interface Lesson {
  id: string
  moduleId: string
  moduleTitle: string
  order: number
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

export const modules = [
  { id: 'orientation', title: 'Module 0: Orientation', description: 'Catechumenate, parish life, and how to use this companion.' },
  { id: 'scripture-tradition', title: 'Scripture & Tradition', description: 'How the Church reads the Bible within living Tradition.' },
  { id: 'trinity-christ', title: 'Trinity & Christ', description: 'Who God is, and who Jesus Christ is for us.' },
  { id: 'theotokos-saints', title: 'Theotokos & Saints', description: 'Honoring Mary and the communion of saints.' },
  { id: 'mysteries', title: 'Holy Mysteries', description: 'Baptism, Chrismation, Eucharist, and the sacramental life.' },
  { id: 'liturgy', title: 'Divine Liturgy', description: 'Entering the worship that shapes Orthodox faith.' },
  { id: 'prayer-fasting', title: 'Prayer & Fasting', description: 'Ascesis that heals the heart.' },
  { id: 'icons', title: 'Icons & Beauty', description: 'Seeing with the eyes of faith.' },
  { id: 'history', title: 'Church History', description: 'From the Apostles to Antioch to America.' },
  { id: 'theosis', title: 'Life in Christ', description: 'Theosis: becoming partakers of the divine nature.' },
] as const

export const lessons: Lesson[] = [
  {
    id: 'orient-1',
    moduleId: 'orientation',
    moduleTitle: 'Module 0: Orientation',
    order: 1,
    title: 'What Is a Catechumen?',
    summary: 'You are not “trying Orthodoxy” alone — you are being formed in the Church’s life under pastoral care.',
    iconId: 'st-raphael-brooklyn',
    explainer: [
      'A catechumen is someone formally preparing for reception into the Orthodox Church through instruction, prayer, worship attendance, and a changed way of life. The word comes from the Greek for “one who is being instructed by word of mouth.”',
      'In the early Church, catechumens learned the Creed, the Lord’s Prayer, moral teaching, and the meaning of Baptism before the Mysteries were fully opened to them. Today the pattern is similar, though the timeline varies by parish and person.',
      'Your primary guides are Fr. Symeon Kees and the community of Saint Raphael of Brooklyn Orthodox Church in Iowa City. This app is a companion for study and daily habits — never a substitute for your priest, parish catechesis, or the services.',
      'Reception into the Church (Baptism and/or Chrismation, according to your situation) happens when your spiritual father discerns readiness — not when an app streak looks impressive.',
    ],
    protestantBridge:
      'Coming from a non-denominational background, you may be used to “deciding for Christ” as a mostly individual moment. Orthodoxy honors personal faith, but places conversion inside a community, sacraments, and a lifelong apprenticeship. Think less “course completion,” more “becoming a living member of Christ’s Body.”',
    keyTerms: [
      { term: 'Catechumen', definition: 'One undergoing formal preparation for entrance into the Orthodox Church.' },
      { term: 'Spiritual father', definition: 'A priest who guides your confession, prayer rule, and path into the Church.' },
      { term: 'Reception', definition: 'Being brought into full sacramental communion (Baptism/Chrismation as directed).' },
    ],
    studyQuestions: [
      'What difference does it make that catechesis happens in a parish, not only through books or podcasts?',
      'How is “being formed” different from “consuming Orthodox content”?',
      'What questions do you want to bring to Fr. Symeon this month?',
    ],
    readings: [
      { title: 'Catechism of the Orthodox Christian (Antiochian)', detail: 'Browse the opening Q&A on the Church and salvation — cite, do not copy chapters.', url: 'https://store.antiochianvillage.org/' },
      { title: 'Becoming Orthodox — Fr. Peter Gillquist', detail: 'Read for convert narrative context (evangelical → Antiochian); paraphrase only.', url: 'https://store.ancientfaith.com/' },
      { title: 'Parish site', detail: 'Saint Raphael of Brooklyn, Iowa City', url: 'https://raphaelchurch.org/' },
    ],
    audioSuggestion: {
      title: 'Ancient Faith: Intro to Orthodoxy (browse episodes)',
      url: 'https://www.ancientfaith.com/',
    },
  },
  {
    id: 'orient-2',
    moduleId: 'orientation',
    moduleTitle: 'Module 0: Orientation',
    order: 2,
    title: 'Your Parish: Saint Raphael of Brooklyn',
    summary: 'Orthodoxy is local: altar, priest, people, and the rhythm of Vespers and Liturgy.',
    iconId: 'st-raphael-brooklyn',
    explainer: [
      'Saint Raphael of Brooklyn Orthodox Church meets at 722 E. College Street, Iowa City, Iowa, in the Antiochian Orthodox Christian Archdiocese of North America.',
      'Typical service times (always confirm on the parish calendar): Saturday Great Vespers at 6:00 p.m.; Sunday Orthros (Matins) at 8:45 a.m.; Divine Liturgy at 10:00 a.m.',
      'St. Raphael (Hawaweeny) was the first Orthodox bishop consecrated in North America. He labored among immigrants and planted lasting parish life. Your parish bears his name as a missionary and pastoral sign.',
      'As a catechumen, prioritize standing in the services, meeting people, asking questions respectfully, and letting the worship teach you even before every word is clear.',
    ],
    protestantBridge:
      'Many Protestants experience church primarily as a teaching event plus music. Orthodox worship is more like entering a mystery already underway — Scripture, psalmody, incense, icons, and Eucharist (for the faithful) woven together. Give it time; familiarity grows through repetition.',
    keyTerms: [
      { term: 'Vespers', definition: 'Evening prayer service that begins the liturgical day.' },
      { term: 'Orthros (Matins)', definition: 'Morning service of praise, often before Liturgy on Sundays.' },
      { term: 'Antiochian Archdiocese', definition: 'Self-governing Orthodox Church body in North America under the Patriarchate of Antioch.' },
    ],
    studyQuestions: [
      'Why might attending Vespers help you understand Sunday Liturgy?',
      'What does it mean that your parish is named for a missionary bishop?',
      'How can you serve or help quietly even as a catechumen?',
    ],
    readings: [
      { title: 'raphaelchurch.org', detail: 'Calendar, contact, and parish life', url: 'https://raphaelchurch.org/' },
      { title: 'Antiochian Archdiocese', detail: 'About the Archdiocese', url: 'https://www.antiochian.org/' },
    ],
  },
  {
    id: 'scripture-1',
    moduleId: 'scripture-tradition',
    moduleTitle: 'Scripture & Tradition',
    order: 3,
    title: 'The Bible in the Church',
    summary: 'Scripture is the Church’s book — inspired, authoritative, and read within Tradition.',
    iconId: 'christ-pantocrator',
    explainer: [
      'Orthodox Christians receive the Holy Scriptures as God-inspired and as the supreme written witness to God’s revelation in Christ. The Church existed before the New Testament canon was finalized; the same Spirit who inspired the texts guides their faithful interpretation.',
      '“Tradition” (Paradosis) means what is handed down: the Apostolic faith expressed in Scripture, liturgy, Councils, Fathers, icons, and the lived holiness of the saints — not “extra opinions bolted onto the Bible.”',
      'Private reading is encouraged. But the normative place of Scripture is the liturgical assembly: Epistle, Gospel, psalms, and hymns that are saturated with biblical language.',
      'When interpretations conflict, Orthodoxy asks: How has the Church prayed and taught this from the beginning? The consensus of the Fathers and the worship of the Church are guides.',
    ],
    protestantBridge:
      'Sola Scriptura often meant protecting the Gospel from corruption. Orthodoxy shares the love of Scripture but rejects the idea that the Bible interprets itself apart from the Church that wrote, recognized, and lives it. You are not losing the Bible — you are gaining the choir that has sung it for two millennia.',
    keyTerms: [
      { term: 'Canon', definition: 'The list of books the Church receives as Holy Scripture.' },
      { term: 'Holy Tradition', definition: 'The living Apostolic faith handed down in the Church.' },
      { term: 'Phronema', definition: 'The mind/ethos of the Church — how Orthodoxy instinctively thinks and prays.' },
    ],
    studyQuestions: [
      'Where do you already hear Scripture in Orthodox services?',
      'How is Tradition different from “mere custom”?',
      'What passage of Scripture do you want to re-read with the Church’s worship in mind?',
    ],
    readings: [
      { title: 'The Orthodox Faith — Hopko, Vol. I', detail: 'Doctrine articles (free on OCA site)', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
      { title: 'Know the Faith — Shanbour', detail: 'Chapters on Scripture & Tradition (cite only)', url: 'https://store.ancientfaith.com/' },
      { title: 'Ware — The Orthodox Church', detail: 'Sections on sources of doctrine', url: 'https://store.ancientfaith.com/' },
    ],
    audioSuggestion: { title: 'Ancient Faith podcasts on Scripture', url: 'https://www.ancientfaith.com/' },
  },
  {
    id: 'trinity-1',
    moduleId: 'trinity-christ',
    moduleTitle: 'Trinity & Christ',
    order: 4,
    title: 'The Holy Trinity',
    summary: 'One God in three Persons: Father, Son, and Holy Spirit — the heart of Christian confession.',
    iconId: 'rublev-trinity',
    explainer: [
      'Christians baptize “in the Name of the Father and of the Son and of the Holy Spirit.” The Trinity is not a puzzle invented by philosophers; it is the Church’s confession of the God revealed in Jesus Christ and poured out at Pentecost.',
      'The Father is the source; the Son is eternally begotten of the Father; the Spirit proceeds from the Father (the Church’s biblical and conciliar language). The three Persons are co-equal, co-eternal, one in essence.',
      'We do not worship three gods, nor do we collapse the Persons into masks of one Person. Communion and distinction are both real.',
      'Icons like Rublev’s Hospitality of Abraham invite contemplation of divine communion — love shared, not solitary power.',
    ],
    protestantBridge:
      'Many Protestants already confess the Trinity in creeds or songs but rarely unpack Person vs. essence. Orthodoxy is careful here because salvation is sharing the life of this God — not merely agreeing to a chart. Lex orandi: we learn the Trinity by being baptized and blessed in the threefold Name.',
    keyTerms: [
      { term: 'Ousia / Essence', definition: 'What God is — the one divine nature.' },
      { term: 'Hypostasis / Person', definition: 'Father, Son, and Spirit as distinct Persons.' },
      { term: 'Homoousios', definition: '“Of one essence” — the Son (and Spirit) with the Father.' },
    ],
    studyQuestions: [
      'Why does Baptism use the threefold Name?',
      'What misunderstandings of “three Persons” should we avoid?',
      'How does Rublev’s icon teach without words?',
    ],
    readings: [
      { title: 'Ware — The Orthodox Way', detail: 'Chapters on God as Trinity (cite only)', url: 'https://store.ancientfaith.com/' },
      { title: 'Hopko — The Orthodox Faith', detail: 'Doctrine: The Holy Trinity', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
    ],
  },
  {
    id: 'trinity-2',
    moduleId: 'trinity-christ',
    moduleTitle: 'Trinity & Christ',
    order: 5,
    title: 'Jesus Christ: True God and True Man',
    summary: 'The Son of God became man without ceasing to be God — for us and for our salvation.',
    iconId: 'christ-pantocrator',
    explainer: [
      'The heart of the Gospel: the eternal Word became flesh (John 1:14). Jesus Christ is one Person, the Son of God, in two natures — divine and human — united without confusion, change, division, or separation (Chalcedon).',
      'He is not a demigod, nor a mere prophet, nor God pretending to be human. He truly hungered, wept, suffered, died, and rose. What is not assumed is not healed (classic patristic axiom).',
      'Titles matter: Lord, Christ, Son of God, Son of Man, Pantocrator. The Sinai Pantocrator icon holds blessing and Gospel together — mercy and truth.',
      'Salvation in Orthodoxy is not only a legal transaction; it is the healing and restoration of human nature in communion with God through Christ’s incarnation, cross, resurrection, and gift of the Spirit.',
    ],
    protestantBridge:
      'If you come from a setting that emphasized “accepting Jesus as personal Savior,” keep the personal trust — and deepen it. Orthodoxy asks you to confess who Christ is with the Church’s full dogma, and to meet Him in His Body, the Church, especially in the Eucharist after reception.',
    keyTerms: [
      { term: 'Incarnation', definition: 'The Son of God taking true human nature.' },
      { term: 'Hypostatic union', definition: 'Two natures united in the one Person of Christ.' },
      { term: 'Theanthropos', definition: 'The God-Man.' },
    ],
    studyQuestions: [
      'Why must Christ be both God and man for salvation?',
      'What does the Pantocrator icon emphasize about Jesus?',
      'How does “healing” language complement “forgiveness” language?',
    ],
    readings: [
      { title: 'Know the Faith — Shanbour', detail: 'Christology chapters (cite only)', url: 'https://store.ancientfaith.com/' },
      { title: 'Hopko — Orthodox Faith', detail: 'Jesus Christ articles', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
    ],
  },
  {
    id: 'theotokos-1',
    moduleId: 'theotokos-saints',
    moduleTitle: 'Theotokos & Saints',
    order: 6,
    title: 'The Theotokos and the Saints',
    summary: 'Honoring Mary as Mother of God; asking the saints’ prayers — without confusing veneration and worship.',
    iconId: 'theotokos-vladimir',
    explainer: [
      'Theotokos means “God-bearer” / Mother of God. The title protects Christology: the One born of Mary is the divine Person of the Son. The Church honors her as the highest of creatures, ever-virgin, and first among the saints.',
      'We ask her intercession as we ask living Christians to pray for us — only more confidently, because she is alive in Christ. Worship (latreia) belongs to God alone. Veneration (timē / proskynesis) is honor.',
      'Saints are not demigods. They are friends of God whose lives show what grace can do. Their icons and feast days teach the Gospel in human faces.',
      'For catechumens: learn the hymns to the Theotokos in Liturgy; notice how often the Church ends prayers “most holy Theotokos, save us” — meaning: help us by your prayers toward salvation in your Son.',
    ],
    protestantBridge:
      'Protestant caution about idolatry is understandable. Orthodoxy agrees God alone is worshiped. The difference is whether the Church Triumphant can hear requests for prayer. Scripture shows heavenly elders and angels involved in the worship of God; the Church’s experience is that Christ is glorified in His saints — not replaced by them.',
    keyTerms: [
      { term: 'Theotokos', definition: 'Mother of God — title affirmed at Ephesus (AD 431).' },
      { term: 'Dulia / Hyper-dulia', definition: 'Veneration of saints; special honor to the Theotokos.' },
      { term: 'Intercession', definition: 'Prayer to God on behalf of others.' },
    ],
    studyQuestions: [
      'How does “Theotokos” defend the truth about Jesus?',
      'What is the difference between praying to God and asking a saint to pray?',
      'Which saint’s life do you want to learn next?',
    ],
    readings: [
      { title: 'Ware — The Orthodox Church', detail: 'Sections on Mary and the saints', url: 'https://store.ancientfaith.com/' },
      { title: 'Hopko — Orthodox Faith', detail: 'Worship / spiritual life articles', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
    ],
  },
  {
    id: 'mysteries-1',
    moduleId: 'mysteries',
    moduleTitle: 'Holy Mysteries',
    order: 7,
    title: 'The Holy Mysteries (Sacraments)',
    summary: 'Baptism, Chrismation, Eucharist, and the other Mysteries — God’s grace in material signs.',
    iconId: 'baptism-christ',
    explainer: [
      'Orthodoxy speaks of Holy Mysteries: sacred acts in which the Holy Spirit works through the Church’s prayer and created matter (water, oil, bread, wine, laying on of hands).',
      'Baptism unites us to Christ’s death and resurrection. Chrismation (confirmation with holy chrism) seals the gift of the Spirit. The Eucharist is the Body and Blood of Christ — the center of Orthodox life.',
      'Confession, Marriage, Holy Unction, and Ordination also belong to the Church’s sacramental care. Counts of “seven” are pedagogical; the whole life of the Church is mystical.',
      'As a catechumen you prepare for the Mysteries of initiation. Until reception, you typically do not commune; you still attend, pray, and learn. Fr. Symeon will direct your path.',
    ],
    protestantBridge:
      'If “ordinances” were mainly symbolic memorials in your background, Orthodox language will feel denser. The Church does not deny symbolism — she insists the symbols participate in the reality they signify. Start by watching Baptisms and listening to the anaphora prayers of the Liturgy.',
    keyTerms: [
      { term: 'Mystery / Sacrament', definition: 'A Spirit-filled act of the Church conferring grace.' },
      { term: 'Chrismation', definition: 'Anointing with chrism; gift of the Holy Spirit.' },
      { term: 'Eucharist', definition: 'Thanksgiving; Holy Communion in Christ’s Body and Blood.' },
    ],
    studyQuestions: [
      'Why does matter matter in Orthodoxy’s view of salvation?',
      'What questions do you have about Baptism/Chrismation for converts?',
      'How does Theophany illuminate Christian Baptism?',
    ],
    readings: [
      { title: 'Antiochian Catechism', detail: 'Q&A on Mysteries', url: 'https://store.antiochianvillage.org/' },
      { title: 'Know the Faith — Shanbour', detail: 'Sacrament chapters (cite only)', url: 'https://store.ancientfaith.com/' },
    ],
  },
  {
    id: 'liturgy-1',
    moduleId: 'liturgy',
    moduleTitle: 'Divine Liturgy',
    order: 8,
    title: 'Entering the Divine Liturgy',
    summary: 'The Liturgy of St. John Chrysostom is the heartbeat of parish Sunday life.',
    iconId: 'st-john-chrysostom',
    explainer: [
      'Divine Liturgy is the primary Eucharistic service. Most Sundays Antiochian parishes use the Liturgy of St. John Chrysostom; St. Basil’s is used on certain days.',
      'Broad shape: gathering and litany; antiphons and entrance; Trisagion; Epistle and Gospel; homily; Great Entrance; Creed; anaphora (Eucharistic prayer); Lord’s Prayer; Communion of the faithful; dismissal.',
      'Everything points to the Kingdom. We do not “watch a performance”; we stand as the people of God. Catechumens historically were dismissed before the faithful’s prayers — today practices vary; follow parish custom.',
      'Learn a few responses well: “Lord, have mercy,” “To Thee, O Lord,” the Creed, the Our Father. Beauty and repetition form the heart.',
    ],
    protestantBridge:
      'If you are used to a praise set + sermon + altar call, Liturgy may feel long and “formal.” The form is a feature: it carries theology you cannot improvise weekly. Give yourself months of steady attendance before judging it.',
    keyTerms: [
      { term: 'Anaphora', definition: 'The Eucharistic canon / offering prayer.' },
      { term: 'Great Entrance', definition: 'Procession with the gifts of bread and wine.' },
      { term: 'Liturgy', definition: '“Work of the people” — corporate worship.' },
    ],
    studyQuestions: [
      'Which part of the Liturgy still confuses you? Write it down for Fr. Symeon.',
      'How do Epistle and Gospel function differently from a sermon alone?',
      'What does standing for worship communicate?',
    ],
    readings: [
      { title: 'Hopko — Orthodox Faith: Worship', detail: 'Articles on Liturgy', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
      { title: 'Ware — The Orthodox Church', detail: 'Worship chapters', url: 'https://store.ancientfaith.com/' },
    ],
    audioSuggestion: { title: 'Ancient Faith: Orthodoxy Live', url: 'https://www.ancientfaith.com/' },
  },
  {
    id: 'prayer-1',
    moduleId: 'prayer-fasting',
    moduleTitle: 'Prayer & Fasting',
    order: 9,
    title: 'Prayer Rule and the Jesus Prayer',
    summary: 'A sustainable daily rule under blessing; the Name of Jesus as medicine for the heart.',
    iconId: 'christ-pantocrator',
    explainer: [
      'A prayer rule is a stable pattern: morning and evening prayers, Scripture, Jesus Prayer, examination of conscience. Better a little done consistently than a heroic rule abandoned in a week.',
      'The Jesus Prayer — “Lord Jesus Christ, Son of God, have mercy on me, a sinner” — is central in Orthodox spirituality. A prayer rope helps the body join the mind.',
      'Prayer is not only requests; it is communion, repentance, thanksgiving, and stillness (hesychia) as God grants.',
      'Always run changes in your rule past Fr. Symeon — especially fasting combined with long prayer rules.',
    ],
    protestantBridge:
      'Ex tempore prayer remains valuable. Orthodoxy adds the wisdom of set prayers so that on dry days the Church still lends you words. Written prayers are not “less Spirit-filled”; they are the Spirit’s vocabulary learned over centuries.',
    keyTerms: [
      { term: 'Prayer rule', definition: 'Fixed daily prayers agreed with one’s spiritual father.' },
      { term: 'Jesus Prayer', definition: 'Short invocation of Jesus’ Name for mercy.' },
      { term: 'Prayer rope', definition: 'Knotted cord used to count Jesus Prayers.' },
    ],
    studyQuestions: [
      'What is a realistic morning rule for your season of life?',
      'When you are distracted, what does “gently return” look like?',
      'How might TTS or audio help you learn prayers while commuting?',
    ],
    readings: [
      { title: 'Orthodox pocket prayer book', detail: 'Purchase Antiochian or similar — outline in-app only', url: 'https://store.antiochianvillage.org/' },
      { title: 'Hopko — Spirituality', detail: 'Prayer articles', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
    ],
  },
  {
    id: 'fasting-1',
    moduleId: 'prayer-fasting',
    moduleTitle: 'Prayer & Fasting',
    order: 10,
    title: 'The Spirit of Fasting',
    summary: 'Fasting is training in freedom — not punishment — always under pastoral guidance.',
    iconId: 'transfiguration',
    explainer: [
      'Orthodox fasting disciplines the body to open the soul: Wednesdays and Fridays (remembrance of betrayal and Cross), and seasonal fasts (Great Lent, Nativity Fast, Apostles’ Fast, Dormition Fast).',
      'Traditional outlines often abstain from meat, dairy, eggs, fish (with exceptions), wine, and oil on stricter days — but practice varies by health, work, and blessing.',
      'Fasting without prayer and almsgiving becomes empty. The goal is purity of heart, repentance, and love of neighbor — not spiritual pride.',
      'Catechumens: ask Fr. Symeon what to keep now. Illness, pregnancy, and heavy labor modify rules. This app’s calendar is educational only.',
    ],
    protestantBridge:
      'If fasting was rare in your background except as a personal crisis tool, Orthodox communal fasting may feel foreign. It is the Church working out together: we hunger a little so we can feast truly at Pascha — and learn that we are not ruled by appetite.',
    keyTerms: [
      { term: 'Ascesis', definition: 'Spiritual training / discipline.' },
      { term: 'Xerophagy', definition: 'Stricter dry fasting on some days (advanced; not for beginners alone).' },
      { term: 'Obedience', definition: 'Following your spiritual father’s guidance over private zeal.' },
    ],
    studyQuestions: [
      'What is one fasting step you can ask a blessing for this week?',
      'How do almsgiving and kindness relate to fasting?',
      'Where might pride sneak into fasting?',
    ],
    readings: [
      { title: 'Antiochian fasting guidance', detail: 'Archdiocese resources; confirm with priest', url: 'https://www.antiochian.org/' },
      { title: 'Ware / Hopko', detail: 'Spirituality of fasting (cite only)', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
    ],
  },
  {
    id: 'icons-1',
    moduleId: 'icons',
    moduleTitle: 'Icons & Beauty',
    order: 11,
    title: 'Theology of the Icon',
    summary: 'Icons proclaim the Incarnation; we venerate persons, we worship God alone.',
    iconId: 'resurrection',
    explainer: [
      'Because the Word became flesh, holy images of Christ are possible and affirm the Incarnation. The Seventh Ecumenical Council (Nicaea II, 787) defended icons against iconoclasm.',
      'We venerate icons: kiss, bow, incense — honor passing to the prototype (the person depicted). We do not worship wood and paint.',
      'Icons are written with a grammar: reverse perspective, halos, inscriptions, stillness. They are theology in color, not naturalistic portraiture.',
      'Keep a prayer corner (icon corner) at home if possible: Cross, Christ, Theotokos, patron saints — a domestic church.',
    ],
    protestantBridge:
      'The Second Commandment forbids idols — gods we make. Orthodoxy says icons of Christ are the opposite of idolatry because God made Himself visible in Jesus. Still, examine your heart: if an image distracts from God, talk to your priest; the goal is always Christ.',
    keyTerms: [
      { term: 'Iconoclasm', definition: 'Rejection/destruction of icons.' },
      { term: 'Prototype', definition: 'The person an icon represents.' },
      { term: 'Icon corner', definition: 'Home place of prayer with icons and lamp.' },
    ],
    studyQuestions: [
      'How does the Incarnation relate to iconography?',
      'Practice explaining veneration vs worship in one minute.',
      'Which icon in this app draws you to prayer? Why?',
    ],
    readings: [
      { title: 'Know the Faith — Shanbour', detail: 'Icons chapter (cite only)', url: 'https://store.ancientfaith.com/' },
      { title: 'Ware — Orthodox Church', detail: 'Art and worship', url: 'https://store.ancientfaith.com/' },
    ],
  },
  {
    id: 'history-1',
    moduleId: 'history',
    moduleTitle: 'Church History',
    order: 12,
    title: 'From the Apostles to Antioch to America',
    summary: 'Your parish stands in a line from Acts 11 — “called Christians first in Antioch.”',
    iconId: 'peter-paul',
    explainer: [
      'The Book of Acts shows the Gospel leaping from Jerusalem to Antioch, where disciples were first called Christians. Saints Peter and Paul are foundational for the Antiochian tradition.',
      'The Ecumenical Councils clarified the Church’s confession against heresies while the liturgy and monasticism shaped daily holiness. East and West gradually diverged; Orthodoxy continued the faith of the first millennium in its fullness as she received it.',
      'Arabic-speaking Orthodox immigration and missionary bishops like St. Raphael of Brooklyn planted Antiochian life in North America. The Archdiocese today includes converts and cradle Orthodox praying together.',
      'Knowing history protects against both novelty-seeking and romantic fantasy. The same Christ is present at 722 E. College Street.',
    ],
    protestantBridge:
      'Many Protestants learned a jump from Acts to the Reformation. Orthodoxy invites you to the centuries in between — not as a museum, but as the family memory of the Body of Christ. Read history on your knees: the saints are relatives, not exam topics.',
    keyTerms: [
      { term: 'Patriarchate of Antioch', definition: 'Ancient apostolic see; mother church of the Antiochian Archdiocese.' },
      { term: 'Ecumenical Council', definition: 'Church-wide council received as authoritative for dogma.' },
      { term: 'Convert', definition: 'One received into Orthodoxy from outside; fully Orthodox once received.' },
    ],
    studyQuestions: [
      'Why does Antioch matter for your identity as an Antiochian catechumen?',
      'What surprised you about St. Raphael’s American mission?',
      'How does continuity with the early Church affect trust?',
    ],
    readings: [
      { title: 'Becoming Orthodox — Gillquist', detail: 'Modern Antiochian convert story (cite only)', url: 'https://store.ancientfaith.com/' },
      { title: 'Ware — The Orthodox Church', detail: 'History overview', url: 'https://store.ancientfaith.com/' },
      { title: 'Hopko — Bible and Church History', detail: 'Free OCA articles', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
    ],
  },
  {
    id: 'theosis-1',
    moduleId: 'theosis',
    moduleTitle: 'Life in Christ',
    order: 13,
    title: 'Theosis: Life in Christ',
    summary: 'Salvation as participation in God’s life — healing, holiness, and love unto ages of ages.',
    iconId: 'transfiguration',
    explainer: [
      'St. Peter writes that we may become “partakers of the divine nature” (2 Peter 1:4). Theosis (deification) means union with God by grace — never becoming God by nature.',
      'The path is repentance, Mysteries, prayer, fasting, almsgiving, forgiveness, and bearing the cross in ordinary life. The Transfiguration shows humanity radiant with uncreated light in Christ.',
      'Orthodox ethics flow from this: we are becoming persons capable of love. Sin is illness and distortion; confession is therapeutic as well as judicial.',
      'As a catechumen, your “today” is enough: go to church, say your prayers, learn with humility, love your neighbor, and stay close to your priest.',
    ],
    protestantBridge:
      'If salvation was framed only as a past decision plus waiting for heaven, theosis expands the horizon: God shares His life now, transforming character into Christlikeness. Assurance rests not on a feeling alone but on Christ’s faithfulness encountered in His Church.',
    keyTerms: [
      { term: 'Theosis', definition: 'Participation in the divine life by grace.' },
      { term: 'Uncreated energies', definition: 'God’s real self-giving presence (in patristic/Palamite language) distinct from essence.' },
      { term: 'Synergy', definition: 'Cooperation of human freedom with divine grace.' },
    ],
    studyQuestions: [
      'How does theosis differ from “self-improvement”?',
      'Where do you see synergy already in your week?',
      'What habit would most open space for prayer right now?',
    ],
    readings: [
      { title: 'Ware — The Orthodox Way', detail: ' esp. chapters on God as prayer / spirit (cite only)', url: 'https://store.ancientfaith.com/' },
      { title: 'Hopko — Spirituality', detail: 'Theosis and life in Christ', url: 'https://www.oca.org/orthodoxy/the-orthodox-faith' },
      { title: 'Know the Faith — Shanbour', detail: 'Salvation / theosis discussions', url: 'https://store.ancientfaith.com/' },
    ],
    audioSuggestion: { title: 'Ancient Faith: search “theosis”', url: 'https://www.ancientfaith.com/' },
  },
]

export function getLesson(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id)
}

export function lessonsForModule(moduleId: string): Lesson[] {
  return lessons.filter((l) => l.moduleId === moduleId).sort((a, b) => a.order - b.order)
}
