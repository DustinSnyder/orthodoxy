# 52-Week Church-Year Catechesis (Ecclesiastical Year)

**Calendar:** Weeks begin with the Ecclesiastical New Year **September 1**.  
**Target year for mapping:** 2026-09-01 → 2027-08-31 (52 weekly lessons).  
**Pascha 2027:** Sunday, May 2, 2027 (Orthodox). Great Lent begins ~Mon March 15, 2027.  
**Authority:** Companion for catechumens at St. Raphael / Fr. Symeon. Always defer to priest.  
**Compliance:** Original prose only. Every lesson must include ≥1 official **antiochian.org** (or Antiochian Village / Archdiocese Christian Education) link in `readings`. Do not copy copyrighted curriculum PDFs. Cite and link.

## Official Antiochian reference hubs (use throughout)
- https://www.antiochian.org/
- Christian Education: https://www.antiochian.org/dashboard?name=Christian+Education
- Ecclesiastical New Year: https://www.antiochian.org/regulararticle/133
- Liturgics / daily: https://www.antiochian.org/liturgicday
- About the Faith / Discover Orthodoxy pages on antiochian.org (link specific articles found)
- Orthodox Learning Ladder (AOCEM): reference via Christian Education news https://www.antiochian.org/regulararticle/2735
- Curriculum cycle note: https://www.antiochian.org/regulararticle/1775

## Data model additions
Extend Lesson with:
- `week: number` (1–52)
- `weekStart: string` (ISO date Monday of that week, Week 1 = 2026-08-31 so Sept 1 falls in Week 1)
- `season: string` (e.g. Indiction, Nativity Fast, Theophany, Triodion, Great Lent, Pascha, Pentecost, Apostles Fast, Dormition Fast, Ordinary)
- `track: 'intro' | 'history' | 'america' | 'bible' | 'protestant' | 'liturgical' | 'life'`
- `feastNote?: string` optional major feast in that week

Replace old 13 lessons with these 52. Keep LessonDetail/Catechesis UX; add week filter, “This week’s lesson”, progress out of 52. Today page highlights current week by church year.

## Full outline (Week → Title → Track → Feast/season notes)

1. Ecclesiastical New Year: Sanctifying Time — intro/liturgical — Indiction Sep 1; ref article/133
2. Introduction to Orthodoxy: The Church as Hospital — intro
3. Who Is Jesus Christ in Orthodoxy? — intro
4. The Holy Trinity — intro — Nativity of Theotokos Sep 8
5. Scripture and Holy Tradition — bible/intro
6. The Elevation of the Cross — liturgical — Sep 14
7. What Is a Catechumen? Your Path at St. Raphael — intro
8. Prayer: Learning the Church’s Words — intro/life
9. Church History I: Pentecost and the Apostolic Church — history
10. Church History II: The Martyrs and the Early Fathers — history
11. Church History III: Councils and the Creed — history
12. Reading the Bible as an Orthodox I: The Church’s Book — bible
13. Reading the Bible as an Orthodox II: How Liturgy Interprets Scripture — bible
14. Orthodoxy vs. Solo Bible Study — protestant/bible
15. The Nativity Fast Begins: Hope and Preparation — liturgical — Nov 15
16. The Theotokos: Why We Honor Mary — intro/protestant
17. Church History IV: Byzantium, Mission, and the East — history
18. Saints and the Communion of Saints — intro/protestant
19. Icons: Windows to Heaven (Not Idols) — protestant/intro
20. Nativity of Christ: God With Us — liturgical — Dec 25
21. The Twelve Days and Theophany — liturgical — Jan 1–6
22. Reading the Bible as an Orthodox III: Old Testament in Christ — bible
23. Church History V: Great Schism — Why East and West Parted — history
24. Protestant Struggles I: Sola Scriptura — protestant
25. Protestant Struggles II: Faith, Works, and Theosis — protestant
26. Protestant Struggles III: Sacraments / Mysteries — protestant
27. Meeting of the Lord & the Presentation — liturgical — Feb 2
28. Orthodoxy in America I: Beginnings and Immigration — america — St. Raphael of Brooklyn theme
29. Orthodoxy in America II: Antiochian Witness and Evangelicals Coming Home — america (Gillquist era — cite carefully, link Archdiocese history pages)
30. Orthodoxy in America III: Parish Life Today — america
31. Orthodoxy in America IV: Future — Mission, Converts, and Faithfulness — america
32. Triodion: Preparing for Great Lent — liturgical
33. Great Lent I: The Meaning of the Fast — liturgical — Lent ~Mar 15 2027
34. Great Lent II: Prayer of St. Ephraim and Repentance — liturgical
35. Great Lent III: Reading Scripture in Lent — bible/liturgical
36. Annunciation: “Be It Unto Me” — liturgical — Mar 25
37. Holy Week: Walking with Christ to the Cross — liturgical
38. Great and Holy Pascha: The Feast of Feasts — liturgical — May 2 2027
39. Bright Week and the Resurrection Life — liturgical
40. Ascension and Waiting for the Spirit — liturgical
41. Pentecost: The Birthday of the Church’s Mission — liturgical
42. Reading the Bible as an Orthodox IV: Epistles and Daily Lectionary — bible — antiochian.org/liturgicday
43. Protestant Struggles IV: Closed Communion and Patience as a Catechumen — protestant
44. Protestant Struggles V: Authority, Bishops, and the Priest — protestant
45. Church History VI: Antioch — Where They Were First Called Christians — history
46. Apostles’ Fast and Apostolic Mission — liturgical
47. The Divine Liturgy: Heaven on Earth — intro/liturgical
48. Confession and Healing of the Heart — life
49. Dormition Fast and the Falling Asleep of the Theotokos — liturgical — Aug 1–15
50. Transfiguration: Light of Tabor — liturgical — Aug 6
51. Looking Back on the Church Year: Feasts, Fasts, Formation — liturgical/intro
52. Resolve for the Next Indiction: Living What You’ve Learned — intro/life — ref article/1729 Resolve

## Content requirements per lesson
- summary (1–2 sentences)
- explainer: 4–6 original paragraphs
- protestantBridge when track is protestant OR when helpful for convert
- keyTerms: 3
- studyQuestions: 3
- readings: include antiochian.org links + optional Ancient Faith / prayer book pointers
- audioSuggestion: optional Fr Symeon media or Ancient Faith
- feastNote when applicable

## UI
- Catechesis page: group by season or track; show Week N of 52; highlight current week
- Helper `getChurchWeek(date)` based on Sept 1 Indiction
- Progress: completed / 52
- Disclaimer on Catechesis: not official AOCEM Sunday School replacement; personal companion; Fr. Symeon overrides; sources linked to antiochian.org for compliance

## Deploy
Push main + force-update gh-pages like previous deploys.
