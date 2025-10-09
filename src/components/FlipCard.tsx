import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export const FlipCard = ({ front, back, className = '' }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const handleInteraction = () => {
    if (isTouchDevice) {
      setIsFlipped(prev => !prev);
    }
  };

  const transitionConfig = isTouchDevice
    ? { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const }
    : { duration: 0.8, type: 'spring' as const, stiffness: 80, damping: 15 };

  return (
    <div
      className={`relative h-full cursor-pointer perspective-1000 active:scale-[0.98] transition-transform ${className}`}
      onMouseEnter={() => !isTouchDevice && setIsFlipped(true)}
      onMouseLeave={() => !isTouchDevice && setIsFlipped(false)}
      onClick={handleInteraction}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={transitionConfig}
      >
        <div className="absolute w-full h-full backface-hidden">
          {front}
        </div>

        <div
          className="absolute w-full h-full backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};
