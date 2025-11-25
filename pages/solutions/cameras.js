import Head from 'next/head';
import { motion } from 'framer-motion';
import { Camera, Video, Shield } from 'react-feather';
import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';
import Image from 'next/image';

export default function Cameras() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>Security Camera Systems | Blue Ridge Security</title>
        <meta name="description" content="Design, hardening, and monitoring for camera systems and NVRs to improve physical security while keeping systems secure." />
      </Head>

      <section className={styles.solutionHero}>
        <div className="container">
          <ScrollReveal>
            <Camera size={64} className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Security Camera Systems</h1>
            <h2 className={styles.heroSubtitle}>Secure, Observation-Grade Deployments</h2>
            <p className={styles.heroDescription}>
              We design and harden camera infrastructures to keep footage secure, reliable, and accessible when you need it most.
            </p>
            <Link href="/contact" legacyBehavior><a className="btn btn-primary">Get a Camera Systems Quote</a></Link>
          </ScrollReveal>
        </div>
      </section>

      <section className={`container ${styles.featuresGrid}`}>
        <ScrollReveal>
          <div className={styles.featureCard}>
            <Video size={32} />
            <h3>Design & Placement</h3>
            <p>Camera placement and analytics zones to ensure coverage where it matters most while reducing false alerts.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className={styles.featureCard}>
            <Shield size={32} />
            <h3>System Hardening</h3>
            <p>Network segmentation, secure credentials, and logging to ensure your surveillance systems don't become an attack vector.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className={styles.featureCard}>
            <Camera size={32} />
            <h3>Monitoring & Storage</h3>
            <p>Options for local NVRs, cloud retention, and secure remote access that meet your operational needs.</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="container">
        <ScrollReveal>
          <div className={styles.imageFeature}>
            <div className={styles.imageWrapper}>
              <Image src="/images/server-rack-placeholder.png" alt="Camera system rack" width={700} height={460} style={{objectFit:'cover', borderRadius:'8px'}} />
            </div>
            <div className={styles.imageContent}>
              <span className="eyebrow">Physical Security</span>
              <h2>Protecting Your Physical Assets</h2>
              <p>We integrate cameras, access control, and monitoring to provide a cohesive, secure physical security posture.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </motion.div>
  );
}
