import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Value from './components/Value'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(56,189,248,0.08),transparent),radial-gradient(800px_500px_at_90%_-10%,rgba(129,140,248,0.08),transparent)] pointer-events-none" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Services />
        <Value />
        <Process />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-sm text-slate-400">© {new Date().getFullYear()} Oversee Consulting</span>
          <a href="/test" className="text-sm text-slate-400 hover:text-white">System Check</a>
        </div>
      </footer>
    </div>
  )
}

export default App
