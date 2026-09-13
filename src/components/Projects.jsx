import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, FolderGit2, Cpu, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#facc15]/10 border border-[#facc15]/20 text-[#facc15] font-mono text-xs uppercase tracking-widest mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03. Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              FEATURED <span className="bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] bg-clip-text text-transparent">PROJECTS</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-3 md:mt-0 max-w-sm">
            Practical AI/ML implementations built with clean Python architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-7 border border-white/10 hover:border-[#facc15]/40 transition-all flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Top ambient accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#facc15]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#facc15]/10 transition-colors" />

              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-[#facc15] bg-[#facc15]/10 border border-[#facc15]/25">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-black font-display text-white mb-2 group-hover:text-[#facc15] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights Pill Box */}
                <div className="p-3.5 rounded-xl bg-[#060a14]/80 border border-white/5 mb-5 space-y-2">
                  <div className="text-[11px] text-slate-300 font-mono">
                    <span className="text-[#ef4444] font-bold">PROBLEM:</span> {project.problem.slice(0, 105)}...
                  </div>
                  <div className="text-[11px] text-slate-300 font-mono">
                    <span className="text-[#facc15] font-bold">SOLUTION:</span> {project.solution.slice(0, 105)}...
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#facc15]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
