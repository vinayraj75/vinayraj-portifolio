import React from 'react';
import { GraduationCap, MapPin, Award, BookOpen, Layers, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, currentStatus } from '../data/portfolioData';

export default function About() {
  const infoCards = [
    { label: 'Degree', value: 'B.Tech — AIML', icon: GraduationCap, detail: '2024 — 2028 (3rd Year)' },
    { label: 'College', value: 'Ramachandra College of Eng.', icon: BookOpen, detail: 'Eluru, Andhra Pradesh' },
    { label: 'Specialization', value: 'AI & Machine Learning', icon: Award, detail: 'Engineering & Modeling' },
    { label: 'Base Location', value: 'Eluru, AP, India', icon: MapPin, detail: 'Open to Opportunities' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#facc15]/10 border border-[#facc15]/20 text-[#facc15] font-mono text-xs uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>01. Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            ABOUT <span className="bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] bg-clip-text text-transparent">ME</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#facc15]/5 rounded-bl-full pointer-events-none" />
              
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
                {personalInfo.bio}
              </p>

              <div className="p-4 rounded-xl bg-[#06090f]/70 border border-white/5 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Primary Language</p>
                  <p className="text-base font-bold text-white font-display">Python (3.x)</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Spoken Languages</p>
                  <p className="text-base font-bold text-white font-display">Telugu • English</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Career Objective</p>
                  <p className="text-base font-bold text-[#facc15] font-display">AI/ML Engineer</p>
                </div>
              </div>
            </div>

            {/* Academic & Fact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, idx) => {
                const Icon = card.icon;
                const isRed = idx % 2 === 1;
                return (
                  <div
                    key={card.label}
                    className={`glass-card p-5 rounded-xl border border-white/5 ${isRed ? 'hover:border-[#ef4444]/40' : 'hover:border-[#facc15]/40'} transition-all group`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${isRed ? 'bg-[#ef4444]/10 text-[#ef4444]' : 'bg-[#facc15]/10 text-[#facc15]'} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {card.label}
                      </span>
                    </div>
                    <div className="text-base font-bold text-white font-display tracking-tight">
                      {card.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {card.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Currently Building & Learning */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Building Card */}
            <div className="glass-card p-6 rounded-2xl border border-amber-500/20 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#facc15] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#facc15] font-bold">
                    CURRENTLY BUILDING
                  </span>
                </div>
                <Terminal className="w-4 h-4 text-[#facc15]/80" />
              </div>

              <div className="space-y-3">
                {currentStatus.building.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#06090f]/60 border border-white/5">
                    <p className="text-sm font-bold text-white font-display mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning Card */}
            <div className="glass-card p-6 rounded-2xl border border-[#ef4444]/20 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#ef4444] font-bold">
                    CURRENTLY LEARNING
                  </span>
                </div>
                <Sparkles className="w-4 h-4 text-[#ef4444]/80" />
              </div>

              <ul className="space-y-2.5">
                {currentStatus.learning.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#ef4444] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
