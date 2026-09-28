import { schemaTables, sqlQuery } from '@/lib/project-data'
import { SectionHeading } from './section-heading'

export function SqlSection() {
  return (
    <section id="sql" aria-labelledby="sql-title" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          invert
          id="sql-title"
          eyebrow="04 — PostgreSQL"
          title="A star schema built for sales analysis"
          description="One sales fact table joined to drug, customer, geography, and date dimensions, so revenue, profit, and COGS can be sliced any way leadership asks."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-xl border border-navy-foreground/10 lg:col-span-3">
            <div className="flex items-center justify-between border-b border-navy-foreground/10 bg-navy-foreground/5 px-4 py-3">
              <span className="font-mono text-xs text-navy-foreground/70">monthly_performance.sql</span>
              <span className="rounded bg-sky/15 px-2 py-0.5 font-mono text-xs text-sky">PostgreSQL 16</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-navy-foreground/90">
              <code>{sqlQuery}</code>
            </pre>
          </div>

          <ul className="flex flex-col gap-3 lg:col-span-2" aria-label="Database tables">
            {schemaTables.map((table) => (
              <li key={table.name} className="rounded-lg border border-navy-foreground/10 bg-navy-foreground/5 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-semibold text-sky">{table.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      table.type === 'Fact' ? 'bg-sky text-navy' : 'bg-navy-foreground/10 text-navy-foreground/80'
                    }`}
                  >
                    {table.type}
                  </span>
                </div>
                <p className="mt-2 font-mono text-xs leading-relaxed text-navy-foreground/60">{table.columns}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
