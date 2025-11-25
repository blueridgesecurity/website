// components/layout/Footer.js
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="topo-background"></div>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerAbout}>
          <div className={styles.footerLogo}>
            <Image 
              src="/images/logo-footer.png" 
              alt="Blue Ridge Security" 
              width={420} 
              height={95}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p>
            Steadfast security, clear perspective. We are your local, trusted partner
            for complete IT infrastructure and cyber defense.
          </p>
          <p>© 2025 Blue Ridge Security. All Rights Reserved.</p>
        </div>

        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
            <li><Link href="/about" legacyBehavior><a>About Us</a></Link></li>
            <li><Link href="/services" legacyBehavior><a>Our Solutions</a></Link></li>
            <li><Link href="/packages" legacyBehavior><a>Packages</a></Link></li>
            <li><Link href="/contact" legacyBehavior><a>Contact</a></Link></li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h4>Solutions</h4>
          {/* UPDATED LINKS */}
          <ul>
            <li><Link href="/solutions/guardian" legacyBehavior><a>Guardian™ 24/7 SOC</a></Link></li>
            <li><Link href="/solutions/bluehook" legacyBehavior><a>BlueHook™ Phishing</a></Link></li>
            <li><Link href="/solutions/pentesting" legacyBehavior><a>Penetration Testing</a></Link></li>
            <li><Link href="/solutions/infrastructure" legacyBehavior><a>Infrastructure Buildouts</a></Link></li>
            <li><Link href="/solutions/infrastructure#cameras" legacyBehavior><a>Security Cameras</a></Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h4>Contact</h4>
          <p style={{margin:'0 0 0.5rem', fontSize:'0.85rem', lineHeight:'1.4'}}>
            <strong>Phone:</strong> (828) 555-2470<br />
            <strong>Email:</strong> support@blueridgesecurity.com
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="btn btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'footer'}}))}>Talk to a Guardian Specialist</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;