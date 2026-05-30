import { Link } from 'react-router-dom'
import Container from '@/components/Container'
import SEO from '@/lib/seo'
import { getAllBlog } from '@/lib/content'

export default function BlogIndex() {
  const posts = getAllBlog()
  return (
    <>
      <SEO
        path="/blog"
        title="Blog"
        description="Writing on product design, AI in the design practice, systems thinking, and the business of shipping software."
      />
      <Container className="pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6">Blog</p>
        <h1 className="display-1 max-w-[20ch] text-balance">
          Thoughts on Design, AI, etc.
        </h1>
      </Container>

      <Container frosted className="pb-24">
        <ul className="grid gap-10">
          {posts.map((p) => (
            <li key={p.slug} className="rule pt-10">
              <Link to={`/blog/${p.slug}`} className="group block">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-3">
                  {formatDate(p.frontmatter.date)}
                </div>
                <h2 className="display-2 group-hover:text-accent transition-colors text-balance">
                  {p.frontmatter.title}
                </h2>
                {p.frontmatter.summary ? (
                  <p className="mt-4 text-lg text-muted max-w-[60ch] text-pretty">
                    {p.frontmatter.summary}
                  </p>
                ) : null}
                <span className="mt-4 inline-flex items-center gap-2 link-underline text-sm font-mono uppercase tracking-[0.16em]">
                  Read <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

function formatDate(d: string): string {
  try {
    return new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return d
  }
}
