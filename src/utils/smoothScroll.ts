import Lenis from 'lenis';

export const initSmoothScroll = () => {
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  const lenis = new Lenis({
    lerp: isMobile ? 1 : 0.12,
    duration: isMobile ? 0 : 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: !isMobile,
    wheelMultiplier: 1.0,
    touchMultiplier: 2.0,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
