export function Features() {
  return (
    <section
      id="features"
      className="section-appear section-appear-delay pb-14 pt-4"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Designed for serious product teams
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Everything you need to orchestrate global WhatsApp automation.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-400 sm:text-[13px]">
          Use AutoBotWa Studio as your central nervous system for notifications,
          nudges, lifecycle campaigns and human‑in‑the‑loop support across
          markets.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.95)] transition hover:-translate-y-1.5 hover:border-cyan-400/60 hover:bg-slate-900/90">
          <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-500/40">
            <span className="text-lg">◎</span>
          </div>
          <h3 className="mb-1.5 text-sm font-semibold text-slate-50">
            Visual journey canvas
          </h3>
          <p className="mb-3 text-xs leading-relaxed text-slate-400">
            Drag‑and‑drop triggers, delays, conditions and message templates to
            design flows that feel like Figma boards, not dev tickets.
          </p>
          <p className="mt-auto text-[11px] font-medium text-sky-300">
            Ship flows 5x faster with zero backend changes.
          </p>
        </article>

        <article className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.95)] transition hover:-translate-y-1.5 hover:border-emerald-400/60 hover:bg-slate-900/90">
          <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="text-lg">∞</span>
          </div>
          <h3 className="mb-1.5 text-sm font-semibold text-slate-50">
            Production‑grade automation
          </h3>
          <p className="mb-3 text-xs leading-relaxed text-slate-400">
            Time‑zone aware scheduling, idempotent retries, rate limiting and
            regional routing baked into every flow out of the box.
          </p>
          <p className="mt-auto text-[11px] font-medium text-emerald-300">
            Stay compliant while scaling to millions of events.
          </p>
        </article>

        <article className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.95)] transition hover:-translate-y-1.5 hover:border-violet-400/60 hover:bg-slate-900/90">
          <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-violet-400/15 text-violet-300 ring-1 ring-violet-500/40">
            <span className="text-lg">📊</span>
          </div>
          <h3 className="mb-1.5 text-sm font-semibold text-slate-50">
            Cohort‑level analytics
          </h3>
          <p className="mb-3 text-xs leading-relaxed text-slate-400">
            Break down performance by cohort, geography and journey step. See
            exactly where users drop and what saves them.
          </p>
          <p className="mt-auto text-[11px] font-medium text-violet-300">
            Close the loop with product and growth in one dashboard.
          </p>
        </article>
      </div>
    </section>
  );
}


