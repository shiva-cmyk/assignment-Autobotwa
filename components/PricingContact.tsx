export function PricingContact() {
  return (
    <section
      id="pricing"
      className="section-appear section-appear-delay-lg pb-16"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Simple pricing while you scale
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Start with one squad, expand to every journey.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-400 sm:text-[13px]">
          Transparent plans optimised for modern SaaS and fast‑moving teams. All
          tiers include enterprise‑grade security, audit logs and WhatsApp Cloud
          API support.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="glass relative overflow-hidden rounded-2xl border border-cyan-400/60 bg-slate-950/90 p-5 shadow-[0_32px_110px_rgba(56,189,248,0.55)]">
          <div className="absolute inset-0 opacity-25 mix-blend-screen">
            <div className="orb-gradient orb-primary h-44 w-44 translate-x-10 -translate-y-10" />
          </div>
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Growth Squad
                </p>
                <p className="mt-2 text-3xl font-semibold text-slate-50">
                  $129
                  <span className="ml-1 text-sm font-normal text-slate-400">
                    /month
                  </span>
                </p>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-200 ring-1 ring-emerald-400/60">
                Most teams start here
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              For product, lifecycle and support squads who want one shared
              canvas for all WhatsApp automation, from onboarding to winback and
              proactive support.
            </p>
            <ul className="grid gap-2 text-[11px] text-slate-200 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Up to 5 workspaces and 10 teammates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Unlimited journeys & message templates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Experimentation, flags & cohort analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Priority onboarding with a dedicated specialist</span>
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-900 shadow-[0_16px_70px_rgba(148,163,184,0.85)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Talk to us about fit
              </a>
              <p className="text-[10px] text-slate-400">
                No card required • Cancel anytime • Volume discounts above 100k
                MAU
              </p>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_24px_90px_rgba(15,23,42,0.95)]"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">
              Enterprise & partners
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-50">
              Let’s design your global WhatsApp blueprint.
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Hybrid support, advanced governance, regional data residency and
              multi‑brand setups for high‑scale teams.
            </p>
          </div>
          <form className="mt-1 space-y-2 text-xs">
            <div className="grid gap-2 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  Work email
                </label>
                <input
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  Monthly active users
                </label>
                <select className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500">
                  <option>&lt; 10k</option>
                  <option>10k – 50k</option>
                  <option>50k – 250k</option>
                  <option>250k – 1M</option>
                  <option>&gt; 1M</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-[11px] text-slate-300">
                What are you trying to improve?
              </label>
              <textarea
                rows={3}
                className="w-full resize-none rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
                placeholder="Onboarding funnel, activation, support deflection, winback..."
              />
            </div>
            <button
              type="submit"
              className="mt-1 w-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_18px_80px_rgba(34,211,238,0.6)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Request a strategy session
            </button>
            <p className="text-[10px] text-slate-500">
              We respond in &lt; 24 hours. SOC2‑ready, GDPR aligned.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}


