export interface SaintCard {
  id: string
  name: string
  feastDate: string
  iconId?: string
  summary: string
  bio: string
  category: 'apostle' | 'father' | 'martyr' | 'american' | 'theotokos' | 'other'
}

export interface FatherExcerpt {
  id: string
  father: string
  title: string
  source: string
  attribution: string
  text: string
  publicDomain: true
}

export const saints: SaintCard[] = [
  {
    id: 'raphael',
    name: 'St. Raphael of Brooklyn',
    feastDate: 'Feb 27 & first Saturday of November',
    iconId: 'st-raphael-brooklyn',
    summary: 'First Orthodox bishop consecrated in America; missionary to Arabic-speaking faithful.',
    bio: 'Raphael Hawaweeny (1860–1915) labored across North America establishing parishes and pastoral care. Glorified by the Orthodox Church, he is the patron of the Iowa City parish. His life invites catechumens to missionary patience and love for immigrants and seekers alike.',
    category: 'american',
  },
  {
    id: 'peter-paul',
    name: 'Holy Apostles Peter and Paul',
    feastDate: 'June 29',
    iconId: 'peter-paul',
    summary: 'Chief Apostles; foundations of the Church of Antioch’s apostolic memory.',
    bio: 'Peter and Paul, differing in background yet united in Christ, preach one Gospel. Antioch remembers their apostolic work; their feast crowns the Apostles’ Fast. For converts, they model repentance (Peter) and total gift of life (Paul).',
    category: 'apostle',
  },
  {
    id: 'chrysostom',
    name: 'St. John Chrysostom',
    feastDate: 'Nov 13 (and other commemorations)',
    iconId: 'st-john-chrysostom',
    summary: 'Golden-mouthed preacher; the Liturgy bearing his name shapes most Sundays.',
    bio: 'Archbishop of Constantinople, Chrysostom preached Scripture with moral urgency and pastoral tenderness. Exiled for confronting power, he remains the Church’s teacher of worship and charity toward the poor.',
    category: 'father',
  },
  {
    id: 'basil',
    name: 'St. Basil the Great',
    feastDate: 'Jan 1',
    iconId: 'st-basil',
    summary: 'Cappadocian Father; defender of the Spirit; author of a Divine Liturgy.',
    bio: 'Basil of Caesarea organized monastic life, cared for the hungry, and articulated Trinitarian theology with clarity. His Liturgy is served on key fast-season days. He shows doctrine and social mercy as one path.',
    category: 'father',
  },
  {
    id: 'gregory-nazianzen',
    name: 'St. Gregory the Theologian',
    feastDate: 'Jan 25',
    summary: 'Cappadocian orator of the Trinity; “Theologian” as rare title of honor.',
    bio: 'Gregory of Nazianzus preached the deity of the Son and the Spirit with poetic precision. With Basil and Gregory of Nyssa he helped the Church speak truly of the Triune God.',
    category: 'father',
  },
  {
    id: 'athanasius',
    name: 'St. Athanasius the Great',
    feastDate: 'Jan 18',
    summary: 'Champion of Nicaea; “Athanasius against the world.”',
    bio: 'Bishop of Alexandria who defended the full divinity of Christ against Arianism. His On the Incarnation (public domain translations available) remains a classic for catechumens learning why God became man.',
    category: 'father',
  },
  {
    id: 'ignatius',
    name: 'St. Ignatius of Antioch',
    feastDate: 'Dec 20',
    summary: 'Apostolic Father; bishop of Antioch; martyr on the way to Rome.',
    bio: 'Ignatius wrote letters urging unity around the bishop and confessing the reality of Christ’s flesh. As an Antiochian catechumen, his voice is family history: the Church of Antioch teaching the whole world.',
    category: 'father',
  },
  {
    id: 'mary-theotokos',
    name: 'The Most Holy Theotokos',
    feastDate: 'Multiple feasts (e.g. Mar 25, Aug 15)',
    iconId: 'theotokos-vladimir',
    summary: 'Mother of God; ever-virgin; highest of the saints.',
    bio: 'Mary’s “yes” makes possible the Incarnation. The Church honors her in every Liturgy. Feasts of Annunciation, Dormition, and others teach Christology through her life.',
    category: 'theotokos',
  },
  {
    id: 'nicholas',
    name: 'St. Nicholas the Wonderworker',
    feastDate: 'Dec 6',
    summary: 'Bishop of Myra; model of secret charity and Orthodox pastoral care.',
    bio: 'Beloved across East and West, Nicholas defended the faith and aided the poor. His life encourages quiet generosity more than spectacle.',
    category: 'other',
  },
  {
    id: 'mary-egypt',
    name: 'St. Mary of Egypt',
    feastDate: 'Apr 1; 5th Sunday of Lent',
    summary: 'Repentant ascetic of the desert; icon of confession and hope.',
    bio: 'Once deep in sin, Mary was transformed by repentance, the Cross, and decades of struggle in the wilderness. Her life is read in Great Lent as hope for every sinner.',
    category: 'other',
  },
]

export const fatherExcerpts: FatherExcerpt[] = [
  {
    id: 'ignatius-ephesians',
    father: 'St. Ignatius of Antioch',
    title: 'On unity with the bishop (Letter to the Ephesians)',
    source: 'Epistle to the Ephesians (early 2nd century)',
    attribution: 'Public-domain translation tradition (e.g. Lightfoot/Roberts-Donaldson via CCEL/New Advent). Short excerpt for study.',
    publicDomain: true,
    text: '“It is therefore befitting that you should in every way glorify Jesus Christ, who has glorified you, that by a unanimous obedience you may be perfectly joined together in the same mind and in the same judgment, and may all speak the same thing concerning the same thing… Take heed, then, to have but one Eucharist. For there is one flesh of our Lord Jesus Christ, and one cup to show forth the unity of His blood; one altar; as there is one bishop…”',
  },
  {
    id: 'athanasius-incarnation',
    father: 'St. Athanasius',
    title: 'Why the Word became man',
    source: 'On the Incarnation',
    attribution: 'Public-domain English translations widely available (e.g. older editions on CCEL). Short excerpt.',
    publicDomain: true,
    text: '“For He was made man that we might be made God; and He manifested Himself by a body that we might receive the idea of the unseen Father; and He endured the insolence of men that we might inherit immortality.”',
  },
  {
    id: 'chrysostom-pascha',
    father: 'St. John Chrysostom',
    title: 'From the Paschal Homily (as traditionally appointed)',
    source: 'Paschal Homily (traditional liturgical text)',
    attribution: 'Traditional liturgical text of the Church, long in common liturgical use.',
    publicDomain: true,
    text: '“If any man be devout and love God, let him enjoy this fair and radiant triumphal feast… Christ is risen, and life reigns. Christ is risen, and not one dead remains in the grave.”',
  },
  {
    id: 'basil-hexameron',
    father: 'St. Basil the Great',
    title: 'Creation declares God’s wisdom',
    source: 'Hexaemeron (Homilies on the Six Days)',
    attribution: 'Public-domain translations (Nicene and Post-Nicene Fathers series). Short excerpt.',
    publicDomain: true,
    text: '“I want creation to penetrate you with so much admiration that everywhere, wherever you may be, the least plant may bring to you the clear remembrance of the Creator… One blade of grass or one speck of dust is enough to fill your heart with thought enough for all your life.”',
  },
]
