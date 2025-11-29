export function Hero() {
  return (
    <section
      id="hero"
      className="section-appear grid gap-10 pb-12 pt-2 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center lg:gap-14 lg:pt-6"
    >
      <div className="space-y-7">
        <div className="inline-flex items-center gap-2 chip px-3 py-1 text-[11px] font-medium text-sky-100">
          <span className="inline-flex h-1.5 w-5 items-center justify-between">
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span className="h-1 w-1 rounded-full bg-violet-400" />
          </span>
          Live for 40+ countries
          <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
          Ship world‑class WhatsApp journeys in{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
            hours, not weeks.
          </span>
        </h1>
        <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
          AutoBotWa Studio lets product teams orchestrate onboarding, support
          and retention flows on WhatsApp with a visual canvas, production‑
          grade automation, and analytics that feel like Figma for
          conversations.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-[0_18px_80px_rgba(148,163,184,0.85)] transition hover:-translate-y-1 hover:bg-white"
          >
            Book a live demo
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] text-slate-100 transition group-hover:bg-slate-800">
              →
            </span>
          </a>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-md transition hover:border-slate-300/80 hover:text-slate-50">
            Watch 90s builder preview
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-slate-400">
          <div className="flex -space-x-2 overflow-hidden">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500" />
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-sky-400 to-violet-500" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-[10px] text-slate-200">
              +128
            </div>
          </div>
          <span>
            Trusted by growth teams in{" "}
            <span className="text-slate-100">Bangalore, Dubai, London</span>
          </span>
        </div>
      </div>

      <div className="section-appear section-appear-delay relative">
        <div className="absolute -top-10 right-3 h-24 w-24 sm:-top-14 sm:right-6 sm:h-28 sm:w-28 md:-top-16 md:right-0 md:h-32 md:w-32 globe-shell">
          <div className="globe-inner" />
        </div>
        <div className="glass relative mx-auto max-w-md rounded-3xl border border-slate-700/70 bg-slate-900/80 p-4 pt-8 shadow-[0_24px_90px_rgba(15,23,42,1)]">
          <div className="mb-3 flex items-center justify-between text-[11px] text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
              Live global automation
            </div>
            <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-sky-300">
              24/7
            </span>
          </div>
          <div className="mb-4 rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-900/90 to-slate-950/95 px-3 py-3">
            <div className="mb-3 flex items-center justify-between text-[11px] text-slate-300">
              <span className="font-medium text-slate-200">Onboarding journey</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
                +38% activation
              </span>
            </div>
            <div className="grid grid-cols-[18px,1fr] gap-x-2 gap-y-2 text-[11px] text-slate-200">
              <div className="mt-1 flex flex-col items-center">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="my-1 h-7 w-px bg-gradient-to-b from-emerald-400/70 via-cyan-400/50 to-transparent" />
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="my-1 h-7 w-px bg-gradient-to-b from-cyan-400/60 via-violet-400/40 to-transparent" />
                <span className="h-2 w-2 rounded-full bg-violet-400" />
              </div>
              <div className="space-y-2">
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    Trigger
                  </p>
                  <p className="text-xs font-medium text-slate-100">
                    User installs your app
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    Start WhatsApp welcome + checklist
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    Branching
                  </p>
                  <p className="text-xs font-medium text-slate-100">
                    If user replies within 30 mins
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    Guide to the “aha” moment with a 3‑step interactive flow
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2">
                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                      Outcome
                    </p>
                    <p className="text-xs font-medium text-emerald-100">
                      3.2x more users complete onboarding
                    </p>
                  </div>
                  <span className="text-right text-[11px] text-emerald-300">
                    Live
                    <br />
                    in 19 regions
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <p>
              Built visually. Executed on top of{" "}
              <span className="text-slate-100">WhatsApp Cloud API</span>.
            </p>
            <div className="text-right">
              <p className="font-semibold text-emerald-300">+27%</p>
              <p className="text-[9px] text-slate-500">LTV per cohort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


