import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import { useConfidentialAccess } from './ConfidentialAccessProvider'
import type { WorkFrontmatter } from '@/lib/content'

type Props = {
  frontmatter: WorkFrontmatter
  backTo?: string
  backLabel?: string
}

export default function ConfidentialWorkGate({
  frontmatter,
  backTo = '/work',
  backLabel = '← All work',
}: Props) {
  const { login } = useConfidentialAccess()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = login(password)
    if (!ok) {
      setError('Incorrect password. Try again or email hello@bodesigns.com for access.')
      setPassword('')
    }
  }

  return (
    <>
      <Container className="pt-12 md:pt-20 pb-8">
        <Link
          to={backTo}
          className="link-underline text-sm font-mono uppercase tracking-[0.16em] text-muted"
        >
          {backLabel}
        </Link>
      </Container>

      <Container frosted className="pb-24">
        <div className="max-w-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rule mb-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
          </div>

          <p className="eyebrow mb-4">Confidential</p>
          <h1 className="display-2 text-balance">{frontmatter.title}</h1>
          <p className="mt-4 text-lg text-muted text-pretty">
            This case study is under NDA. Sign in with your access password to view the
            full write-up.
          </p>

          {frontmatter.summary ? (
            <p className="mt-6 text-base text-muted border-l border-rule pl-4">
              {frontmatter.summary}
            </p>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 max-w-sm">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Password
              </span>
              <input
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

            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-medium min-h-[44px] w-fit"
            >
              Sign in to view
            </button>
          </form>

          <p className="mt-8 text-sm text-muted">
            Need access?{' '}
            <a href="mailto:hello@bodesigns.com" className="link-underline text-accent">
              hello@bodesigns.com
            </a>
          </p>
        </div>
      </Container>
    </>
  )
}
