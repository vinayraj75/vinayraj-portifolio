import React, { useState } from 'react';
import { ArrowDown, Sparkles, FileDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import profilePhoto from '../assets/profile/profile.png';
import { useTheme } from '../utils/ThemeContext';
import TextType from './TextType';
import StrokeText from './StrokeText';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Hero() {
  const { isDark } = useTheme();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 12;
    const y = (clientY / innerHeight - 0.5) * 12;
    setMouseOffset({ x, y });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#06090f] transition-opacity duration-1000 ${
        isHeroVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Subtle Ambient Vignette & Backlighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-cyan-950/20 via-slate-900/10 to-transparent blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* ============================================================ */}
      {/* 1. CINEMATIC SHOWCASE STAGE (Matching Reference Image)        */}
      {/* ============================================================ */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center my-auto pt-4 sm:pt-8">
        
        {/* Giant Background Word: DEVELOPER (Animated StrokeText from React Bits) */}
        <div
          className="w-screen left-1/2 -translate-x-1/2 flex items-center justify-center select-none pointer-events-none absolute top-1/2 -translate-y-1/2 z-0 overflow-visible"
          aria-hidden="true"
        >
          <StrokeText
            text="DEVELOPER"
            strokeColor="#38bdf8"
            fillColor="url(#developer-silver-grad)"
            strokeWidth={2.5}
            drawDuration={1.8}
            fillDelay={0.2}
            stagger={0.06}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={230}
            fontWeight={900}
            letterSpacing={6}
            className="hero-stroke-text w-full flex items-center justify-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
          />
        </div>

        {/* Center Portrait of Vinay in Suit (In front of DEVELOPER) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-72 sm:w-88 md:w-[440px] lg:w-[480px] xl:w-[520px] flex justify-center pointer-events-none"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]">
            <img
              src={profilePhoto}
              alt="Chinnam Vinay — Software Developer"
              className="w-full h-auto object-contain object-top filter brightness-[1.02] contrast-[1.02] drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Flanking Overlay Controls (Left: Software Developer, Right: Contact) */}
        <div className="w-full max-w-6xl mx-auto flex items-end justify-between px-4 sm:px-8 relative z-20 -mt-8 sm:-mt-12 md:-mt-16 pointer-events-auto">
          {/* Bottom-Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-none">
              Software <span className="font-light italic text-slate-300">Developer</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-2 font-medium flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
              AI / ML Engineer • Chinnam Vinay
            </p>
          </motion.div>

          {/* Bottom-Right: Contact Button (Matching reference pill) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/20 hover:border-cyan-400/50 text-white backdrop-blur-xl shadow-xl transition-all hover:scale-105 group"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide">Contact</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. FURTHER INFORMATION (Arranged Elegantly Below Picture)      */}
      {/* ============================================================ */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto w-full mt-10 sm:mt-14 relative z-20"
      >
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            {/* Status Capsule */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-slate-950/70 text-cyan-300 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                {personalInfo.statusBadge}
              </span>
            </div>

            {/* Dynamic Intro Type */}
            <div className="text-xs sm:text-sm font-mono text-slate-300">
              <TextType
                as="span"
                text={[
                  "Hi, I'm Vinay — AI/ML Engineer",
                  "Building intelligent, scalable solutions",
                  "Turning ideas into real-world technology"
                ]}
                typingSpeed={60}
                pauseDuration={2200}
                deletingSpeed={30}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-cyan-400 font-bold"
                className="text-white font-semibold"
              />
            </div>
          </div>

          {/* Tagline Statement */}
          <div className="py-6">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
              {personalInfo.tagline}
            </p>
            <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              {personalInfo.secondaryTagline}
            </p>
          </div>

          {/* Action CTAs & Credentials Grid */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/5">
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all hover:scale-105"
              >
                <span>View My Projects</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border border-cyan-500/30 bg-slate-950/70 hover:bg-slate-900 text-cyan-300 transition-all hover:scale-105"
                title="Download Resume PDF"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-cyan-300 transition-all"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-cyan-300 transition-all"
                  title="LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Quick Micro Credentials */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500">DEGREE:</span>{' '}
                <span className="text-slate-200">B.Tech AIML (2024–2028)</span>
              </div>
              <div>
                <span className="text-slate-500">LOCATION:</span>{' '}
                <span className="text-slate-200">Eluru, AP, India</span>
              </div>
              <div>
                <span className="text-slate-500">PRIMARY:</span>{' '}
                <span className="text-cyan-400 font-bold">Python</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <a
          href="#about"
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-1.5 mt-8 opacity-70 hover:opacity-100 transition-all cursor-pointer group"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 group-hover:text-cyan-400 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-1 transition-transform" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
