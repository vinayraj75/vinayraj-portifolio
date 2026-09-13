import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, FileDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../utils/ThemeContext';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'py-3.5 bg-[#06090f]/80 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-3.5 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left placeholder to maintain navbar balance */}
        <div className="hidden lg:block w-10" />

        {/* Desktop Navigation Links */}
        <nav className={`hidden lg:flex items-center gap-1 backdrop-blur-lg px-4 py-1.5 rounded-full border shadow-inner transition-colors ${
          isDark
            ? 'bg-[#0b1221]/70 border-white/10'
            : 'bg-white/80 border-slate-200 shadow-sm'
        }`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#facc15] bg-[#facc15]/10 border border-[#facc15]/30 shadow-[0_0_12px_rgba(250,204,21,0.25)]'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border transition-all duration-200 ${
              isDark
                ? 'bg-[#0d1627] hover:bg-[#15233e] text-amber-400 border-white/10'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download Resume Button */}
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-xl border transition-all hover:scale-105 ${
              isDark
                ? 'bg-[#0d1829] hover:bg-[#152540] text-[#facc15] border-[#facc15]/30 shadow-[0_0_10px_rgba(250,204,21,0.15)]'
                : 'bg-white hover:bg-slate-50 text-[#dc2626] border-[#ef4444]/40 shadow-sm'
            }`}
            title="Download Resume PDF"
          >
            <FileDown className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>Resume</span>
          </a>

          {/* Let's Connect CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.35)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all hover:scale-105 active:scale-95"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu & Theme Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-colors ${
              isDark
                ? 'bg-white/5 text-amber-400 border-white/10'
                : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#facc15]/50 ${
              isDark
                ? 'text-slate-300 hover:text-white bg-white/5 border-white/10'
                : 'text-slate-700 hover:text-slate-900 bg-slate-100 border-slate-200'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden mt-3 px-4 pb-6 pt-2 backdrop-blur-xl border-b shadow-2xl transition-all ${
          isDark
            ? 'bg-[#080d19]/95 border-white/10'
            : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#facc15]/15 text-[#facc15] border border-[#facc15]/30'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-white/5'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="grid grid-cols-2 gap-2 mt-3">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                target="_blank"
                rel="noreferrer"
                className={`py-2.5 px-3 text-center text-xs font-semibold uppercase tracking-wider rounded-lg border flex items-center justify-center gap-1.5 font-mono ${
                  isDark
                    ? 'bg-[#0d1829] text-[#facc15] border-[#facc15]/30'
                    : 'bg-slate-100 text-[#dc2626] border-slate-200'
                }`}
              >
                <FileDown className="w-3.5 h-3.5 text-[#ef4444]" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="py-2.5 px-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] rounded-lg shadow-lg font-mono flex items-center justify-center"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
