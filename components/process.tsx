import { pipeline, toolkit } from '@/lib/project-data'
import { SectionHeading } from './section-heading'

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-y bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="process-title"
          eyebrow="02 — Methodology"
          title="From raw ledger to executive insight"
          description="Each tool played a specific role in the pipeline, mirroring how a modern finance team moves from data preparation to decision support."
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {pipeline.map((item) => (
            <li key={item.step} className="relative flex flex-col rounded-xl border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-ring">{item.step}</span>
                <span className="rounded-full bg-navy px-2.5 py-0.5 text-xs font-medium text-navy-foreground">
                  {item.tool}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {toolkit.map((tool) => (
            <article key={tool.name} className="flex flex-col rounded-xl bg-navy p-7 text-navy-foreground">
              <h3 className="text-xl font-semibold">{tool.name}</h3>
              <p className="mt-1 text-sm text-sky">{tool.role}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${tool.name} skills`}>
                {tool.skills.map((skill) => (
                  <li key={skill} className="rounded-md bg-navy-foreground/10 px-2.5 py-1 text-xs font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-navy-foreground/15 pt-5 text-sm leading-relaxed text-navy-foreground/80">
                {tool.highlight}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
