import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterAnimationProps {
  value: string;
  suffix?: string;
  duration?: number;
}

export const CounterAnimation = ({ value, suffix = '', duration = 2 }: CounterAnimationProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const hasPlus = value.includes('+');

  const spring = useSpring(0, { duration: duration * 1000 });
  const display = useTransform(spring, (latest) => {
    if (numericValue < 10) {
      return latest.toFixed(2);
    }
    return Math.floor(latest).toString();
  });

  useEffect(() => {
    if (inView) {
      spring.set(numericValue);
    }
  }, [inView, numericValue, spring]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {hasPlus && '+'}
      {suffix}
    </span>
  );
};
