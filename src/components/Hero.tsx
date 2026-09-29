import { Play, ArrowDown, Send, Phone, Mail, MapPin, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenVideoResume: () => void;
  onOpenContact: () => void;
}

export function Hero({ onOpenVideoResume, onOpenContact }: HeroProps) {
  const { personal, stats } = PORTFOLIO_DATA;

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle geometric hairline grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            {/* Super kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-400">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Available for Strategic Roles &amp; High-Impact Growth</span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                AADITYA KANCHAN
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-teal-300/90 tracking-tight">
                {personal.primaryTitle}
              </p>
            </div>

            {/* Supporting disciplines line with subtle typographic separators */}
            <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Performance Marketing</span>
              <span className="text-teal-400/50">·</span>
              <span>Content Strategy</span>
              <span className="text-teal-400/50">·</span>
              <span>Marketing Automation</span>
              <span className="text-teal-400/50">·</span>
              <span>ORM</span>
              <span className="text-teal-400/50">·</span>
              <span>Video Production</span>
              <span className="text-teal-400/50">·</span>
              <span>AI Content</span>
            </p>

            {/* Concise positioning statement */}
            <div className="relative pl-4 border-l-2 border-teal-500/50 max-w-2xl py-1">
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed italic">
                "{personal.positioningStatement}"
              </p>
            </div>

            {/* Contact quick strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>{personal.location}</span>
              </span>
              <span>·</span>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-1.5 hover:text-teal-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{personal.phone}</span>
              </a>
              <span>·</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-teal-300 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>{personal.email}</span>
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToWork}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                View My Work
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <Send className="w-4 h-4 text-teal-400" />
                <span>Let's Connect</span>
              </button>

              <button
                onClick={onOpenVideoResume}
                className="inline-flex items-center gap-2.5 px-4 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer group whitespace-nowrap"
              >
                <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-slate-950 text-teal-400 transition-all duration-200">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Video Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Strategic Brand Dossier Console (No photo / Picture removed) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#0e1420] to-[#090d15] border border-white/10 p-6 sm:p-7 shadow-2xl relative">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    Strategic Mandate
                  </span>
                </div>
                <span className="text-[11px] font-mono text-teal-400">
                  5.5+ Yrs Track Record
                </span>
              </div>

              {/* Core Strengths Matrix */}
              <div className="py-5 space-y-3.5">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-teal-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">Performance Marketing</span>
                    <span className="text-[11px] font-mono text-teal-300 font-semibold">₹14.42 CPA</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Meta Ads &amp; Google Ads campaign architecture, granular conversion funnels, and mobile install scaling.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-teal-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">Multi-Channel Social Governance</span>
                    <span className="text-[11px] font-mono text-teal-300 font-semibold">40+ Accounts</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Single-handedly managed university accounts, YouTube monetization, crisis ORM, and high-visibility campus coverage.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-teal-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">Video &amp; Podcasting Production</span>
                    <span className="text-[11px] font-mono text-teal-300 font-semibold">575K+ Views</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    End-to-end studio interviews, ministerial conversations, sports broadcast reels, and narrative storytelling.
                  </p>
                </div>
              </div>

              {/* Video Resume Quick Launch Banner */}
              <div
                onClick={onOpenVideoResume}
                className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 hover:border-teal-400 hover:bg-teal-500/15 transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block group-hover:text-teal-300 transition-colors">
                      Watch Video Resume
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Official YouTube Presentation
                    </span>
                  </div>
                </div>
                <span className="text-xs text-teal-400 font-semibold group-hover:underline">
                  Play →
                </span>
              </div>

              {/* Verified Credentials Footer */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>MBA (MICA x Woolf)</span>
                <span>·</span>
                <span>MA (Manipal)</span>
                <span>·</span>
                <span>BJMC Hons (BU)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex flex-col items-center justify-center text-xs text-slate-500 font-medium">
          <span className="tracking-wider uppercase text-[10px] text-slate-400 mb-2">Scroll To Explore</span>
          <button
            onClick={() => {
              const el = document.getElementById('stats');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-1.5 rounded-full text-slate-400 hover:text-teal-400 transition-colors cursor-pointer animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
