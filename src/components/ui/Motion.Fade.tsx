import { motion, useReducedMotion } from 'framer-motion';

interface MotionFadeProps {
  children: React.ReactNode;
  delay?: number;
}

export default function MotionFade({
  children,
  delay = 0,
}: MotionFadeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
