// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Users, BookOpen, Shield } from 'react-feather'; 
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import styles from '../styles/Home.module.css';

export default function Home() {
  const serviceList = [
    { name: 'Guardian™ (MDR/SIEM)', desc: '24/7 managed detection and response.', link: '/solutions/guardian' },
    { name: 'BlueHook™ (Phishing)', desc: 'Human risk reduction & training.', link: '/solutions/bluehook' },
    { name: 'Penetration Testing', desc: 'Identify and fix your vulnerabilities.', link: '/solutions/pentesting' },
    { name: 'Incident Response', desc: 'Expert help when you need it most.', link: '/contact' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Blue Ridge Security | Steadfast Security, Clear Perspective</title>
        <meta
          name="description"
          content="Inspired by the Blue Ridge mountains, we provide steadfast cyber defense and IT infrastructure for K-12 schools and businesses."
        />
      </Head>

      {/* --- Hero Section --- */}
      <section className={styles.hero}>
        {/* --- NEW Video Background --- */}
        <div className={styles.heroVideoWrapper}>
          <video
            className={styles.heroVideo}
            src="/videos/mountain-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* This is the overlay to darken the video */}
          <div className={styles.videoOverlay}></div> 
        </div>
        {/* --- End Video Background --- */}

        <div className="topo-background"></div>
        <div className="cyber-grid-background"></div>
        <div className={styles.heroGlow}></div>

        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Local Roots. <span className={styles.textGradient}>Modern Protection.</span>
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Blue Ridge Security keeps our region’s schools and businesses safe with dependable cybersecurity, hands-on support, and solutions built around your community.
          </motion.p>
          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact" legacyBehavior>
              <a className="btn btn-primary">Get Started</a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="btn btn-secondary">Our Solutions</a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- NEW "Why Choose Us" Section (Replaces Gray Bar) --- */}
      <section className={styles.whyChooseUsBar}>
        <div className={`container ${styles.whyChooseUsContainer}`}>
          <ScrollReveal y={20} delay={0}>
            <div className={styles.whyChooseUsItem}>
              <BookOpen size={32} />
              <h4>K-12 & Education Experts</h4>
              <p>Privacy-first (FERPA) designs & CISA-aligned packages.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.1}>
            <div className={styles.whyChooseUsItem}>
              <Users size={32} />
              <h4>Local, Trusted Team</h4>
              <p>We're your neighbors, not a faceless national call center.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal y={20} delay={0.2}>
            <div className={styles.whyChooseUsItem}>
              <Shield size={32} />
              <h4>Build & Defend</h4>
              <p>One partner for your full stack, from servers to 24/7 SOC.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Key Services Section --- */}
      <section className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow">Our Solutions</span>
            <h2>One Partner for Your Entire Tech Stack</h2>
            <p>
              From designing your servers and networks to monitoring them 24/7,
              we provide an integrated, secure technology foundation.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.servicesGrid}>
          {serviceList.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 0.1} y={30}>
              <Link href={service.link} legacyBehavior>
                <a className={styles.cardLinkWrapper}>
                  <motion.div
                    className={styles.serviceCard}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className={styles.serviceIcon}>
                      <CheckCircle size={32} />
                    </div>
                    <h4>{service.name}</h4>
                    <p>{service.desc}</p>
                    <span className={styles.cardLink}>Learn More &rarr;</span>
                  </motion.div>
                </a>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className={styles.whyUs}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="eyebrow">Why Blue Ridge?</span>
              <h2>Security You Can Trust. Service You Know.</h2>
              <p>
                We're not a faceless national firm. We're your neighbors,
                combining world-class security tools with the personal service
                you deserve.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.whyUsGrid}>
            <ScrollReveal>
              <div className={styles.whyUsItem}>
                <CheckCircle size={24} className={styles.whyUsIcon} />
                <div>
                  <h4>Inspired By Our Home</h4>
                  <p>
                    Like the Blue Ridge mountains, our security is built in
                    steadfast, visible layers. We provide a clear perspective on
                    your risks.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.whyUsItem}>
                <CheckCircle size={24} className={styles.whyUsIcon} />
                <div>
                  <h4>K-12 & Business Focused</h4>
                  <p>
                    Our packages are built on CISA guidelines and real-world
                    needs, not a one-size-fits-all model. We prioritize what works.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.whyUsItem}>
                <CheckCircle size={24} className={styles.whyUsIcon} />
                <div>
                  <h4>Partners, Not Just Providers</h4>
                  <p>
                    Our Guardian™ SOC and BlueHook™ platform act as an
                    extension of your team, giving you enterprise power without the complexity.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- Animated Stats --- */}
      <ScrollReveal>
        <section className={styles.stats}>
          <div className={`container ${styles.statsGrid}`}>
            <div className={styles.statItem}>
              <h3>
                <AnimatedCounter to={15} duration={2} suffix=" Min" />
              </h3>
              <p>Average Threat Response Time</p>
            </div>
            <div className={styles.statItem}>
              <h3>
                <AnimatedCounter to={4200} duration={2.5} prefix=">" suffix="+" />
              </h3>
              <p>Phishing Simulations Sent Monthly</p>
            </div>
            <div className={styles.statItem}>
              <h3>
                <AnimatedCounter to={99} duration={2} suffix=".9%" />
              </h3>
              <p>Managed Infrastructure Uptime</p>
            </div>
            <div className={styles.statItem}>
              <h3>
                <AnimatedCounter to={24} duration={1.5} suffix="/7/365" />
              </h3>
              <p>SOC Monitoring</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* --- Final CTA --- */}
      <ScrollReveal>
        <section className={styles.finalCta}>
          <div className="container">
            <h2>Ready to Secure Your Foundation?</h2>
            <p>
              Let's build a resilient, auditable, and secure technology stack
              for your organization.
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="btn btn-primary">Schedule a Consultation</a>
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </motion.div>
  );
}