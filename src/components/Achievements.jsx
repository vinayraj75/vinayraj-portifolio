import React from 'react';
import { Award, Trophy, Star, CheckCircle, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>06. Distinctions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              HONORS & <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">AWARDS</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-3 md:mt-0">
            Validated competitive and hackathon accolades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-7 rounded-3xl border border-amber-400/25 relative overflow-hidden group bg-gradient-to-br from-[#131b2e] via-[#0d1424] to-[#070b16]"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/5 rounded-bl-full pointer-events-none group-hover:bg-amber-400/10 transition-colors" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {item.badge}
                  </span>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {item.organization} • {item.year}
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.summary}
              </p>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Category: <strong className="text-white">Technical Innovation</strong></span>
                <span className="text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Official Award
                </span>
              </div>
            </div>
          ))}

          {/* Academic Specialization Card */}
          <div className="glass-card p-7 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#facc15]/10 border border-[#facc15]/30 flex items-center justify-center text-[#facc15]">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#facc15] bg-[#facc15]/10 px-2 py-0.5 rounded border border-[#facc15]/20">
                    ACADEMIC EXCELLENCE
                  </span>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    B.Tech AIML • 3rd Year
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-2">
                B.Tech AIML Specialization
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dedicated focus on artificial intelligence, neural architectures, and software engineering while actively building practical machine learning systems and competing in technical challenges.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Ramachandra College of Eng.</span>
              <span className="text-[#facc15] font-semibold">Active Curriculum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
