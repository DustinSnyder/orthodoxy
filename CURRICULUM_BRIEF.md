# Antiochian Catechumen Learning Platform — Build Brief

## User
- Dustin Snyder, catechumen at **Saint Raphael of Brooklyn Orthodox Church**, Iowa City, IA (722 E. College St)
- Priest: **Father Symeon Kees** (Antiochian Orthodox Christian Archdiocese of North America)
- Background: non-denominational Protestant
- Needs: daily-use platform, highly visual + audio, Orthodox icons, catechesis oriented to Antiochian Orthodoxy in the US

## Pastoral guardrail (show prominently in UI)
This app is a **personal learning companion**. It never replaces Fr. Symeon’s guidance, parish catechesis, or the living worship of the Church. Fasting, prayer rule, and reception into the Church are always under his blessing.

## Official / top-rated source spine (cite these; do NOT paste copyrighted book text)

### Core catechism (Antiochian / US convert path)
1. **Catechism of the Orthodox Christian** — Antiochian Archdiocese (Q&A; Antiochian Village store)
2. **Know the Faith** — Fr. Michael Shanbour (Ancient Faith; written for Western/Protestant inquirers; sold via Antiochian Village)
3. **The Orthodox Church** + **The Orthodox Way** — Met. Kallistos (Timothy) Ware
4. **Becoming Orthodox** — Fr. Peter Gillquist (evangelical → Antiochian convert narrative)
5. **The Orthodox Faith** (vols. I–IV) — Fr. Thomas Hopko — free articles on OCA site (doctrine, worship, Bible/history, spirituality); use as publicly available lesson outlines with links
6. Parish-style lists from Antiochian parishes (e.g. St. Michael TX catechumen FAQ) as secondary structure cues

### Daily life of the Church
- Daily Scripture: link/fetch pattern from **antiochian.org/liturgicday** (and orthocal.info as backup UX reference)
- Fasting: Antiochian Archdiocese fasting calendar (Wed/Fri + seasons); always note “ask your spiritual father”
- Prayer: morning & evening prayer rule structure from standard Orthodox prayer books (Jordanville / Antiochian pocket prayer books) — use **public-domain / freely licensed** prayer texts where possible (e.g. common prayers of the Church that are traditionally shared); otherwise outline + link to purchase/official sources. Include Jesus Prayer practice.
- Saints & Fathers: daily saint of the day + rotating short intros to Apostolic Fathers, Cappadocians, Chrysostom, etc. Prefer public-domain translations (CCEL, New Advent where appropriate) with attribution.

### Audio (embed/link, do not pirate)
- Ancient Faith Ministries podcasts (Antiochian-affiliated): Intro to Orthodoxy, Orthodoxy Live, etc. — deep-link to episode pages
- Optional: browser Speech Synthesis for reading prayers aloud when no recording exists

### Icons & visuals
- Use **public-domain / openly licensed** Orthodox icons (Wikimedia Commons, etc.) with attribution
- Icon of Christ Pantocrator, Theotokos, Holy Trinity (Rublev if PD), St. Raphael of Brooklyn, Apostles Peter & Paul (Antioch), major feasts
- Visual diagrams: structure of Divine Liturgy, Church year wheel, fasting seasons map, Trinity / Christology “bridge” diagrams for Protestants (careful, accurate Orthodox language)
- Liturgical color theming by season where feasible

## Product to build
A beautiful, mobile-first **web app** (Vite + React + TypeScript + Tailwind preferred) that Dustin can open daily.

### Routes / sections
1. **Today** — dashboard: date (civil + liturgical notes), fasting status for today, morning/evening prayer checkboxes, today’s Epistle/Gospel (fetch or curated sample + how to load live), saint of the day with icon, 1 catechesis card, audio suggestion
2. **Catechesis** — modular path for Protestant converts:
   - Module 0: Orientation (what catechumenate is; parish; Fr. Symeon; how to use this app)
   - Modules: Scripture & Tradition; Trinity & Christ; Theotokos & Saints; Mysteries/Sacraments; Divine Liturgy; Prayer & Fasting; Icons & Beauty; Church History (Apostolic → Antioch → America); Life in Christ / theosis
   - Each lesson: short visual explainer, “From a Protestant background” bridge callout, key terms, 3–5 study questions, reading list (book + chapter pointers, not full copyrighted text), optional audio link, related icon
   - Progress persisted in localStorage
3. **Prayer** — morning, evening, before/after meals, Jesus Prayer guide with visual prayer rope metaphor; audio/TTS
4. **Fasting** — explain spirit of fasting; Wed/Fri; major seasons; interactive calendar for 2026 with simplified rules + disclaimer
5. **Scripture** — daily readings view + Gospel of Matthew/Mark starter path for catechumens
6. **Saints & Fathers** — browseable cards with icons + short bios; early Church Fathers library (public-domain excerpts only, clearly marked)
7. **Icons** — gallery with theology of icons (veneration vs worship clarified for Protestants) + zoomable images
8. **Library** — curated resource shelf with purchase/official links to the Antiochian spine above
9. **Parish** — St. Raphael Iowa City info, typical service times (Sat Vespers 6pm, Sun Orthros 8:45, Liturgy 10:00 — note to confirm on parish calendar), links to raphaelchurch.org

### Content strategy (copyright-safe)
- Write **original** lesson prose summarizing Orthodox teaching accurately
- Quote only short public-domain or fair-use-length snippets; prefer paraphrase + cite
- Never reproduce Know the Faith / Ware / Gillquist chapters
- Prefer Hopko OCA free articles via links for deeper reading
- Icons: only PD/CC with license metadata in code

### UX
- Warm, reverent, not gaudy; deep blues/golds/icons; excellent typography
- Large tap targets; works offline-friendly for core lessons (service worker optional)
- “Mark complete” + gentle daily streak for engagement
- Accessibility: alt text on all icons; captions; reduce-motion support

### Technical
- Vite + React + TypeScript + Tailwind CSS
- localStorage for progress/prayer checks
- Optional: fetch live daily readings if CORS allows; else ship a September–December 2026 sample week + clear link out to antiochian.org/liturgicday
- README with how to run (`npm install && npm run dev`) and how to build
- Deploy-ready static build

### Seed data to include
- At least 12 complete catechesis lessons across the modules
- At least 14 days of sample “Today” content (saints + fasting notes) starting around mid-September 2026
- Prayer texts for morning/evening that are freely usable (traditional common prayers)
- 8–12 icons with attribution JSON
- Resource library entries for all spine books + Ancient Faith + Antiochian education links

### Success criteria
- `npm install && npm run build` succeeds
- App is visually striking and usable on phone
- Clearly Antiochian / US catechumen oriented with Protestant-bridge language
- Copyright-safe; pastoral disclaimer present
- README explains daily use
