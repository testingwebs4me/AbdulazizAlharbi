import { motion } from 'framer-motion';
import { morphPath, rotateAnimation } from '../utils/animations';
import { useState, useEffect, useMemo } from 'react';

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const dots = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      baseX: Math.random() * 100,
      baseY: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 3,
    })),
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        }}
      />

      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        animate={morphPath}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </motion.div>

      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(14, 165, 233, 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {dots.map((dot) => {
        const dotScreenX = (dot.baseX / 100) * window.innerWidth;
        const dotScreenY = (dot.baseY / 100) * window.innerHeight;
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - dotScreenX, 2) +
          Math.pow(mousePosition.y - dotScreenY, 2)
        );
        const repelRadius = 150;
        const repelStrength = Math.max(0, (repelRadius - distance) / repelRadius);
        const angle = Math.atan2(
          dotScreenY - mousePosition.y,
          dotScreenX - mousePosition.x
        );
        const offsetX = Math.cos(angle) * repelStrength * 50;
        const offsetY = Math.sin(angle) * repelStrength * 50;

        return (
          <motion.div
            key={dot.id}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${dot.baseX}%`,
              top: `${dot.baseY}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: offsetX,
              y: offsetY,
            }}
            transition={{
              opacity: {
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
                ease: 'easeInOut' as const,
              },
              scale: {
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
                ease: 'easeInOut' as const,
              },
              x: {
                type: 'spring',
                stiffness: 150,
                damping: 15,
              },
              y: {
                type: 'spring',
                stiffness: 150,
                damping: 15,
              },
            }}
          />
        );
      })}

      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-primary-500/20"
        animate={rotateAnimation}
      >
        <div className="absolute inset-4 border border-primary-400/30" style={{ transform: 'rotate(45deg)' }} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 w-24 h-24 border border-primary-500/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear' as const,
        }}
      />
    </div>
  );
};
