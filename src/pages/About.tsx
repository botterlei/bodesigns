import Container from '@/components/Container'
import SEO from '@/lib/seo'
import { skills, tools, education } from '@/content/resume'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <SEO
        path="/about"
        title="About"
        description="Brent Otterlei — senior product designer with 20+ years of experience designing systems and shipping products."
      />
      <Container className="pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6">About</p>
        <h1 className="display-1 max-w-[18ch] text-balance">
          I design products.
        </h1>
      </Container>

      <Container width="reading" className="pb-16 md:pb-24">
        <div className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed text-pretty">
          <p>
            I'm Brent Otterlei — a senior product designer with 20+ years of experience.
            I've worked at Walmart Labs (Sam's Club mobile), VISA (Visa Checkout), and
            startups like Clip — where I was employee #2, helped take the company from a
            back room in a Redwood City coffee house to offices in Menlo Park and Mexico
            City, and watched it become one of the fastest-growing FinTech startups in
            Latin America.
          </p>
          <p>
            My work has contributed to PlaySpan being acquired by VISA for $190M and
            FanSnap being acquired by NextTag. I've led design teams and worked as an IC.
            I'm currently at Workday designing AI-assisted experiences for talent
            management and benefits.
          </p>
          <p>
            I lead with research and design thinking, I sketch before I touch a pixel, and
            I treat every design decision as a business decision. I'm just as comfortable
            presenting strategy to a CEO and board as I am sitting in a club with a
            researcher watching someone struggle with our app.
          </p>
        </div>
      </Container>

      <Container as="section" className="py-12 md:py-20 rule">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Skills</p>
            <h2 className="display-2">What I do.</h2>
          </div>
          <div className="md:col-span-8 grid gap-8 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.title}>
                <div className="font-display text-xl mb-2">{s.title}</div>
                <p className="text-muted leading-relaxed">{s.details}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container as="section" className="py-12 md:py-20 rule">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Tools</p>
            <h2 className="display-2">Working set.</h2>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="font-mono text-xs uppercase tracking-[0.16em] border border-rule rounded-full px-3 py-2"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <Container as="section" className="py-12 md:py-20 rule">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Education</p>
            <h2 className="display-2">School.</h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">
            {education.map((e) => (
              <div key={`${e.school}-${e.degree}`} className="border-l border-rule pl-5">
                <div className="font-display text-xl">{e.school}</div>
                <div className="text-muted">
                  {e.degree}
                  {e.note ? ` — ${e.note}` : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="py-16 md:py-24">
        <p className="display-3 max-w-[24ch] text-balance">
          Want to talk?{' '}
          <a href="mailto:hello@bodesigns.com" className="link-underline text-accent">
            hello@bodesigns.com
          </a>{' '}
          or read more on the{' '}
          <Link to="/blog" className="link-underline">
            blog
          </Link>
          .
        </p>
      </Container>
    </>
  )
}
