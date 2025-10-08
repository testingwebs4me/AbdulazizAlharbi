import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, fadeInUp, staggerContainer } from '../utils/animations';

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600 rounded-full filter blur-[120px]" />
      </div>

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
          Building and launching products that solve practical problems, 
          bridging the gap between technical execution and business needs
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/50"
          >
            Explore My Work
          </a>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center animate-bounce">
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
