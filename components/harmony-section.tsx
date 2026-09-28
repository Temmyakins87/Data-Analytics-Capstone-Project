import Image from 'next/image'
import {
  harmonyCases,
  harmonyExcelSkills,
  harmonyFacts,
  harmonyRecommendations,
  harmonySources,
} from '@/lib/harmony-data'
import { SectionHeading } from './section-heading'

export function HarmonySection() {
  return (
    <section id="excel" aria-labelledby="harmony-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="harmony-title"
          eyebrow="07 — Project 3 · Excel Capstone"
          title="Café Harmony: an operations dashboard built in Excel"
          description="Café Harmony is a fast-growing virtual café chain serving drinks, snacks, and light meals across several city locations. I combined five operational datasets into one Excel dashboard so management can spot growth opportunities and operational gaps."
        />

        <div className="mt-8 flex flex-wrap items-center gap-2" aria-label="Data sources">
          <span className="mr-1 text-sm text-muted-foreground">Data sources:</span>
          {harmonySources.map((s) => (
            <span key={s} className="rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
              {s}
            </span>
          ))}
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {harmonyFacts.map((fact) => (
            <div key={fact.label} className="rounded-xl border bg-card p-5">
              <dt className="text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="mt-1 font-mono text-3xl font-semibold text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <figure className="mt-8 overflow-hidden rounded-xl border bg-card">
          <div className="flex items-center justify-between gap-4 border-b bg-navy px-5 py-3">
            <span className="text-sm font-semibold text-navy-foreground">Café Harmony dashboard</span>
            <span className="rounded-full bg-sky px-2.5 py-0.5 text-xs font-medium text-navy">Microsoft Excel</span>
          </div>
          <Image
            src="/images/harmony-dashboard.jpg"
            alt="Café Harmony Excel dashboard with charts for customer rating, monthly sales trend, revenue by product, sales by gender, sales by preferred item, stock performance, top employees, and a KPI summary table"
            width={2667}
            height={1500}
            className="h-auto w-full"
            sizes="(min-width: 1152px) 1104px, 100vw"
          />
          <figcaption className="flex flex-wrap gap-2 border-t px-5 py-3">
            {harmonyExcelSkills.map((skill) => (
              <span key={skill} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground">
                {skill}
              </span>
            ))}
          </figcaption>
        </figure>

        <div className="mt-16">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">Six business cases, six findings</h3>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {harmonyCases.map((c) => (
              <li key={c.label} className="flex flex-col rounded-xl border bg-card p-6">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ring">{c.label}</span>
                <h4 className="mt-2 font-semibold text-foreground">{c.area}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.finding}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 rounded-xl bg-navy p-8 text-navy-foreground md:p-10">
          <h3 className="text-xl font-semibold tracking-tight">Recommendations to management</h3>
          <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
            {harmonyRecommendations.map((r) => (
              <li key={r} className="flex gap-3 text-sm leading-relaxed text-navy-foreground/80">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-sky" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
