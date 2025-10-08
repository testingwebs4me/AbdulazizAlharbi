import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { CounterAnimation } from '../components/CounterAnimation';
import { TiltCard } from '../components/TiltCard';
import { useRef } from 'react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { label: 'GPA', value: '4.58', suffix: '/5.0', icon: '🎯' },
    { label: 'Projects Launched', value: '2+', suffix: '', icon: '🚀' },
    { label: 'Certifications', value: '4+', suffix: '', icon: '📜' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="snap-section section-padding bg-dark-800 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />

      <motion.div
        style={{ y }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <motion.span
            className="inline-block px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium tracking-widest uppercase mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(14, 165, 233, 0.2)',
                '0 0 40px rgba(14, 165, 233, 0.4)',
                '0 0 20px rgba(14, 165, 233, 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            About
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-white">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeInUp} ref={ref} className="space-y-8">
            <motion.p
              className="text-xl md:text-2xl text-dark-100 leading-relaxed font-light"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              I'm studying <span className="text-primary-400 font-medium">Computer Networks</span> but honestly, I spend most of my time actually
              building stuff. Not just learning theory — I mean <span className="text-white font-medium">shipping real products</span> that people use.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-dark-200 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Whether it's a QR ordering system for offices or figuring out how to get apps
              through the App Store approval process, I just like <span className="text-primary-400">solving problems</span> and
              making things work.
            </motion.p>
            <motion.p
              className="text-lg text-dark-300 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Right now I'm keeping a 4.58 GPA while prepping for CCNA and diving into cloud tech.
              Also getting into AI stuff because, well, it's everywhere now.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative"
              >
                <TiltCard>
                  <div className="relative bg-gradient-to-br from-dark-700/80 to-dark-800/80 backdrop-blur-xl rounded-2xl p-8 border border-dark-600/50 hover:border-primary-500/50 transition-all duration-300 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <motion.div
                      className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-baseline space-x-2 mb-2">
                          <span className="text-5xl md:text-6xl font-display font-bold text-gradient">
                            <CounterAnimation value={stat.value} suffix={stat.suffix} />
                          </span>
                        </div>
                        <p className="text-dark-300 text-sm tracking-wider uppercase font-medium">
                          {stat.label}
                        </p>
                      </div>

                      <motion.div
                        className="text-5xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
