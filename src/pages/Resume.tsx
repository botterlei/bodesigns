import Container from '@/components/Container'
import SEO from '@/lib/seo'
import { experience, education, tools, skills } from '@/content/resume'

export default function Resume() {
  return (
    <>
      <SEO
        path="/resume"
        title="Résumé"
        description="Brent Otterlei — product design experience, skills, and tools across 20+ years."
      />
      <Container className="pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-16 print:pt-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6">Résumé</p>
            <h1 className="display-1 text-balance">Brent Otterlei.</h1>
            <p className="mt-4 text-lg md:text-xl text-muted max-w-[55ch] text-pretty">
              Senior Product Designer. 20+ years across FinTech, e-commerce, payments and
              enterprise HR.
            </p>
          </div>
          <div className="flex gap-3 print:hidden">
            <button
              type="button"
              onClick={() => (typeof window !== 'undefined' ? window.print() : null)}
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-medium min-h-[44px]"
            >
              Print / Save PDF
            </button>
            <a
              href="mailto:hello@bodesigns.com"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-rule text-sm font-medium min-h-[44px]"
            >
              Email me
            </a>
          </div>
        </div>
      </Container>

      <Container as="section" className="pb-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">Experience</p>
          </div>
          <ol className="md:col-span-9 grid gap-12">
            {experience.map((e) => (
              <li
                key={`${e.company}-${e.start}`}
                className="grid gap-3 md:grid-cols-[160px_1fr] md:gap-8 border-t border-rule pt-8"
              >
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {e.start} — {e.end}
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="font-display text-2xl">{e.role}</div>
                    <div className="text-muted">{e.company}</div>
                  </div>
                  <p className="text-base leading-relaxed text-pretty">{e.blurb}</p>
                  {e.metrics && e.metrics.length > 0 ? (
                    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                      {e.metrics.map((m) => (
                        <li key={m.label} className="border-l border-rule pl-3">
                          <div className="font-display text-lg">{m.value}</div>
                          <div className="text-muted text-[11px] font-mono uppercase tracking-[0.12em] mt-1">
                            {m.label}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {e.highlights && e.highlights.length > 0 ? (
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-muted">
                      {e.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <Container as="section" className="py-12 rule">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">Skills</p>
          </div>
          <div className="md:col-span-9 grid gap-6 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.title}>
                <div className="font-display text-lg">{s.title}</div>
                <p className="text-sm text-muted leading-relaxed">{s.details}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container as="section" className="py-12 rule">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">Tools</p>
          </div>
          <div className="md:col-span-9 flex flex-wrap gap-2">
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

      <Container as="section" className="py-12 rule">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">Education</p>
          </div>
          <div className="md:col-span-9 grid gap-4">
            {education.map((e) => (
              <div key={`${e.school}-${e.degree}`}>
                <div className="font-display text-lg">{e.school}</div>
                <div className="text-sm text-muted">
                  {e.degree}
                  {e.note ? ` — ${e.note}` : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
