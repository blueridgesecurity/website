import Link from 'next/link';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" legacyBehavior>
            <a className={styles.logo} aria-label="Blue Ridge Security home">
              <span className={styles.logoMark}>
                <img
                  src="/images/logo-mark.png"
                  alt="Blue Ridge Security mark"
                  width="128"
                  height="128"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/logo-mark.svg'; }}
                />
              </span>
              <span className={styles.logoFull}>
                <img
                  src="/images/logo-mark.png"
                  alt="Blue Ridge Security"
                  width="360"
                  height="80"
                  style={{ objectFit: 'contain' }}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/logo-mark.svg'; }}
                />
              </span>
            </a>
        </Link>
        
        <ul className={styles.navMenu}>
          <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
          <li><Link href="/services" legacyBehavior><a>Solutions</a></Link></li>
          <li><Link href="/about" legacyBehavior><a>About</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a>Contact</a></Link></li>
        </ul>
        <div className={styles.navCta}>
          <Link href="/contact" legacyBehavior>
            <a className="btn btn-primary">Get Started</a>
          </Link>
        </div>
        
      </div>
    </nav>
  );
}