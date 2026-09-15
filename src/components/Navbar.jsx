import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sun, Moon, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../utils/ThemeContext';
import StaggeredMenu from './StaggeredMenu';

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
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // High performance section spy via Intersection Observer
    const sectionIds = navItems.map(item => item.href.substring(1));
    const sectionElements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    let observer;
    if (sectionElements.length > 0 && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries.find(entry => entry.isIntersecting);
          if (visibleEntry) {
            setActiveSection(visibleEntry.target.id);
          }
        },
        {
          rootMargin: '-25% 0px -55% 0px',
          threshold: 0,
        }
      );

      sectionElements.forEach(el => observer.observe(el));
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
    { label: 'About', ariaLabel: 'Go to about section', link: '#about' },
    { label: 'Skills', ariaLabel: 'Go to skills section', link: '#skills' },
    { label: 'Projects', ariaLabel: 'Go to projects section', link: '#projects' },
    { label: 'Certifications', ariaLabel: 'Go to certifications section', link: '#certifications' },
    { label: 'Achievements', ariaLabel: 'Go to achievements section', link: '#achievements' },
    { label: 'Contact', ariaLabel: 'Go to contact section', link: '#contact' },
  ];

  const socialItems = [
    { label: 'GitHub', link: personalInfo.socials.github },
    { label: 'LinkedIn', link: personalInfo.socials.linkedin },
    { label: 'Email', link: `mailto:${personalInfo.socials.email || 'vinaychinnam75@gmail.com'}` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isDark
          ? isScrolled
            ? 'py-2.5 bg-[#06090f]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'py-3.5 bg-[#06090f]/75 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.4)]'
          : isScrolled
            ? 'py-2.5 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
            : 'py-3.5 bg-white/75 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left spacer to keep navigation centered */}
        <div className="w-0 sm:w-8" aria-hidden="true" />

        {/* Center: Desktop Navigation Links */}
        <nav
          className={`hidden lg:flex items-center gap-1 backdrop-blur-lg px-4 py-1.5 rounded-full border shadow-inner transition-colors ${
            isDark
              ? 'bg-[#0b1221]/80 border-white/10'
              : 'bg-white/80 border-slate-200 shadow-sm'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
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

        {/* Right Actions & StaggeredMenu from React Bits */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border transition-all duration-200 ${
              isDark
                ? 'bg-[#0d1627] hover:bg-[#15233e] text-cyan-400 border-white/10'
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
            className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-xl border transition-all hover:scale-105 ${
              isDark
                ? 'bg-[#0d1829] hover:bg-[#152540] text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                : 'bg-white hover:bg-slate-50 text-cyan-600 border-cyan-500/40 shadow-sm'
            }`}
            title="Download Resume PDF"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>

          {/* StaggeredMenu Component */}
          <StaggeredMenu
            position="right"
            inlineToggle={true}
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            colors={['#06b6d4', '#0ea5e9', '#3b82f6']}
            accentColor="#06b6d4"
            menuButtonColor={isDark ? '#e9e9ef' : '#0f172a'}
            openMenuButtonColor="#06b6d4"
            changeMenuColorOnOpen={true}
            closeOnClickAway={true}
          />
        </div>
      </div>
    </header>
  );
}
