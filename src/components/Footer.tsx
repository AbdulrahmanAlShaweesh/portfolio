import { site } from "../data/content"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        {/* Headline & Copyright */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="text-zinc-400">{site.headline}</p>
          <p className="text-xs text-zinc-600">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}