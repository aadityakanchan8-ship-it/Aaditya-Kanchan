import { useState } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, WorkProject } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: WorkProject) => void;
}

export function SelectedWork({ onSelectProject }: SelectedWorkProps) {
  const { projects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterTabs = [
    'ALL',
    'PERFORMANCE',
    'SOCIAL',
    'CONTENT',
    'VIDEO',
    'JOURNALISM',
  ];

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 border-b border-white/5 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold mb-3">
              Case Studies &amp; Documented Execution
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Selected Work
            </h2>
            <p className="mt-4 text-base text-slate-300">
              A comprehensive showcase across institutional ecosystems, performance acquisition campaigns, lifecycle retention, and national newsroom journalism.
            </p>
          </div>

          {/* Interactive Filter Control Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl bg-slate-900/70 border border-white/10 hover:border-teal-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-teal-950/30 cursor-pointer"
            >
              {/* Media Thumbnail Container with zero broken images */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Unboxed Metadata Header on top of image */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-teal-300 drop-shadow">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-950/80 border border-white/20 flex items-center justify-center text-white group-hover:bg-teal-500 group-hover:text-slate-950 group-hover:border-teal-400 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Highlight metric badge if present */}
                {project.highlightMetric && (
                  <div className="absolute bottom-3 left-3.5 bg-slate-950/90 border border-teal-500/40 rounded-lg px-2.5 py-1 text-xs font-mono">
                    <span className="text-slate-400 text-[10px] block leading-none">
                      {project.highlightMetric.label}
                    </span>
                    <span className="font-bold text-teal-400 text-xs">
                      {project.highlightMetric.value}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5 font-medium">
                    <span>{project.client}</span>
                    <span>·</span>
                    <span>{project.timeframe}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="text-[11px] text-slate-400 truncate max-w-[220px]">
                    {project.tags.slice(0, 3).join(' · ')}
                  </div>
                  <span className="text-teal-400 font-semibold text-xs group-hover:underline whitespace-nowrap">
                    View Case Study →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
