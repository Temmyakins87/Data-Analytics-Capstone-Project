'use client'

import { useState } from 'react'
import { lumoraQueries } from '@/lib/lumora-data'

export function LumoraQueryExplorer() {
  const [activeId, setActiveId] = useState(lumoraQueries[0].id)
  const active = lumoraQueries.find((q) => q.id === activeId) ?? lumoraQueries[0]
  const activeIndex = lumoraQueries.indexOf(active)

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <ol className="flex flex-col gap-2 lg:col-span-2" aria-label="Key analytical questions">
        {lumoraQueries.map((q, i) => {
          const isActive = q.id === activeId
          return (
            <li key={q.id}>
              <button
                type="button"
                onClick={() => setActiveId(q.id)}
                aria-pressed={isActive}
                aria-controls="lumora-query-panel"
                className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive
                    ? 'border-navy bg-navy text-navy-foreground'
                    : 'border-border bg-card text-foreground hover:border-ring/50'
                }`}
              >
                <span
                  className={`mt-0.5 font-mono text-xs font-semibold ${isActive ? 'text-sky' : 'text-muted-foreground'}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-medium leading-snug">{q.question}</span>
                  <span className={`text-xs ${isActive ? 'text-navy-foreground/65' : 'text-muted-foreground'}`}>
                    {q.team}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>

      <div className="lg:col-span-3">
        <div
          id="lumora-query-panel"
          aria-live="polite"
          className="overflow-hidden rounded-xl border border-navy bg-navy text-navy-foreground lg:sticky lg:top-24"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-navy-foreground/10 bg-navy-foreground/5 px-4 py-3">
            <span className="font-mono text-xs text-navy-foreground/70">
              {`q${String(activeIndex + 1).padStart(2, '0')}_${active.id.replace(/-/g, '_')}.sql`}
            </span>
            <span className="rounded bg-sky/15 px-2 py-0.5 font-mono text-xs text-sky">{active.concept}</span>
          </div>
          <div className="border-b border-navy-foreground/10 px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-wider text-sky">{active.team} asks</p>
            <p className="mt-1 text-pretty font-medium leading-relaxed">{active.question}</p>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-navy-foreground/90">
            <code>{active.sql}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
