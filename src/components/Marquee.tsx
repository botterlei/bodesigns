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
    <ul className="grid gap-8 md:gap-10 md:grid-cols-2">
      {items.map((it) => {
        const content = (
          <span className="flex flex-col gap-2">
            <span className="font-display text-xl md:text-2xl tracking-tight text-balance leading-snug">
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
          <li key={it.label}>
            {it.href ? (
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline block"
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
  )
}
