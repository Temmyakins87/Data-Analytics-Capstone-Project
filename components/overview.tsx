import { AlertTriangle, Target } from 'lucide-react'
import { author, project } from '@/lib/project-data'
import { SectionHeading } from './section-heading'

export function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading
            id="overview-title"
            eyebrow="01 — Business Context"
            title="Plenty of sales data, but no clear picture of growth."
          />
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{project.context}</p>
          <div className="mt-8 rounded-lg border-l-4 border-accent bg-secondary p-5">
            <p className="text-sm leading-relaxed text-secondary-foreground">
              As a <strong className="font-semibold">{author.role}</strong>, I approached NovaMed&apos;s data the way I
              approach any P&amp;L: start with revenue, profit, and cost, then find where performance is concentrated
              and where the risk sits.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border bg-card p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Key challenges</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3">
                  <AlertTriangle className="mt-0.5 size-5 shrink-0 text-ring" aria-hidden="true" />
                  <span className="leading-relaxed text-card-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-navy p-8 text-navy-foreground">
            <div className="flex items-center gap-2 text-sky">
              <Target className="size-5" aria-hidden="true" />
              <h3 className="font-semibold">Objective</h3>
            </div>
            <p className="mt-3 leading-relaxed text-navy-foreground/85">{project.objective}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Data analyzed">
              {project.dataScope.map((item) => (
                <li key={item} className="rounded-full bg-sky/15 px-3 py-1 text-xs font-medium text-sky">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
