import React from 'react';
import { Trophy, Users, Zap, Shield, Sparkles } from 'lucide-react';
import { hackathonsData, personalInfo } from '../data/portfolioData';

export default function HackathonSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#070d19]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>04. Competitive Problem Solving</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              HACKATHON & <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">INNOVATION</span>
            </h2>
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0e172a] border border-white/10 font-mono text-xs text-slate-300">
            <Users className="w-4 h-4 text-[#facc15]" />
            <span>Team Identity:</span>
            <strong className="text-white tracking-wider">{personalInfo.hackathonTeam}</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Prakalp Achievement Card */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-7 sm:p-8 border border-amber-500/30 relative overflow-hidden bg-gradient-to-br from-[#131b2e] via-[#0d1424] to-[#080d1a]">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 flex items-center gap-1.5">
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
              Engineered and pitched a rapid technical solution as part of team <strong className="text-[#ef4444]">DuoXtitans</strong> under strict competitive deadlines, winning <span className="text-amber-300 font-bold">3rd Prize</span> against participating teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3 rounded-xl bg-[#06090f]/70 border border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">TEAM</span>
                <span className="text-xs font-bold text-white font-display">DuoXtitans</span>
              </div>
              <div className="p-3 rounded-xl bg-[#06090f]/70 border border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">RECOGNITION</span>
                <span className="text-xs font-bold text-amber-400 font-display">Podium Finish (3rd)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#06090f]/70 border border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">OUTCOME</span>
                <span className="text-xs font-bold text-emerald-400 font-display">Demonstrated Viability</span>
              </div>
            </div>
          </div>

          {/* Side Card: Hackathon Culture */}
          <div className="lg:col-span-4 glass-card rounded-3xl p-7 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#facc15] mb-3">
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
