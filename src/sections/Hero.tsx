import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerFast, textReveal } from '../utils/animations';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { useRef, useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

export const Hero = () => {
  const isMobile = useIsMobile();
  const { inView } = useInView({
    triggerOnce: true,
    threshold: 0.05
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], isMobile ? [1, 1] : [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  const firstName = 'Abdulaziz'.split('');
  const lastName = 'Alharbi'.split('');

  return (
    <section
      id="home"
      ref={sectionRef}
      className="snap-section min-h-[85vh] flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

      <AnimatedBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-3"
        >
          <motion.span
            className="inline-block px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm md:text-base font-medium tracking-wider uppercase backdrop-blur-sm"
          >
            Hello, I'm
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-2 mb-8"
        >
          <motion.div
            className="flex items-center justify-center gap-4 text-lg md:text-xl text-primary-400"
          >
            <span className="font-medium">Product Developer</span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="text-primary-500"
            >
              •
            </motion.span>
            <span className="font-medium">Network Engineer</span>
          </motion.div>
          <motion.p
            className="text-2xl md:text-3xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-dark-200"
          >
            IT Specialist
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-dark-200 max-w-2xl mx-auto leading-relaxed font-light mb-12"
        >
          I build things that actually work and get shipped —{' '}
          <span className="text-primary-400 font-medium">from networking to webapps</span>
        </motion.p>

        <motion.div
          className="mb-16"
          style={isMobile ? {} : {
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
          }}
        >
          <motion.h1
            variants={staggerFast}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-tight"
          >
            <div className="flex justify-center gap-2 md:gap-3 mb-2 md:mb-4">
              {firstName.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textReveal}
                  className="inline-block"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    color: '#6fb9d4',
                    transition: { duration: 0.3 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-center gap-2 md:gap-3">
              {lastName.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + firstName.length}
                  variants={textReveal}
                  className="inline-block text-gradient"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #6fb9d4, #38667E, #1B435E)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </motion.div>


        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-dark-400 text-sm mb-3 font-medium">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center p-2"
              animate={{
                borderColor: ['rgba(56, 102, 126, 0.5)', 'rgba(56, 102, 126, 1)', 'rgba(56, 102, 126, 0.5)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 bg-primary-400 rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
