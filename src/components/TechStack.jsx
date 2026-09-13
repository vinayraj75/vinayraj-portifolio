import React from 'react';
import { Cpu, Terminal, Globe, Code2, GitBranch, Layers, Scan, Sparkles } from 'lucide-react';
import { techStack } from '../data/portfolioData';

const techIcons = {
  Python: Code2,
  'Machine Learning': Cpu,
  TensorFlow: Layers,
  FastAPI: Terminal,
  'Computer Vision': Scan,
  React: Globe,
  JavaScript: Code2,
  'Git & GitHub': GitBranch,
};

export default function TechStack() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative border-y border-white/5 bg-[#070c18]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#facc15] mb-2">
            PRIMARY TOOLING & ECOSYSTEM
          </p>
          <h3 className="text-2xl sm:text-3xl font-black font-display">
            TECHNOLOGY STACK
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech) => {
            const Icon = techIcons[tech.name] || Sparkles;
            return (
              <div
                key={tech.name}
                className={`p-4 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default ${
                  tech.highlight
                    ? 'glass-card border border-[#facc15]/30 hover:border-[#ef4444] hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]'
                    : 'glass-card border border-white/5 hover:border-white/20'
                }`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 bg-white/5 group-hover:scale-110 group-hover:bg-[#ef4444]/15 text-slate-300 group-hover:text-[#ef4444] transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold font-display group-hover:text-[#facc15] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 mt-1">
                  {tech.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
