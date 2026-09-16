import { useState } from 'react'
import type { IconMeta } from '../data/icons'

export function IconImage({
  icon,
  className = '',
  size = 'md',
}: {
  icon: IconMeta
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const [failed, setFailed] = useState(false)
  const sizeClass =
    size === 'sm' ? 'h-20 w-20' : size === 'lg' ? 'h-56 w-full max-w-sm' : 'h-36 w-36'

  if (failed) {
    return (
      <div
        className={`${sizeClass} ${className} flex items-center justify-center rounded-xl border border-orthodox-gold/30 bg-orthodox-deep text-center text-xs text-orthodox-gold-light`}
      >
        Icon unavailable
        <span className="sr-only">{icon.alt}</span>
      </div>
    )
  }

  return (
    <figure className={`${className}`}>
      <img
        src={icon.thumbUrl}
        alt={icon.alt}
        loading="lazy"
        className={`${sizeClass} rounded-xl object-cover shadow-md ring-1 ring-orthodox-gold/40`}
        onError={() => setFailed(true)}
      />
      <figcaption className="mt-1 text-[11px] leading-snug text-orthodox-muted">
        {icon.attribution} · {icon.license}
      </figcaption>
    </figure>
  )
}
