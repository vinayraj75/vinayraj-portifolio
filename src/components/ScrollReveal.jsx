import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

/**
 * ScrollReveal component powered by Intersection Observer
 * Smoothly animates children when scrolled into view with hardware acceleration.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade'} [props.animation='fade-up']
 * @param {number} [props.delay=0] - Delay in ms
 * @param {number} [props.duration=700] - Duration in ms
 * @param {number} [props.threshold=0.1] - IntersectionObserver threshold
 * @param {string} [props.rootMargin='0px 0px -40px 0px'] - IntersectionObserver rootMargin
 * @param {boolean} [props.triggerOnce=true] - Whether to animate only once
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string|React.ComponentType} [props.as='div'] - Element tag to render
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  className = '',
  as: Component = 'div',
  style: userStyle = {},
  ...props
}) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getTransform = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 32px, 0)';
      case 'fade-down':
        return isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -32px, 0)';
      case 'fade-left':
        return isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-32px, 0, 0)';
      case 'fade-right':
        return isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(32px, 0, 0)';
      case 'scale':
        return isVisible ? 'scale(1)' : 'scale(0.94)';
      case 'fade':
      default:
        return 'none';
    }
  };

  const dynamicStyle = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
    ...userStyle,
  };

  return (
    <Component ref={ref} style={dynamicStyle} className={className} {...props}>
      {children}
    </Component>
  );
}
