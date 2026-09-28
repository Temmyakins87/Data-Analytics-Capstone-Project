import Image from 'next/image'
import { dashboardKpis, dashboardScreens, topCustomers } from '@/lib/project-data'
import { AgeGroupChart, BuyerTypeChart, GenderChart, MonthlyTrendChart, TopDrugsChart } from './dashboard-charts'
import { SectionHeading } from './section-heading'

export function Dashboard() {
  return (
    <section id="dashboard" aria-labelledby="dashboard-title" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        id="dashboard-title"
        eyebrow="03 — Power BI Dashboard"
        title="2023 performance at a glance"
        description="The original Power BI report, followed by an interactive recreation of its key visuals. Hover any chart to see exact values."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {dashboardScreens.map((screen) => (
          <figure key={screen.src} className="overflow-hidden rounded-xl border bg-navy">
            <Image
              src={screen.src || '/placeholder.svg'}
              alt={screen.alt}
              width={2576}
              height={1215}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <figcaption className="border-t border-navy-foreground/10 px-5 py-3 text-sm font-medium text-navy-foreground">
              {screen.title}
            </figcaption>
          </figure>
        ))}
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {dashboardKpis.map((kpi) => (
          <div key={kpi.label} className="rounded-xl border bg-card p-5">
            <dt className="text-sm text-muted-foreground">{kpi.label}</dt>
            <dd className="mt-2 font-mono text-2xl font-semibold text-primary md:text-3xl">{kpi.value}</dd>
            <dd className="mt-2 text-xs font-medium text-ring">{kpi.note}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <MonthlyTrendChart />
        <BuyerTypeChart />
        <TopDrugsChart />
        <AgeGroupChart />
        <GenderChart />
      </div>

      <div className="mt-4 rounded-xl border bg-card p-6">
        <h3 className="font-semibold">Top 5 customers by revenue</h3>
        <ol className="mt-5 grid gap-3 sm:grid-cols-5">
          {topCustomers.map((customer, index) => (
            <li key={customer.name} className="rounded-lg bg-secondary p-4">
              <span className="font-mono text-xs text-muted-foreground">#{index + 1}</span>
              <p className="mt-1 text-sm font-medium text-secondary-foreground">{customer.name}</p>
              <p className="mt-1 font-mono text-lg font-semibold text-primary">${customer.revenue}M</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
