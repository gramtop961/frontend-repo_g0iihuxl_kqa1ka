export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-300">Two focused offerings designed to unlock momentum.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-slate-200/80 text-xs uppercase">Fractional CTO</div>
            <h3 className="mt-2 text-xl text-white font-semibold">Technology leadership on-demand</h3>
            <p className="mt-3 text-slate-300">
              Architecture decisions, platform choices, team design, SDLC, DevOps, and security. We align your technical direction to business goals and remove delivery friction.
            </p>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Technical strategy and roadmap</li>
              <li>SDLC, CI/CD, and DevOps implementation</li>
              <li>Hiring, mentoring, and team structure</li>
              <li>Vendor selection and cost optimization</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-slate-200/80 text-xs uppercase">Fractional CPO</div>
            <h3 className="mt-2 text-xl text-white font-semibold">Product leadership that compounds</h3>
            <p className="mt-3 text-slate-300">
              Discovery, prioritization, and outcomes. We create clarity on what to build, why it matters, and how to validate — keeping teams aligned and customers delighted.
            </p>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Product strategy and positioning</li>
              <li>Discovery and validation frameworks</li>
              <li>Outcome-focused roadmaps</li>
              <li>Pricing, packaging, and go-to-market</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
