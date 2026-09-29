import { useState } from 'react';
import { Mail, Linkedin, Instagram, Youtube, Copy, Check, ArrowRight, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenVideoResume: () => void;
}

export function ContactSection({ onOpenVideoResume }: ContactSectionProps) {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrOrg: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#05070b] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dramatic Copy & Direct Links */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold">
              Get In Touch
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Have a story, campaign or brand that needs to move?
            </h2>

            <p className="font-display text-2xl sm:text-3xl text-teal-300 font-medium tracking-tight">
              Let's create something worth remembering.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
              Whether you are looking to scale performance marketing funnels, build an integrated institutional social media architecture, or elevate your brand storytelling—let's start a conversation.
            </p>

            {/* Email quick copy box */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 mb-2 font-semibold uppercase tracking-wider">
                Direct Email
              </div>
              <div className="flex items-center gap-2 max-w-md">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 px-4 py-3 bg-slate-900/90 border border-white/10 rounded-xl text-sm font-mono text-white hover:text-teal-300 hover:border-teal-500/40 transition-colors truncate"
                >
                  {personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-white/10 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-teal-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-teal-400" />
                <span>Instagram {personal.instagram}</span>
              </a>

              <button
                onClick={onOpenVideoResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                <Youtube className="w-4 h-4 text-teal-400" />
                <span>Video Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c1017] border border-white/10 shadow-2xl">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Send a Message Directly
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Expect a response within 24 business hours.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-white">Message Ready!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                    Thank you, {formData.name}. You can also dispatch directly to{' '}
                    <span className="text-teal-300 font-mono">{personal.email}</span>.
                  </p>
                  <a
                    href={`mailto:${personal.email}?subject=Collaboration%20Inquiry%20from%20${encodeURIComponent(
                      formData.name
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-teal-400 transition-colors"
                  >
                    <span>Open in Email Client</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Organization / Role (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.roleOrOrg}
                      onChange={(e) => setFormData({ ...formData, roleOrOrg: e.target.value })}
                      placeholder="e.g. Bennett University, EdTech Startup, Media Agency"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Message / Opportunity Brief *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your role, upcoming campaign, or strategic challenge..."
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 cursor-pointer"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quiet Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tight">AADITYA KANCHAN</span>
            <span>·</span>
            <span>Digital &amp; Social Media Strategist</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>New Delhi, India</span>
            <span>·</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
