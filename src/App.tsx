import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <div className="relative min-h-screen flex flex-col text-ink dark:text-paper transition-colors">
      <div className="site-backdrop" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:bg-ink focus:text-paper dark:focus:bg-paper dark:focus:text-ink rounded"
      >
        Skip to content
      </a>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Nav />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
