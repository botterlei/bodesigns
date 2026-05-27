import { Link, useParams } from 'react-router-dom'
import Container from '@/components/Container'
import SEO from '@/lib/seo'
import { getWorkBySlug, getAllWork } from '@/lib/content'
import { MDXProvider } from '@mdx-js/react'
import {
  Lede,
  Section,
  Pull,
  Callout,
  FigureSlot,
  MetricsRow,
  ProcessList,
  TwoCol,
} from '@/components/CaseStudyBlocks'

const mdxComponents = {
  h2: (props: Record<string, unknown>) => (
    <h2 className="display-3 mt-12 mb-4" {...(props as Record<string, never>)} />
  ),
  h3: (props: Record<string, unknown>) => (
    <h3 className="font-display text-xl mt-8 mb-3" {...(props as Record<string, never>)} />
  ),
  p: (props: Record<string, unknown>) => (
    <p className="text-lg leading-relaxed text-pretty mb-5" {...(props as Record<string, never>)} />
  ),
  ul: (props: Record<string, unknown>) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-lg" {...(props as Record<string, never>)} />
  ),
  ol: (props: Record<string, unknown>) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-lg" {...(props as Record<string, never>)} />
  ),
  a: (props: Record<string, unknown>) => (
    <a className="link-underline text-accent" {...(props as Record<string, never>)} />
  ),
  strong: (props: Record<string, unknown>) => (
    <strong className="font-semibold" {...(props as Record<string, never>)} />
  ),
  blockquote: (props: Record<string, unknown>) => (
    <blockquote
      className="border-l-2 border-accent pl-5 my-6 italic text-muted"
      {...(props as Record<string, never>)}
    />
  ),
  hr: () => <hr className="my-12 border-rule" />,
  Lede,
  Section,
  Pull,
  Callout,
  FigureSlot,
  MetricsRow,
  ProcessList,
  TwoCol,
}

export default function WorkDetail() {
  const { slug = '' } = useParams<{ slug: string }>()
  const item = getWorkBySlug(slug)

  if (!item) {
    return (
      <Container className="py-24">
        <p className="eyebrow mb-4">Not found</p>
        <h1 className="display-2">No case study at this URL.</h1>
        <Link to="/work" className="link-underline mt-4 inline-block">
          ← Back to work
        </Link>
      </Container>
    )
  }

  const { frontmatter, Component } = item
  const all = getAllWork()
  const idx = all.findIndex((w) => w.slug === slug)
  const prev = idx > 0 ? all[idx - 1] : undefined
  const next = idx < all.length - 1 ? all[idx + 1] : undefined

  return (
    <>
      <SEO
        path={`/work/${slug}`}
        title={frontmatter.title}
        description={frontmatter.summary}
        type="article"
      />

      <Container className="pt-12 md:pt-20 pb-8">
        <Link
          to="/work"
          className="link-underline text-sm font-mono uppercase tracking-[0.16em] text-muted"
        >
          ← All work
        </Link>
      </Container>

      <Container className="pb-12">
        <div className="grid gap-2 mb-6 text-xs font-mono uppercase tracking-[0.16em] text-muted">
          <span>
            {[frontmatter.client, frontmatter.role, frontmatter.year]
              .filter(Boolean)
              .join('  ·  ')}
          </span>
        </div>
        <h1 className="display-1 max-w-[22ch] text-balance">{frontmatter.title}</h1>

        {frontmatter.summary && (
          <p className="mt-8 max-w-[55ch] text-lg md:text-xl text-muted text-pretty">
            {frontmatter.summary}
          </p>
        )}

        {frontmatter.metrics && frontmatter.metrics.length > 0 ? (
          <ul className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 md:flex md:gap-12">
            {frontmatter.metrics.map((m) => (
              <li key={m.label}>
                <div className="font-display text-3xl md:text-5xl leading-none">
                  {m.value}
                </div>
                <div className="text-muted text-xs font-mono uppercase tracking-[0.16em] mt-2">
                  {m.label}
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>

      <Container width="reading" className="pb-12">
        <MDXProvider components={mdxComponents}>
          <Component />
        </MDXProvider>
      </Container>

      {frontmatter.team && frontmatter.team.length > 0 ? (
        <Container as="section" className="py-12 rule">
          <p className="eyebrow mb-4">Team</p>
          <ul className="grid gap-2 text-lg">
            {frontmatter.team.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Container>
      ) : null}

      <Container as="nav" className="py-16 grid gap-6 md:grid-cols-2 rule">
        {prev ? (
          <Link to={`/work/${prev.slug}`} className="group">
            <div className="eyebrow mb-2">Previous</div>
            <div className="display-3 group-hover:text-accent transition-colors">
              {prev.frontmatter.title}
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link to={`/work/${next.slug}`} className="md:text-right group">
            <div className="eyebrow mb-2">Next</div>
            <div className="display-3 group-hover:text-accent transition-colors">
              {next.frontmatter.title}
            </div>
          </Link>
        ) : (
          <div />
        )}
      </Container>
    </>
  )
}
