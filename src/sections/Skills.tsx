import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Networking & Infrastructure',
      icon: '🌐',
      skills: ['Network Setup & Configuration', 'Network Security', 'System Architecture'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'System Administration',
      icon: '⚙️',
      skills: ['Linux Administration', 'Virtualization (VMware, VirtualBox)', 'Server Management'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Operations & Support',
      icon: '🛠️',
      skills: ['Technical Troubleshooting', 'System Monitoring', 'User Support'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Product Execution',
      icon: '🚀',
      skills: ['Feature Planning', 'Deployment Strategy', 'App Store Release (iOS & Android)'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Web App Delivery',
      icon: '💻',
      skills: ['Full-Stack Development', 'QR Ordering Systems', 'Internal Tools Development'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Continuous Growth',
      icon: '📚',
      skills: ['CCNA Preparation', 'Network+ Training', 'AWS Technical Essentials'],
      gradient: 'from-yellow-500 to-orange-500'
    },
  ];

  return (
    <section 
      id="skills"
      ref={ref}
      className="section-padding bg-dark-900 relative"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-primary-400 font-medium text-sm tracking-widest uppercase">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            A comprehensive toolkit for delivering end-to-end technical solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group relative bg-dark-800 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-start text-dark-300 text-sm"
                    >
                      <span className="text-primary-400 mr-2 mt-1">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
