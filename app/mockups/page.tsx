"use client";
import { HeroMarioPipeline } from '../components/Hero-MarioPipeline';
import { HeroIndustrialBrutalist } from '../components/Hero-IndustrialBrutalist';
import { HeroMinimalistEditorial } from '../components/Hero-MinimalistEditorial';
import { HeroGPTTaste } from '../components/Hero-GPTTaste';
import { Footer } from '../components/Footer';

const mockups = [
  {
    id: 'mario',
    title: 'Mario-Inspired Pipeline',
    description: 'Playful pipe visualization with Mario aesthetics — pipeline bundles as interactive Mario pipes with flow animation',
    component: <HeroMarioPipeline />,
    accent: 'green',
  },
  {
    id: 'brutalist',
    title: 'Industrial Brutalist',
    description: 'Raw mechanical interface — Swiss typographic, terminal aesthetic, specification table, extreme type contrast',
    component: <HeroIndustrialBrutalist />,
    accent: 'white',
  },
  {
    id: 'minimalist',
    title: 'Minimalist Editorial',
    description: 'Warm monochrome palette, flat bento grids, typographic contrast, paper texture, restrained elegance',
    component: <HeroMinimalistEditorial />,
    accent: 'amber',
  },
  {
    id: 'gpt',
    title: 'GPT-Taste Interactive',
    description: 'Wide editorial typography, gapless bento grid, GSAP-style motion, ambient particles, randomized orbs, animated flow',
    component: <HeroGPTTaste />,
    accent: 'emerald',
  },
];

export default function MockupPreview() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
      {/* Selector Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">HUSNAIN PORTFOLIO — HERO MOCKUPS</span>
            <div className="flex items-center gap-1 bg-zinc-900/50 border border-zinc-800 rounded-xl p-1">
              {mockups.map((m) => (
                <button
                  key={m.id}
                  onClick={() => document.getElementById(m.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  {m.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Full-dossier banner */}
      <div className="pt-16">
        <div className="border-b border-zinc-800/50 bg-emerald-400 px-6 py-3 text-center">
          <a href="/mockups/brutalist" className="font-mono text-xs font-bold tracking-[0.2em] text-black uppercase hover:underline">
            NEW: FULL-PAGE INDUSTRIAL BRUTALIST DOSSIER WITH REAL PROFILE CONTENT — OPEN /MOCKUPS/BRUTALIST →
          </a>
        </div>
      </div>

      {/* Mockup Sections */}
      <div>
        {mockups.map((mockup, index) => (
          <section
            key={mockup.id}
            id={mockup.id}
            className={`relative min-h-screen ${index > 0 ? 'border-t border-zinc-800/30' : ''}`}
          >
            {/* Mockup Label */}
            <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between pointer-events-none">
              <div className="pointer-events-auto">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-zinc-800/80 border border-zinc-700 text-zinc-300">
                  MOCKUP {index + 1}
                </span>
                <h2 className="ml-3 font-mono text-xs text-zinc-500 uppercase tracking-wider">{mockup.title}</h2>
              </div>
              <div className="pointer-events-auto text-right">
                <p className="font-mono text-xs text-zinc-600 max-w-xs">{mockup.description}</p>
              </div>
            </div>

            {/* Mockup Content */}
            <div className="relative z-0">
              {mockup.component}
            </div>

            {/* Divider */}
            {index < mockups.length - 1 && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            )}
          </section>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}