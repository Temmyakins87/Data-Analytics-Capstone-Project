import { Mail } from 'lucide-react'
import { author } from '@/lib/project-data'

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-widest text-sky">Let&apos;s talk</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Looking for a financial analyst who speaks data?
            </h2>
            <p className="mt-4 leading-relaxed text-navy-foreground/75">
              I&apos;m open to financial analyst, FP&amp;A, and BI roles. I&apos;m happy to walk you through the full
              NovaMed Power BI report, SQL scripts, and Excel workbooks.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${author.email}`}
              className="flex items-center gap-2 rounded-md bg-sky px-5 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email me
            </a>
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-navy-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-sky hover:text-sky"
            >
              LinkedIn
            </a>
            <a
              href={author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-navy-foreground/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-sky hover:text-sky"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-navy-foreground/10 pt-8 text-sm text-navy-foreground/60 md:flex-row md:justify-between">
          <p>
            {author.name} · {author.role}
          </p>
          <p>
            {author.program} Capstone · {author.cohort}
          </p>
        </div>
      </div>
    </footer>
  )
}
