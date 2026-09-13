import React, { useState } from 'react';
import { ArrowDown, Sparkles, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import profilePhoto from '../assets/profile/profile.jpg';
import LightRays from './LightRays';
import { useTheme } from '../utils/ThemeContext';
import StrokeText from './StrokeText';
import TextType from './TextType';

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
    setMouseOffset({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Volumetric Cyber Light Rays from React Bits with dynamic theme adaptation */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
        <LightRays
          raysOrigin="top-center"
          raysColor={isDark ? "#facc15" : "#ef4444"}
          raysSpeed={1.2}
          lightSpread={0.85}
          rayLength={1.6}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.06}
          distortion={0.04}
          pulsating={true}
          fadeDistance={1.1}
          saturation={1.0}
          lightMode={!isDark}
        />
      </div>

      {/* Subtle radial glow layers */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-[#facc15]/10' : 'bg-[#ef4444]/10'
      }`} />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#ef4444]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Indicator */}
          <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border backdrop-blur-md mb-6 shadow-sm ${
            isDark
              ? 'bg-[#18160f]/80 border-[#facc15]/30 text-[#facc15]'
              : 'bg-white/80 border-[#ef4444]/30 text-[#dc2626]'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#facc15] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#facc15]" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">
              {personalInfo.statusBadge}
            </span>
          </div>

          {/* Main Title & Brand Identity */}
          <h2 className={`text-xl sm:text-2xl font-mono mb-3 font-medium tracking-wide ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            <TextType
              as="span"
              text={[
                "Hi, I'm Vinay.",
                "Hi, I'm Chinnam Vinay."
              ]}
              typingSpeed={70}
              pauseDuration={2200}
              deletingSpeed={35}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-[#facc15] font-bold"
              className={isDark ? 'text-white font-bold' : 'text-slate-900 font-bold'}
            />
          </h2>

          <h1 className="w-full max-w-2xl mb-6">
            <span className="sr-only">AIML Engineer</span>
            <div className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] -mb-1">
              <StrokeText
                text="AI / ML"
                strokeColor={isDark ? "#facc15" : "#ea580c"}
                fillColor={isDark ? "#ffffff" : "#09101f"}
                strokeWidth={2.2}
                drawDuration={1.4}
                fillDelay={0.15}
                stagger={0.06}
                ease="power3.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={84}
                fontWeight={900}
                letterSpacing={-1}
              />
            </div>
            <div className="w-full max-w-[330px] sm:max-w-[440px] md:max-w-[500px]">
              <StrokeText
                text="ENGINEER"
                strokeColor="#ef4444"
                fillColor="#facc15"
                strokeWidth={2.2}
                drawDuration={1.6}
                fillDelay={0.25}
                stagger={0.05}
                ease="power3.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={84}
                fontWeight={900}
                letterSpacing={-1}
              />
            </div>
          </h1>

          {/* Supporting Statements */}
          <p className={`text-base sm:text-lg max-w-2xl leading-relaxed mb-3 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {personalInfo.tagline}
          </p>
          <p className={`text-xs sm:text-sm font-mono max-w-xl mb-8 flex items-center gap-2 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
            {personalInfo.secondaryTagline}
          </p>

          {/* Action CTAs: With Resume Download Option */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            {/* View Projects CTA */}
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#facc15] via-[#fb923c] to-[#ef4444] rounded-xl shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View My Projects</span>
            </a>

            {/* Download Resume Option */}
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              target="_blank"
              rel="noreferrer"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border transition-all hover:scale-[1.02] ${
                isDark
                  ? 'bg-[#151722] hover:bg-[#1f2334] text-[#facc15] border-[#facc15]/40 shadow-[0_0_15px_rgba(250,204,21,0.2)]'
                  : 'bg-white hover:bg-slate-50 text-[#dc2626] border-[#ef4444]/50 shadow-md'
              }`}
              title="Download Resume PDF"
            >
              <FileDown className="w-4 h-4 text-[#ef4444]" />
              <span>Download Resume</span>
            </a>

            {/* Social Buttons */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-xl border transition-all hover:scale-[1.02] ${
                  isDark
                    ? 'text-slate-200 bg-[#121624]/90 hover:bg-[#1a2034] border-white/10 hover:border-[#facc15]/50'
                    : 'text-slate-700 bg-white hover:bg-slate-50 border-slate-200 shadow-sm'
                }`}
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4 text-[#facc15]" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-xl border transition-all hover:scale-[1.02] ${
                  isDark
                    ? 'text-slate-200 bg-[#121624]/90 hover:bg-[#1a2034] border-white/10 hover:border-[#ef4444]/50'
                    : 'text-slate-700 bg-white hover:bg-slate-50 border-slate-200 shadow-sm'
                }`}
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-[#ef4444]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Honest Micro Credentials */}
          <div className={`mt-8 pt-6 border-t flex flex-wrap items-center gap-6 text-xs font-mono ${
            isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'
          }`}>
            <div>
              <span className="text-slate-500">DEGREE:</span>{' '}
              <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>B.Tech AIML (2024 — 2028)</span>
            </div>
            <div>
              <span className="text-slate-500">LOCATION:</span>{' '}
              <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>Eluru, AP, India</span>
            </div>
            <div>
              <span className="text-slate-500">PRIMARY:</span>{' '}
              <span className="text-[#facc15] font-bold">Python</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Authentic Profile Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96">
            
            {/* Cinematic background halo */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#facc15]/25 via-transparent to-[#ef4444]/25 blur-2xl transform -rotate-3" />

            {/* Glowing outer bezel */}
            <div className="relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-tr from-[#facc15] via-[#fb923c] to-[#ef4444] shadow-[0_0_40px_rgba(250,204,21,0.25)]">
              
              {/* Inner card container */}
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0a101d] relative group">
                <img
                  src={profilePhoto}
                  alt="Vinay - AI/ML Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090f]/90 via-transparent to-transparent opacity-80" />

                {/* Cyber badge at bottom of portrait */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 bg-[#06090f]/85 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-white keep-white tracking-wider font-display">CHINNAM VINAY</p>
                    <p className="text-[9px] font-mono text-[#facc15]">AIML • Ramachandra Eng College</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-70 hover:opacity-100 transition-opacity">
        <span className={`text-[10px] font-mono uppercase tracking-[0.25em] ${
          isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#facc15]" />
        </motion.div>
      </div>
    </section>
  );
}
