import { Link } from 'react-router-dom'
import Container from '@/components/Container'
import SEO from '@/lib/seo'

export default function NotFound() {
  return (
    <>
      <SEO path="/404" title="404" description="Page not found." />
      <Container className="py-32 text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="display-1 max-w-[18ch] mx-auto text-balance">
          Nothing here. Yet.
        </h1>
        <p className="mt-6 max-w-[48ch] mx-auto text-muted text-lg">
          The page you were after doesn’t exist (or never did). Try one of these:
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center px-5 py-3 rounded-full border border-rule text-sm font-medium"
          >
            Work
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center px-5 py-3 rounded-full border border-rule text-sm font-medium"
          >
            Blog
          </Link>
        </div>
      </Container>
    </>
  )
}
