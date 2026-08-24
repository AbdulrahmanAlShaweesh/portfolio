import { motion } from "framer-motion"
import { confidentialWork, featuredProject } from "../data/content"
import { ConfidentialCard, ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header مدمج لضمان اتساق الخط مع باقي الأقسام بدون font-display */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase">
            Selected work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
            A featured personal system alongside summarized enterprise domains delivered for corporate clients.
          </p>
        </div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="mt-14 transition-shadow duration-300"
        >
          <ProjectCard
            title={featuredProject.title}
            type={featuredProject.type}
            architecture={featuredProject.architecture}
            stack={featuredProject.stack}
            wins={featuredProject.wins}
            href={featuredProject.href}
          />
        </motion.div>

        {/* Confidential Enterprise Systems Section */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* تم إزالة font-display وتعديل الوزن والتناسق */}
            <h3 className="text-xl font-semibold text-zinc-100">
              Confidential enterprise systems
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
              {confidentialWork.description}
            </p>
          </motion.div>

          {/* الشبكة المعدلة مع التوسيط وتساوي الارتفاعات */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch">
            {confidentialWork.domains.map((item, index) => (
              <motion.div
                key={item.domain}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -3 }}
                className="flex w-full"
              >
                <ConfidentialCard
                  domain={item.domain}
                  description={item.description}
                  stack={item.stack}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}