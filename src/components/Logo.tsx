import { Link } from 'react-router-dom'

type LogoProps = {
  className?: string
  showTagline?: boolean
  asLink?: boolean
}

function Mark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
    >
      <line x1="0" y1="16" x2="32" y2="16" />
      <line x1="16" y1="0" x2="16" y2="5.5" />
      <line x1="16" y1="26.5" x2="16" y2="32" />
      <circle cx="16" cy="16" r="9.5" />
      <rect x="12" y="9.5" width="7.5" height="13" />
    </svg>
  )
}

export default function Logo({
  className = '',
  showTagline = true,
  asLink = true,
}: LogoProps) {
  const inner = (
    <>
      <Mark className="h-8 w-8 lg:h-9 lg:w-9 shrink-0" />
      <span
        aria-hidden="true"
        className="h-7 lg:h-8 w-px bg-current opacity-30"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display font-light text-xl lg:text-2xl tracking-tight">
          designs<span className="text-muted">.com</span>
        </span>
        {showTagline ? (
          <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Brent Otterlei
            <span aria-hidden="true" className="mx-2 opacity-60">
              ·
            </span>
            Sr. Product
          </span>
        ) : null}
      </span>
    </>
  )

  const base = 'group items-center gap-3'

  if (!asLink) {
    return <span className={`${base} ${className}`}>{inner}</span>
  }

  return (
    <Link
      to="/"
      aria-label="Brent Otterlei — bodesigns.com — Home"
      className={`${base} ${className}`}
    >
      {inner}
    </Link>
  )
}
