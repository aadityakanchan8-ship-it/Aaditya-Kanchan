import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, Service } from '../data/portfolioData';

interface ExpertiseSectionProps {
  onSelectService: (service: Service) => void;
}

export function ExpertiseSection({ onSelectService }: ExpertiseSectionProps) {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="expertise" className="py-24 border-b border-white/5 relative bg-[#06080d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold mb-3">
              Capabilities &amp; Core Disciplines
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              What I Do
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Six synchronized pillars combining performance mathematics, high-retention video storytelling, marketing automation, and generative AI production.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Interactive Dossier · Click Any Card To Expand
          </div>
        </div>

        {/* 6 Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative rounded-2xl bg-slate-900/60 border border-white/10 hover:border-teal-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/20 cursor-pointer"
            >
              <div>
                {/* Number & Expand Affordance */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-teal-400 tracking-wider">
                    {service.number}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-teal-500/20 flex items-center justify-center text-slate-400 group-hover:text-teal-300 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-teal-400/90 font-medium mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Key bullets preview */}
                <ul className="space-y-2 mb-4">
                  {service.bullets.slice(0, 3).map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400/80 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools row (unboxed clean text) */}
              <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px] truncate max-w-[200px]">
                  {service.tools.slice(0, 3).join(' · ')}
                </span>
                <span className="text-teal-400 font-semibold text-[11px] group-hover:underline">
                  Deep Dive →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
