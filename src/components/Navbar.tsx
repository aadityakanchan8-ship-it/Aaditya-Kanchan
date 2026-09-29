import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['about', 'expertise', 'experience', 'work', 'media', 'publications', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Selected Work', href: '#work', id: 'work' },
    { label: 'Verified Links', href: '#verified-archive', id: 'verified-archive' },
    { label: 'Media', href: '#media', id: 'media' },
    { label: 'Publications', href: '#publications', id: 'publications' },
    { label: 'Education', href: '#education', id: 'education' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080b10]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-display font-bold tracking-tight text-lg sm:text-xl text-white hover:text-teal-400 transition-colors whitespace-nowrap"
          >
            AADITYA KANCHAN
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap hover:text-white ${
                    isActive ? 'text-teal-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 border border-teal-500/30 rounded-lg hover:border-teal-400 hover:bg-slate-800 transition-all duration-200 shadow-sm shadow-teal-950 whitespace-nowrap cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-teal-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1017] border-b border-white/10 px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-teal-500/10 text-teal-300 font-semibold'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-teal-500 text-slate-950 font-semibold text-sm rounded-lg hover:bg-teal-400 transition-colors cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
