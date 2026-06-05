import { Link } from 'react-router-dom'
import type { WorkFrontmatter } from '@/lib/content'
import { isConfidentialWork } from '@/lib/confidential-access'
import { useConfidentialAccess } from './ConfidentialAccessProvider'

type Props = {
  work: WorkFrontmatter & { slug: string }
  layout?: 'large' | 'compact'
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

export default function CaseStudyCard({ work, layout = 'large' }: Props) {
  const { slug, title, client, role, year, summary, cover, tags, metrics } = work
  const { unlocked, openLogin } = useConfidentialAccess()
  const isLarge = layout === 'large'
  const locked = isConfidentialWork(work) && !unlocked
  const workPath = `/work/${slug}`

  const cardVisual = (
    <div
      className="relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-[16/10] bg-paper-soft dark:bg-ink-soft border border-rule"
      style={
        cover
          ? {
              backgroundImage: `url(${cover})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {!cover ? (
        <>
          <span className="absolute top-4 left-4 w-3 h-px bg-muted/50" />
          <span className="absolute top-4 left-4 w-px h-3 bg-muted/50" />
          <span className="absolute top-4 right-4 w-3 h-px bg-muted/50" />
          <span className="absolute top-4 right-4 w-px h-3 bg-muted/50" />
          <span className="absolute bottom-4 left-4 w-3 h-px bg-muted/50" />
          <span className="absolute bottom-4 left-4 w-px h-3 bg-muted/50" />
          <span className="absolute bottom-4 right-4 w-3 h-px bg-muted/50" />
          <span className="absolute bottom-4 right-4 w-px h-3 bg-muted/50" />

          {year ? (
            <span className="absolute top-5 left-7 text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
              {year}
            </span>
          ) : null}
          {tags && tags[0] ? (
            <span className="absolute top-5 right-7 text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
              {tags[0]}
            </span>
          ) : null}

          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
            <span className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance text-ink/85 dark:text-paper/85 max-w-[16ch]">
              {client ?? title}
            </span>
            {client && client !== title ? (
              <span className="mt-4 text-xs font-mono uppercase tracking-[0.18em] text-muted">
                {role}
              </span>
            ) : null}
          </div>
        </>
      ) : null}

      {locked ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-paper/55 dark:bg-ink/55 supports-[backdrop-filter]:backdrop-blur-[2px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rule bg-paper/80 dark:bg-ink/80">
            <LockIcon className="h-5 w-5" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Sign in to view
          </span>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </div>
  )

  const cardMeta = (
    <div className={`mt-5 flex flex-col gap-2 ${isLarge ? '' : 'mt-4'}`}>
      <div className="flex items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.16em] text-muted">
        <span>{[client, role].filter(Boolean).join(' · ')}</span>
        {year ? <span>{year}</span> : null}
      </div>
      <h3
        className={`${
          isLarge ? 'display-3' : 'font-display text-2xl'
        } group-hover:text-accent transition-colors text-balance`}
      >
        {title}
      </h3>
      {summary ? (
        <p className="text-muted text-pretty max-w-[55ch]">{summary}</p>
      ) : null}
      {metrics && metrics.length > 0 ? (
        <ul className="mt-3 grid grid-cols-3 gap-3 text-sm">
          {metrics.slice(0, 3).map((m) => (
            <li key={m.label} className="border-l border-rule pl-3">
              <div className="font-display text-xl leading-tight">{m.value}</div>
              <div className="text-muted text-[11px] uppercase tracking-[0.12em] font-mono mt-1">
                {m.label}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
      {tags && tags.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted border border-rule rounded-full px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )

  const className =
    'group block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-ink rounded-lg'

  if (locked) {
    return (
      <button
        type="button"
        onClick={() => openLogin(workPath)}
        className={`${className} w-full text-left`}
        aria-label={`Sign in to view ${title}`}
      >
        {cardVisual}
        {cardMeta}
      </button>
    )
  }

  return (
    <Link to={workPath} className={className}>
      {cardVisual}
      {cardMeta}
    </Link>
  )
}
