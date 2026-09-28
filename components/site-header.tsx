import { author } from '@/lib/project-data'

const links = [
  { href: '#overview', label: 'Overview' },
  { href: '#process', label: 'Process' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#sql', label: 'SQL' },
  { href: '#insights', label: 'Insights' },
  { href: '#sql-case', label: 'SQL Case' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-foreground/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-2.5 text-navy-foreground">
          <span className="flex size-8 items-center justify-center rounded-md bg-sky font-mono text-sm font-bold text-navy">
            {author.initials}
          </span>
          <span className="text-sm font-semibold">{author.name}</span>
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-navy-foreground/75 transition-colors hover:text-sky"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-sky px-4 py-2 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
