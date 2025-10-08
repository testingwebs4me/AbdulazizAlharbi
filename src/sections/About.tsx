import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const stats = [
    { label: 'GPA', value: '4.58', suffix: '/5.0' },
    { label: 'Projects Launched', value: '2+', suffix: '' },
    { label: 'Certifications', value: '4+', suffix: '' },
  ];

  return (
    <section 
      id="about"
      ref={ref}
      className="section-padding bg-dark-800 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-primary-400 font-medium text-sm tracking-widest uppercase">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg md:text-xl text-dark-200 leading-relaxed">
              I'm an <span className="text-primary-400 font-semibold">IT Specialist</span> with 
              a background in computer networks and hands-on experience delivering real-world 
              tech solutions.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed">
              I focus on <span className="text-white font-medium">building and launching products</span> that 
              solve practical problems — from internal platforms to client-facing web apps — 
              and <span className="text-white font-medium">bridging the gap</span> between 
              technical execution and business needs.
            </p>
            <p className="text-lg text-dark-400 leading-relaxed">
              Currently pursuing my diploma with honors while continuously expanding my expertise 
              in networking, cloud technologies, and emerging AI systems.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-dark-700 rounded-2xl p-6 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-2xl text-dark-400 font-medium">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-dark-300 mt-2 text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
