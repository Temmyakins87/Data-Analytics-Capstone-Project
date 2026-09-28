import { lumoraChallenges, lumoraFacts, lumoraTables } from '@/lib/lumora-data'
import { LumoraQueryExplorer } from './lumora-query-explorer'
import { SectionHeading } from './section-heading'

export function LumoraSection() {
  return (
    <section id="sql-case" aria-labelledby="lumora-title" className="border-y bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="lumora-title"
          eyebrow="06 — Project 2 · SQL Case Study"
          title="Lumora Beauty: sales performance analysis in PostgreSQL"
          description="Lumora Beauty is a fast-growing African beauty and personal care brand selling skincare, haircare, makeup, and fragrances in-store, online, and through a mobile app. After the company moved its data into a relational database, I wrote the SQL that answers management's key business questions."
        />

        <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {lumoraFacts.map((fact) => (
            <div key={fact.label} className="rounded-xl border bg-card p-5">
              <dt className="text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="mt-1 font-mono text-3xl font-semibold text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="rounded-xl border bg-card p-6 lg:col-span-2">
            <h3 className="font-semibold text-foreground">The business problem</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {lumoraChallenges.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-ring" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-6 lg:col-span-3">
            <h3 className="font-semibold text-foreground">Relational schema</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2" aria-label="Lumora Beauty database tables">
              {lumoraTables.map((table) => (
                <li
                  key={table.name}
                  className={`rounded-lg border p-3 ${table.type === 'Fact' ? 'border-navy bg-navy text-navy-foreground sm:col-span-2' : 'bg-secondary/60'}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`font-mono text-sm font-semibold ${table.type === 'Fact' ? 'text-sky' : 'text-foreground'}`}>
                      {table.name}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                        table.type === 'Fact' ? 'bg-sky text-navy' : 'bg-card text-muted-foreground'
                      }`}
                    >
                      {table.type}
                    </span>
                  </div>
                  <p
                    className={`mt-1.5 font-mono text-xs leading-relaxed ${table.type === 'Fact' ? 'text-navy-foreground/65' : 'text-muted-foreground'}`}
                  >
                    {table.columns}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">13 business questions, answered in SQL</h3>
          <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Pick a question from finance, operations, marketing, product, or management to see the query that answers it.
          </p>
          <div className="mt-8">
            <LumoraQueryExplorer />
          </div>
        </div>
      </div>
    </section>
  )
}
