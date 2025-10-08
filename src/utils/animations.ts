import { Variants, Transition } from 'framer-motion';

export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96] as const,
  snappy: [0.34, 1.56, 0.64, 1] as const,
  confident: [0.6, 0.01, 0.05, 0.95] as const,
  elastic: [0.68, -0.55, 0.27, 1.55] as const,
  precise: [0.83, 0, 0.17, 1] as const,
};

export const durations = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
};

const defaultTransition: Transition = {
  duration: durations.normal,
  ease: easings.confident,
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(2px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      ...defaultTransition,
      duration: durations.slow,
    }
  }
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(2px)'
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      ...defaultTransition,
      duration: durations.slow,
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: 'blur(2px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      ...defaultTransition,
      duration: durations.slow,
    }
  }
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: 'blur(2px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      ...defaultTransition,
      duration: durations.slow,
    }
  }
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    filter: 'blur(2px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: durations.slow,
      ease: easings.snappy,
    }
  }
};

export const magneticHover = {
  scale: 1.02,
  y: -2,
  transition: {
    duration: durations.fast,
    ease: easings.snappy,
  }
};

export const pressEffect = {
  scale: 0.98,
  transition: {
    duration: durations.instant,
    ease: easings.precise,
  }
};

export const glowHover = {
  boxShadow: '0 20px 60px -10px rgba(14, 165, 233, 0.4)',
  transition: {
    duration: durations.normal,
    ease: easings.smooth,
  }
};

export const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: 'linear' as const,
  },
};

export const pulseGlow = {
  boxShadow: [
    '0 0 20px rgba(14, 165, 233, 0.3)',
    '0 0 40px rgba(14, 165, 233, 0.6)',
    '0 0 20px rgba(14, 165, 233, 0.3)',
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export const tiltHover = {
  rotateX: 5,
  rotateY: 5,
  scale: 1.02,
  transition: {
    duration: durations.fast,
    ease: easings.snappy,
  },
};

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: 90,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.03,
      duration: durations.fast,
      ease: easings.snappy,
    },
  }),
};

export const staggerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05
    }
  }
};

export const morphPath = {
  scale: [1, 1.2, 1],
  rotate: [0, 180, 360],
  transition: {
    duration: 15,
    repeat: Infinity,
    ease: 'linear' as const,
  },
};

export const shimmer = {
  backgroundPosition: ['200% 0', '-200% 0'],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'linear' as const,
  },
};

export const bounceIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};
