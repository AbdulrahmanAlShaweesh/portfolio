type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      <p className="text-xs font-medium tracking-[0.22em] text-sky-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  )
}
