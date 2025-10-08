import Lenis from 'lenis';

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    lerp: 0.08,
    duration: 1.2,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.7,
    touchMultiplier: 1.5,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Handle anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
      if (target) {
        lenis.scrollTo(target as HTMLElement, {
          offset: 0,
          duration: 1.5,
        });
      }
    });
  });

  return lenis;
};
