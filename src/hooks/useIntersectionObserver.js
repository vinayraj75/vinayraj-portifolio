import { useEffect, useRef, useState } from 'react';

/**
 * Custom Intersection Observer hook for smooth scrolling effects and transitions.
 * Observes element visibility in viewport with configurable threshold, rootMargin, and triggerOnce.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.1] - Percentage of target visibility before triggering (0 to 1)
 * @param {string} [options.rootMargin='0px 0px -50px 0px'] - Margin around the root bounding box
 * @param {boolean} [options.triggerOnce=true] - If true, unobserves once visible so animation stays
 * @returns {[React.RefObject, boolean, IntersectionObserverEntry|null]}
 */
export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Graceful fallback if IntersectionObserver is not available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        setEntry(observerEntry);
        if (observerEntry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible, entry];
}

export default useIntersectionObserver;
