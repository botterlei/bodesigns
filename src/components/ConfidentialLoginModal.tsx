import { useEffect, useId, useRef, useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  onLogin: (password: string) => boolean
}

function LockIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

export default function ConfidentialLoginModal({ open, onClose, onLogin }: Props) {
  const titleId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) return
    setPassword('')
    setError('')
    const t = window.setTimeout(() => inputRef.current?.focus(), 0)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = onLogin(password)
    if (!ok) {
      setError('Incorrect password. Try again or email hello@bodesigns.com for access.')
      setPassword('')
      inputRef.current?.focus()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-ink/40 dark:bg-ink/60 supports-[backdrop-filter]:backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-md rounded-lg border border-rule bg-paper dark:bg-ink p-6 md:p-8 shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rule">
            <LockIcon className="h-5 w-5" />
          </div>
          <div>
            <h2 id={titleId} className="font-display text-2xl tracking-tight">
              Confidential work
            </h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Some case studies are under NDA. Enter the access password to view Workday
              projects.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Password
            </span>
            <input
              ref={inputRef}
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (error) setError('')
              }}
              className="w-full rounded-lg border border-rule bg-paper-soft dark:bg-ink-soft px-4 py-3 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
          </label>

          {error ? (
            <p className="text-sm text-accent" role="alert">
              {error}
            </p>
          ) : null}

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-rule text-sm font-medium min-h-[44px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-medium min-h-[44px]"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
