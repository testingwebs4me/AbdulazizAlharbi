import Lenis from 'lenis';

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    lerp: 0.08,
    duration: 1.5,
    easing: (t) => 1 - Math.pow(1 - t, 4),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.5,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
