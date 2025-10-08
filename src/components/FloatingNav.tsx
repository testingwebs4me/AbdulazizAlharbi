import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-100, 0]);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full backdrop-blur-xl bg-dark-900/80 border border-dark-700/50 shadow-2xl"
    >
      <div className="flex items-center gap-1">
        {sections.map(({ id, label }) => (
          <motion.button
            key={id}
            onClick={() => handleClick(id)}
            className="relative px-4 py-2 text-sm font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeSection === id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-primary-500/20 rounded-full border border-primary-500/50"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className={`relative z-10 ${activeSection === id ? 'text-primary-400' : 'text-dark-300 hover:text-white'}`}>
              {label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};
