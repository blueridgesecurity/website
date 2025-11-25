// pages/solutions/infrastructure.js
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Database, Server, Camera } from 'react-feather';
import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';
import Image from 'next/image';

export default function Infrastructure() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Secure Infrastructure Buildouts | Blue Ridge Security</title>
        <meta
          name="description"
          content="Secure-by-design infrastructure. We build your servers, networks, and camera systems to be resilient from day one."
        />
      </Head>

      {/* --- Hero Section --- */}
      <section className={styles.solutionHero}>
        <div className="container">
          <ScrollReveal>
            <Database size={64} className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Secure Infrastructure Buildouts</h1>
            <h2 className={styles.heroSubtitle}>Your Foundation, Hardened from Day One.</h2>
            <p className={styles.heroDescription}>
              You can't secure a weak foundation. We design and deploy your
              entire IT environment—servers, networks, Wi-Fi, and cameras—with
              security as the blueprint, not an afterthought.
            </p>
            <Link href="/contact" legacyBehavior><a className="btn btn-primary">Plan Your Buildout</a></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Key Features --- */}
      <section className={`container ${styles.featuresGrid}`}>
        <ScrollReveal>
          <div className={styles.featureCard}>
            <Database size={32} />
            <h3>Server & Domain Architecture</h3>
            <p>
              We deploy and harden Windows/Linux servers, Active Directory,
              Group Policy, file services, and virtualization so your core
              services are resilient and permissions are locked down.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className={styles.featureCard}>
            <Server size={32} />
            <h3>Network Design & Hardening</h3>
            <p>
              We build networks that are easy to manage but hard to breach. This
              includes firewall configuration, secure VLAN segmentation (to
              separate guest, corporate, and server traffic), and robust Wi-Fi.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className={styles.featureCard} id="cameras"> {/* ID for camera link */}
            <Camera size={32} />
            <h3>Hardened Security Camera Systems</h3>
            <p>
              We install and configure NVR/DVR systems and IP cameras, ensuring
              they are on an isolated network, have hardened passwords, and
              are not exposed to public attack.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* --- NEW Image Section --- */}
      <section className="container">
        <ScrollReveal>
          <div className={styles.imageFeature}>
            <div className={styles.imageContent}>
              <span className="eyebrow">Engineered for Security</span>
              <h2>Building for Resilience</h2>
              <p>Our approach is simple: build it right, build it once. A secure-by-design network is easier to manage, more reliable, and exponentially harder for an attacker to compromise. We layer security into the very fabric of your IT.</p>
              <ul>
                <li><span className={styles.inlineCheck}>✓</span> Secure-by-design Active Directory</li>
                <li><span className={styles.inlineCheck}>✓</span> Network segmentation (VLANs)</li>
                <li><span className={styles.inlineCheck}>✓</span> Secure backup & disaster recovery</li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <Image src="/images/server-rack-placeholder.png" alt="Secure Server Rack" width={600} height={450} style={{objectFit: 'cover', borderRadius: '8px'}} />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- How It Works --- */}
      <section className={styles.howItWorks}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="eyebrow">Our Process</span>
              <h2>From Blueprint to Protected</h2>
            </div>
          </ScrollReveal>
          <div className={styles.timeline}>
            {/* Step 1 */}
            <ScrollReveal>
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>1</div>
                <div className={styles.timelineContent}>
                  <h4>Discover & Design</h4>
                  <p>We start by understanding your needs, from user count and applications to compliance and physical space. We then design a complete, secure-by-design architecture.</p>
                </div>
              </div>
            </ScrollReveal>
            {/* Step 2 */}
            <ScrollReveal>
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>2</div>
                <div className={styles.timelineContent}>
                  <h4>Deploy & Harden</h4>
                  <p>Our engineers build your environment based on security best practices, implementing least-privilege, network segmentation, and strong authentication from the start.</p>
                </div>
              </div>
            </ScrollReveal>
            {/* Step 3 */}
            <ScrollReveal>
              <div className={styles.timelineItem}>
                <div className={styles.timelineNumber}>3</div>
                <div className={styles.timelineContent}>
                  <h4>Integrate & Onboard</h4>
                  <p>Once built, we onboard your new infrastructure into our Guardian™ MDR service to ensure your new, secure foundation is monitored 24/7 from the moment it goes live.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- Next Steps CTA --- */}
      <ScrollReveal>
        <section className={styles.finalCta}>
          <div className="container">
            <h2>Get an IT Environment You Can Trust</h2>
            <p>
              Let's build a fast, reliable, and secure foundation that will
              support your organization for years to come.
            </p>
            <Link href="/packages#business" legacyBehavior>
              <a className="btn btn-secondary">View Business Packages</a>
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </motion.div>
  );
}