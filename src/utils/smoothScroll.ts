import Lenis from 'lenis';

export const initSmoothScroll = () => {
  const isDesktop = window.innerWidth >= 1024;

  if (!isDesktop) {
    // No smooth scroll on mobile, just handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    return {
      destroy: () => {},
      raf: () => {},
      scrollTo: () => {},
    };
  }

  const lenis = new Lenis({
    lerp: 0.05,
    duration: 1.8,
    easing: (t) => 1 - Math.pow(1 - t, 4),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.5,
    touchMultiplier: 1.5,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Handle anchor clicks with smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
      if (target) {
        lenis.scrollTo(target as HTMLElement, {
          offset: 0,
          duration: 2,
        });
      }
    });
  });

  return lenis;
};
