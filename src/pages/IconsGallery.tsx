import { useState } from 'react'
import { icons } from '../data/icons'
import { PastoralDisclaimer } from '../components/PastoralDisclaimer'
import { ProtestantBridge } from '../components/ProtestantBridge'

export function IconsGallery() {
  const [active, setActive] = useState(icons[0].id)
  const current = icons.find((i) => i.id === active) ?? icons[0]
  const [zoom, setZoom] = useState(false)

  return (
    <div className="space-y-4 pb-10">
      <h1 className="font-display text-3xl text-orthodox-gold md:text-4xl">Icons</h1>
      <PastoralDisclaimer compact />

      <ProtestantBridge>
        Orthodoxy worships God alone. Icons are venerated: honor given to the person depicted (the prototype)
        passes to them, as kissing a photo of a loved one honors the person — not the paper. The Incarnation
        makes holy images of Christ possible. If this still feels uncomfortable, talk with Fr. Symeon; go
        slowly and keep Christ at the center.
      </ProtestantBridge>

      <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4 text-sm">
        <h2 className="font-display text-xl text-orthodox-gold">Veneration vs worship</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Worship (latreia):</strong> adoration due to the Holy Trinity alone.
          </li>
          <li>
            <strong>Veneration (timē / proskynesis):</strong> honor to the Theotokos, saints, and sacred images.
          </li>
          <li>We kiss icons, bow, and light lamps — directing love toward Christ and His friends.</li>
        </ul>
      </section>

      <div className="grid grid-cols-3 gap-2">
        {icons.map((icon) => (
          <button
            key={icon.id}
            type="button"
            onClick={() => {
              setActive(icon.id)
              setZoom(false)
            }}
            className={`tap-target overflow-hidden rounded-xl ring-2 ${
              active === icon.id ? 'ring-orthodox-gold' : 'ring-transparent'
            }`}
          >
            <img src={icon.thumbUrl} alt={icon.alt} className="aspect-square w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      <section className="rounded-2xl border border-orthodox-gold/35 bg-orthodox-deep p-4">
        <h2 className="font-display text-2xl text-orthodox-gold">{current.title}</h2>
        <p className="mt-1 text-sm">{current.description}</p>
        <button
          type="button"
          className="tap-target mt-3 text-sm text-orthodox-gold-light underline"
          onClick={() => setZoom((z) => !z)}
        >
          {zoom ? 'Close zoom' : 'Zoom image'}
        </button>
        <img
          src={zoom ? current.url : current.thumbUrl}
          alt={current.alt}
          className={`mt-3 w-full rounded-xl object-contain ${zoom ? 'max-h-[80vh]' : 'max-h-80'}`}
        />
        <p className="mt-2 text-xs text-orthodox-muted">
          {current.attribution} · License: {current.license}
        </p>
        <a
          href={current.sourcePage}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-orthodox-gold-light underline"
        >
          Wikimedia source ↗
        </a>
      </section>
    </div>
  )
}
