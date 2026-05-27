import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Link = { to: string; label: string }

type Props = {
  open: boolean
  onClose: () => void
  links: Link[]
}

export default function MobileNav({ open, onClose, links }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    onClose()
  }, [location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const first = dialogRef.current?.querySelector<HTMLElement>('a, button')
    first?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-50 lg:hidden bg-paper dark:bg-ink overflow-y-auto"
    >
      <div className="flex items-center justify-between h-16 px-5">
        <span className="font-display text-xl">Menu</span>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <nav
        className="px-5 pt-6 pb-12 flex flex-col gap-1"
        aria-label="Primary mobile"
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="display-3 py-3 border-b border-rule"
            onClick={onClose}
          >
            {l.label}
          </Link>
        ))}
        <div className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          bodesigns.com
        </div>
      </nav>
    </div>
  )
}
