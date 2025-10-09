import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, bounceIn } from '../utils/animations';
import { FlipCard } from '../components/FlipCard';
import { useRef, useState, useEffect } from 'react';

export const Skills = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: isTouchDevice ? 0.15 : 0.01,
    rootMargin: isTouchDevice ? '0px 0px -100px 0px' : '0px'
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const skillCategories = [
    {
      title: 'Networking',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      skills: ['Setting up networks', 'Security configs', 'System design'],
      gradient: 'from-primary-300 to-primary-500'
    },
    {
      title: 'Systems',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['Linux stuff', 'VMs (VMware, VirtualBox)', 'Server management'],
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      title: 'Problem Solving',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      skills: ['Fixing things', 'Troubleshooting', 'Support'],
      gradient: 'from-dark-500 to-dark-600'
    },
    {
      title: 'Shipping Products',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: ['Planning features', 'Getting stuff deployed', 'App store releases'],
      gradient: 'from-primary-500 to-primary-700'
    },
    {
      title: 'Web Development',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['Full-stack apps', 'Real-time systems', 'Internal tools'],
      gradient: 'from-dark-600 to-dark-700'
    },
    {
      title: 'Learning',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      skills: ['CCNA prep', 'AWS', 'Cloud tech'],
      gradient: 'from-primary-200 to-primary-400'
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="snap-section section-padding bg-dark-900 relative overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <motion.span
            className="inline-block px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium tracking-widest uppercase mb-6"
          >
            What I Do
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-white">
            Skills
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            What I know and what I'm working on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={bounceIn}
              ref={ref}
              className="h-80"
            >
              <FlipCard
                front={
                  <div className="relative h-full bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl rounded-2xl p-8 border border-dark-600/50 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <motion.div
                      className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      <motion.div
                        className="text-primary-400 mb-6"
                        whileHover={!isTouchDevice ? {
                          scale: 1.15,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 }
                        } : undefined}
                      >
                        {category.icon}
                      </motion.div>

                      <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                        {category.title}
                      </h3>

                      <p className="text-dark-400 text-sm mb-auto">
                        {isTouchDevice ? 'Tap to see details' : 'Hover to see details'}
                      </p>

                      {!isTouchDevice && (
                        <motion.div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </div>
                }
                back={
                  <div className="relative h-full bg-gradient-to-br from-dark-900/95 to-dark-800/95 backdrop-blur-xl rounded-2xl p-8 border border-primary-500/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />

                    <div className="relative z-10 h-full flex flex-col">
                      <h3 className="text-xl font-display font-bold text-primary-400 mb-6">
                        {category.title}
                      </h3>

                      <ul className="space-y-3 flex-1">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.li
                            key={skillIndex}
                            className="flex items-start text-dark-200 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            <motion.span
                              className="text-primary-400 mr-3 mt-0.5 flex-shrink-0"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: skillIndex * 0.1, type: 'spring' }}
                            >
                              •
                            </motion.span>
                            <span>{skill}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        className={`mt-auto h-1 bg-gradient-to-r ${category.gradient} rounded-full`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      />
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
