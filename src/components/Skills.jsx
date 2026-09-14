import React, { useState } from 'react';
import { Code, Brain, Server, Globe, CheckCircle, Flame, Sparkles, ShieldCheck } from 'lucide-react';
import { skillsData, coreStrengths } from '../data/portfolioData';

const categories = [
  { key: 'all', label: 'All Skills', icon: Flame },
  { key: 'aiMl', label: 'AI & Machine Learning', icon: Brain },
  { key: 'programming', label: 'Programming', icon: Code },
  { key: 'frameworks', label: 'Frameworks & Backend', icon: Server },
  { key: 'webTools', label: 'Web & Tools', icon: Globe },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getAllSkills = () => {
    return [
      ...skillsData.aiMl.map(s => ({ ...s, group: 'AI & Machine Learning' })),
      ...skillsData.programming.map(s => ({ ...s, group: 'Programming' })),
      ...skillsData.frameworks.map(s => ({ ...s, group: 'Frameworks & Backend' })),
      ...skillsData.webTools.map(s => ({ ...s, group: 'Web & Tools' })),
    ];
  };

  const displayedSkills = activeTab === 'all'
    ? getAllSkills()
    : (skillsData[activeTab] || []).map(s => ({ ...s, group: categories.find(c => c.key === activeTab)?.label }));

  const getProficiencyStyle = (prof) => {
    switch (prof) {
      case 'Working Knowledge':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'Currently Learning':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'Familiar':
        return 'text-sky-300 bg-sky-500/10 border-sky-500/25';
      default:
        return 'text-slate-300 bg-white/5 border-white/10';
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Frosted Glass Back */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-xl border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3 shadow-sm">
              <Brain className="w-3.5 h-3.5 text-cyan-400" />
              <span>02. Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight">
              TECHNICAL <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">SKILLS</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-3 md:mt-0 max-w-sm">
            Curated technical skills directly matching verified projects and engineering coursework.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                    : 'bg-slate-900/60 backdrop-blur-md text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold font-display group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.level}
                    </span>
                  </div>

                  <span className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border ${getProficiencyStyle(skill.proficiency)}`}>
                    {skill.proficiency}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{skill.group}</span>
                <CheckCircle className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Core Strengths from Resume */}
        <div className="mt-10 p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
              ENGINEERING CORE STRENGTHS
            </span>
            <p className="text-xs text-slate-400">
              Foundational problem solving and collaborative technical capabilities.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreStrengths.map((str, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-200 bg-white/5 border border-white/10 flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>{str}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
