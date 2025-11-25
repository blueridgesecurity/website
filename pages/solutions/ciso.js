import Head from 'next/head';
import { motion } from 'framer-motion';
import { Briefcase, Users, FileText } from 'react-feather';
import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';
import Image from 'next/image';

export default function CISO() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>CISO-as-a-Service | Blue Ridge Security</title>
        <meta name="description" content="Executive-level security strategy and fractional CISO services to guide your long-term program." />
      </Head>

      <section className={styles.solutionHero}>
        <div className="container">
          <ScrollReveal>
            <Briefcase size={64} className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>CISO-as-a-Service</h1>
            <h2 className={styles.heroSubtitle}>Strategic Security Leadership, Fractional</h2>
            <p className={styles.heroDescription}>
              Gain a senior security leader without the full-time hire. We partner with your executives to build security strategy, governance, risk programs, and board-ready reporting.
            </p>
            <Link href="/contact" legacyBehavior><a className="btn btn-primary">Request a CISO Consultation</a></Link>
          </ScrollReveal>
        </div>
      </section>

      <section className={`container ${styles.featuresGrid}`}>
        <ScrollReveal>
          <div className={styles.featureCard}>
            <Users size={32} />
            <h3>Program Development</h3>
            <p>Security roadmap, policy frameworks, vendor selection, and resourcing plans tailored to your organization.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className={styles.featureCard}>
            <FileText size={32} />
            <h3>Governance & Reporting</h3>
            <p>Board-ready risk reporting, compliance mapping, and executive briefings to translate technical risk into business impact.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className={styles.featureCard}>
            <Briefcase size={32} />
            <h3>Vendor & Budget Guidance</h3>
            <p>Practical recommendations that align security investments with measurable risk reduction.</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="container">
        <ScrollReveal>
          <div className={styles.imageFeature}>
            <div className={styles.imageContent}>
              <span className="eyebrow">Fractional Leadership</span>
              <h2>A Trusted Advisor for Your Security Program</h2>
              <p>Our CISO-as-a-Service is built for organizations that need experienced leadership without the overhead of a full executive hire.</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image src="/images/team-placeholder-1.png" alt="CISO consulting" width={600} height={450} style={{objectFit:'cover', borderRadius:'8px'}} />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </motion.div>
  );
}
