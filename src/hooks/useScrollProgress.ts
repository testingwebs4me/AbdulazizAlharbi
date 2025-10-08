import { useState, useEffect } from 'react';

interface ScrollProgress {
  scrollY: number;
  scrollPercent: number;
  velocity: number;
  direction: 'up' | 'down' | 'idle';
}

export const useScrollProgress = (): ScrollProgress => {
  const [scrollData, setScrollData] = useState<ScrollProgress>({
    scrollY: 0,
    scrollPercent: 0,
    velocity: 0,
    direction: 'idle',
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = Date.now();
    let ticking = false;

    const updateScrollData = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? (currentScrollY / maxScroll) * 100 : 0;

      const timeDiff = currentTimestamp - lastTimestamp;
      const scrollDiff = currentScrollY - lastScrollY;
      const velocity = timeDiff > 0 ? Math.abs(scrollDiff / timeDiff) : 0;

      let direction: 'up' | 'down' | 'idle' = 'idle';
      if (scrollDiff > 0.5) direction = 'down';
      else if (scrollDiff < -0.5) direction = 'up';

      setScrollData({
        scrollY: currentScrollY,
        scrollPercent: Math.min(100, Math.max(0, scrollPercent)),
        velocity,
        direction,
      });

      lastScrollY = currentScrollY;
      lastTimestamp = currentTimestamp;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollData);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollData();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollData;
};
