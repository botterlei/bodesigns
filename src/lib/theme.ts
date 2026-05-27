export type Theme = 'light' | 'dark'

export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  try {
    const t = window.localStorage.getItem('theme')
    return t === 'light' || t === 'dark' ? t : null
  } catch {
    return null
  }
}

export function getResolvedTheme(): Theme {
  const stored = getStoredTheme()
  if (stored) return stored
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function setTheme(theme: Theme) {
  applyTheme(theme)
  try {
    window.localStorage.setItem('theme', theme)
  } catch {
    /* noop */
  }
}
