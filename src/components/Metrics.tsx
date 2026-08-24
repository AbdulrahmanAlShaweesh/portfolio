import { useRef, useState,type MouseEvent } from "react"
import { Box, Cloud, Code2, Database } from "lucide-react"
import { motion } from "framer-motion"
import { techStack } from "../data/content"
import { SectionHeading } from "./SectionHeading"

const categoryIcons = {
  frontend: Code2,
  backend: Database,
  architecture: Box,
  devops: Cloud,
} as const

// مكون SpotlighCard مع Framer Motion
function SpotlightCard({ children, index }: { children: React.ReactNode; index: number }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.article
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/60"
    >
      {/* طبقة الضوء الخفي التي تتبع الماوس */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.12), transparent 40%)`,
        }}
      />
      
      {/* المحتوى الداخلي للبطاقة */}
      <div className="relative z-10">{children}</div>
    </motion.article>
  )
}

export function TechStack() {
  return (
    <section id="stack" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Tech Stack"
          description="A production toolkit spanning frontend systems, .NET backends, architectural patterns, and delivery tooling."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {techStack.map((group, index) => {
            const Icon = categoryIcons[group.id]
            return (
              <SpotlightCard key={group.id} index={index}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 transition-transform duration-300 group-hover:scale-110">
                    {Icon ? <Icon size={18} /> : null}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-zinc-50">
                    {group.category}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.1 + itemIndex * 0.03,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-default rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300 transition-colors duration-200 hover:border-sky-500/50 hover:bg-zinc-900 hover:text-sky-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}