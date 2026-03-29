'use client'

import { useState, useEffect, useCallback } from 'react'

interface AccessibilityState {
  fontSize: number
  highContrast: boolean
  grayscale: boolean
  highlightLinks: boolean
  bigCursor: boolean
  stopAnimations: boolean
  readableFont: boolean
  textSpacing: boolean
}

const defaultState: AccessibilityState = {
  fontSize: 0,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  bigCursor: false,
  stopAnimations: false,
  readableFont: false,
  textSpacing: false,
}

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState<AccessibilityState>(defaultState)

  // Load saved state on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('accessibility-settings')
      if (saved) {
        const parsed = JSON.parse(saved)
        setState(parsed)
      }
    } catch {}
  }, [])

  // Apply all accessibility changes
  useEffect(() => {
    const root = document.documentElement
    const body = document.body

    // Font size
    root.style.fontSize = state.fontSize === 0 ? '' : `${100 + state.fontSize * 10}%`

    // High contrast
    body.classList.toggle('accessibility-high-contrast', state.highContrast)

    // Grayscale
    body.classList.toggle('accessibility-grayscale', state.grayscale)

    // Highlight links
    body.classList.toggle('accessibility-highlight-links', state.highlightLinks)

    // Big cursor
    body.classList.toggle('accessibility-big-cursor', state.bigCursor)

    // Stop animations
    body.classList.toggle('accessibility-stop-animations', state.stopAnimations)

    // Readable font
    body.classList.toggle('accessibility-readable-font', state.readableFont)

    // Text spacing
    body.classList.toggle('accessibility-text-spacing', state.textSpacing)

    // Save to localStorage
    try {
      localStorage.setItem('accessibility-settings', JSON.stringify(state))
    } catch {}
  }, [state])

  const update = useCallback((key: keyof AccessibilityState, value: boolean | number) => {
    setState(prev => ({ ...prev, [key]: value }))
  }, [])

  const reset = useCallback(() => {
    setState(defaultState)
    try {
      localStorage.removeItem('accessibility-settings')
    } catch {}
  }, [])

  const hasChanges = JSON.stringify(state) !== JSON.stringify(defaultState)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 left-4 z-[9999] w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="תפריט נגישות"
        title="נגישות"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="4.5" r="2.5" fill="currentColor" stroke="none" />
          <path d="M12 7.5V14" />
          <path d="M9 21l3-7 3 7" />
          <path d="M6 10l6 2 6-2" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-white shadow-2xl z-[10000] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="4.5" r="2.5" fill="currentColor" stroke="none" />
              <path d="M12 7.5V14" />
              <path d="M9 21l3-7 3 7" />
              <path d="M6 10l6 2 6-2" />
            </svg>
            <h2 className="text-lg font-bold">הגדרות נגישות</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-blue-500 flex items-center justify-center transition-colors"
            aria-label="סגור תפריט נגישות"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Font Size */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-sm font-semibold text-gray-700 mb-3">גודל טקסט</div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => update('fontSize', Math.max(-3, state.fontSize - 1))}
                className="w-10 h-10 rounded-lg bg-white border-2 border-gray-200 hover:border-blue-400 flex items-center justify-center text-lg font-bold text-gray-600 transition-colors"
                aria-label="הקטן טקסט"
              >
                א-
              </button>
              <span className="text-sm font-medium text-gray-500 min-w-[60px] text-center">
                {state.fontSize === 0 ? 'רגיל' : `${state.fontSize > 0 ? '+' : ''}${state.fontSize * 10}%`}
              </span>
              <button
                onClick={() => update('fontSize', Math.min(5, state.fontSize + 1))}
                className="w-10 h-10 rounded-lg bg-white border-2 border-gray-200 hover:border-blue-400 flex items-center justify-center text-lg font-bold text-gray-600 transition-colors"
                aria-label="הגדל טקסט"
              >
                א+
              </button>
            </div>
          </div>

          {/* Toggle Buttons Grid */}
          <div className="grid grid-cols-2 gap-3">
            <ToggleButton
              active={state.highContrast}
              onClick={() => update('highContrast', !state.highContrast)}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a10 10 0 0 1 0 20V2z" fill="currentColor" />
                </svg>
              }
              label="ניגודיות גבוהה"
            />

            <ToggleButton
              active={state.grayscale}
              onClick={() => update('grayscale', !state.grayscale)}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M12 3v18" />
                  <rect x="3" y="3" width="9" height="18" rx="1" fill="currentColor" opacity="0.3" />
                </svg>
              }
              label="גווני אפור"
            />

            <ToggleButton
              active={state.highlightLinks}
              onClick={() => update('highlightLinks', !state.highlightLinks)}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              }
              label="הדגשת קישורים"
            />

            <ToggleButton
              active={state.bigCursor}
              onClick={() => update('bigCursor', !state.bigCursor)}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" fill="currentColor" opacity="0.3" />
                  <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
                </svg>
              }
              label="סמן גדול"
            />

            <ToggleButton
              active={state.stopAnimations}
              onClick={() => update('stopAnimations', !state.stopAnimations)}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" opacity="0.3" />
                  <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" opacity="0.3" />
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              }
              label="עצירת אנימציות"
            />

            <ToggleButton
              active={state.readableFont}
              onClick={() => update('readableFont', !state.readableFont)}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7V4h16v3" />
                  <path d="M9 20h6" />
                  <path d="M12 4v16" />
                </svg>
              }
              label="פונט קריא"
            />

            <ToggleButton
              active={state.textSpacing}
              onClick={() => update('textSpacing', !state.textSpacing)}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                  <path d="M7 6v12" />
                  <path d="M17 6v12" />
                </svg>
              }
              label="ריווח טקסט"
            />
          </div>

          {/* Reset Button */}
          {hasChanges && (
            <button
              onClick={reset}
              className="w-full py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              איפוס הגדרות
            </button>
          )}

          {/* Accessibility Statement Link */}
          <a
            href="/accessibility"
            className="block text-center text-sm text-blue-600 hover:text-blue-700 underline py-2"
          >
            הצהרת נגישות
          </a>
        </div>
      </div>
    </>
  )
}

function ToggleButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center ${
        active
          ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
      }`}
      aria-pressed={active}
    >
      <span className={active ? 'text-blue-600' : 'text-gray-500'}>{icon}</span>
      <span className="text-xs font-medium leading-tight">{label}</span>
    </button>
  )
}
