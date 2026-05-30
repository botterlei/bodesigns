import Container from '@/components/Container'
import CaseStudyCard from '@/components/CaseStudyCard'
import SEO from '@/lib/seo'
import { getAllWork } from '@/lib/content'

export default function WorkIndex() {
  const work = getAllWork()

  return (
    <>
      <SEO
        path="/work"
        title="Work"
        description="Case studies, write-ups, and selected projects across 20+ years of product design."
      />
      <Container className="pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6">Work</p>
        <h1 className="display-1 max-w-[20ch] text-balance">
          My Work.
        </h1>
        <p className="mt-6 max-w-[55ch] text-lg md:text-xl text-muted text-pretty">
          Selected projects across FinTech, e-commerce, and enterprise HR. Workday
          write-ups are in progress — reach out for a confidential walk-through.
        </p>
      </Container>

      <Container frosted className="pb-24">
        <div className="grid gap-12 md:gap-16 md:grid-cols-2">
          {work.map((item) => (
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
