import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, scaleIn, easings, durations } from '../utils/animations';
import { TiltCard } from '../components/TiltCard';
import { useRef } from 'react';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      title: 'QR Ordering System',
      role: 'Built from scratch',
      description: 'Someone needed a way for people to order drinks in meeting rooms without calling or texting. So I built a web app for it.',
      features: [
        'Scan QR code, pick your drink, done',
        'Dashboard for staff to see all orders in real-time',
        'Simple, fast, works on any phone',
        'Actually gets used daily now'
      ],
      impact: 'People actually use it. No more missed orders or confusion. Just works.',
      tech: ['Web Dev', 'Real-time Updates', 'QR Codes'],
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      title: 'App Store Launch',
      role: 'Fixed what was broken',
      description: 'App was ready but stuck in approval hell for months. Apple wanted DUNS numbers, Google wanted other stuff. I figured it all out.',
      features: [
        'Sorted out the DUNS verification mess',
        'Got Apple Developer account stuff working',
        'Handled Google Play requirements',
        'Dealt with all the red tape'
      ],
      impact: 'App went live on both stores. Months of delays cleared in a few weeks.',
      tech: ['iOS', 'Android', 'Problem Solving'],
      gradient: 'from-dark-500 to-dark-600'
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="snap-section section-padding bg-dark-800 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />

      <motion.div
        style={{ y }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <motion.span
            className="inline-block px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium tracking-widest uppercase mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(56, 102, 126, 0.2)',
                '0 0 40px rgba(56, 102, 126, 0.4)',
                '0 0 20px rgba(56, 102, 126, 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Things I've Built
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-white">
            Projects
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Stuff I've actually shipped and people actually use
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
            >
              <TiltCard className="group relative">
                <div className="relative bg-gradient-to-br from-dark-700/80 to-dark-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-dark-600/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      <div className="flex-1">
                        <motion.div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/50 backdrop-blur-sm text-sm font-medium mb-6 border border-primary-500/30"
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-primary-400 rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [1, 0.5, 1],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-primary-400">Project {index + 1}</span>
                        </motion.div>

                        <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 group-hover:text-primary-400 transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-primary-400 text-xl font-semibold mb-6">
                          {project.role}
                        </p>

                        <p className="text-dark-200 text-lg leading-relaxed mb-8">
                          {project.description}
                        </p>

                        <div className="space-y-3 mb-8">
                          {project.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-3 group/item"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <motion.div
                                className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center mt-0.5"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </motion.div>
                              <span className="text-dark-300 group-hover/item:text-dark-100 transition-colors">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          className="relative bg-dark-900/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20 mb-8 overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative z-10">
                            <p className="text-xs text-primary-400 uppercase tracking-wider mb-3 font-semibold">Impact</p>
                            <p className="text-white text-lg leading-relaxed">{project.impact}</p>
                          </div>
                        </motion.div>

                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05, duration: durations.fast, ease: easings.snappy }}
                              whileHover={{
                                scale: 1.1,
                                y: -3,
                                boxShadow: '0 10px 30px -10px rgba(56, 102, 126, 0.5)',
                              }}
                              className="px-4 py-2 bg-dark-900/70 backdrop-blur-sm text-primary-300 rounded-full text-sm font-medium border border-primary-500/30 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:w-2/5 flex items-center">
                        <motion.div
                          className="relative w-full"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: durations.fast, ease: easings.snappy }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                          <div className="relative bg-dark-900/70 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
                            <div className="aspect-square bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20" />
                              <motion.div
                                className="absolute inset-0"
                                style={{
                                  background: 'radial-gradient(circle at 50% 50%, rgba(56, 102, 126, 0.3) 0%, transparent 70%)',
                                }}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                              <motion.div
                                className="relative z-10 text-primary-400"
                                whileHover={{
                                  scale: 1.2,
                                  rotate: 360,
                                  transition: { duration: 0.6, ease: easings.elastic }
                                }}
                              >
                                {index === 0 ? (
                                  <svg className="w-24 h-24 md:w-32 md:h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                  </svg>
                                ) : (
                                  <svg className="w-24 h-24 md:w-32 md:h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                )}
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
