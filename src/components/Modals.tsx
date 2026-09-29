import { useEffect } from 'react';
import { X, CheckCircle2, ExternalLink, Play, ArrowRight, Mail, Linkedin, Send } from 'lucide-react';
import { WorkProject, Service, MediaItem, PORTFOLIO_DATA } from '../data/portfolioData';

// 1. Case Study Modal
interface CaseStudyModalProps {
  project: WorkProject | null;
  onClose: () => void;
  onOpenVideo?: () => void;
}

export function CaseStudyModal({ project, onClose, onOpenVideo }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1017] border border-white/15 rounded-3xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar with Close button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c1017]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
            <span>{project.category}</span>
            <span>·</span>
            <span className="text-slate-400">{project.client}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Banner Image */}
        <div className="relative aspect-[21/9] bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-transparent" />

          {project.highlightMetric && (
            <div className="absolute bottom-4 left-6 bg-slate-950/90 border border-teal-500/40 rounded-xl px-4 py-2 text-xs font-mono">
              <span className="text-slate-400 text-[11px] block">
                {project.highlightMetric.label}
              </span>
              <span className="font-bold text-teal-400 text-base">
                {project.highlightMetric.value}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Header */}
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-teal-300 font-medium">
              {project.tagline}
            </p>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Structured Case Study Framework: Challenge → Role → Work → Execution → Outcome */}
          <div className="space-y-6 pt-4 border-t border-white/10">
            {/* 1. Challenge */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-2">
                01 · The Strategic Challenge
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* 2. Role */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 mb-2">
                02 · Aaditya's Role &amp; Mandate
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.role}
              </p>
            </div>

            {/* 3. The Work */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">
                03 · Strategic Work &amp; Deliverables
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.work.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Execution */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
                04 · Technical &amp; Operational Execution
              </h3>
              <ul className="space-y-2.5">
                {project.execution.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Documented Outcome */}
            <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/30">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-300 mb-3">
                05 · Documented Outcomes &amp; Impact
              </h3>
              <ul className="space-y-2.5">
                {project.outcome.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-white font-medium flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Documented Links & Artifacts if available */}
            {project.links && project.links.length > 0 && (
              <div className="pt-4 border-t border-white/5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Verified Artifacts &amp; External Links
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-400 hover:bg-slate-850 text-xs text-slate-200 transition-colors group"
                    >
                      <span className="truncate group-hover:text-teal-300 font-medium">
                        {link.label}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 shrink-0 ml-2" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-900 px-2.5 py-1 rounded-md border border-white/5">
                  #{tag}
                </span>
              ))}
            </div>

            {project.videoUrl && onOpenVideo && (
              <button
                onClick={() => {
                  onClose();
                  onOpenVideo();
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-teal-400 transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Related Video</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Video Player Modal
interface VideoModalProps {
  media: MediaItem | null;
  onClose: () => void;
}

export function VideoModal({ media, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (media) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [media, onClose]);

  if (!media) return null;

  const embedUrl = media.embedId
    ? `https://www.youtube-nocookie.com/embed/${media.embedId}?autoplay=1&rel=0`
    : `https://www.youtube-nocookie.com/embed/Ue55YQUBWK4?autoplay=1&rel=0`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c1017] border border-white/15 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c1017] border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono text-teal-400 uppercase tracking-wider block">
              {media.type}
            </span>
            <h3 className="font-display text-lg font-bold text-white truncate max-w-lg">
              {media.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Responsive YouTube Embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={embedUrl}
            title={media.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer info */}
        <div className="p-6 bg-[#0c1017] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-300 max-w-xl">
            {media.description}
          </p>
          <a
            href={media.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:underline shrink-0"
          >
            <span>Watch on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

// 3. Service Deep Dive Modal
interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function ServiceModal({ service, onClose, onOpenContact }: ServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c1017] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <span className="font-mono text-xs font-bold text-teal-400">
            DISCIPLINE {service.number}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            {service.title}
          </h2>
          <p className="text-xs font-medium text-teal-300 mt-1 mb-4">
            {service.tagline}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        <div className="space-y-4 pt-4 border-t border-white/5">
          <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Concrete Deliverables &amp; Methodology
          </h3>
          <ul className="space-y-2.5">
            {service.bullets.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-white/10">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
            Expected Business Outcome
          </span>
          <p className="text-xs font-medium text-teal-300">
            {service.outcomes}
          </p>
        </div>

        <div className="mt-4">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
            Tooling Stack
          </span>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
            {service.tools.map((t, idx) => (
              <span key={idx} className="bg-slate-900 px-2.5 py-1 rounded-md border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Consult on {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// 4. Contact Modal
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0c1017] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs uppercase font-mono text-teal-400 font-semibold tracking-wider">
              Start a Conversation
            </span>
            <h3 className="font-display text-xl font-bold text-white mt-1">
              Connect with Aaditya
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-4">
          <p className="text-xs text-slate-300 leading-relaxed">
            Reach out directly for digital and social media strategy, performance marketing campaigns, marketing automation, or editorial storytelling roles.
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-500/40 text-xs font-semibold text-white transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">Direct Email</span>
                <span className="group-hover:text-teal-300 font-mono">{personal.email}</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-300" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-500/40 text-xs font-semibold text-white transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">Professional Network</span>
                <span className="group-hover:text-blue-300">linkedin.com/in/aaditya-kanchan</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-300" />
          </a>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
