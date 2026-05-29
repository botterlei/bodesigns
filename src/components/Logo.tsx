import { Link } from 'react-router-dom'

type LogoProps = {
  className?: string
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
      <line x1="16" y1="0" x2="16" y2="32" />
      <line x1="0" y1="16" x2="32" y2="16" />
      <circle cx="16" cy="16" r="10" />
      <rect x="16" y="8" width="6.5" height="16" />
    </svg>
  )
}

export default function Logo({ className = '', asLink = true }: LogoProps) {
  const inner = (
    <>
      <Mark className="h-8 w-8 lg:h-9 lg:w-9 shrink-0" />
      <span
        aria-hidden="true"
        className="h-7 lg:h-8 w-px bg-current opacity-30"
      />
      <span className="font-display font-light text-xl lg:text-2xl tracking-tight leading-none">
        bodesigns<span className="text-muted">.com</span>
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
