import { GraduationCap, Award, Cpu, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BrandLogoByKey } from './BrandLogos';

export function EducationCertifications() {
  const { education, certifications, tools } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 border-b border-white/5 relative bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold mb-3">
            Academic Pedigree &amp; Continuous Learning
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Education &amp; Credentials
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A cross-disciplinary foundation spanning strategic marketing management, mass communications, and certified expertise in digital growth systems.
          </p>
        </div>

        {/* Academic Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-teal-500/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/5 mb-4">
                  <div className="flex items-center gap-2">
                    <BrandLogoByKey logoKey={item.logoKey} className="h-7" />
                  </div>
                  <span className="font-mono text-xs text-teal-400 font-medium">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {item.degree}
                </h3>
                <div className="text-xs font-semibold text-slate-300 mb-3">
                  {item.institution}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.highlights}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>Verified Academic Credential</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2.5">
              <Award className="w-6 h-6 text-teal-400" />
              <span>Industry Certifications</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Verified Issuer Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-teal-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-teal-300 font-mono">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {cert.badge}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white leading-snug">
                  {cert.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technology Stack */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2.5">
              <Cpu className="w-6 h-6 text-teal-400" />
              <span>Technology &amp; Tool Stack</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Daily Operational Production
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 hover:border-teal-500/30 transition-colors text-center flex flex-col items-center justify-center group"
              >
                <span className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                  {tool.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 font-mono">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
