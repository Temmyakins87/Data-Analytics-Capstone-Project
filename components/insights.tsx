import { ArrowRight } from 'lucide-react'
import { insights } from '@/lib/project-data'
import { SectionHeading } from './section-heading'

export function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-title" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        id="insights-title"
        eyebrow="05 — Findings & Recommendations"
        title="What the numbers told leadership"
        description="Every finding is paired with a concrete, measurable action so the analysis translates directly into financial decisions."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {insights.map((item) => (
          <article key={item.title} className="flex flex-col rounded-xl border bg-card p-7">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-4xl font-semibold text-ring">{item.metric}</span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{item.finding}</p>
            <div className="mt-6 flex gap-3 rounded-lg bg-secondary p-4">
              <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-secondary-foreground">
                <span className="font-semibold">Recommendation: </span>
                {item.recommendation}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
