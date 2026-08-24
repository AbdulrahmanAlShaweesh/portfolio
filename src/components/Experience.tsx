import { BarChart3, Layers } from "lucide-react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { useRef } from "react"
import { experience } from "../data/content"
import { SectionHeading } from "./SectionHeading"

const icons = {
  "aspnet-fullstack": Layers,
  "data-analysis": BarChart3,
} as const

// تعريف الـ Variants للأنيميشن المركب مع تحديد Type وحل أخطاء TypeScript
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.15,
    },
  },
}

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Experience & Capabilities"
          description="Delivering tailored software architecture, custom ERP solutions, and data-driven insights for businesses and clients."
        />

        <div ref={containerRef} className="relative mx-auto mt-14 max-w-3xl">
          {/* الخط المتحرك التفاعلي */}
          <motion.div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[19px] w-px bg-zinc-800 sm:left-[23px] origin-top"
            style={{ scaleY }}
          />

          <ol className="space-y-8">
            {experience.map((role) => {
              const Icon = icons[role.id as keyof typeof icons] || Layers
              const badgeText =
                role.id === "aspnet-fullstack"
                  ? "Freelance & Consulting"
                  : "Business Solutions"

              return (
                <motion.li
                  key={role.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={cardVariants}
                  className="relative pl-14 sm:pl-16 group"
                >
                  {/* أنيميشن الأيقونة */}
                  <motion.span
                    variants={iconVariants}
                    className="absolute top-5 left-0 flex size-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-sky-400 sm:size-12 z-10 shadow-sm"
                  >
                    <Icon size={18} />
                  </motion.span>

                  {/* بطاقة التفاصيل مع تأثير الـ Hover وشارة Freelance */}
                  <motion.article
                    whileHover={{
                      y: -4,
                      borderColor: "#3f3f46",
                      backgroundColor: "rgba(39, 39, 42, 0.6)",
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-300 relative"
                  >
                    {/* العنوان الرئيسي + شارة Freelance */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold text-zinc-50">
                        {role.title}
                      </h3>
                      <span className="text-xs font-medium text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 w-fit">
                        {badgeText}
                      </span>
                    </div>

                    {/* النقاط الرئيسية */}
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
                      {role.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* التاقات / المهارات */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}