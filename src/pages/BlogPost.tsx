import { Link, useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import Container from '@/components/Container'
import SEO from '@/lib/seo'
import { getBlogBySlug } from '@/lib/content'

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
  blockquote: (props: Record<string, unknown>) => (
    <blockquote
      className="border-l-2 border-accent pl-5 my-6 italic text-muted"
      {...(props as Record<string, never>)}
    />
  ),
  code: (props: Record<string, unknown>) => (
    <code
      className="font-mono text-[0.95em] rounded bg-paper-soft dark:bg-ink-soft px-1.5 py-0.5"
      {...(props as Record<string, never>)}
    />
  ),
  pre: (props: Record<string, unknown>) => (
    <pre
      className="font-mono text-sm rounded-lg bg-paper-soft dark:bg-ink-soft p-4 my-6 overflow-x-auto"
      {...(props as Record<string, never>)}
    />
  ),
}

export default function BlogPost() {
  const { slug = '' } = useParams<{ slug: string }>()
  const post = getBlogBySlug(slug)

  if (!post) {
    return (
      <Container className="py-24">
        <p className="eyebrow mb-4">Not found</p>
        <h1 className="display-2">No post at this URL.</h1>
        <Link to="/blog" className="link-underline mt-4 inline-block">
          ← Back to blog
        </Link>
      </Container>
    )
  }

  const { frontmatter, Component } = post
  return (
    <>
      <SEO
        path={`/blog/${slug}`}
        title={frontmatter.title}
        description={frontmatter.summary}
        type="article"
      />
      <Container className="pt-12 md:pt-20 pb-8">
        <Link
          to="/blog"
          className="link-underline text-sm font-mono uppercase tracking-[0.16em] text-muted"
        >
          ← All posts
        </Link>
      </Container>
      <Container className="pb-10">
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-4">
          {formatDate(frontmatter.date)}
        </div>
        <h1 className="display-1 max-w-[24ch] text-balance">{frontmatter.title}</h1>
        {frontmatter.summary ? (
          <p className="mt-6 max-w-[60ch] text-lg md:text-xl text-muted text-pretty">
            {frontmatter.summary}
          </p>
        ) : null}
      </Container>
      <Container frosted width="reading" className="pb-24">
        <MDXProvider components={mdxComponents}>
          <Component />
        </MDXProvider>
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
