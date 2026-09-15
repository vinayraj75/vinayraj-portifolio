import React from 'react';
import { GraduationCap, MapPin, Award, BookOpen, Layers, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, currentStatus } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function About() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const infoCards = [
    { label: 'Degree', value: 'B.Tech — AIML', icon: GraduationCap, detail: '2024 — 2028 (3rd Year)' },
    { label: 'College', value: 'Ramachandra College of Eng.', icon: BookOpen, detail: 'Eluru, Andhra Pradesh' },
    { label: 'Specialization', value: 'AI & Machine Learning', icon: Award, detail: 'Engineering & Modeling' },
    { label: 'Base Location', value: 'Eluru, AP, India', icon: MapPin, detail: 'Open to Opportunities' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Frosted Glass Back */}
        <div
          className={`mb-14 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-xl border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>01. Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            ABOUT <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">ME</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Biography Column */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              
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
                  <p className="text-base font-bold text-cyan-400 font-display">AI/ML Engineer</p>
                </div>
              </div>
            </div>

            {/* Academic & Fact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, idx) => {
                const Icon = card.icon;
                const isBlue = idx % 2 === 1;
                return (
                  <div
                    key={card.label}
                    style={{
                      transitionDelay: isVisible ? `${200 + idx * 80}ms` : '0ms',
                    }}
                    className={`glass-card p-5 rounded-xl border border-white/5 ${
                      isBlue ? 'hover:border-blue-500/40' : 'hover:border-cyan-500/40'
                    } transition-all duration-500 group ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${isBlue ? 'bg-blue-500/10 text-blue-400' : 'bg-cyan-500/10 text-cyan-400'} group-hover:scale-110 transition-transform`}>
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
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            
            {/* Currently Building Card */}
            <div className="glass-card p-6 rounded-2xl border border-cyan-500/20 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                    CURRENTLY BUILDING
                  </span>
                </div>
                <Terminal className="w-4 h-4 text-cyan-400/80" />
              </div>

              <div className="space-y-3">
                {currentStatus.building.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#06090f]/60 border border-white/5">
                    <p className="text-sm font-bold text-white font-display mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
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
            <div className="glass-card p-6 rounded-2xl border border-blue-500/20 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
                    CURRENTLY LEARNING
                  </span>
                </div>
                <Sparkles className="w-4 h-4 text-blue-400/80" />
              </div>

              <ul className="space-y-2.5">
                {currentStatus.learning.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
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
