export function SiteFooter() {
  return (
    <footer className="mt-4 w-full border-t border-slate-800/80 bg-slate-950/80 py-6 text-[11px] text-slate-500 section-appear section-appear-delay-lg">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-xl bg-slate-900/90 text-[12px] font-semibold text-slate-100 ring-1 ring-slate-700">
            A
          </span>
          <span>AutoBotWa Studio • Built for global product teams</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-slate-500">
            Made with Next.js, Tailwind CSS & Vercel
          </span>
          <div className="flex items-center gap-3 text-[15px]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-slate-400 transition hover:text-pink-400"
            >
              ⓘ
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="text-slate-400 transition hover:text-slate-200"
            >
              𝕏
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-sky-400"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


