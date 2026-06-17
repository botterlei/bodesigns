import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container'
import MobileNav from './MobileNav'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/resume', label: 'Résumé' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-30 bg-paper/85 supports-[backdrop-filter]:backdrop-blur-sm dark:bg-ink/80 border-b border-rule">
        <Container className="flex items-center justify-between h-16 lg:h-20">
          <Logo className="inline-flex" />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? 'text-ink dark:text-paper'
                      : 'text-muted hover:text-ink dark:hover:text-paper'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <ThemeToggle className="ml-2" />
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} links={links} />
    </>
  )
}
