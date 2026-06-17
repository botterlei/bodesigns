import Container from '@/components/Container'
import SEO from '@/lib/seo'
import { PROCESS_STEPS } from '@/components/ProcessStrip'
import { Link } from 'react-router-dom'

const AI_PRACTICE = [
  {
    title: 'Research synthesis',
    body: 'Compressing interview notes, workshop output, and competitive audits into themes — then stress-testing them with the team.',
  },
  {
    title: 'Ideation & documentation',
    body: 'Accelerating first drafts of flows, copy, and specs. The thinking stays human; AI handles the repetitive lift.',
  },
  {
    title: 'Prototyping',
    body: 'Spinning up functional prototypes faster — this site included — so validation happens sooner.',
  },
  {
    title: 'Critical eye',
    body: 'Knowing where AI helps, where it hallucinates, and when to ignore it entirely.',
  },
]

export default function Process() {
  return (
    <>
      <SEO
        path="/process"
        title="Process"
        description="A repeatable six-step product design process — research, synthesis, ideate, prototype, validate, metrics — accelerated by AI where it earns its place."
      />
      <Container className="pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-16">
        <p className="eyebrow mb-6">Process</p>
        <h1 className="display-1 max-w-[20ch] text-balance">
          The same six steps, every product.
        </h1>
        <p className="mt-6 max-w-[55ch] text-lg md:text-xl text-muted text-pretty">
          Whether the project is two weeks (Twine’s retirement visualizer) or two
          years (Clip’s payment platform), the underlying loop is the same. AI
          compresses synthesis, documentation, and prototyping — it doesn’t replace
          the rigor.
        </p>
      </Container>

      <Container frosted className="pb-16 md:pb-24">
        <ol className="grid gap-12 md:gap-16">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.id} className="grid gap-6 md:grid-cols-12 md:gap-12 rule pt-12 first:pt-0 first:border-0">
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

      <Container as="section" frosted className="py-12 md:py-20 rule">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">AI in the practice</p>
            <h2 className="display-2 text-balance">Faster, not shortcut.</h2>
            <p className="mt-4 text-muted text-pretty leading-relaxed">
              AI is integrated throughout the loop below — not a separate phase. These
              are the places it actually earns its keep.
            </p>
          </div>
          <div className="md:col-span-8 grid gap-4 sm:grid-cols-2">
            {AI_PRACTICE.map((item) => (
              <div
                key={item.title}
                className="border border-rule rounded-lg p-5 md:p-6 bg-paper-soft dark:bg-ink-soft"
              >
                <div className="font-display text-lg md:text-xl mb-2">{item.title}</div>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container frosted className="py-16 md:py-24 rule">
        <p className="display-3 max-w-[24ch] text-balance">
          See it in action.{' '}
          <Link to="/work" className="link-underline text-accent">
            Browse the case studies
          </Link>{' '}
          — including{' '}
          <Link to="/work/workday-talent-management" className="link-underline">
            AI work at Workday
          </Link>{' '}
          — or jump into the{' '}
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
    'For Clip I flew to Mexico City and ran merchant + consumer workshops. For Sam’s I sat with a researcher in a Concord club. For Twine we audited 15 retirement calculators on the market. AI helps synthesize notes and transcripts afterward — the discipline of seeing the user in their context doesn’t change.',
  synthesis:
    'Findings on a wall, posted notes, clusters, headlines. The point is to leave with a thesis the cross-functional team can argue with. At Sam’s the synthesis surfaced three buckets: member engagement, shopping, and "most loved membership." AI accelerates the clustering; the judgment call is still human.',
  ideate:
    'Notebook first. Then large sheets on the wall and a critique. For Clip I jumped straight to HiFi to compress the time-to-engineering hand-off; for Twine I diverged twice before converging on a quiz-first format. AI is useful for variation and copy drafts — convergence still happens in the room.',
  prototype:
    'Lo-fi paper, clickable InVision, coded Framer/Principle, or in Twine’s case the built-in Figma prototyping when the timeline only allowed two weeks. AI-assisted tooling (including this portfolio site) shortens the path to something testable. The right fidelity is still the one that answers the next question.',
  validate:
    'For Clip we used monthly pop-up mercados in Mexico City. For Sam’s our researcher ran our prototype in the club twice. For Twine we tested side-by-side against NerdWallet. Real users, real context, real friction — no substitute.',
  metrics:
    'Frequently Ordered Items at Sam’s was a $37.4M annualized GMV lift. Clip processed $1B+ pesos. Twine had 3x Apple App of the Day and a 4.6 rating. Design that doesn’t move the business doesn’t survive.',
}
