import { useEffect, useState } from 'react'
import { getResolvedTheme, setTheme, type Theme } from '@/lib/theme'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setLocalTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocalTheme(getResolvedTheme())
    setMounted(true)
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setLocalTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule hover:border-ink/60 dark:hover:border-paper/60 transition-colors ${className}`}
    >
      {mounted ? (
        theme === 'dark' ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )
      ) : (
        <span className="block h-4 w-4" />
      )}
    </button>
  )
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
