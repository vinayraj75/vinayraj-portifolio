import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/70 animate-in fade-in duration-200">
      <div
        className="project-modal-container relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#09101f] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/25">
            {project.category}
          </span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm font-mono text-slate-400 mb-6">
          {project.tagline}
        </p>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#060a14] border border-blue-500/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-2 flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5" />
              The Problem
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#060a14] border border-cyan-500/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              The Solution
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Workflow / Architecture Pipeline (if available) */}
        {project.workflow && (
          <div className="mb-6 p-5 rounded-xl bg-[#070d1a] border border-cyan-500/20">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              System Architecture &amp; Core Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.workflow.map((st) => (
                <div key={st.step} className="p-3 rounded-lg bg-[#0a1426] border border-white/5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center">
                      {st.step}
                    </span>
                    <span className="text-xs font-bold text-white font-display">{st.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold mb-3">
            Core Capabilities &amp; Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-2.5">
            Technologies Applied
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-white/5 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View On GitHub</span>
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-500 bg-white/5 rounded-lg border border-white/5">
                Live Demo: Coming Soon
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white px-3 py-2"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
