import { useEffect, useState } from 'react'

export function TTSButton({ text, label = 'Listen' }: { text: string; label?: string }) {
  const [speaking, setSpeaking] = useState(false)
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window

  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel()
    }
  }, [supported])

  if (!supported) {
    return (
      <p className="text-xs text-orthodox-muted">Speech synthesis not available in this browser.</p>
    )
  }

  const toggle = () => {
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }
    const utter = new SpeechSynthesisUtterance(text)
    utter.rate = 0.92
    utter.onend = () => setSpeaking(false)
    utter.onerror = () => setSpeaking(false)
    setSpeaking(true)
    window.speechSynthesis.speak(utter)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="tap-target inline-flex items-center gap-2 rounded-full bg-orthodox-gold px-4 py-2 text-sm font-semibold text-orthodox-navy shadow hover:brightness-110"
      aria-pressed={speaking}
    >
      <span aria-hidden>{speaking ? '■' : '▶'}</span>
      {speaking ? 'Stop' : label}
    </button>
  )
}
