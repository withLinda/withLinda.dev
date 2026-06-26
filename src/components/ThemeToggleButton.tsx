import { useEffect, useRef, useState } from 'react'
import {
  IoContrastOutline,
  IoMoonOutline,
  IoOptionsOutline,
  IoSunnyOutline,
} from 'react-icons/io5'

type Appearance = 'light' | 'dark'
type Contrast = 'hard' | 'medium' | 'soft'

interface ThemeParts {
  appearance: Appearance
  contrast: Contrast
}

const themeStorageKey = 'withlinda-theme'
const appearances: Array<{ value: Appearance; label: string }> = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]
const contrasts: Array<{ value: Contrast; label: string }> = [
  { value: 'hard', label: 'Hard' },
  { value: 'medium', label: 'Medium' },
  { value: 'soft', label: 'Soft' },
]
const defaultTheme: ThemeParts = { appearance: 'light', contrast: 'hard' }

function systemTheme(): ThemeParts {
  const appearance = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  const contrast = window.matchMedia('(prefers-contrast: low)').matches
    ? 'soft'
    : 'hard'

  return { appearance, contrast }
}

function parseTheme(value: string | null): ThemeParts | undefined {
  if (!value) {
    return undefined
  }

  const [appearance, contrast] = value.split('-')
  if (
    (appearance === 'light' || appearance === 'dark') &&
    (contrast === 'hard' || contrast === 'medium' || contrast === 'soft')
  ) {
    return { appearance, contrast }
  }

  return undefined
}

function readAppliedTheme(): ThemeParts {
  if (typeof window === 'undefined') {
    return defaultTheme
  }

  try {
    return (
      parseTheme(document.documentElement.dataset.theme ?? null) ??
      parseTheme(localStorage.getItem(themeStorageKey)) ??
      systemTheme()
    )
  } catch {
    return systemTheme()
  }
}

export default function ThemeToggleButton() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [theme, setTheme] = useState<ThemeParts>(readAppliedTheme)
  const selectorRef = useRef<HTMLDivElement>(null)

  const updateTheme = (next: ThemeParts) => {
    setTheme(next)
    try {
      localStorage.setItem(
        themeStorageKey,
        `${next.appearance}-${next.contrast}`
      )
    } catch {
      // The theme still updates for this page when storage is blocked.
    }
  }

  const toggleAppearance = () => {
    updateTheme({
      ...theme,
      appearance: theme.appearance === 'light' ? 'dark' : 'light',
    })
  }

  useEffect(() => {
    const root = document.documentElement
    const nextThemeKey = `${theme.appearance}-${theme.contrast}`
    root.classList.toggle('dark', theme.appearance === 'dark')
    root.dataset.theme = nextThemeKey
    root.dataset.contrast = theme.contrast
    root.style.colorScheme = theme.appearance
  }, [theme])

  useEffect(() => {
    setTheme(readAppliedTheme())
  }, [])

  useEffect(() => {
    if (!isPanelOpen) {
      return
    }

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        event.target instanceof Node &&
        !selectorRef.current.contains(event.target)
      ) {
        setIsPanelOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPanelOpen(false)
      }
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isPanelOpen])

  const nextAppearance = theme.appearance === 'light' ? 'dark' : 'light'
  const AppearanceIcon =
    theme.appearance === 'light' ? IoSunnyOutline : IoMoonOutline

  return (
    <div className="theme-selector-shell" ref={selectorRef}>
      <button
        type="button"
        className="theme-selector-toggle"
        onClick={toggleAppearance}
        aria-label={`Switch to ${nextAppearance} theme`}
        title={`Switch to ${nextAppearance} theme`}
      >
        <AppearanceIcon aria-hidden="true" className="theme-selector-icon" />
      </button>

      <button
        type="button"
        className="theme-selector-settings"
        onClick={() => setIsPanelOpen((open) => !open)}
        aria-expanded={isPanelOpen}
        aria-label="More theme options"
        title="More theme options"
      >
        <IoOptionsOutline aria-hidden="true" className="theme-selector-icon" />
      </button>

      {isPanelOpen && (
        <div
          className="theme-selector-panel"
          role="group"
          aria-label="Theme choices"
        >
          <div className="theme-selector-section">
            <span className="theme-selector-label">Mode</span>
            <div className="theme-selector-grid theme-selector-grid--two">
              {appearances.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className="theme-selector-choice"
                  aria-pressed={theme.appearance === option.value}
                  onClick={() =>
                    updateTheme({ ...theme, appearance: option.value })
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="theme-selector-section">
            <span className="theme-selector-label">
              <IoContrastOutline
                aria-hidden="true"
                className="theme-selector-label__icon"
              />
              Contrast
            </span>
            <div className="theme-selector-grid theme-selector-grid--three">
              {contrasts.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className="theme-selector-choice"
                  aria-pressed={theme.contrast === option.value}
                  onClick={() =>
                    updateTheme({ ...theme, contrast: option.value })
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
