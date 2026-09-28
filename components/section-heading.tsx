type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
  invert?: boolean
}

export function SectionHeading({ eyebrow, title, description, id, invert }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className={`font-mono text-xs font-medium uppercase tracking-widest ${invert ? 'text-sky' : 'text-ring'}`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl ${invert ? 'text-navy-foreground' : 'text-foreground'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-pretty leading-relaxed ${invert ? 'text-navy-foreground/75' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
