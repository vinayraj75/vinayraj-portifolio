import React from 'react';
import { Cpu, Brain, Scan, Code2, Server, Sparkles, Compass } from 'lucide-react';
import { focusAreas } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const iconMap = {
  Cpu,
  Brain,
  Scan,
  Code2,
  Server,
  Sparkles,
};

export default function Focus() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070c18]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-xl border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>08. Current Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-3">
            WHAT I'M <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">FOCUSING ON</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Key domains I am actively practicing, architecting, and exploring daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {focusAreas.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            const isBlue = idx % 2 === 1;
            return (
              <div
                key={idx}
                style={{
                  transitionDelay: isVisible ? `${idx * 80}ms` : '0ms',
                }}
                className={`glass-card p-6 rounded-2xl border border-white/5 ${
                  isBlue ? 'hover:border-blue-500/40' : 'hover:border-cyan-500/40'
                } transition-all duration-500 flex items-start gap-4 group ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${isBlue ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
