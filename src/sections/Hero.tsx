import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, fadeInUp, staggerContainer, magneticHover, pressEffect, easings } from '../utils/animations';

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  });

  return (
    <section
      id="home"
      ref={ref}
      className="snap-section min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      <motion.div
        className="absolute inset-0 opacity-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5, ease: easings.smooth }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-[120px] will-change-transform" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600 rounded-full filter blur-[120px] will-change-transform" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeIn} className="mb-6">
          <span className="text-primary-400 text-lg md:text-xl font-medium tracking-wide">
            Hello, I'm
          </span>
        </motion.div>

        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          Abdulaziz <span className="text-gradient">Alharbi</span>
        </motion.h1>

        <motion.div variants={fadeInUp} className="space-y-3">
          <p className="text-2xl md:text-3xl lg:text-4xl text-dark-200 font-light">
            IT Specialist
          </p>
          <p className="text-xl md:text-2xl text-dark-300">
            Product Developer • Network Engineer
          </p>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-8 text-lg md:text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed"
        >
          I build things that actually work and get shipped — from web apps to network solutions
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-12"
        >
          <motion.a
            href="#about"
            whileHover={magneticHover}
            whileTap={pressEffect}
            className="inline-block px-8 py-4 bg-primary-500 text-white rounded-full font-medium text-lg shadow-lg shadow-primary-500/30"
          >
            See What I've Built
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: easings.smooth }}
          >
            <span className="text-dark-400 text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-primary-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
