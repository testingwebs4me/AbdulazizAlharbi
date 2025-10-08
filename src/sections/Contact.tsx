import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, magneticHover } from '../utils/animations';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+966 55 184 4465',
      href: 'tel:+966551844465'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'abdulazizbis2002@gmail.com',
      href: 'mailto:abdulazizbis2002@gmail.com'
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="snap-section section-padding bg-dark-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-primary-400 font-medium text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Want to chat about a project or opportunity? Hit me up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              variants={fadeInUp}
              whileHover={magneticHover}
              className="group bg-dark-800 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  {info.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-dark-400 text-sm mb-1">{info.label}</p>
                  <p className="text-white text-lg font-medium break-all group-hover:text-primary-400 transition-colors">
                    {info.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          variants={fadeInUp}
          className="text-center pt-12 border-t border-dark-800"
        >
          <p className="text-dark-400 mb-4">
            Open to interesting work in IT, dev, or networking
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#home" 
              className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
            >
              Back to Top ↑
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="text-center mt-16 pt-8 border-t border-dark-800"
        >
          <p className="text-dark-500 text-sm">
            © 2025 Abdulaziz Alharbi
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
