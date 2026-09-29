import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BrandLogoByKey } from './BrandLogos';

export function ExperienceSection() {
  const { experience, earlierExperience } = PORTFOLIO_DATA;
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="experience" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold mb-3">
            Career Timeline &amp; Track Record
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Over 5.5 years of demonstrated leadership across institutional media governance, growth marketing, storytelling, and marketing automation.
          </p>
        </div>

        {/* Primary Roles Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500/50 before:via-white/10 before:to-transparent">
          {experience.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-start md:items-center group"
              >
                {/* Timeline node */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#080b10] border-2 border-teal-400 group-hover:scale-125 transition-transform z-10 shadow-lg shadow-teal-500/40" />

                {/* Content Box */}
                <div
                  className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                    isEven ? 'md:mr-auto md:text-left' : 'md:ml-auto md:text-left'
                  }`}
                >
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-teal-500/40 transition-all duration-200 shadow-xl shadow-black/40">
                    {/* Header: Company logo + Dates */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <BrandLogoByKey logoKey={item.logoKey} className="h-8" />
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Role Title & Location */}
                    <div className="mt-4">
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                        <span className="font-semibold text-slate-300">{item.company}</span>
                        {item.location && (
                          <>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-slate-500" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span className="leading-normal">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tools footer (unboxed) */}
                    {item.tools && (
                      <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 font-mono">
                        <span className="text-slate-400">Stack:</span>
                        <span>{item.tools.join(' · ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collapsible Earlier Experience Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <button
            onClick={() => setShowEarlier(!showEarlier)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-teal-500/30 text-left transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                Earlier Experience &amp; Editorial Foundation
              </span>
              <span className="text-xs text-slate-400 font-mono">
                (7 Previous Organizations)
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-400">
              <span>{showEarlier ? 'Collapse' : 'Expand Earlier Roles'}</span>
              {showEarlier ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showEarlier && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
              {earlierExperience.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-[#0b0f17] border border-white/10 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        {item.logoKey && <BrandLogoByKey logoKey={item.logoKey} className="h-6" />}
                        <span className="font-bold text-sm text-white">{item.company}</span>
                      </div>
                      <span className="text-xs font-mono text-teal-400/90 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-300 mb-2">
                      {item.role}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
