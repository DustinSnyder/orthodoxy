# Orthodox Path — St. Raphael Catechumen Companion

A mobile-first web app for **Dustin Snyder**, catechumen at **Saint Raphael of Brooklyn Orthodox Church** (Iowa City, IA), under the pastoral care of **Father Symeon Kees** (Antiochian Orthodox Christian Archdiocese of North America).

This is a **personal learning companion**. It never replaces Fr. Symeon’s guidance, parish catechesis, or the living worship of the Church.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router
- Progress / prayer checks / streak in `localStorage`

## Run locally

```bash
cd /workspace/orthodox-platform
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: serve the production build
```

## Daily use (overview)

1. **Today** — date, fasting awareness, morning/evening prayer checks, scripture pointers, saint + icon, one catechesis card, Ancient Faith audio link.
2. **Learn (Catechesis)** — 13 lessons across modules with Protestant-bridge callouts; mark complete; progress saved locally.
3. **Prayer** — morning, evening, meals, Jesus Prayer + browser TTS “Read aloud”.
4. **More** — Fasting, Scripture, Saints & Fathers, Icons, Library, Parish.

### Suggested rhythm

- Morning: open **Today** → prayer check → short lesson or Gospel path.
- During day: Jesus Prayer (TTS if helpful).
- Evening: evening prayers → mark check → glance at tomorrow’s fasting note.
- Weekend: **Parish** times → Vespers Saturday / Liturgy Sunday (confirm calendar).

## Copyright & content rules

- Lesson prose is **original** summary of Orthodox teaching.
- Spine books (Know the Faith, Ware, Gillquist, Antiochian Catechism, etc.) are **cited / linked**, never pasted as chapters.
- Prayers use traditional common / public-domain texts (or outline + purchase links).
- Icons load from **Wikimedia Commons** via `Special:FilePath` with attribution metadata in `src/data/icons.ts`.
- Father excerpts are short **public-domain** passages with attribution.

## Official links

- Parish: https://raphaelchurch.org/
- Daily readings: https://www.antiochian.org/liturgicday
- Archdiocese: https://www.antiochian.org/
- Ancient Faith: https://www.ancientfaith.com/
- Hopko *Orthodox Faith* (free): https://www.oca.org/orthodoxy/the-orthodox-faith

## Project layout

```
src/data/        seed: lessons, prayers, saints, icons, daily, fasting, library, scripture
src/pages/       route screens
src/components/  layout, disclaimer, TTS, icon image, Protestant bridge
src/hooks/       localStorage progress / streak / prayer checks
```

## Routes

| Path | Page |
|------|------|
| `/` | Today dashboard |
| `/catechesis` | Module list + progress |
| `/catechesis/:lessonId` | Lesson detail |
| `/prayer` | Prayer rules + TTS |
| `/fasting` | Fasting teaching + Sep 2026 Wed/Fri grid |
| `/scripture` | Daily readings UI + Gospel paths |
| `/saints` | Saints cards + PD Father excerpts |
| `/icons` | Gallery + veneration clarification |
| `/library` | Spine books & official links |
| `/parish` | St. Raphael info & service times |
| `/more` | Hub to secondary sections |

Built for phone-first use: large tap targets, deep blue / gold theme, alt text on icons, reduce-motion friendly CSS.
