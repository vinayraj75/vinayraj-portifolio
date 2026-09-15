import React from 'react';
import { Trophy, Users, Zap, Shield, Sparkles } from 'lucide-react';
import { hackathonsData, personalInfo } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function HackathonSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070d19]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-xl border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3 shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-cyan-400" />
              <span>04. Competitive Problem Solving</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              HACKATHON &amp; <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">INNOVATION</span>
            </h2>
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0e172a] border border-white/10 font-mono text-xs text-slate-300">
            <Users className="w-4 h-4 text-cyan-400" />
            <span>Team Identity:</span>
            <strong className="text-white tracking-wider">{personalInfo.hackathonTeam}</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Prakalp Achievement Card */}
          <div
            className={`lg:col-span-8 glass-card rounded-3xl p-7 sm:p-8 border border-cyan-500/30 relative overflow-hidden bg-gradient-to-br from-[#131b2e] via-[#0d1424] to-[#080d1a] transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                3rd Prize Winner
              </span>
              <span className="text-xs font-mono text-slate-400">
                Prakalp Hackathon
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-3">
              Prakalp Hackathon — Innovation Challenge
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
              Engineered and pitched a rapid technical solution under strict competitive deadlines, winning <span className="text-cyan-300 font-bold">3rd Prize</span> against participating teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3 rounded-xl bg-[#06090f]/70 border border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">EVENT</span>
                <span className="text-xs font-bold text-white font-display">Prakalp Hackathon</span>
              </div>
              <div className="p-3 rounded-xl bg-[#06090f]/70 border border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">RECOGNITION</span>
                <span className="text-xs font-bold text-cyan-300 font-display">Podium Finish (3rd)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#06090f]/70 border border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">OUTCOME</span>
                <span className="text-xs font-bold text-emerald-400 font-display">Demonstrated Viability</span>
              </div>
            </div>
          </div>

          {/* Side Card: Hackathon Culture */}
          <div
            className={`lg:col-span-4 glass-card rounded-3xl p-7 border border-white/10 flex flex-col justify-between transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                <Zap className="w-4 h-4" />
                Sprint Philosophy
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-3">
                Rapid Prototyping Mindset
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hackathons offer the testing ground to transform conceptual AI ideas into deployable prototypes within 24–48 hours, prioritizing problem clarity, architecture efficiency, and real-world impact.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Next Sprints</span>
              <span className="text-emerald-400 font-bold">Preparing for 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
