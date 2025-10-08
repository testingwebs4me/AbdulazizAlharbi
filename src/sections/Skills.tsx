import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, scaleIn, easings, durations } from '../utils/animations';

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  });

  const skillCategories = [
    {
      title: 'Networking',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      skills: ['Setting up networks', 'Security configs', 'System design'],
      gradient: 'from-blue-500 to-cyan-500'
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
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Problem Solving',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      skills: ['Fixing things', 'Troubleshooting', 'Support'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Shipping Products',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: ['Planning features', 'Getting stuff deployed', 'App store releases'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Web Development',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['Full-stack apps', 'Real-time systems', 'Internal tools'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Learning',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      skills: ['CCNA prep', 'AWS', 'Cloud tech'],
      gradient: 'from-yellow-500 to-orange-500'
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="snap-section section-padding bg-dark-900 relative"
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
            Skills
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            What I know and what I'm working on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{
                scale: 1.03,
                y: -4,
                transition: { duration: durations.fast, ease: easings.snappy }
              }}
              className="group relative bg-dark-800 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-colors duration-300 cursor-pointer"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.06 }}
                transition={{ duration: durations.normal, ease: easings.smooth }}
              />

              <div className="relative z-10">
                <motion.div
                  className="text-primary-400 mb-6"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: durations.fast, ease: easings.snappy }
                  }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-start text-dark-300 text-sm group-hover:text-dark-200 transition-colors duration-200"
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
