export default function Value() {
  const values = [
    {
      title: 'AI-accelerated delivery',
      desc: 'We use AI-native workflows, codegen, and automation to ship faster with leaner teams.',
    },
    {
      title: 'Outcome-first',
      desc: 'Everything ties back to business outcomes, not busywork — fewer features, bigger impact.',
    },
    {
      title: 'Senior leadership',
      desc: 'Decades of experience across startups and enterprise. You get the judgment that matters.',
    },
    {
      title: 'Pragmatic and minimal',
      desc: 'No theater. Simple, scalable systems and processes that teams actually use.',
    },
  ]

  return (
    <section id="value" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Why Oversee</h2>
          <p className="mt-3 text-slate-300">Clarity, speed, and steady hands. That's the difference.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white font-medium">{v.title}</div>
              <p className="mt-3 text-slate-300 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
