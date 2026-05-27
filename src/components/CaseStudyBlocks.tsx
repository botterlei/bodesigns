import type { ReactNode } from 'react'

/**
 * Native MDX building blocks for case studies. Registered globally via the
 * MDXProvider in WorkDetail.tsx so MDX files can use them without imports.
 */

type WithChildren = { children?: ReactNode }

export function Lede({ children }: WithChildren) {
  return (
    <p className="font-display text-2xl md:text-3xl leading-snug text-balance text-ink dark:text-paper max-w-[34ch] mb-12 mt-2">
      {children}
    </p>
  )
}

type SectionProps = WithChildren & {
  eyebrow?: string
  title?: string
  number?: string | number
}

export function Section({ eyebrow, title, number, children }: SectionProps) {
  return (
    <section className="mt-20 md:mt-28 first:mt-0">
      <header className="mb-8 md:mb-10">
        {(eyebrow || number) && (
          <div className="flex items-baseline gap-4 mb-3 text-muted">
            {number !== undefined && (
              <span className="font-mono text-xs tracking-[0.16em] text-accent">
                {String(number).padStart(2, '0')}
              </span>
            )}
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          </div>
        )}
        {title && (
          <h2 className="display-3 text-balance max-w-[26ch] mt-0 mb-0">{title}</h2>
        )}
      </header>
      <div className="case-study-prose">{children}</div>
    </section>
  )
}

type PullProps = WithChildren & {
  attribution?: string
}

export function Pull({ children, attribution }: PullProps) {
  return (
    <figure className="my-12 md:my-16 border-l-2 border-accent pl-6 md:pl-8 max-w-[32ch]">
      <blockquote className="font-display text-2xl md:text-3xl leading-tight text-balance text-ink dark:text-paper">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-xs font-mono uppercase tracking-[0.16em] text-muted">
          — {attribution}
        </figcaption>
      )}
    </figure>
  )
}

type CalloutProps = WithChildren & {
  label?: string
}

export function Callout({ label = 'Insight', children }: CalloutProps) {
  return (
    <aside className="my-10 border border-rule bg-paper-soft dark:bg-ink-soft rounded-lg p-6 md:p-7">
      <div className="text-xs font-mono uppercase tracking-[0.16em] text-accent mb-3">
        {label}
      </div>
      <div className="text-pretty text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </aside>
  )
}

type FigureSlotProps = {
  /** Figure number, e.g. "01" — auto-padded if you pass an integer. */
  number?: string | number
  /** Big label inside the frame. */
  label: string
  /** Sub-label inside the frame (date, location, etc.). */
  meta?: string
  /** Caption beneath the frame. */
  caption?: string
  /** Aspect ratio of the frame. Defaults to 16/10. */
  aspect?: '16/10' | '16/9' | '4/3' | '3/2' | '1/1' | '21/9'
  /** Variant for visual variety across many figures. */
  tone?: 'paper' | 'ink' | 'accent'
}

export function FigureSlot({
  number,
  label,
  meta,
  caption,
  aspect = '16/10',
  tone = 'paper',
}: FigureSlotProps) {
  const aspectClass =
    aspect === '16/9'
      ? 'aspect-[16/9]'
      : aspect === '4/3'
        ? 'aspect-[4/3]'
        : aspect === '3/2'
          ? 'aspect-[3/2]'
          : aspect === '1/1'
            ? 'aspect-square'
            : aspect === '21/9'
              ? 'aspect-[21/9]'
              : 'aspect-[16/10]'

  const toneClasses =
    tone === 'ink'
      ? 'bg-ink text-paper border-ink dark:bg-paper dark:text-ink dark:border-paper'
      : tone === 'accent'
        ? 'bg-accent text-paper border-accent'
        : 'bg-paper-soft text-ink border-rule dark:bg-ink-soft dark:text-paper'

  const figureNumber =
    number !== undefined
      ? typeof number === 'number'
        ? String(number).padStart(2, '0')
        : number
      : undefined

  return (
    <figure className="my-12 md:my-16">
      <div
        className={`relative overflow-hidden rounded-md border ${aspectClass} ${toneClasses}`}
      >
        {/* corner ticks */}
        <span className="absolute top-3 left-3 w-3 h-px bg-current opacity-40" />
        <span className="absolute top-3 left-3 w-px h-3 bg-current opacity-40" />
        <span className="absolute top-3 right-3 w-3 h-px bg-current opacity-40" />
        <span className="absolute top-3 right-3 w-px h-3 bg-current opacity-40" />
        <span className="absolute bottom-3 left-3 w-3 h-px bg-current opacity-40" />
        <span className="absolute bottom-3 left-3 w-px h-3 bg-current opacity-40" />
        <span className="absolute bottom-3 right-3 w-3 h-px bg-current opacity-40" />
        <span className="absolute bottom-3 right-3 w-px h-3 bg-current opacity-40" />

        {figureNumber && (
          <span className="absolute top-4 left-6 text-[10px] font-mono uppercase tracking-[0.2em] opacity-70">
            Fig. {figureNumber}
          </span>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <span className="font-display text-2xl md:text-4xl leading-tight max-w-[24ch] text-balance">
            {label}
          </span>
          {meta && (
            <span className="mt-3 text-[11px] font-mono uppercase tracking-[0.18em] opacity-70">
              {meta}
            </span>
          )}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-muted text-pretty max-w-[60ch]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

type MetricsRowProps = {
  items: { value: string; label: string }[]
}

export function MetricsRow({ items }: MetricsRowProps) {
  return (
    <ul className="my-12 md:my-14 grid gap-6 sm:gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {items.map((m) => (
        <li key={m.label} className="border-t border-rule pt-4">
          <div className="font-display text-3xl md:text-4xl leading-none">{m.value}</div>
          <div className="text-muted text-[11px] font-mono uppercase tracking-[0.16em] mt-3">
            {m.label}
          </div>
        </li>
      ))}
    </ul>
  )
}

type ProcessListProps = {
  steps: { title: string; body: string }[]
}

export function ProcessList({ steps }: ProcessListProps) {
  return (
    <ol className="my-10 grid gap-6 md:gap-8">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className="grid grid-cols-[auto_1fr] gap-4 md:gap-6 items-baseline"
        >
          <span className="font-mono text-xs tracking-[0.16em] text-accent w-8">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <div className="font-display text-xl md:text-2xl mb-1.5 text-balance">
              {s.title}
            </div>
            <p className="text-pretty text-base md:text-lg leading-relaxed text-muted max-w-[60ch]">
              {s.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

type TwoColProps = WithChildren & {
  /** Optional sidebar content — passed as a separate prop to keep MDX usage simple. */
  aside?: ReactNode
  /** Reverse the order on desktop. */
  flip?: boolean
}

export function TwoCol({ children, aside, flip }: TwoColProps) {
  return (
    <div
      className={`my-12 grid gap-8 md:gap-12 md:grid-cols-[2fr_1fr] ${
        flip ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="case-study-prose">{children}</div>
      {aside && (
        <aside className="md:pt-1 text-sm md:text-base text-muted text-pretty">
          {aside}
        </aside>
      )}
    </div>
  )
}
