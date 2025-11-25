import { useEffect, useState, useRef } from 'react';
import styles from '../../styles/SolutionPage.module.css';

export default function SimpleCarousel({ images = [], interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (!images || images.length === 0) return () => (mounted.current = false);
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => { mounted.current = false; clearInterval(id); };
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.carouselWrap}>
      {images.map((src, i) => (
        <div key={i} className={`${styles.carouselSlide} ${i === index ? styles.activeSlide : ''}`}>
          <img src={src} alt={`carousel-${i + 1}`} />
        </div>
      ))}
      <div className={styles.carouselCounter}>{index + 1}/{images.length}</div>
    </div>
  );
}

