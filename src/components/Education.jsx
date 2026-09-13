import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#facc15]/10 border border-[#facc15]/20 text-[#facc15] font-mono text-xs uppercase tracking-widest mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>07. Academic Path</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              EDUCATION <span className="bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] bg-clip-text text-transparent">TIMELINE</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-3 md:mt-0">
            Formal engineering foundations and specialization coursework.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-[#facc15]/30 space-y-8">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative">
              {/* Timeline pin */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#06090f] border-2 border-[#ef4444] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-ping" />
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-mono font-semibold text-[#facc15] bg-[#facc15]/10 px-3 py-1 rounded-full border border-[#facc15]/20 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    CGPA: {edu.cgpa} / 10
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-1">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-sm font-mono text-slate-400 mb-4">
                  <MapPin className="w-4 h-4 text-[#facc15]" />
                  <span>{edu.institution} ({edu.location})</span>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {edu.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
