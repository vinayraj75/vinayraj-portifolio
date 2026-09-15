import React, { useState, useEffect } from 'react';
import { Star, GitFork, ExternalLink, Code2, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function GithubSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback repo showcase in case GitHub API rate limits or offline
  const fallbackRepos = [
    {
      name: "FastAPI-ML-Microservices",
      description: "High-performance asynchronous REST endpoints for machine learning model serving and inference.",
      language: "Python",
      stargazers_count: 0,
      html_url: "https://github.com/vinayraj75",
    },
    {
      name: "Python-Data-Pipelines",
      description: "Modular data cleaning, transformation, and statistical modeling workflows in Python.",
      language: "Python",
      stargazers_count: 0,
      html_url: "https://github.com/vinayraj75",
    },
    {
      name: "Face-Emotion-Detection",
      description: "Computer Vision pipeline recognizing facial landmarks and affective expressions in real-time.",
      language: "Python",
      stargazers_count: 0,
      html_url: "https://github.com/vinayraj75",
    },
    {
      name: "SEO-Optimizer-Pro",
      description: "Full-stack application analyzing content structure, heading hierarchy, and on-page SEO metrics.",
      language: "JavaScript / Python",
      stargazers_count: 0,
      html_url: "https://github.com/vinayraj75",
    },
  ];

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${personalInfo.socials.githubUsername}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          setProfile(userData);
        }

        const reposRes = await fetch(
          `https://api.github.com/users/${personalInfo.socials.githubUsername}/repos?sort=updated&per_page=4`
        );
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            setRepos(reposData);
          } else {
            setRepos(fallbackRepos);
          }
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        // Graceful fallback without breaking UI
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const displayRepos = repos.length > 0 ? repos : fallbackRepos;

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Frosted Glass Back */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-xl border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3 shadow-sm">
              <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>09. Open Source &amp; Code</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              GITHUB <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">ACTIVITY</span>
            </h2>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all self-start md:self-auto"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Profile Stats Bar */}
        <div
          className={`glass-card p-6 rounded-3xl border border-white/10 mb-8 flex flex-wrap items-center justify-between gap-6 bg-gradient-to-r from-[#091122] to-[#070b16] transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                @{personalInfo.socials.githubUsername}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                AI / Machine Learning &amp; Python Repositories
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">TARGET ECOSYSTEM</span>
              <span className="text-white font-bold">Python / AI / Web</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">STATUS</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Contributor
              </span>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayRepos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.html_url || personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              style={{
                transitionDelay: isVisible ? `${200 + idx * 80}ms` : '0ms',
              }}
              className={`glass-card p-6 rounded-2xl border border-white/5 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>

                <h4 className="text-base font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                  {repo.name}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {repo.description || "Machine learning, AI research, and software engineering codebase."}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-cyan-300 font-medium">{repo.language || 'Python'}</span>
                <span className="text-slate-500 text-[11px]">View on GitHub</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
