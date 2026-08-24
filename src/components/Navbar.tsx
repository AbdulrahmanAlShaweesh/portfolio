import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { navLinks, site } from "../data/content"
import { downloadResume } from "../lib/downloadResume"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#top" className="font-display text-sm font-bold tracking-tight text-zinc-50 transition-opacity hover:opacity-80">
          fullstack
          <span className="text-sky-400">.dev</span>
          
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={downloadResume}
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-md shadow-sky-500/10 transition-colors duration-200 hover:bg-sky-400"
          >
            {site.secondaryCta}
          </motion.button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="rounded-lg border border-zinc-800 p-2 text-zinc-300 transition-colors hover:bg-zinc-900 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-zinc-300 transition-colors hover:text-sky-400"
                >
                  {link.label}
                </a>
              ))}
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setOpen(false)
                  downloadResume()
                }}
                className="mt-2 w-full rounded-full bg-sky-500 px-4 py-2.5 text-center text-sm font-semibold text-zinc-950 transition-colors hover:bg-sky-400"
              >
                {site.secondaryCta}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}