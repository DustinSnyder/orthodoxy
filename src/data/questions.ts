export interface TopQuestion {
  id: string
  question: string
  theme: string
  answer: string
  askPriest: string
  protestantBridge?: string
}

/** Curated questions newcomers/catechumens should be asking — original summaries */
export const topQuestions: TopQuestion[] = [
  {
    id: 'tradition',
    theme: 'Scripture & Tradition',
    question: 'What do Orthodox mean by Holy Tradition?',
    answer:
      'Holy Tradition is the living Apostolic faith handed down in the Church: Scripture read and prayed in the liturgy, the Creed and Councils, the Fathers, icons, canons, and the holiness of the saints. It is not “extra opinions stacked on the Bible,” nor a rival authority. The same Spirit who inspired Scripture guides the Church that recognized, preserved, and lives those Scriptures. Tradition is how the Church remembers Christ.',
    askPriest:
      'Ask Fr. Symeon how Tradition shows up concretely in parish life this month (a feast, a hymn, a practice).',
    protestantBridge:
      'If you were taught sola Scriptura as a safeguard of the Gospel, Orthodoxy shares the love of Scripture but locates interpretation inside the Church that wrote and received the New Testament.',
  },
  {
    id: 'liturgy',
    theme: 'Worship',
    question: 'Why is Divine Liturgy so central — and so “formal”?',
    answer:
      'The Liturgy is where the Church becomes most herself: Scripture, prayer, offering, and (for the faithful) Holy Communion. Form is not empty ritual; it carries theology you cannot invent weekly. Beauty, repetition, standing, incense, and chant form the heart over years. Catechumens learn by attending patiently, not by mastering every word on day one.',
    askPriest:
      'Ask which parts of the Liturgy you should learn first (Creed, Lord’s Prayer, responses) and where catechumens typically stand.',
  },
  {
    id: 'icons',
    theme: 'Icons',
    question: 'Do Orthodox worship icons?',
    answer:
      'No. Worship (latreia) belongs to God alone. Icons are venerated: honor given to the image passes to the person depicted (Christ, the Theotokos, the saints). Because the Word became flesh, holy images of Christ confess the Incarnation. Kissing an icon is closer to honoring a beloved person than to idolatry — though the heart must stay aimed at God.',
    askPriest:
      'If icons still feel uncomfortable, tell Fr. Symeon honestly; he can help you go slowly without forcing a reaction.',
    protestantBridge:
      'Protestant caution about the Second Commandment is understandable. Orthodoxy agrees idols are forbidden; it argues icons of the incarnate Christ are the opposite of inventing a false god.',
  },
  {
    id: 'theotokos',
    theme: 'Theotokos',
    question: 'Why is Mary called Theotokos, and why so much honor?',
    answer:
      'Theotokos means “God-bearer” / Mother of God. The title protects Christology: the One born of her is the divine Person of the Son. The Church honors her as the highest of creatures and first among the saints, and asks her prayers as we ask living Christians to pray — only more confidently, because she is alive in Christ. She never replaces Jesus; she always points to Him.',
    askPriest:
      'Ask how to understand hymns like “Most holy Theotokos, save us” (help us by your prayers toward salvation in your Son).',
  },
  {
    id: 'mysteries',
    theme: 'Sacraments',
    question: 'Are Orthodox sacraments just “ordinances” or symbols?',
    answer:
      'Orthodoxy speaks of Holy Mysteries: sacred acts in which the Holy Spirit works through the Church’s prayer and created matter (water, oil, bread, wine, laying on of hands). Baptism unites us to Christ’s death and resurrection; Chrismation seals the gift of the Spirit; the Eucharist is the Body and Blood of Christ. Symbolism is real — and the symbols participate in the reality they signify.',
    askPriest:
      'Ask how your particular path of reception (Baptism and/or Chrismation) will be discerned when the time comes.',
    protestantBridge:
      'If “ordinance” language meant guarding against superstition, keep the reverence — and listen carefully to the Church’s Eucharistic prayers.',
  },
  {
    id: 'scripture-church',
    theme: 'Scripture & Church',
    question: 'Who interprets the Bible — me, or the Church?',
    answer:
      'You should read Scripture personally and prayerfully. But private interpretation is not the final court. The normative place of Scripture is the liturgical assembly, and faithful reading asks how the Church has prayed and taught from the beginning. When readings conflict, Orthodoxy looks to the consensus of the Fathers and the worship of the Church.',
    askPriest:
      'Bring one passage that shaped your Protestant life and ask how Orthodoxy hears it in liturgy and the Fathers.',
  },
  {
    id: 'salvation-theosis',
    theme: 'Salvation',
    question: 'What is salvation in Orthodoxy — and what is theosis?',
    answer:
      'Salvation is healing and restoration in communion with God through Christ’s incarnation, cross, resurrection, and the gift of the Spirit — forgiveness and transformation together. Theosis means becoming partakers of the divine nature by grace (2 Peter 1:4): union with God without becoming God by nature. It is lifelong synergy: our freedom cooperating with grace in repentance, Mysteries, prayer, and love.',
    askPriest:
      'Ask how to hold “assurance in Christ” without reducing salvation to a single past decision alone.',
    protestantBridge:
      'Keep personal trust in Jesus. Orthodoxy expands the horizon: God shares His life now, conforming us to Christ in His Body, the Church.',
  },
  {
    id: 'fasting',
    theme: 'Ascesis',
    question: 'Why fast — and how strict should I be as a catechumen?',
    answer:
      'Fasting trains freedom: saying no to appetite so the heart can say yes to God. The Church fasts on Wednesdays and Fridays and in the great seasons, together with prayer and almsgiving. Pride about fasting is worse than eating with humility. Catechumens should begin under blessing — health, work, and family situation matter.',
    askPriest:
      'Ask Fr. Symeon for a starting fasting measure this season. Do not invent a heroic rule alone.',
  },
  {
    id: 'confession',
    theme: 'Repentance',
    question: 'Why confession to a priest?',
    answer:
      'Confession is therapeutic and reconciliatory: we name sins before God in the presence of His witness, the priest, and receive prayer, counsel, and absolution according to the Church’s order. It is not “telling a man instead of God”; it is meeting Christ’s forgiveness in the way He has given His Church. Frequency and preparation are pastoral questions.',
    askPriest:
      'Ask when catechumens typically begin confession in this parish and how to prepare without scrupulosity.',
  },
  {
    id: 'closed-communion',
    theme: 'Eucharist',
    question: 'Why is Holy Communion “closed”?',
    answer:
      'Communion is the sign and reality of full unity in faith and life. The Church does not invite those not yet received into Orthodox sacramental communion — not from unkindness, but from honesty about what the Cup means. Catechumens attend, pray, and prepare; reception comes under the bishop/priest’s blessing when readiness is discerned.',
    askPriest:
      'Ask what to do during Communion (blessing bread / remaining prayerfully) so you feel included without confusing the Mystery.',
  },
  {
    id: 'infant-baptism',
    theme: 'Baptism',
    question: 'Why baptize infants?',
    answer:
      'Baptism is entrance into Christ’s death and resurrection and into the life of the Church — not only a public badge of a cognitive decision. Infants are baptized into the faith of the Church, raised in that faith, and later personally appropriate it. Chrismation accompanies initiation. Adult converts are baptized (or received as directed) with full catechesis.',
    askPriest:
      'If you have children not converting with you, ask pastoral wisdom before proposing any baptism talk at home.',
  },
  {
    id: 'other-christians',
    theme: 'Other Christians',
    question: 'How should I relate to Protestant family and friends?',
    answer:
      'With love, humility, and truthfulness. Orthodoxy does not require contempt for the grace God has already given others. Avoid triumphalism and online debate. Explain simply when asked; protect peace when conversation turns hostile. Your best “argument” is a changed life and steady parish faithfulness. See also the Friends & Family guidance in this app.',
    askPriest:
      'If a relationship is strained by your catechumenate, ask Fr. Symeon for counsel before escalating conversations.',
  },
  {
    id: 'antiochian',
    theme: 'Antiochian life',
    question: 'What is distinctive about Antiochian Orthodoxy in the US?',
    answer:
      'The Antiochian Archdiocese stands in the Patriarchate of Antioch — where disciples were first called Christians (Acts 11). In North America it includes cradle Orthodox and many converts, English-friendly parish life, and a missionary memory (including St. Raphael of Brooklyn). Practice can feel warm and pastoral while remaining fully Orthodox in faith and worship. Local parish culture still varies — your school is St. Raphael under Fr. Symeon.',
    askPriest:
      'Ask how this parish’s customs (music, calendar notes, fellowship) fit the wider Archdiocese.',
  },
  {
    id: 'catechumenate-length',
    theme: 'Catechumenate',
    question: 'How long is catechumenate — and who decides readiness?',
    answer:
      'There is no universal stopwatch. Some are received after months; others after longer formation. Readiness is not an app streak or book count. Your spiritual father discerns faith, repentance, stability in parish life, and understanding of the Mysteries. Reception (Baptism and/or Chrismation as directed) happens under blessing — not pressure from enthusiasm or family timelines.',
    askPriest:
      'Ask Fr. Symeon what “healthy progress” looks like for you personally this season.',
  },
  {
    id: 'prayer-rule',
    theme: 'Prayer',
    question: 'What prayer rule should a catechumen keep?',
    answer:
      'A small rule done consistently beats a heroic rule abandoned in a week: morning and evening prayers, a little Scripture, Jesus Prayer, examination of conscience. Written prayers lend you the Church’s words on dry days. Changes — especially long rules or intense fasting — should be blessed.',
    askPriest:
      'Propose a simple daily rule and ask Fr. Symeon to bless, trim, or expand it.',
  },
  {
    id: 'leaving-jesus',
    theme: 'Identity',
    question: 'Am I “leaving Jesus” by becoming Orthodox?',
    answer:
      'No — if anything, you are seeking to follow Jesus more fully inside the Church that has worshiped Him from the Apostles. Orthodoxy is not another “brand of preference”; it is the life of Christ’s Body as received in the East. You may be leaving some Protestant institutional forms; you are not leaving Christ. Still, answer family fears with patience, not sarcasm.',
    askPriest:
      'Practice a one-minute answer with Fr. Symeon for worried loved ones.',
    protestantBridge:
      'Honor the real faith God gave you in your Protestant years. Orthodoxy is fulfillment and deepening, not mockery of your past.',
  },
  {
    id: 'works',
    theme: 'Salvation',
    question: 'Is Orthodoxy “works salvation”?',
    answer:
      'Orthodoxy rejects earning God’s love like a wage. Salvation is God’s gift in Christ. Ascesis (prayer, fasting, almsgiving), Mysteries, and obedience are how we cooperate with grace — synergy — not a ladder of self-salvation. Faith without embodied faithfulness is not the apostolic pattern; neither is anxious performance.',
    askPriest:
      'If you swing between scrupulosity and laxity, ask for a balanced rule of life.',
  },
  {
    id: 'bishop-priest',
    theme: 'Parish order',
    question: 'What is the priest’s role — and the bishop’s?',
    answer:
      'The priest is your local pastor and usually your confessor/spiritual father for day-to-day guidance. The bishop (and metropolitan in archdiocesan structure) guards the unity and teaching of the Church; major pastoral and sacramental order rests with him. In parish life you primarily relate to your priest with love and obedience in spiritual matters, without treating him as a celebrity or a mere facilitator.',
    askPriest:
      'Ask how blessings, confession scheduling, and pastoral appointments work at St. Raphael.',
  },
]
