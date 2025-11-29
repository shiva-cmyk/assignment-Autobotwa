export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-2xl section-appear">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-emerald-400 to-sky-500 shadow-[0_0_40px_rgba(45,212,191,0.75)]">
          <span className="text-lg font-semibold text-slate-950">A</span>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight text-slate-50">
            AutoBotWa Studio
          </p>
          <p className="text-[11px] text-slate-400">
            Global WhatsApp experience engine
          </p>
        </div>
      </div>
      <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
        <a href="#features" className="transition hover:text-slate-50">
          Features
        </a>
        <a href="#testimonials" className="transition hover:text-slate-50">
          Stories
        </a>
        <a href="#pricing" className="transition hover:text-slate-50">
          Pricing
        </a>
        <a href="#contact" className="transition hover:text-slate-50">
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-[0_12px_40px_rgba(34,211,238,0.55)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
        >
          Get early access
          <span className="text-[10px] text-slate-900/80">in 90 seconds</span>
        </a>
      </div>
      </div>
    </header>
  );
}
