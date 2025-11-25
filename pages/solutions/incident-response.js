import Head from 'next/head';
import { motion } from 'framer-motion';
import { AlertOctagon, Terminal, Shield } from 'react-feather';
import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';
import Image from 'next/image';

export default function IncidentResponse() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>Incident Response & Forensics | Blue Ridge Security</title>
        <meta name="description" content="Rapid incident triage, containment, and forensic analysis to get you back to business with minimal disruption." />
      </Head>

      <section className={styles.solutionHero}>
        <div className="container">
          <ScrollReveal>
            <AlertOctagon size={64} className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Incident Response & Forensics</h1>
            <h2 className={styles.heroSubtitle}>Fast, Practical, Forensic-Led Response</h2>
            <p className={styles.heroDescription}>
              Our IR team performs rapid containment, eradication, and root-cause analysis — we prioritize getting you back online while preserving evidence for follow-up actions.
            </p>
            <Link href="/contact" legacyBehavior><a className="btn btn-primary">Request Emergency Support</a></Link>
          </ScrollReveal>
        </div>
      </section>

      <section className={`container ${styles.featuresGrid}`}>
        <ScrollReveal>
          <div className={styles.featureCard}>
            <Terminal size={32} />
            <h3>Rapid Triage</h3>
            <p>Containment runbooks, malware removal, and short-term stabilization to limit business impact.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className={styles.featureCard}>
            <Shield size={32} />
            <h3>Forensic Analysis</h3>
            <p>Root cause analysis, timeline construction, and artifacts collection suitable for internal review or legal processes.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className={styles.featureCard}>
            <AlertOctagon size={32} />
            <h3>Planning & Retainers</h3>
            <p>Build or strengthen your IR playbooks, tabletop exercises, and retainers for guaranteed response times.</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="container">
        <ScrollReveal>
          <div className={styles.imageFeature}>
            <div className={styles.imageContent}>
              <span className="eyebrow">Preparedness</span>
              <h2>Be Ready When It Matters</h2>
              <p>Combine planning with practiced playbooks to shorten recovery time and reduce cost after an incident.</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image src="/images/training-placeholder.png" alt="Incident response" width={640} height={420} style={{objectFit:'cover', borderRadius:'8px'}} />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </motion.div>
  );
}
