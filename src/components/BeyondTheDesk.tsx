import { Camera, Compass, Trophy, Instagram, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function BeyondTheDesk() {
  const { beyondTheDesk, personal } = PORTFOLIO_DATA;

  return (
    <section className="py-20 border-b border-white/5 relative bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Context */}
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold">
              Perspectives &amp; Passions
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Beyond The Desk
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              When not engineering acquisition funnels or directing editorial workflows, Aaditya captures high-speed motorsport frames, analyzes international cricket tactics, and travels with a camera in hand.
            </p>

            {/* Passions list with clean typographic dots */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 mb-2 font-semibold uppercase tracking-wider">
                Interests &amp; Disciplines
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                {beyondTheDesk.passions.map((p, idx) => (
                  <span key={idx} className="flex items-center gap-2">
                    <span>{p}</span>
                    {idx < beyondTheDesk.passions.length - 1 && (
                      <span className="text-teal-400/60">·</span>
                    )}
                  </span>
                ))}
              </p>
            </div>

            {/* Creator Portfolio Link */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={personal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-white/10 hover:border-teal-500/40 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-all group"
              >
                <Instagram className="w-4 h-4 text-teal-400" />
                <span>Visual Frames: {beyondTheDesk.creatorHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Highlights: Sports & Events Documented */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {beyondTheDesk.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white mb-2 leading-snug">
                    {item.event}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-white/5 text-[10px] font-mono text-teal-400/80">
                  Documented In Resume
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
