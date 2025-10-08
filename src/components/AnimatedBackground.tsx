import { motion } from 'framer-motion';
import { useMemo } from 'react';

export const AnimatedBackground = () => {
  const floatingShapes = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 80,
        duration: 10 + Math.random() * 20,
        delay: Math.random() * 5,
        color: [
          'rgba(255, 107, 107, 0.6)',
          'rgba(255, 195, 0, 0.6)',
          'rgba(72, 219, 251, 0.6)',
          'rgba(162, 89, 255, 0.6)',
          'rgba(255, 71, 179, 0.6)',
          'rgba(0, 242, 96, 0.6)',
        ][i % 6],
      })),
    []
  );

  const sparkles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            'linear-gradient(225deg, #fa709a 0%, #fee140 50%, #30cfd0 100%)',
            'linear-gradient(315deg, #4facfe 0%, #00f2fe 50%, #fa709a 100%)',
            'linear-gradient(45deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          ],
        }}
        transition={{
          duration: 30,
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
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            backgroundColor: [
              '#ff6b6b',
              '#ffd93d',
              '#6bcfff',
              '#a259ff',
              '#ff47b3',
              '#00f260',
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
        className="absolute top-1/4 right-1/4 w-64 h-64"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-yellow-400/40 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-48 h-48"
        animate={{
          rotate: [360, 0],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-pink-400/40"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
          animate={{
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%',
            ],
          }}
          transition={{
            duration: 8,
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
