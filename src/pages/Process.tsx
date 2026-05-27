import Container from '@/components/Container'
import SEO from '@/lib/seo'
import { PROCESS_STEPS } from '@/components/ProcessStrip'
import { Link } from 'react-router-dom'

export default function Process() {
  return (
    <>
      <SEO
        path="/process"
        title="Process"
        description="A repeatable six-step product design process: research, synthesis, ideate, prototype, validate, metrics."
      />
      <Container className="pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6">Process</p>
        <h1 className="display-1 max-w-[20ch] text-balance">
          The same six steps, every product.
        </h1>
        <p className="mt-6 max-w-[55ch] text-lg md:text-xl text-muted text-pretty">
          Whether the project is two weeks (Twine’s retirement visualizer) or two
          years (Clip’s payment platform), the underlying loop is the same. The
          ceremony changes; the rigor doesn’t.
        </p>
      </Container>

      <Container className="pb-16 md:pb-24">
        <ol className="grid gap-12 md:gap-16">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.id} className="grid gap-6 md:grid-cols-12 md:gap-12 rule pt-12">
              <div className="md:col-span-4 flex items-baseline gap-4">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="display-2">{step.title}</h2>
              </div>
              <div className="md:col-span-8 flex flex-col gap-5 text-lg leading-relaxed text-pretty">
                <p>{step.description}</p>
                <p className="text-muted">{STEP_EXTENDED[step.id]}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <Container className="py-16 md:py-24 rule">
        <p className="display-3 max-w-[24ch] text-balance">
          See it in action.{' '}
          <Link to="/work" className="link-underline text-accent">
            Browse the case studies
          </Link>{' '}
          or jump into the{' '}
          <Link to="/work/clip-terminal" className="link-underline">
            Clip Terminal write-up
          </Link>{' '}
          for the long version.
        </p>
      </Container>
    </>
  )
}

const STEP_EXTENDED: Record<string, string> = {
  research:
    'For Clip I flew to Mexico City and ran merchant + consumer workshops. For Sam’s I sat with a researcher in a Concord club. For Twine we audited 15 retirement calculators on the market. The format changes — the discipline of seeing the user in their context doesn’t.',
  synthesis:
    'Findings on a wall, posted notes, clusters, headlines. The point is to leave with a thesis the cross-functional team can argue with. At Sam’s the synthesis surfaced three buckets: member engagement, shopping, and "most loved membership."',
  ideate:
    'Notebook first. Then large sheets on the wall and a critique. For Clip I jumped straight to HiFi to compress the time-to-engineering hand-off; for Twine I diverged twice before converging on a quiz-first format.',
  prototype:
    'Lo-fi paper, clickable InVision, coded Framer/Principle, or in Twine’s case the built-in Figma prototyping when the timeline only allowed two weeks. The right fidelity is the one that answers the next question.',
  validate:
    'For Clip we used monthly pop-up mercados in Mexico City. For Sam’s our researcher ran our prototype in the club twice. For Twine we tested side-by-side against NerdWallet. Real users, real context, real friction.',
  metrics:
    'Frequently Ordered Items at Sam’s was a $37.4M annualized GMV lift. Clip processed $1B+ pesos. Twine had 3x Apple App of the Day and a 4.6 rating. Design that doesn’t move the business doesn’t survive.',
}
