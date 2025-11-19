export default function CTA() {
  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Book a strategy call</h2>
        <p className="mt-3 text-slate-300">Tell us about your goals. We'll share the fastest path to value and whether we're a fit.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          <a
            href="mailto:hello@oversee.ai?subject=Strategy%20Call%20Request"
            className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition-colors shadow"
          >
            Email Us
          </a>
          <a
            href="https://cal.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white font-medium px-5 py-3 hover:bg-white/20 transition-colors border border-white/10"
          >
            Schedule on Cal.com
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-400">Prefer a quick intro? Send a one-liner about your product and we'll reply same day.</p>
      </div>
    </section>
  )
}
