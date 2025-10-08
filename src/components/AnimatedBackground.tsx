import { motion } from 'framer-motion';
import { useMemo } from 'react';

export const AnimatedBackground = () => {
  const floatingShapes = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 100 + Math.random() * 200,
        duration: 8 + Math.random() * 15,
        delay: Math.random() * 3,
        color: [
          'rgba(255, 0, 0, 0.8)',
          'rgba(255, 200, 0, 0.8)',
          'rgba(0, 200, 255, 0.8)',
          'rgba(200, 0, 255, 0.8)',
          'rgba(255, 0, 150, 0.8)',
          'rgba(0, 255, 100, 0.8)',
        ][i % 6],
      })),
    []
  );

  const sparkles = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 1.5 + Math.random() * 1.5,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, #ff0080 0%, #ff8c00 50%, #40e0d0 100%)',
            'linear-gradient(135deg, #9d50bb 0%, #6e48aa 50%, #f093fb 100%)',
            'linear-gradient(225deg, #fa709a 0%, #fee140 50%, #30cfd0 100%)',
            'linear-gradient(315deg, #4facfe 0%, #00f2fe 50%, #fa709a 100%)',
            'linear-gradient(45deg, #ff0080 0%, #ff8c00 50%, #40e0d0 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {floatingShapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className="absolute rounded-full blur-2xl"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
          }}
          animate={{
            x: [0, 100, -100, 50, 0],
            y: [0, -100, 100, -50, 0],
            scale: [1, 1.5, 0.8, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute w-4 h-4 rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 1, 0],
            backgroundColor: [
              '#ff0000',
              '#ffff00',
              '#00ffff',
              '#ff00ff',
              '#ff0080',
              '#00ff00',
            ],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="absolute inset-0 border-8 rounded-full"
          style={{ borderColor: '#ffff00' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-80 h-80"
        animate={{
          rotate: [360, 0],
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="absolute inset-0 border-8"
          style={{
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            borderColor: '#ff00ff'
          }}
          animate={{
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%',
            ],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${50 + i * 10}% ${50 - i * 10}%, rgba(255, 255, 255, 0.1), transparent 50%)`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
