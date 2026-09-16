import { useRegisterSW } from 'virtual:pwa-register/react'

/**
 * Gentle update prompt when a new service worker is waiting.
 * Keeps daily use offline-friendly without silent surprises mid-prayer.
 */
export function ReloadPrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, registration) {
      if (!registration) return
      // Periodically check for updates (hourly) while the app is open
      setInterval(() => {
        void registration.update()
      }, 60 * 60 * 1000)
      void swUrl
    },
  })

  if (!needRefresh) return null

  return (
    <div
      role="status"
      className="fixed inset-x-0 top-0 z-50 mx-auto max-w-3xl md:max-w-4xl px-3 pt-3"
    >
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-orthodox-gold/50 bg-white px-4 py-3 shadow-md">
        <p className="text-sm text-orthodox-cream">New content available.</p>
        <div className="flex gap-2">
          <button
            type="button"
            className="tap-target rounded-full px-3 py-1 text-xs text-orthodox-cream/70"
            onClick={() => setNeedRefresh(false)}
          >
            Later
          </button>
          <button
            type="button"
            className="tap-target rounded-full bg-orthodox-gold px-3 py-1 text-xs font-semibold text-orthodox-navy"
            onClick={() => void updateServiceWorker(true)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}
