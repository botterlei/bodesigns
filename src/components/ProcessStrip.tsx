export const PROCESS_STEPS = [
  {
    id: 'research',
    title: 'Research',
    description:
      'Stakeholder interviews, on-site observation, journey mapping. Get out of the office and into the merchant’s shop, the member’s club, the user’s couch.',
  },
  {
    id: 'synthesis',
    title: 'Synthesis',
    description:
      'Cluster findings, articulate insights, frame the problem. Translate research into something a cross-functional team can act on.',
  },
  {
    id: 'ideate',
    title: 'Ideate',
    description:
      'Sketch first, never start in the computer. Diverge wide, share the wall, get feedback early before committing pixels.',
  },
  {
    id: 'prototype',
    title: 'Prototype',
    description:
      'Lo-fi to hi-fi as the story sharpens. Printable, clickable, coded — whatever the question demands.',
  },
  {
    id: 'validate',
    title: 'Validate',
    description:
      'Test with real users in their context. Iterate on what we learn. Repeat until the experience clears.',
  },
  {
    id: 'metrics',
    title: 'Metrics',
    description:
      'Tie the work back to business outcomes. Engagement, conversion, GMV, NPS. Design that doesn’t move the needle isn’t finished.',
  },
] as const

export default function ProcessStrip() {
  return (
    <div className="-mx-5 sm:-mx-6 md:mx-0">
      <ol className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar px-5 sm:px-6 md:px-0 pb-2">
        {PROCESS_STEPS.map((step, i) => (
          <li
            key={step.id}
            className="snap-start flex-none w-[80%] sm:w-[60%] md:w-auto border border-rule rounded-lg p-5 md:p-6 bg-paper-soft dark:bg-ink-soft"
          >
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="font-display text-xl md:text-2xl mt-2 mb-3">{step.title}</div>
            <p className="text-sm text-muted leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
