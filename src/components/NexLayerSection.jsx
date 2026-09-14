import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Building2,
  ExternalLink,
  ShieldCheck,
  Compass,
  Users,
  CheckSquare,
  Layers,
  Cpu,
  Calendar,
  Briefcase,
} from 'lucide-react';
import { experience } from '../data/portfolioData';

// Mapping for minimal responsibility icons
const iconMap = {
  ShieldCheck: ShieldCheck,
  Compass: Compass,
  Users: Users,
  CheckSquare: CheckSquare,
  Layers: Layers,
  Cpu: Cpu,
};

export default function NexLayerSection() {
  const shouldReduceMotion = useReducedMotion();
  const [logoError, setLogoError] = useState(false);

  // Consume data from portfolioData.js
  const nexlayer = experience?.[0] || {
    company: 'NexLayer Private Limited',
    brandName: 'NexLayer',
    role: 'Director & Co-Founder — Operations & Administration',
    designation: 'Director & Co-Founder',
    department: 'Operations & Administration',
    duration: '',
    website: 'https://www.nexlayerweb.in/',
    logo: 'https://www.nexlayerweb.in/logo.png',
    description:
      'I contribute to NexLayer Private Limited as Director and Co-Founder, with a focus on operations, administration, strategic coordination, project execution, organizational management and technology initiatives.',
    responsibilities: [],
    responsibilityDetails: [],
    leadershipHighlight: {
      badge: 'CO-FOUNDER',
      text: 'Contributing to the growth and execution of NexLayer through operations, coordination, administration and technology-focused initiatives.',
    },
    techConnection: {
      badge: 'TECHNOLOGY + OPERATIONS',
      text: 'Combining technology awareness with operational and administrative coordination to support practical project execution and organizational growth.',
    },
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const logoVariant = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-300"
    >
      {/* Executive Dark Atmosphere Glow Accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-br from-cyan-900/15 via-blue-900/10 to-transparent blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/5 blur-[90px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ============================================================ */}
        {/* 1. SECTION HEADER                                            */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeIn}
          className="mb-14"
        >
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>EXPERIENCE &amp; LEADERSHIP</span>
          </div>

          {/* Main Heading */}
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white"
          >
            {nexlayer.company.toUpperCase()}
          </h2>

          {/* Subheading */}
          <p className="mt-2 text-base sm:text-lg text-slate-300 font-medium flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{nexlayer.role}</span>
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* 2. PRIMARY COMPANY CARD (Executive Two-Column Layout)         */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeIn}
          className="mb-12 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-cyan-500/20 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_16px_40px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden"
        >
          {/* Subtle Fine Grid Texture Accent */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT SIDE: Identity, Designation, Timeline & Link Button */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {/* Official Logo Display */}
                <motion.div
                  variants={logoVariant}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-950/80 border border-cyan-500/30 p-3.5 flex items-center justify-center shadow-lg shadow-cyan-950/30 shrink-0 relative group"
                >
                  {!logoError ? (
                    <img
                      src={nexlayer.logo}
                      alt="NexLayer Official Logo"
                      className="w-full h-full object-contain filter contrast-105 transition-transform duration-300 group-hover:scale-105"
                      onError={() => setLogoError(true)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center font-display font-black text-cyan-400 text-xl tracking-tighter">
                      NL
                    </div>
                  )}
                  {/* Subtle Inner Corner Highlight */}
                  <div
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 rounded-tr"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Company & Designation Info */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                      Corporate Entity
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    {nexlayer.brandName || 'NexLayer'}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400">
                    {nexlayer.company}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/5">
                    <p className="text-sm font-semibold text-cyan-300 font-display">
                      {nexlayer.designation || 'Director & Co-Founder'}
                    </p>
                    <p className="text-xs font-mono text-slate-400">
                      {nexlayer.department || 'Operations & Administration'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Element */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-950/60 border border-white/10 text-xs sm:text-sm">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-slate-300 font-display">
                      {nexlayer.role}
                    </span>
                    {nexlayer.duration && nexlayer.duration.trim() !== '' ? (
                      <>
                        <span className="text-slate-500">•</span>
                        <span className="font-mono text-cyan-400 font-medium">
                          {nexlayer.duration}
                        </span>
                      </>
                    ) : (
                      <span
                        className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-slate-400"
                        title="Duration can be edited in portfolioData.js"
                      >
                        Active Leadership
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Company Website Button */}
              <div>
                <a
                  href={nexlayer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/10 hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-300 hover:text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 group"
                  aria-label="Visit NexLayer official website (opens in new tab)"
                >
                  <span>VISIT NEXLAYER</span>
                  <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Executive Description */}
            <div className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-10">
              <div className="p-6 rounded-2xl bg-slate-950/50 border border-white/5 relative">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Executive Overview
                  </span>
                </div>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  &ldquo;{nexlayer.description}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Leadership Responsibility</span>
                  <span className="text-cyan-400">Director &amp; Co-Founder</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 3. KEY RESPONSIBILITIES GRID                                 */}
        {/* ============================================================ */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Key Responsibilities
            </h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {nexlayer.responsibilityDetails && nexlayer.responsibilityDetails.length > 0
              ? nexlayer.responsibilityDetails.map((item) => {
                  const IconComponent = iconMap[item.icon] || ShieldCheck;
                  return (
                    <motion.div
                      key={item.title}
                      variants={cardVariant}
                      className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                    >
                      {/* Subtle hover background highlight */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        aria-hidden="true"
                      />

                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5" aria-hidden="true" />
                        </div>

                        <h4 className="text-base font-bold text-white font-display tracking-tight mb-2">
                          {item.title}
                        </h4>

                        <p className="text-sm text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })
              : nexlayer.responsibilities.map((resp) => (
                  <motion.div
                    key={resp}
                    variants={cardVariant}
                    className="p-5 rounded-xl bg-slate-900/60 border border-white/10"
                  >
                    <p className="text-sm font-semibold text-white">{resp}</p>
                  </motion.div>
                ))}
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* 4. LEADERSHIP HIGHLIGHT & TECHNOLOGY CONNECTION               */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Leadership Highlight Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950 border border-cyan-500/20 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
                {nexlayer.leadershipHighlight?.badge || 'CO-FOUNDER'}
              </span>
              <Building2 className="w-4 h-4 text-cyan-400/80" aria-hidden="true" />
            </div>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              &ldquo;{nexlayer.leadershipHighlight?.text}&rdquo;
            </p>
          </div>

          {/* Technology Connection Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950 border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-md bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-widest font-bold">
                {nexlayer.techConnection?.badge || 'TECHNOLOGY + OPERATIONS'}
              </span>
              <Cpu className="w-4 h-4 text-slate-400" aria-hidden="true" />
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              &ldquo;{nexlayer.techConnection?.text}&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
