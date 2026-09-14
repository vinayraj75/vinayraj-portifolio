import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out hidden md:block"
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 24 : 14)}px, ${pos.y - (isHovered ? 24 : 14)}px, 0)`,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            isHovered
              ? 'w-12 h-12 border-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
              : 'w-7 h-7 border-cyan-500/40 bg-transparent'
          }`}
        />
      </div>

      {/* Center pinpoint dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
        style={{
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
      </div>
    </>
  );
}
