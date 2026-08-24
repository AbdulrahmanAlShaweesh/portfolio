import { ArrowUpRight, Check, ShieldLock } from "lucide-react"

type FeaturedProjectCardProps = {
  title: string
  type: string
  architecture: string
  stack: readonly string[]
  wins: readonly string[]
  href: string
}

type ConfidentialProjectCardProps = {
  domain: string
  description?: string
  stack?: readonly string[]
}

export function ProjectCard({
  title,
  type,
  architecture,
  stack,
  wins,
  href,
}: FeaturedProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50">
      <div className="h-1.5 bg-gradient-to-r from-sky-500 to-sky-300" />
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.18em] text-sky-400 uppercase">{type}</p>
            <h3 className="font-display mt-2 text-2xl font-bold text-zinc-50 sm:text-3xl">
              {title}
            </h3>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-sky-400 hover:text-sky-400"
          >
            Demo
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
          {architecture}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400"
            >
              {item}
            </span>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {wins.map((win) => (
            <li
              key={win}
              className="flex gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 text-sm leading-relaxed text-zinc-300"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-sky-400" />
              <span>{win}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function ConfidentialCard({
  domain,
  description,
  stack = [],
}: ConfidentialProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/60">
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs tracking-[0.16em] text-zinc-500 uppercase">
            Confidential
          </p>
          <ShieldLock size={15} className="text-zinc-600 transition-colors group-hover:text-sky-400" />
        </div>

        <h3 className="font-display mt-3 text-lg font-semibold text-zinc-50">
          {domain}
        </h3>

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        )}
      </div>

      {stack.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-800/60 pt-4">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] font-medium text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}