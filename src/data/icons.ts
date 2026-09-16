export interface IconMeta {
  id: string
  title: string
  description: string
  alt: string
  url: string
  thumbUrl: string
  attribution: string
  license: string
  sourcePage: string
  feastOrTheme: string
}

function commons(file: string, width: number): string {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`
}

/** Public-domain / openly licensed Orthodox icons from Wikimedia Commons */
export const icons: IconMeta[] = [
  {
    id: 'christ-pantocrator',
    title: 'Christ Pantocrator',
    description:
      'The classic Sinai icon of Christ as Ruler of All — blessing with one hand, holding the Gospel with the other.',
    alt: 'Icon of Christ Pantocrator from Saint Catherine Monastery, Sinai',
    url: commons('Spas vsederzhitel sinay.jpg', 800),
    thumbUrl: commons('Spas vsederzhitel sinay.jpg', 400),
    attribution: '6th century, Monastery of St. Catherine, Sinai. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Spas_vsederzhitel_sinay.jpg',
    feastOrTheme: 'Christology',
  },
  {
    id: 'theotokos-vladimir',
    title: 'Our Lady of Vladimir',
    description:
      'One of the most beloved icons of the Theotokos, showing the tender embrace of Mother and Child (Eleousa type).',
    alt: 'Icon of the Theotokos of Vladimir holding the Christ Child',
    url: commons('Vladimirskaya.jpg', 800),
    thumbUrl: commons('Vladimirskaya.jpg', 400),
    attribution: '12th century Byzantine; Tretyakov Gallery. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Vladimirskaya.jpg',
    feastOrTheme: 'Theotokos',
  },
  {
    id: 'rublev-trinity',
    title: 'Holy Trinity (Rublev)',
    description:
      'Andrei Rublev’s icon of the Hospitality of Abraham, traditionally understood as a vision of the Holy Trinity.',
    alt: 'Andrei Rublev icon of the Holy Trinity as three angels at Mamre',
    url: commons('Angelsatmamre-trinity-rublev-1410.jpg', 800),
    thumbUrl: commons('Angelsatmamre-trinity-rublev-1410.jpg', 400),
    attribution: 'Andrei Rublev, c. 1411. Tretyakov Gallery. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Angelsatmamre-trinity-rublev-1410.jpg',
    feastOrTheme: 'Trinity',
  },
  {
    id: 'st-raphael-brooklyn',
    title: 'St. Raphael of Brooklyn',
    description:
      'Patron of the Iowa City parish — first Orthodox bishop consecrated in America, tireless missionary among Arabic-speaking faithful.',
    alt: 'Portrait of Saint Raphael of Brooklyn (Raphael Hawaweeny)',
    url: commons('Raphael of Brooklyn.jpg', 800),
    thumbUrl: commons('Raphael of Brooklyn.jpg', 400),
    attribution: 'Historical portrait of St. Raphael Hawaweeny. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Raphael_of_Brooklyn.jpg',
    feastOrTheme: 'Parish patron',
  },
  {
    id: 'peter-paul',
    title: 'Holy Apostles Peter and Paul',
    description:
      'Patrons of the Church of Antioch’s apostolic foundation — Peter and Paul united in the faith of Christ.',
    alt: 'Icon of the Holy Apostles Peter and Paul from Belozersk',
    url: commons('Peter and Paul icon Belozersk.jpg', 800),
    thumbUrl: commons('Peter and Paul icon Belozersk.jpg', 400),
    attribution: 'Belozersk icon of Saints Peter and Paul. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Peter_and_Paul_icon_Belozersk.jpg',
    feastOrTheme: 'Apostles / Antioch',
  },
  {
    id: 'nativity',
    title: 'Nativity of Christ',
    description:
      'The birth of the Savior; the Theotokos, Magi, shepherds, and creation gather around the newborn Lord.',
    alt: 'Russian Orthodox icon of the Nativity of Jesus Christ',
    url: commons('Russian nativity icon.jpg', 800),
    thumbUrl: commons('Russian nativity icon.jpg', 400),
    attribution: 'Traditional Russian Nativity icon. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Russian_nativity_icon.jpg',
    feastOrTheme: 'Major feast',
  },
  {
    id: 'resurrection',
    title: 'Anastasis (Descent into Hades)',
    description:
      'Christ trampling the gates of Hades, raising Adam and Eve — the Orthodox image of Pascha.',
    alt: 'Fresco of the Anastasis from the Chora Church in Constantinople',
    url: commons('Anastasis fresco (Chora Church).jpg', 800),
    thumbUrl: commons('Anastasis fresco (Chora Church).jpg', 400),
    attribution: 'Fresco, Chora Church, Constantinople. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Anastasis_fresco_(Chora_Church).jpg',
    feastOrTheme: 'Pascha',
  },
  {
    id: 'baptism-christ',
    title: 'Theophany (Baptism of Christ)',
    description:
      'Christ baptized in the Jordan; the Spirit as a dove; the Father’s voice — revelation of the Trinity.',
    alt: 'Icon of the Baptism of Christ, early 14th century, Ohrid',
    url: commons(
      'Baptism of Christ, Early XIV Century, St Mary Perivleptos Church, Ohrid Icon Gallery.jpg',
      800,
    ),
    thumbUrl: commons(
      'Baptism of Christ, Early XIV Century, St Mary Perivleptos Church, Ohrid Icon Gallery.jpg',
      400,
    ),
    attribution: 'Early 14th c. icon, Ohrid. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage:
      'https://commons.wikimedia.org/wiki/File:Baptism_of_Christ,_Early_XIV_Century,_St_Mary_Perivleptos_Church,_Ohrid_Icon_Gallery.jpg',
    feastOrTheme: 'Theophany',
  },
  {
    id: 'st-john-chrysostom',
    title: 'St. John Chrysostom',
    description:
      'Golden-mouthed preacher; author of the Divine Liturgy used most Sundays in Antiochian parishes.',
    alt: 'Icon of Saint John Chrysostom',
    url: commons('Johnchrysostom.jpg', 800),
    thumbUrl: commons('Johnchrysostom.jpg', 400),
    attribution: 'Traditional icon of St. John Chrysostom. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Johnchrysostom.jpg',
    feastOrTheme: 'Fathers / Liturgy',
  },
  {
    id: 'st-basil',
    title: 'St. Basil the Great',
    description:
      'Cappadocian Father; defender of the Trinity; author of the Liturgy used on certain feast days and Great Lent Sundays.',
    alt: 'Portrait of Saint Basil the Great',
    url: commons('Basil of Caesarea.jpg', 800),
    thumbUrl: commons('Basil of Caesarea.jpg', 400),
    attribution: 'Traditional image of St. Basil of Caesarea. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Basil_of_Caesarea.jpg',
    feastOrTheme: 'Fathers',
  },
  {
    id: 'transfiguration',
    title: 'Transfiguration',
    description:
      'Christ revealed in uncreated light on Mount Tabor with Moses and Elijah; Peter, James, and John behold His glory.',
    alt: 'Icon of the Transfiguration by Theophanes the Greek',
    url: commons(
      'Transfiguration by Feofan Grek from Spaso-Preobrazhensky Cathedral in Pereslavl-Zalessky (15th c, Tretyakov gallery).jpeg',
      800,
    ),
    thumbUrl: commons(
      'Transfiguration by Feofan Grek from Spaso-Preobrazhensky Cathedral in Pereslavl-Zalessky (15th c, Tretyakov gallery).jpeg',
      400,
    ),
    attribution: 'Theophanes the Greek, 15th c. Tretyakov Gallery. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage:
      'https://commons.wikimedia.org/wiki/File:Transfiguration_by_Feofan_Grek_from_Spaso-Preobrazhensky_Cathedral_in_Pereslavl-Zalessky_(15th_c,_Tretyakov_gallery).jpeg',
    feastOrTheme: 'Major feast',
  },
  {
    id: 'dormition',
    title: 'Dormition of the Theotokos',
    description:
      'The falling asleep of the Mother of God; Christ receiving her soul; the Apostles gathered around her bier.',
    alt: 'Novgorod icon of the Dormition of the Theotokos',
    url: commons('Dormition of the Theotokos, Novgorod.jpg', 800),
    thumbUrl: commons('Dormition of the Theotokos, Novgorod.jpg', 400),
    attribution: 'Novgorod Dormition icon. Wikimedia Commons.',
    license: 'Public domain',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Dormition_of_the_Theotokos,_Novgorod.jpg',
    feastOrTheme: 'Major feast',
  },
]

export function getIcon(id: string): IconMeta | undefined {
  return icons.find((i) => i.id === id)
}
