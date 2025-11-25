
import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, y = 20 }) {
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, delay } });
      }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={controls}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}