import { ArrowDown, ArrowRight, MessageSquare, FileDown } from "lucide-react"
import { motion } from "framer-motion"
import { site } from "../data/content"
import { downloadResume } from "../lib/downloadResume"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-28 lg:px-8"
    >
      {/* Background patterns */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgb(39_39_42_/_0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(39_39_42_/_0.35)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
      />

      <motion.div
        className="relative mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* شارة توفر العمل كمستقل */}
        <motion.p
          variants={fadeUpVariant}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs tracking-[0.18em] text-sky-400 uppercase shadow-inner backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          Available for Freelance Projects
        </motion.p>

        <motion.h1
          variants={fadeUpVariant}
          className="font-display text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
        >
          {site.headline}
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          {site.subheadline}
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {/* زر عرض الأعمال */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-sky-500/20 transition-all duration-300 hover:bg-sky-400 hover:shadow-sky-400/30"
          >
            {site.primaryCta}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>

          {/* زر لبدء مشروع / التواصل المباشر */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-50 shadow-md transition-all duration-300 hover:border-sky-500/50 hover:bg-zinc-800/80 hover:shadow-zinc-800/50"
          >
            <MessageSquare
              size={16}
              className="text-sky-400 transition-transform duration-300 group-hover:scale-110"
            />
            Start a Project
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-zinc-500 uppercase transition-colors duration-300 hover:text-zinc-200"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown
              size={14}
              className="transition-colors duration-300 group-hover:text-sky-400"
            />
          </motion.span>
        </a>
      </motion.div>
    </section>
  )
}