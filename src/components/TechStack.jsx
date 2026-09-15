import React from 'react';
import { Cpu, Terminal, Globe, Code2, GitBranch, Layers, Scan, Sparkles } from 'lucide-react';
import { techStack } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

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
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 relative border-y border-white/5 bg-[#070c18]/50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-xl border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3 shadow-sm">
            <span>PRIMARY TOOLING &amp; ECOSYSTEM</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
            TECHNOLOGY STACK
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech, idx) => {
            const Icon = techIcons[tech.name] || Sparkles;
            return (
              <div
                key={tech.name}
                style={{
                  transitionDelay: isVisible ? `${idx * 45}ms` : '0ms',
                }}
                className={`p-4 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-500 group cursor-default ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
                } ${
                  tech.highlight
                    ? 'glass-card border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                    : 'glass-card border border-white/5 hover:border-white/20'
                }`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 bg-white/5 group-hover:scale-110 group-hover:bg-cyan-500/15 text-slate-300 group-hover:text-cyan-400 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold font-display group-hover:text-cyan-300 transition-colors">
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
