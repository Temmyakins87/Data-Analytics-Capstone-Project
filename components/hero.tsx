import { ArrowDown, FileSpreadsheet, Database, BarChart3 } from 'lucide-react'
import { author, heroStats, project } from '@/lib/project-data'

const tools = [
  { name: 'Excel', icon: FileSpreadsheet },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Power BI', icon: BarChart3 },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-sky">
          <span>{author.program}</span>
          <span aria-hidden="true" className="text-navy-foreground/30">/</span>
          <span>{author.term}</span>
        </div>

        <h1
          id="hero-title"
          className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
        >
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/75">
          {project.tagline}
        </p>

        <ul className="mt-8 flex flex-wrap gap-3" aria-label="Tools used">
          {tools.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-4 py-1.5 text-sm font-medium text-sky"
            >
              <Icon className="size-4" aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#dashboard"
            className="rounded-md bg-sky px-5 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
          >
            View the dashboard
          </a>
          <a
            href="#overview"
            className="flex items-center gap-2 rounded-md border border-navy-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-sky hover:text-sky"
          >
            Read the case study
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-navy-foreground/10 bg-navy-foreground/10 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-navy px-6 py-6">
              <dt className="text-sm text-navy-foreground/65">{stat.label}</dt>
              <dd className="mt-1 font-mono text-3xl font-semibold text-sky">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
