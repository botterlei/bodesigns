import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  cta?: { to: string; label: string }
  align?: 'left' | 'center'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  cta,
  align = 'left',
}: Props) {
  return (
    <header
      className={`flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : ''
      }`}
    >
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2 className="display-2 text-balance max-w-[20ch]">{title}</h2>
      {description ? (
        <p className="text-muted text-base md:text-lg max-w-[60ch] text-pretty">
          {description}
        </p>
      ) : null}
      {cta ? (
        <Link
          to={cta.to}
          className="mt-2 inline-flex items-center gap-2 link-underline text-sm font-mono uppercase tracking-[0.16em]"
        >
          {cta.label}
          <span aria-hidden>→</span>
        </Link>
      ) : null}
    </header>
  )
}
