import { useState } from 'react';
import { ExternalLink, Video, FileText, Layout, Award, CheckCircle, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, VerifiedLinkGroup } from '../data/portfolioData';

interface VerifiedLinksArchiveProps {
  onPlayVideoUrl?: (url: string, title: string) => void;
}

export function VerifiedLinksArchive({ onPlayVideoUrl }: VerifiedLinksArchiveProps) {
  const { verifiedWorkLinks } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...verifiedWorkLinks.map((g) => g.category)];

  const filteredGroups =
    activeCategory === 'All'
      ? verifiedWorkLinks
      : verifiedWorkLinks.filter((g) => g.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4 text-rose-400" />;
      case 'canva':
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'drive':
        return <FileText className="w-4 h-4 text-amber-400" />;
      case 'social':
        return <Award className="w-4 h-4 text-teal-400" />;
      default:
        return <FileText className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="verified-archive" className="py-24 border-b border-white/5 relative bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold mb-3">
              Direct Evidence &amp; External Artifacts
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Verified Works &amp; Portfolio Links
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Every documented artifact from Aaditya's portfolio—including Apeejay reels, exclusive ministerial interviews, Canva pitch decks, Economic Times publications, and Meta Ads console results.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-teal-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-7 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <span className="text-xs font-mono text-teal-400 font-semibold uppercase tracking-wider">
                    {group.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {group.links.length} Artifacts
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {group.title}
                </h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Links list */}
                <div className="space-y-2.5">
                  {group.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-white/5 hover:border-teal-500/40 hover:bg-slate-950 transition-all group"
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        {getTypeIcon(link.type)}
                        <div className="truncate">
                          <span className="text-xs font-medium text-slate-200 group-hover:text-teal-300 transition-colors truncate block">
                            {link.title}
                          </span>
                          {link.note && (
                            <span className="text-[10px] text-slate-400 font-mono block">
                              {link.note}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-slate-400 group-hover:text-teal-300 shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  <span>Verified From Original Portfolio PDF</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
