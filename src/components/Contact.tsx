import { FaLinkedin, FaArrowRight, FaCheckCircle } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { motion, type Variants } from "framer-motion"
import { type FormEvent, useState } from "react"
import { site } from "../data/content"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setStatus("sent")
    form.reset()
  }

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  }

  const contactMethods = [
    {
      icon: MdEmail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Contact throw LinkedIn",
      href: "",
    },
  ]

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Column: Info & Freelance Contact Methods */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <motion.div variants={fadeUpVariant}>
                  <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase">
                    Contact
                  </p>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight text-zinc-100 sm:text-2xl">
                    Let’s ship the next system
                  </h2>
                </motion.div>

                <motion.p
                  variants={fadeUpVariant}
                  className="mt-4 text-sm leading-relaxed text-zinc-400"
                >
                  Looking for a .NET and React engineer who can own architecture,
                  delivery, and maintainable enterprise workflows? Reach out directly.
                </motion.p>

                {/* Contact options */}
                <motion.div variants={fadeUpVariant} className="mt-8 flex flex-col gap-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <motion.a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-3.5 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-3.5 transition-all duration-300 hover:border-sky-500/30 hover:bg-zinc-950/80"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-sky-400 group-hover:border-sky-500/40 group-hover:bg-sky-500/10 group-hover:text-sky-300 transition-all">
                          <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-zinc-500">{method.label}</span>
                          <span className="text-sm text-zinc-200 transition-colors group-hover:text-sky-400">{method.value}</span>
                        </div>
                      </motion.a>
                    )
                  })}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
              className="border-t border-zinc-800 p-8 sm:p-10 lg:border-t-0 lg:border-l"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.label variants={fadeUpVariant} className="block text-sm text-zinc-300">
                  Name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-zinc-50 outline-none ring-sky-500/40 placeholder:text-zinc-600 focus:border-sky-500 focus:ring-2 transition-all duration-200"
                    placeholder="Your name"
                  />
                </motion.label>

                <motion.label variants={fadeUpVariant} className="block text-sm text-zinc-300">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-zinc-50 outline-none ring-sky-500/40 placeholder:text-zinc-600 focus:border-sky-500 focus:ring-2 transition-all duration-200"
                    placeholder="you@company.com"
                  />
                </motion.label>
              </div>

              <motion.label variants={fadeUpVariant} className="mt-4 block text-sm text-zinc-300">
                Project details
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-zinc-50 outline-none ring-sky-500/40 placeholder:text-zinc-600 focus:border-sky-500 focus:ring-2 transition-all duration-200"
                  placeholder="Scope, stack, and timeline"
                />
              </motion.label>

              <motion.div variants={fadeUpVariant} className="mt-5 flex items-center gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-md shadow-sky-500/10 transition-all duration-300 hover:bg-sky-400 hover:shadow-sky-400/20"
                >
                  Send message
                  <FaArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </motion.div>

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 flex items-center gap-2 text-sm text-sky-400"
                >
                  <FaCheckCircle className="shrink-0" />
                  <span>Your mail client should open with the inquiry filled in.</span>
                </motion.div>
              ) : null}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}