import { ArrowRight, Compass, ShieldCheck, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold mb-3">
            About &amp; Philosophy
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {about.headline}
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {about.storyP1}
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            {about.storyP2}
          </p>
        </div>

        {/* Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-teal-500/30 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Editorial Instinct</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Rooted in newsrooms and investigative journalism. Knowing what commands human curiosity, crafting unignorable hooks, and respecting facts before vanity metrics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-teal-500/30 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Performance Math</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Paid acquisition rigor down to ₹14.42 CPA. Meticulous tracking of attribution funnels, audience cohorts, ROAS, and retention automation with WebEngage and Infobip.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-teal-500/30 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Scale &amp; Governance</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Proven endurance running 40+ institutional channels simultaneously, protecting brand reputation (ORM), managing PR crises, and directing agency deliverables.
            </p>
          </div>
        </div>

        {/* Evolution Roadmap: The Career Progression */}
        <div className="rounded-2xl bg-[#0c1017] border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold">
                Strategic Evolution
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                From Reporter's Notebook to Full-Stack Digital Growth
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              6 Progressive Career Milestones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {about.progression.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-6 border-l border-teal-500/30 hover:border-teal-400 transition-colors group"
              >
                <div className="font-mono text-xs text-teal-400 font-semibold mb-1">
                  {item.step}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
