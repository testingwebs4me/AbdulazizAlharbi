import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const FutureGrowth = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const technologies = [
    { icon: '🤖', name: 'AI Systems' },
    { icon: '⚡', name: 'Automation' },
    { icon: '🔮', name: 'Machine Learning' },
    { icon: '🌟', name: 'Innovation' }
  ];

  return (
    <section
      id="future"
      ref={ref}
      className="snap-section section-padding bg-dark-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full filter blur-3xl" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <span className="text-primary-400 font-medium text-sm tracking-widest uppercase">
            What's Next
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-8">
            What's <span className="text-gradient">Next</span>
          </h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-dark-200 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Getting into AI and automation now. Everyone's talking about it, might as well learn how to actually use it.
          </motion.p>

          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-dark-700 rounded-2xl flex items-center justify-center text-4xl border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:scale-110">
                  {tech.icon}
                </div>
                <span className="mt-3 text-dark-300 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-dark-700 to-dark-800 rounded-2xl p-8 border border-primary-500/30"
          >
            <p className="text-dark-200 text-lg leading-relaxed">
              Looking to combine networking knowledge with product building skills and throw AI into the mix.
              Not sure where it'll go, but that's kind of the point.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
