export default function Process() {
  const steps = [
    { title: 'Discovery Call', desc: 'We understand goals, constraints, and success criteria.' },
    { title: 'Assessment', desc: 'Quick audit of product, process, and platform.' },
    { title: 'Plan', desc: 'Define outcomes, roadmap, and KPIs. Agree on engagement model.' },
    { title: 'Delivery', desc: 'We lead teams, install systems, and accelerate outcomes.' },
  ]

  return (
    <section id="process" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">How we work</h2>
          <p className="mt-3 text-slate-300">Clear, structured, and collaborative.</p>
        </div>

        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 counter-reset">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-white/10 border border-white/10 text-white flex items-center justify-center font-semibold">{i + 1}</div>
              <div className="text-white font-medium mt-4">{s.title}</div>
              <p className="mt-3 text-slate-300 text-sm">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
