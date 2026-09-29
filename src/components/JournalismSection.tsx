import { Newspaper, BookOpen, ExternalLink, PenTool } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function JournalismSection() {
  const { publications } = PORTFOLIO_DATA;

  return (
    <section id="publications" className="py-24 border-b border-white/5 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold mb-3">
            Published Journalism &amp; Editorial Works
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            From Digital Campaigns to Newsrooms.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A background rooted in rigorous editorial standards, investigative reporting, cultural analysis, and sports journalism across national media publications.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Meta unboxed header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                  <span className="text-teal-400 font-semibold">{item.category}</span>
                  <span>{item.date}</span>
                </div>

                <div className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  {item.publication}
                </div>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <Newspaper className="w-3.5 h-3.5 text-teal-400" />
                  <span>National Press Feature</span>
                </span>
                <span className="text-teal-400 font-semibold group-hover:underline">
                  Verified Archive →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
