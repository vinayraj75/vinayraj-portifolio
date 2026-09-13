import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles, Copy, ArrowUpRight, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useTheme } from '../utils/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since this is a static client-safe portfolio, generate mailto link or visual confirmation
    if (personalInfo.socials.email) {
      window.location.href = `mailto:${personalInfo.socials.email}?subject=Collaboration%20Inquiry%20from%20${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}`;
    } else {
      setSubmitted(true);
    }
  };

  const handleCopyLinkedIn = () => {
    navigator.clipboard.writeText(personalInfo.socials.linkedin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#facc15]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading & Social CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#facc15]/10 border border-[#facc15]/20 text-[#facc15] font-mono text-xs uppercase tracking-widest">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>10. Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
              LET'S BUILD <br />
              <span className="bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] bg-clip-text text-transparent">
                SOMETHING INTELLIGENT.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              I'm always interested in learning, building AI/ML projects, collaborating on ideas and exploring opportunities to create useful technology.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all hover:scale-105 ${
                  isDark
                    ? 'text-[#facc15] bg-[#0c162a] hover:bg-[#132342] border border-[#facc15]/40 shadow-[0_0_15px_rgba(250,204,21,0.2)]'
                    : 'text-[#090d16] bg-white hover:bg-slate-50 border border-slate-300 shadow-md hover:border-[#facc15]'
                }`}
                title="Download Resume PDF"
              >
                <FileDown className="w-4 h-4 text-[#ef4444]" />
                <span className={isDark ? 'text-[#facc15]' : 'text-[#090d16] font-bold'}>Download Resume</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="keep-white text-slate-900 font-bold">Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 ${
                  isDark
                    ? 'text-slate-200 bg-[#0c162a] hover:bg-[#132342] border border-white/10 hover:border-[#facc15]/40'
                    : 'text-[#090d16] bg-white hover:bg-slate-50 border border-slate-300 shadow-md hover:border-[#facc15]'
                }`}
              >
                <GithubIcon className="w-4 h-4 text-[#facc15]" />
                <span className={isDark ? 'text-slate-200' : 'text-[#090d16] font-bold'}>Follow on GitHub</span>
              </a>

              {personalInfo.socials.email && (
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 ${
                    isDark
                      ? 'text-slate-200 bg-[#0c162a] hover:bg-[#132342] border border-white/10 hover:border-[#ef4444]/40'
                      : 'text-[#090d16] bg-white hover:bg-slate-50 border border-slate-300 shadow-md hover:border-[#ef4444]'
                  }`}
                >
                  <Mail className="w-4 h-4 text-[#ef4444]" />
                  <span className={isDark ? 'text-slate-200' : 'text-[#090d16] font-bold'}>Email Me</span>
                </a>
              )}
            </div>

            {/* Quick Copy Card */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between gap-4 max-w-md transition-all ${
              isDark
                ? 'bg-[#091122]/70 border-white/5'
                : 'bg-white border-slate-300 shadow-md'
            }`}>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold tracking-wider">DIRECT LINKEDIN PROFILE</span>
                <span className={`text-xs font-mono truncate block font-semibold ${
                  isDark ? 'text-slate-300' : 'text-[#090d16]'
                }`}>
                  linkedin.com/in/chinnam-vinay-37a514355
                </span>
              </div>
              <button
                onClick={handleCopyLinkedIn}
                className={`p-2.5 rounded-xl border shrink-0 transition-colors ${
                  isDark
                    ? 'bg-white/5 hover:bg-[#facc15]/20 text-slate-300 hover:text-[#facc15] border-white/5'
                    : 'bg-slate-100 hover:bg-slate-200 text-[#090d16] hover:text-[#facc15] border-slate-300 shadow-sm'
                }`}
                title="Copy LinkedIn URL"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-700 dark:text-slate-300" />}
              </button>
            </div>
          </div>

          {/* Right Column: Direct Message Form Card */}
          <div className="lg:col-span-6">
            <div className="glass-card p-7 sm:p-8 rounded-3xl border border-white/10 relative">
              <h3 className="text-xl font-bold font-display text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                Direct inquiry for AI/ML projects, collaboration, or internships.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Please connect directly via LinkedIn for immediate conversation.
                  </p>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-[#facc15]"
                  >
                    Open Vinay's LinkedIn
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#06090f]/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#06090f]/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Project or Inquiry Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your idea, requirement, or opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#06090f]/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs text-slate-950 bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
