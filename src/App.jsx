import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NexLayerSection from './components/NexLayerSection';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import HackathonSection from './components/HackathonSection';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Focus from './components/Focus';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { ThemeProvider } from './utils/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden selection:bg-cyan-500/25 selection:text-cyan-300">
        {/* Background Interactive Ambient Canvas */}
        <BackgroundCanvas />

        {/* Cyber Grid Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-30 z-0" />
        <div className="fixed inset-0 pointer-events-none bg-radial-vignette z-0" />

        {/* Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Desktop-only glowing cursor follower */}
        <CustomCursor />

        {/* Primary Sticky Glass Navigation */}
        <Navbar />

        {/* Page Content Flow */}
        <main className="relative z-10 flex flex-col">
          <Hero />
          <About />
          <NexLayerSection />
          <Skills />
          <TechStack />
          <Projects />
          <HackathonSection />
          <Certifications />
          <Achievements />
          <Education />
          <Focus />
          <GithubSection />
          <Contact />
        </main>

        {/* Production Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
