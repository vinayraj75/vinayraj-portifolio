import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Footer() {
  const [footerRef, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className={`py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#05080e] relative z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-center sm:text-left">
          <span className="font-display font-black text-xl text-white tracking-wider">
            {personalInfo.name}
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-xs font-mono text-cyan-400">
            {personalInfo.title}
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-xs font-mono text-slate-400">
            "Building. Learning. Innovating."
          </span>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-400 border border-white/5 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-500/10 text-slate-400 hover:text-blue-400 border border-white/5 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors ml-2 cursor-pointer group"
            title="Scroll to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
        <p>© 2026 Vinay. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Crafted for AI Engineering & Production</span>
        </p>
      </div>
    </footer>
  );
}
