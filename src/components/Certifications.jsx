import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, BookMarked, Sparkles } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Certifications() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const featured = certificationsData.find(c => c.featured);
  const others = certificationsData.filter(c => !c.featured);

  return (
    <section ref={sectionRef} id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Frosted Glass Back */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-xl border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3 shadow-sm">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>05. Credentials &amp; Training</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              VERIFIED <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">CERTIFICATIONS</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-3 md:mt-0 max-w-sm">
            Formal technical courseworks and premier academic certifications.
          </p>
        </div>

        {/* Featured Card: NPTEL Elite */}
        {featured && (
          <div
            className={`glass-card rounded-3xl p-7 sm:p-9 border border-cyan-500/30 mb-8 relative overflow-hidden bg-gradient-to-br from-[#0c192f] via-[#091122] to-[#06090f] transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  {featured.type}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featured.issuer}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Academic Standing</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2">
                  {featured.title}
                </h3>
                <p className="text-sm font-mono text-cyan-300 mb-4">
                  Administered by IIT Kharagpur through NPTEL
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {featured.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-[#060a14]/80 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Duration</span>
                    <span className="text-xs font-bold text-white font-display">{featured.duration} ({featured.period})</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#060a14]/80 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Academic Score</span>
                    <span className="text-xs font-bold text-cyan-300 font-display">{featured.score}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#060a14]/80 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Credits</span>
                    <span className="text-xs font-bold text-white font-display">{featured.credits}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#060a14]/80 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Recognition</span>
                    <span className="text-xs font-bold text-emerald-400 font-display">Elite Grade</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#06090f]/70 border border-white/10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-3 text-cyan-400">
                  <BookMarked className="w-8 h-8" />
                </div>
                <span className="text-sm font-bold text-white font-display mb-1">IIT Kharagpur NPTEL</span>
                <span className="text-xs font-mono text-slate-400 mb-4">Elite Certification Holder</span>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  Verification Records Maintained
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Other Technical Certifications */}
        <h4
          className={`text-sm font-mono uppercase tracking-widest text-slate-400 mb-4 font-semibold transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Additional Specialized Curriculum &amp; Foundations
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((cert, idx) => (
            <div
              key={cert.id}
              style={{
                transitionDelay: isVisible ? `${250 + idx * 80}ms` : '0ms',
              }}
              className={`glass-card p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-between ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                    {cert.type}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300">
                    {cert.period}
                  </span>
                </div>

                <h5 className="text-base font-bold text-white font-display mb-2">
                  {cert.title}
                </h5>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{cert.issuer}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
