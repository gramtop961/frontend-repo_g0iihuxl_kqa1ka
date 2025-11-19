export default function Hero() {
  return (
    <section id="top" className="pt-28 sm:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              AI-accelerated delivery up to 70% faster
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Fractional CTO & CPO leadership for ambitious teams
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              Oversee provides senior technology and product leadership to help you ship the right software faster — without the cost of full-time executives.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition-colors shadow">
                Book a Strategy Call
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white font-medium px-5 py-3 hover:bg-white/20 transition-colors border border-white/10">
                Explore Services
              </a>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Technical Strategy',
                    'Product Discovery',
                    'Delivery Acceleration',
                    'AI Integration',
                    'SDLC & DevOps',
                    'Team Leadership',
                  ].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-sky-400/30 bg-gradient-to-br from-sky-400/10 to-indigo-500/10 p-4 text-slate-100">
                  "We help you make better bets, organize delivery, and ship faster with less."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
