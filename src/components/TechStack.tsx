import { useRef, MouseEvent } from "react"
import { Box, Cloud, Code2, Database } from "lucide-react"
import { motion } from "framer-motion"

// بيانات المهارات والتقنيات الموجهة للعمل الحر والعملاء
const clientTechStack = [
  {
    id: "frontend",
    category: "Modern Frontend Systems",
    items: ["React.js", "Angular", "Redux", "Tailwind CSS", "Hero UI", "JavaScript (ES6+)"],
  },
  {
    id: "backend",
    category: "Enterprise .NET Backends",
    items: [
      "C#",
      "ASP.NET Core",
      ".NET Framework",
      "RESTful Web APIs",
      "Microsoft SQL Server",
      "Entity Framework Core",
      "OAuth / JWT Security",
    ],
  },
  {
    id: "architecture",
    category: "System Architecture & Patterns",
    items: [
      "Clean / Onion Architecture",
      "N-Tier Architecture",
      "SOLID Principles",
      "OOP",
      "Role-Based Permissions",
      "Repository & Unit of Work",
      "Specification Pattern",
    ],
  },
  {
    id: "devops",
    category: "DevOps, BI & Delivery",
    items: [
      "Docker",
      "IIS CI/CD & Cloud Deployment",
      "Power BI Dashboards",
      "Git / GitHub",
      "Postman",
      "Stimulsoft Reports",
      "Caching & Performance Optimization",
    ],
  },
]

const categoryIcons = {
  frontend: Code2,
  backend: Database,
  architecture: Box,
  devops: Cloud,
} as const

function TechCard({
  group,
  index,
}: {
  group: (typeof clientTechStack)[number]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = categoryIcons[group.id as keyof typeof categoryIcons]

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty("--mouse-x", `${x}px`)
    cardRef.current.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-300 hover:border-sky-500/30 before:pointer-events-none before:absolute before:-inset-px before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
      style={{
        backgroundImage: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(56, 189, 248, 0.15), transparent 80%)`,
      }}
    >
      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-sky-400 transition-transform duration-300 group-hover:scale-110">
            {Icon ? <Icon size={18} /> : null}
          </span>
          <h3 className="text-xl font-semibold text-zinc-100">
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
              className="cursor-default rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300 transition-colors duration-200 hover:border-sky-500/50 hover:bg-zinc-900 hover:text-sky-300"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export function TechStack() {
  return (
    <section id="stack" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header مدمج لضمان توحيد الخط مع باقي الأقسام */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase">
            Capabilities
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
            A comprehensive production toolkit engineered for scalable web applications, robust enterprise backends, and data-driven client solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {clientTechStack.map((group, index) => (
            <TechCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}