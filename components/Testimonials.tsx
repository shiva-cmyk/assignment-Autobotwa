export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-appear section-appear-delay-lg pb-14"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Teams already shipping on AutoBotWa
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            “This feels like a design tool, but for conversations.”
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-400 sm:text-[13px]">
          Built with product‑first teams in mind. No vendor lock‑in, no bloated
          CRMs — just a clean, opinionated layer on top of WhatsApp that
          respects your stack.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
        <article className="glass relative overflow-hidden rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-950/95 p-5 shadow-[0_30px_90px_rgba(16,185,129,0.45)]">
          <div className="absolute inset-0 opacity-30 mix-blend-screen">
            <div className="orb-gradient orb-primary h-40 w-40 -translate-x-10 -translate-y-10" />
          </div>
          <div className="relative space-y-3">
            <p className="text-[13px] leading-relaxed text-emerald-50">
              “We replaced a patchwork of internal tools with AutoBotWa Studio.
              Our team now prototypes a lifecycle idea in the morning and has it
              in production the same week — with clear{" "}
              <span className="font-semibold">WhatsApp‑native UX</span> and data
              we can actually trust.”
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-emerald-100">
                  Meera Iyer
                </p>
                <p className="text-[11px] text-emerald-200/80">
                  VP Product, Fintech super‑app (Series C)
                </p>
              </div>
              <div className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-200">
                +41% onboarding completion
              </div>
            </div>
          </div>
        </article>

        <article className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.95)]">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
              Product highlight
            </p>
            <h3 className="mb-1.5 text-sm font-semibold text-slate-50">
              Live experimentation on journeys
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Roll out new conversational paths behind feature flags, run A/B
              tests on copy, and shift traffic in real time without pinging
              engineering.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
            <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2">
              <dt className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Time to ship
              </dt>
              <dd className="mt-0.5 text-sm font-semibold text-slate-50">
                ↓ 68%
              </dd>
            </div>
            <div className="rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2">
              <dt className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Activation uplift
              </dt>
              <dd className="mt-0.5 text-sm font-semibold text-slate-50">
                +24%
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}


