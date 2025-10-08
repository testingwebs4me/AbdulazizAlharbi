import Lenis from 'lenis';

export const initSmoothScroll = () => {
  const isDesktop = window.innerWidth >= 1024;

  if (!isDesktop) {
    // No smooth scroll on mobile
    return {
      destroy: () => {},
      raf: () => {},
      scrollTo: () => {},
    };
  }

  // Desktop: Ultra smooth with section snapping
  const lenis = new Lenis({
    lerp: 0.065,
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.6,
    touchMultiplier: 1.8,
  });

  let isScrolling = false;
  let scrollTimeout: ReturnType<typeof setTimeout>;

  const sections = document.querySelectorAll('.snap-section');
  let currentSection = 0;

  // Detect scroll direction and snap to sections
  lenis.on('scroll', () => {
    if (isScrolling) return;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Find closest section
      let closestSection = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = index;
        }
      });

      if (closestSection !== currentSection && minDistance > 50) {
        currentSection = closestSection;
        isScrolling = true;

        lenis.scrollTo(sections[currentSection] as HTMLElement, {
          offset: 0,
          duration: 1.5,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          onComplete: () => {
            isScrolling = false;
          },
        });
      }
    }, 150);
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
