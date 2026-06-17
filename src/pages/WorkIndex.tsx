import Container from '@/components/Container'
import CaseStudyCard from '@/components/CaseStudyCard'
import SEO from '@/lib/seo'
import { getAllWork } from '@/lib/content'

export default function WorkIndex() {
  const work = getAllWork()
  const aiWork = work.filter((w) =>
    w.frontmatter.tags?.some((t) => t.toLowerCase().includes('ai')),
  )
  const aiSlugs = new Set(aiWork.map((w) => w.slug))
  const otherWork = work.filter((w) => !aiSlugs.has(w.slug))

  return (
    <>
      <SEO
        path="/work"
        title="Work"
        description="Case studies, write-ups, and selected projects across 20+ years of product design — including AI-assisted experiences at Workday."
      />
      <Container className="pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6">Work</p>
        <h1 className="display-1 max-w-[20ch] text-balance">
          My Work.
        </h1>
        <p className="mt-6 max-w-[55ch] text-lg md:text-xl text-muted text-pretty">
          Selected projects across FinTech, e-commerce, and enterprise HR — including
          AI-assisted talent management and benefits at Workday. Confidential
          write-ups are gated; reach out for a walk-through.
        </p>
      </Container>

      {aiWork.length > 0 ? (
        <Container as="section" frosted className="pb-16 md:pb-20 rule">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16 mb-12">
            <div className="md:col-span-4">
              <p className="eyebrow mb-3">AI in product</p>
              <h2 className="display-2 text-balance">Intelligence inside the workflow.</h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-4 text-lg text-muted text-pretty leading-relaxed">
              <p>
                A growing thread through my recent work: embedding AI assistance into
                products people already use — not as a bolt-on, but woven into talent
                management, benefits, and the HR workflows that run inside Workday.
              </p>
              <p>
                These projects sit behind enterprise NDAs. Sign in on the locked cards
                below, or email{' '}
                <a className="link-underline text-accent" href="mailto:hello@bodesigns.com">
                  hello@bodesigns.com
                </a>{' '}
                for a confidential walk-through.
              </p>
            </div>
          </div>
          <div className="grid gap-12 md:gap-16 md:grid-cols-2">
            {aiWork.map((item) => (
              <CaseStudyCard
                key={item.slug}
                work={{ ...item.frontmatter, slug: item.slug }}
                layout="compact"
              />
            ))}
          </div>
        </Container>
      ) : null}

      <Container frosted className="pb-24">
        <p className="eyebrow mb-8">All projects</p>
        <div className="grid gap-12 md:gap-16 md:grid-cols-2">
          {otherWork.map((item) => (
            <CaseStudyCard
              key={item.slug}
              work={{ ...item.frontmatter, slug: item.slug }}
              layout="compact"
            />
          ))}
        </div>
      </Container>
    </>
  )
}
