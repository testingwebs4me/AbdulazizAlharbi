import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    { name: 'NDG Linux Essentials', year: '2024', status: 'completed' },
    { name: 'Cisco Network Security', year: '2024', status: 'completed' },
    { name: 'IELTS - Score 6.0', year: '2024', status: 'completed' },
    { name: 'AWS Technical Essentials', year: '2024', status: 'completed' },
    { name: 'CCNA', year: '2025', status: 'in-progress' },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="snap-section section-padding bg-dark-900 relative"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-primary-400 font-medium text-sm tracking-widest uppercase">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Education & Certifications
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 md:p-10 border border-dark-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                    Diploma in Computer Networks
                  </h3>
                  <p className="text-dark-300 text-lg">
                    Technical and Vocational Training Corporation
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-lg border border-primary-500/30">
                    <p className="text-primary-400 font-bold text-2xl">4.58/5.0</p>
                    <p className="text-dark-300 text-sm">GPA (Honors)</p>
                  </div>
                </div>
              </div>
              <p className="text-dark-400">2023 – 2025</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {cert.name}
                    </h4>
                    {cert.status === 'completed' ? (
                      <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                        <span className="text-green-500 text-sm">✓</span>
                      </span>
                    ) : (
                      <span className="flex-shrink-0 px-2 py-1 bg-yellow-500/20 rounded text-yellow-500 text-xs">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-dark-400 text-sm">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
