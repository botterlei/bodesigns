import Container from '@/components/Container'
import CaseStudyCard from '@/components/CaseStudyCard'
import SEO from '@/lib/seo'
import { getAllWork } from '@/lib/content'

export default function AIShowcase() {
  const aiWork = getAllWork().filter((w) =>
    w.frontmatter.tags?.some((t) => t.toLowerCase().includes('ai')),
  )

  return (
    <>
      <SEO
        path="/ai"
        title="AI"
        description="AI-focused product design work, prototypes, and explorations from Brent Otterlei."
      />
      <Container className="pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6">AI showcase</p>
        <h1 className="display-1 max-w-[20ch] text-balance">
          How AI integrates into my process and products.
        </h1>
        <p className="mt-6 max-w-[55ch] text-lg md:text-xl text-muted text-pretty">
          A running collection of how I use AI inside my design practice and the products
          I work on. Workday’s talent management AI sits at the center; side projects
          and prototypes orbit around it.
        </p>
      </Container>

      <Container as="section" frosted className="pb-16 md:pb-24">
        <div className="grid gap-12 md:gap-16 md:grid-cols-2">
          {aiWork.length === 0 ? (
            <div className="md:col-span-2 border border-rule rounded-lg p-10 text-center">
              <p className="display-3 mb-2 max-w-[24ch] mx-auto">
                Public AI write-ups are in progress.
              </p>
              <p className="text-muted max-w-[55ch] mx-auto">
                Reach out at{' '}
                <a className="link-underline text-accent" href="mailto:hello@bodesigns.com">
                  hello@bodesigns.com
                </a>{' '}
                for a confidential walk-through of Workday’s AI talent management work.
              </p>
            </div>
          ) : (
            aiWork.map((item) => (
              <CaseStudyCard
                key={item.slug}
                work={{ ...item.frontmatter, slug: item.slug }}
                layout="compact"
              />
            ))
          )}
        </div>
      </Container>

      <Container as="section" frosted className="py-12 md:py-20 rule">
        <p className="eyebrow mb-3">Prototypes</p>
        <h2 className="display-2 max-w-[20ch] text-balance">
          Embedded AI prototype slots.
        </h2>
        <p className="mt-4 max-w-[55ch] text-muted">
          A place to live-embed Figma frames, Loom videos, or interactive demos. Drop in
          a prototype below — layout already accounts for portrait, landscape, and
          mobile aspect ratios.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <PrototypeSlot label="Prototype 1" />
          <PrototypeSlot label="Prototype 2" />
        </div>
      </Container>
    </>
  )
}

function PrototypeSlot({ label }: { label: string }) {
  return (
    <div className="aspect-[4/3] rounded-lg border border-dashed border-rule bg-paper-soft dark:bg-ink-soft flex items-center justify-center">
      <div className="text-center px-6">
        <div className="font-display text-2xl mb-2">{label}</div>
        <div className="text-muted text-sm">Embed slot — ready for Figma / Loom / iframe</div>
      </div>
    </div>
  )
}
