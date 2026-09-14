import React from 'react';
import {
  SiPython,
  SiTensorflow,
  SiFastapi,
  SiReact,
  SiJavascript,
  SiGithub,
  SiOpencv,
  SiScikitlearn,
  SiNumpy,
  SiPostman,
  SiHtml5,
  SiCss,
} from 'react-icons/si';
import { VscTerminal } from 'react-icons/vsc';
import { TbBrain } from 'react-icons/tb';
import LogoLoop from './LogoLoop';
import { useTheme } from '../utils/ThemeContext';

const row1 = [
  { node: <SiPython />,      title: 'Python',          color: '#3B82F6' },
  { node: <SiTensorflow />,  title: 'TensorFlow',      color: '#FF6F00' },
  { node: <SiFastapi />,     title: 'FastAPI',         color: '#009688' },
  { node: <SiReact />,       title: 'React',           color: '#61DAFB' },
  { node: <SiJavascript />,  title: 'JavaScript',      color: '#D4AC0D' }, // darkened for light bg
  { node: <SiOpencv />,      title: 'OpenCV',          color: '#5C3EE8' },
  { node: <SiScikitlearn />, title: 'Scikit-learn',    color: '#E07B1A' },
  { node: <SiNumpy />,       title: 'NumPy',           color: '#4DABCF' },
];

const row2 = [
  { node: <SiGithub />,      title: 'GitHub',          color: '#1e293b' }, // dark for light mode
  { node: <TbBrain />,       title: 'Deep Learning',   color: '#7C3AED' },
  { node: <SiPostman />,     title: 'Postman',         color: '#FF6C37' },
  { node: <VscTerminal />,   title: 'Terminal / CLI',  color: '#475569' },
  { node: <SiHtml5 />,       title: 'HTML5',           color: '#E34F26' },
  { node: <SiCss />,         title: 'CSS3',            color: '#1572B6' },
  { node: <SiPython />,      title: 'Python',          color: '#3B82F6' },
  { node: <SiFastapi />,     title: 'FastAPI',         color: '#009688' },
];

// Wraps each logo node with its colour style
const styledLogos = (items) =>
  items.map(({ node, title, color }) => ({
    node: <span style={{ color }}>{node}</span>,
    title,
  }));

export default function TechMarquee() {
  const { isDark } = useTheme();

  const fadeColor = isDark ? '#07090f' : '#fbfbfb';
  const labelColor = isDark ? '#64748b' : '#94a3b8';

  return (
    <section
      className="tech-marquee-section py-14 px-0 relative overflow-hidden border-y"
      aria-label="Technology marquee"
    >
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <div className="section-label-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-widest mb-3 shadow-sm text-cyan-400">
          <span>TOOLS &amp; ECOSYSTEM</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black font-display">
          TECHNOLOGY{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            MARQUEE
          </span>
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-2 max-w-xs mx-auto">
          Hover to pause · Scroll never stops
        </p>
      </div>

      {/* Row 1 — left */}
      <div className="mb-6" style={{ overflow: 'hidden' }}>
        <LogoLoop
          logos={styledLogos(row1)}
          speed={80}
          direction="left"
          logoHeight={42}
          gap={52}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor={fadeColor}
          ariaLabel="Primary tech stack — row 1"
          renderItem={(item) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span style={{ fontSize: '42px', lineHeight: 1 }}>{item.node}</span>
              <span
                style={{
                  fontSize: '9px',
                  fontFamily: 'monospace',
                  color: labelColor,
                  letterSpacing: '0.08em',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                }}
              >
                {item.title}
              </span>
            </div>
          )}
        />
      </div>

      {/* Row 2 — right (reverse) */}
      <div style={{ overflow: 'hidden' }}>
        <LogoLoop
          logos={styledLogos(row2)}
          speed={80}
          direction="right"
          logoHeight={42}
          gap={52}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor={fadeColor}
          ariaLabel="Secondary tech stack — row 2"
          renderItem={(item) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span style={{ fontSize: '42px', lineHeight: 1 }}>{item.node}</span>
              <span
                style={{
                  fontSize: '9px',
                  fontFamily: 'monospace',
                  color: labelColor,
                  letterSpacing: '0.08em',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                }}
              >
                {item.title}
              </span>
            </div>
          )}
        />
      </div>
    </section>
  );
}
