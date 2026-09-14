import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-all duration-75 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
