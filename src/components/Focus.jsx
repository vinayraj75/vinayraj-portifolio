import React from 'react';
import { Cpu, Brain, Scan, Code2, Server, Sparkles, Compass } from 'lucide-react';
import { focusAreas } from '../data/portfolioData';

const iconMap = {
  Cpu,
  Brain,
  Scan,
  Code2,
  Server,
  Sparkles,
};

export default function Focus() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070c18]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#facc15]/10 border border-[#facc15]/20 text-[#facc15] font-mono text-xs uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>08. Current Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-3">
            WHAT I'M <span className="bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] bg-clip-text text-transparent">FOCUSING ON</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Key domains I am actively practicing, architecting, and exploring daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {focusAreas.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            const isRed = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl border border-white/5 ${isRed ? 'hover:border-[#ef4444]/40' : 'hover:border-[#facc15]/40'} transition-all flex items-start gap-4 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${isRed ? 'bg-[#ef4444]/10 border-[#ef4444]/20 text-[#ef4444]' : 'bg-[#facc15]/10 border-[#facc15]/20 text-[#facc15]'} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-[#facc15] transition-colors">
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
