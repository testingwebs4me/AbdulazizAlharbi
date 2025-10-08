import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'QR Ordering Web App',
      role: 'End-to-End Product Development Lead',
      description: 'Led complete product lifecycle from requirements gathering to production deployment.',
      features: [
        'QR code generation system for meeting rooms',
        'Real-time ordering dashboard for staff',
        'Seamless user experience for drink ordering',
        'Live request tracking and management'
      ],
      impact: 'Deployed and actively used, significantly improving service response time and operational efficiency',
      tech: ['Web Development', 'Real-time Systems', 'QR Technology', 'Product Management'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'App Launch & Deployment Coordination',
      role: 'Technical & Organizational Problem Solver',
      description: 'Overcame critical blockers preventing mobile app store release across both major platforms.',
      features: [
        'Resolved DUNS verification complexities',
        'Managed Apple organization requirements',
        'Coordinated Google Play deployment',
        'Navigated regulatory and technical constraints'
      ],
      impact: 'Successfully enabled product launch on both iOS and Android platforms, removing months of deployment delays',
      tech: ['iOS Deployment', 'Android Deployment', 'Project Coordination', 'Compliance Management'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section 
      id="projects"
      ref={ref}
      className="section-padding bg-dark-800 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="text-primary-400 font-medium text-sm tracking-widest uppercase">
            Portfolio Highlights
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Real-world solutions that bridge technical execution and business impact
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={isEven ? slideInLeft : slideInRight}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="inline-block px-4 py-1 rounded-full bg-dark-700 text-sm font-medium mb-4 border border-primary-500/30">
                    <span className="text-primary-400">
                      Project {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-primary-400 text-lg font-medium mb-4">
                    {project.role}
                  </p>
                  
                  <p className="text-dark-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-primary-400 mr-2 mt-1">✓</span>
                        <span className="text-dark-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-dark-900 rounded-xl p-6 border-l-4 border-primary-500 mb-6">
                    <p className="text-sm text-dark-400 uppercase tracking-wide mb-2">Impact</p>
                    <p className="text-white leading-relaxed">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-dark-700 text-dark-300 rounded-full text-sm border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary-500 opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative bg-dark-700 rounded-2xl p-8 border border-dark-600 group-hover:border-primary-500/50 transition-all duration-500">
                      <div className="aspect-video bg-dark-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10" />
                        <div className="relative z-10 text-6xl">
                          {index === 0 ? '📱' : '🚀'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
