import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger animations when an element scrolls into view
 * @param {Object} options - Intersection Observer options
 * @returns {React.RefObject} - Ref to attach to the element you want to animate
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          entry.target.classList.add('scroll-animate-in');
          // Optional: stop observing after first intersection
          // observer.unobserve(entry.target);
        } else {
          // Remove animation class when element leaves view (for re-animation on scroll back)
          entry.target.classList.remove('scroll-animate-in');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      ...options
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return elementRef;
};
