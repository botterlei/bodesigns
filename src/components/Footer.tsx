import { Link } from 'react-router-dom'
import Container from './Container'

const social = [
  { label: 'Email', href: 'mailto:hello@bodesigns.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Read.cv', href: 'https://read.cv/' },
  { label: 'Dribbble', href: 'https://dribbble.com/' },
]

const internal = [
  { to: '/work', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/resume', label: 'Résumé' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="rule mt-24 pt-16 pb-10 lg:pt-24 w-full surface-frosted">
      <Container className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="display-3 mb-3">Let's build something.</div>
          <a
            href="mailto:hello@bodesigns.com"
            className="link-underline text-base"
          >
            hello@bodesigns.com
          </a>
        </div>
        <div>
          <div className="eyebrow mb-4">Site</div>
          <ul className="grid gap-2">
            {internal.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Elsewhere</div>
          <ul className="grid gap-2">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="link-underline text-sm"
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-12 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs font-mono uppercase tracking-[0.18em] text-muted">
        <span>© {year} Brent Otterlei. All rights reserved.</span>
        <span>Designed and built in California</span>
      </Container>
    </footer>
  )
}
