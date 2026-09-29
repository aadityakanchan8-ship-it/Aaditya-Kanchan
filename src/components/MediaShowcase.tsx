import { useState } from 'react';
import { Play, Video, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, MediaItem } from '../data/portfolioData';

interface MediaShowcaseProps {
  onPlayVideo: (media: MediaItem) => void;
}

export function MediaShowcase({ onPlayVideo }: MediaShowcaseProps) {
  const { mediaShowcase, personal } = PORTFOLIO_DATA;
  const mainVideo = mediaShowcase.find((m) => m.isMainVideoResume) || mediaShowcase[0];
  const otherMedia = mediaShowcase.filter((m) => m.id !== mainVideo.id);

  return (
    <section id="media" className="py-24 border-b border-white/5 relative bg-[#06080e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold mb-3">
              Broadcast, Podcasts &amp; Video Production
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Stories I've Told.
            </h2>
            <p className="mt-4 text-base text-slate-300">
              From dynamic on-camera executive presentations to long-form studio podcast broadcasts and high-speed motorsport trackside storytelling.
            </p>
          </div>
          <div className="text-xs font-mono text-teal-400">
            575,000+ Documented YouTube Views
          </div>
        </div>

        {/* Featured Video Resume Spotlight */}
        <div className="mb-12 rounded-3xl bg-slate-900/80 border border-white/10 overflow-hidden shadow-2xl relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left: Video Player Box / Thumbnail */}
            <div className="lg:col-span-7 relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <img
                src={mainVideo.thumbnail}
                alt={mainVideo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Big Play Button */}
              <button
                onClick={() => onPlayVideo(mainVideo)}
                className="absolute z-10 w-20 h-20 rounded-full bg-teal-500/90 hover:bg-teal-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-teal-500/50 hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="Play Video Resume"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>

              <div className="absolute top-4 left-4 bg-slate-950/80 border border-white/20 rounded-md px-2.5 py-1 text-xs font-mono text-white">
                FEATURED VIDEO RESUME
              </div>

              <div className="absolute bottom-4 right-4 bg-slate-950/80 rounded-md px-2 py-1 text-xs font-mono text-slate-300">
                {mainVideo.duration}
              </div>
            </div>

            {/* Right: Info and Context */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-teal-400 font-semibold uppercase tracking-wider">
                  Executive Showreel
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2 mb-4 leading-tight">
                  {mainVideo.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {mainVideo.description}
                </p>

                <div className="space-y-2.5 mb-8 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Comprehensive walk-through of digital campaigns &amp; results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>On-camera presentation, strategic agility &amp; communication clarity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Verified portfolio references &amp; campaign creative highlights</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => onPlayVideo(mainVideo)}
                  className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Embedded Video</span>
                </button>
                <a
                  href={personal.videoResumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Media Grid (Podcasts, Sports, Documentaries) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => onPlayVideo(item)}
              className="group rounded-2xl bg-slate-900/60 border border-white/10 hover:border-teal-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative aspect-video bg-slate-950 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-slate-900/90 border border-teal-500/40 text-teal-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all duration-200">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-slate-300">
                  {item.duration}
                </div>

                <div className="absolute top-2.5 left-2.5 text-[10px] font-mono font-semibold uppercase text-teal-300 bg-slate-950/80 px-2 py-0.5 rounded">
                  {item.type}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-teal-400 font-medium">
                  <span>Watch Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
