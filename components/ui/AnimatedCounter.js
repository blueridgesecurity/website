// components/ui/AnimatedCounter.js
import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ to, duration = 2, prefix = '', suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, to, {
        duration: duration,
        onUpdate(value) {
          node.textContent = prefix + Math.round(value).toLocaleString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration, prefix, suffix]);

  return <span ref={ref}>0</span>;
};

export default AnimatedCounter;