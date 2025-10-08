import { motion, useTransform, useMotionValue } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useEffect, useMemo } from 'react';

export const ScrollReactiveBackground = () => {
  const { scrollPercent, velocity } = useScrollProgress();
  const scrollMotion = useMotionValue(0);

  useEffect(() => {
    scrollMotion.set(scrollPercent);
  }, [scrollPercent, scrollMotion]);

  const backgroundColor = useTransform(
    scrollMotion,
    [0, 25, 50, 75, 100],
    [
      'rgba(22, 22, 56, 1)',
      'rgba(27, 67, 94, 0.4)',
      'rgba(56, 63, 87, 0.5)',
      'rgba(42, 32, 80, 0.6)',
      'rgba(86, 63, 87, 0.8)',
    ]
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        delay: Math.random() * 2,
      })),
    []
  );

  const orbs = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: 20 + i * 15,
        y: 20 + (i % 2) * 40,
        size: 200 + i * 50,
        hue: i * 30,
      })),
    []
  );

  const grid = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        angle: (i / 20) * 360,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor,
        }}
      />

      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, hsla(${orb.hue + scrollPercent * 2}, 70%, 50%, 0.15), transparent)`,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + orb.id * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.id * 2,
          }}
        />
      ))}

      {particles.map((particle) => {
        const particleScale = 1 + scrollPercent / 100;
        const particleOpacity = 0.2 + (scrollPercent / 100) * 0.6;

        return (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full bg-primary-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size * particleScale,
              height: particle.size * particleScale,
            }}
            animate={{
              y: [0, -window.innerHeight * 0.3, -window.innerHeight * 0.6],
              opacity: [0, particleOpacity, 0],
              scale: [0, particleScale, particleScale * 1.5],
            }}
            transition={{
              duration: 10 / particle.speed,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        );
      })}

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: scrollPercent / 100,
        }}
      >
        {grid.map((line) => (
          <motion.div
            key={`grid-${line.id}`}
            className="absolute w-full h-px origin-center"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(56, 102, 126, ${0.1 + scrollPercent / 200}), transparent)`,
              transform: `rotate(${line.angle}deg)`,
            }}
            animate={{
              scaleX: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: line.id * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 border-2 rounded-full"
        style={{
          borderColor: `rgba(56, 102, 126, ${0.1 + scrollPercent / 200})`,
          rotate: scrollPercent * 3.6,
          scale: 1 + scrollPercent / 100,
        }}
      >
        <motion.div
          className="absolute inset-8 border-2 rounded-full"
          style={{
            borderColor: `rgba(111, 185, 212, ${0.15 + scrollPercent / 150})`,
            rotate: -scrollPercent * 2,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80"
        style={{
          rotate: scrollPercent * -2,
          scale: 1 + scrollPercent / 150,
        }}
      >
        <motion.div
          className="absolute inset-0 border-2"
          style={{
            borderColor: `rgba(56, 102, 126, ${0.1 + scrollPercent / 200})`,
            rotate: scrollPercent * 1.5,
          }}
        >
          <motion.div
            className="absolute inset-6 border-2"
            style={{
              borderColor: `rgba(75, 165, 199, ${0.15 + scrollPercent / 150})`,
              rotate: -scrollPercent * 1.5,
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          opacity: scrollPercent > 80 ? (scrollPercent - 80) / 20 : 0,
        }}
      >
        <svg className="w-full h-full">
          <defs>
            <radialGradient id="finalGlow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(111, 185, 212, 0.4)" />
              <stop offset="50%" stopColor="rgba(56, 102, 126, 0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="50%" cy="50%" r="40%" fill="url(#finalGlow)" />
        </svg>
      </motion.div>

      {velocity > 0.5 && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: Math.min(velocity * 0.3, 0.4) }}
          transition={{ duration: 0.3 }}
        >
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={`velocity-${i}`}
              className="absolute w-1 bg-primary-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: `${20 + Math.random() * 40}px`,
                opacity: 0.3,
              }}
              animate={{
                y: [-20, 100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};
