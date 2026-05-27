import type { ReactNode } from 'react'

export type MarqueeItem = {
  label: string
  href?: string
  source?: string
}

type Props = {
  items: MarqueeItem[]
  children?: ReactNode
}

export default function Marquee({ items }: Props) {
  return (
    <div className="overflow-hidden">
      <ul className="flex flex-wrap gap-x-10 gap-y-6 items-baseline md:flex-nowrap md:overflow-x-auto md:no-scrollbar md:snap-x md:snap-mandatory">
        {items.map((it) => {
          const content = (
            <span className="flex items-baseline gap-3 whitespace-nowrap">
              <span className="font-display text-xl md:text-2xl tracking-tight">
                {it.label}
              </span>
              {it.source ? (
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {it.source}
                </span>
              ) : null}
            </span>
          )
          return (
            <li key={it.label} className="md:snap-start md:flex-none">
              {it.href ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
