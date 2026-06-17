import { Link } from 'react-router-dom'
import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import CaseStudyCard from '@/components/CaseStudyCard'
import ProcessStrip from '@/components/ProcessStrip'
import Marquee from '@/components/Marquee'
import SEO from '@/lib/seo'
import { getAllWork } from '@/lib/content'
import { press } from '@/content/press'

export default function Home() {
  const allWork = getAllWork()
  const featured = allWork.filter((w) => !w.frontmatter.client?.startsWith('Workday')).slice(0, 3)

  return (
    <>
      <SEO path="/" />
      <Hero />

      <Container as="section" frosted className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          eyebrow="Selected work"
          title="A few of the products I’m proud of."
          description="Two decades. Four industries. Products that shipped, scaled, and actually mattered."
          cta={{ to: '/work', label: 'See all work' }}
        />
        <div className="mt-12 md:mt-16 grid gap-12 md:gap-16">
          {featured.map((item) => (
            <CaseStudyCard
              key={item.slug}
              work={{ ...item.frontmatter, slug: item.slug }}
              layout="large"
            />
          ))}
        </div>
      </Container>

      <Container as="section" frosted className="py-20 md:py-28 lg:py-32 rule">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="About"
              title="Hi, I'm Brent."
            />
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 text-lg md:text-xl text-pretty leading-relaxed">
            <p>
            My process starts with research and doesn't skip the hard work in between — workshops, whiteboarding, and lo-fi concepts tested early and often.
            </p>
            <p>
            I use AI to accelerate the work without shortcutting the thinking. By the time pixels get placed, the hard decisions are already made.
            </p>
            <Link
              to="/about"
              className="link-underline text-sm font-mono uppercase tracking-[0.16em] mt-2 inline-flex items-center gap-2"
            >
              More about me <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Container>

      <Container as="section" frosted className="py-20 md:py-28 lg:py-32 rule">
        <SectionHeader
          eyebrow="Process"
          title="The double diamond, supercharged by AI."
          description="Research, synthesis, ideate, prototype, validate, track — Now faster than ever. Tap a step to dig in."
          cta={{ to: '/process', label: 'Read the process' }}
        />
        <div className="mt-12">
          <ProcessStrip />
        </div>
      </Container>

      <Container as="section" frosted className="py-20 md:py-28 lg:py-32 rule">
        <SectionHeader
          eyebrow="In the press"
          title="My work in the news."
        />
        <div className="mt-12">
          <Marquee
            items={press.map((p) => ({
              label: p.title,
              source: p.source,
              href: p.href,
            }))}
          />
        </div>
      </Container>
    </>
  )
}

function Hero() {
  return (
    <Container as="section" className="pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-28 lg:pb-28">
      <p className="eyebrow mb-6 fade-in-up">
        Sr Product Designer · Workday · Bay Area
      </p>
      <h1 className="display-1 text-balance max-w-[22ch] fade-in-up-delay-1">
        Designing{' '}
        <mark className="bg-accent text-paper px-[0.12em] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
          products
        </mark>{' '}
        that move businesses forward.
      </h1>
      <p className="mt-6 md:mt-8 max-w-[55ch] text-lg md:text-xl text-muted text-pretty fade-in-up-delay-2">
      Two decades of product design in FinTech, E-Commerce, and Enterprise HR — now shaping how AI changes the way people manage their benefits at Workday.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 fade-in-up-delay-2">
        <Link
          to="/work"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-medium min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-ink"
        >
          View work
        </Link>
        <Link
          to="/about"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-rule text-sm font-medium min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-ink"
        >
          About me
        </Link>
      </div>
    </Container>
  )
}
