// pages/packages.js
import Head from 'next/head';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'react-feather';
import ScrollReveal from '../components/ui/ScrollReveal';
import styles from '../styles/Packages.module.css';

// K-12 Package Data
const k12Packages = [
  {
    name: 'K-12 LEVEL 1 — StudentSafe Core',
    desc: 'Essential, high-impact protection. We focus on CISA-recommended controls—like ransomware-ready EDR and staff training—to give you the most security for your budget.',
    features: [
      'Guardian™ Essentials (EDR, basic logs)',
      'Detection rules for ransomware & brute-force',
      'BlueHook™ Lite (Quarterly staff phishing)',
      'Optional student awareness module',
      'Basic external vulnerability scan',
      'Secure remote access (VPN) setup',
      'Monthly IT Director Report',
    ],
  },
  {
    name: 'K-12 LEVEL 2 — District Protect',
    desc: 'Our most popular package for K-12. Adds full SIEM log monitoring and wireless security audits to meet growing compliance and defense needs.',
    isPopular: true,
    features: [
      'Everything in Level 1, plus:',
      'Guardian™ Enhanced (Full SIEM ingestion)',
      'Weekly SOC analyst review & alert tuning',
      'BlueHook™ Standard (Monthly campaigns)',
      'Content filtering & classroom management advisory',
      'Wireless segmentation audit',
      'Annual external vulnerability scanning',
      'Incident Response (IR) Retainer (Lite)',
    ],
  },
  {
    name: 'K-12 LEVEL 3 — Education Resilience Suite',
    desc: 'Complete, enterprise-grade defense. Full XDR/NDR, real-time cloud monitoring, and compliance packages for districts with high-risk or complex needs.',
    features: [
      'Everything in Levels 1-2, plus:',
      'Guardian™ Enterprise (XDR/NDR features)',
      'Cloud App Monitoring (O365/Google)',
      'Automated & manual analyst response',
      'BlueHook™ Enterprise (Weekly, customized)',
      'LMS integration & board-ready metrics',
      'Full internal pentest (DropBox option)',
      'Ransomware tabletop exercises',
      'Full compliance documentation (FERPA mapping)',
    ],
  },
];

// Business Package Data
const businessPackages = [
  {
    name: 'BUSINESS LEVEL 1 — Foundation',
    desc: 'Essential, high-impact protection for small businesses. We deploy baseline security and monitoring to protect you from common threats.',
    features: [
      'Infrastructure baseline (Small server/NAS)',
      'Guardian™ Essentials (EDR, basic monitoring)',
      'BlueHook™ Lite (Quarterly phishing)',
      'External vulnerability scan',
      'Basic backup strategy',
      'Monthly report',
    ],
  },
  {
    name: 'BUSINESS LEVEL 2 — Hardened',
    desc: 'Our most popular package for growing businesses. We build your secure Active Directory and network, then wrap it in 24/7 SIEM monitoring.',
    isPopular: true,
    features: [
      'Everything in Level 1, plus:',
      'Standard Infrastructure Buildout (AD/GPO, VLANs)',
      'Guardian™ Enhanced (Full SIEM, SOC review)',
      'BlueHook™ Standard (Monthly + training)',
      'Security camera system install (Mid-tier)',
      'Annual penetration test',
      'Disaster Recovery (DR) planning',
    ],
  },
  {
    name: 'BUSINESS LEVEL 3 — Enterprise Complete',
    desc: 'Full-stack IT and Security. We manage your entire infrastructure, from multi-site HA servers to full XDR defense and CISO-level strategy.',
    features: [
      'Everything in Levels 1-2, plus:',
      'Full Infrastructure Buildout (Multi-site AD, HA)',
      'Guardian™ Enterprise (Full SIEM/XDR/NDR)',
      'Identity Analytics (Impossible travel, etc.)',
      'BlueHook™ Enterprise (Weekly, industry-specific)',
      'Full internal pentest + annual red team',
      'Advanced camera / analytics deployment',
      'CISO-as-a-Service & board-ready compliance',
    ],
  },
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState('k12');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>K-12 & Business Security Packages | Blue Ridge Security</title>
        <meta
          name="description"
          content="Strategically-built cybersecurity and IT packages for K-12 school districts and businesses. Find the right protection level for your needs."
        />
      </Head>

      {/* --- Packages Hero --- */}
      <section className={styles.packagesHero}>
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Pricing & Packages</span>
            <h1>Strategic Packages for Your Needs</h1>
            <p className={styles.packagesSubtitle}>
              We've bundled our services into clear, strategic packages. Find
              the perfect fit for your organization, whether you're a school
              district protecting students or a business defending data.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Tab Selector --- */}
      <section className={styles.tabSection}>
        <ScrollReveal>
          <div className={styles.tabContainer}>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'k12' ? styles.active : ''
              }`}
              onClick={() => setActiveTab('k12')}
            >
              K-12 School Packages
            </button>
            <button
              id="business" // Anchor for home page link
              className={`${styles.tabButton} ${
                activeTab === 'business' ? styles.active : ''
              }`}
              onClick={() => setActiveTab('business')}
            >
              Business Packages
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* --- Pricing Grids --- */}
      <section className="container" style={{ paddingTop: '0' }}>
        <AnimatePresence mode="wait">
          {/* K-12 Packages */}
          {activeTab === 'k12' && (
            <motion.div
              key="k12"
              className={styles.pricingGrid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {k12Packages.map((pkg, i) => (
                <PricingCard key={pkg.name} pkg={pkg} delay={i * 0.1} />
              ))}
            </motion.div>
          )}

          {/* Business Packages */}
          {activeTab === 'business' && (
            <motion.div
              key="business"
              className={styles.pricingGrid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {businessPackages.map((pkg, i) => (
                <PricingCard key={pkg.name} pkg={pkg} delay={i * 0.1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </motion.div>
  );
}

// --- Pricing Card Component ---
const PricingCard = ({ pkg, delay }) => (
  <ScrollReveal delay={delay} y={50}>
    <motion.div
      className={`${styles.pricingCard} ${
        pkg.isPopular ? styles.popular : ''
      }`}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 170, 255, 0.1)' }}
    >
      {pkg.isPopular && <div className={styles.popularBadge}>POPULAR</div>}
      <div className={styles.cardHeader}>
        <h4>{pkg.name}</h4>
        <p>{pkg.desc}</p>
      </div>
      <div className={styles.cardFeatures}>
        <ul>
          {pkg.features.map((feature) => (
            <li key={feature}>
              <Check size={16} className={styles.checkIcon} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cardCta}>
        <a href="/contact" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </motion.div>
  </ScrollReveal>
);