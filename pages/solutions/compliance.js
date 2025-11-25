import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Shield, CheckSquare } from 'react-feather';
import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';
import Image from 'next/image';

export default function Compliance() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>Compliance & Reporting | Blue Ridge Security</title>
        <meta name="description" content="Compliance mapping, policy creation, and reporting to help your organization meet regulatory requirements." />
      </Head>

      <section className={styles.solutionHero}>
        <div className="container">
          <ScrollReveal>
            <FileText size={64} className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Compliance & Reporting</h1>
            <h2 className={styles.heroSubtitle}>Policies, Evidence, and Board-Ready Reports</h2>
            <p className={styles.heroDescription}>
              We simplify compliance so your team can focus on operations. From gap assessments to continuous evidence collection, we make audits less painful.
            </p>
            <Link href="/contact" legacyBehavior><a className="btn btn-primary">Start a Compliance Assessment</a></Link>
          </ScrollReveal>
        </div>
      </section>

      <section className={`container ${styles.featuresGrid}`}>
        <ScrollReveal>
          <div className={styles.featureCard}>
            <Shield size={32} />
            <h3>Gap Assessments</h3>
            <p>We map controls to frameworks and provide prioritized remediation roadmaps for HIPAA, NIST, SOC2 and more.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className={styles.featureCard}>
            <CheckSquare size={32} />
            <h3>Evidence Collection</h3>
            <p>Automated and manual evidence collection to reduce audit overhead and keep your documentation current.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className={styles.featureCard}>
            <FileText size={32} />
            <h3>Policy & Procedure</h3>
            <p>Custom policy templates and operating procedures tailored for your environment and maturity level.</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="container">
        <ScrollReveal>
          <div className={styles.imageFeature}>
            <div className={styles.imageWrapper}>
              <Image src="/images/report-placeholder.png" alt="Compliance report" width={700} height={460} style={{objectFit:'cover', borderRadius:'8px'}} />
            </div>
            <div className={styles.imageContent}>
              <span className="eyebrow">Audits Made Simple</span>
              <h2>Reduce Audit Time and Risk</h2>
              <p>We help you build repeatable processes that survive audits and scale with your organization.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </motion.div>
  );
}
