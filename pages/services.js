// pages/services.js
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Shield,
  Send,
  Database,
  Server,
  Camera,
  Search,
  AlertOctagon,
  FileText,
  Briefcase
} from 'react-feather';
import ScrollReveal from '../components/ui/ScrollReveal';
import Image from 'next/image';
import styles from '../styles/Services.module.css';
import ServiceCard from '../components/ServiceCard';

// Service definitions
const managedServices = [
  {
    id: 'guardian',
    icon: Shield,
    name: 'Guardian™ — SOC Model (SIEM, NDR & XDR)',
    desc: 'All-in-one security monitoring and automated response platform with SIEM, NDR, and XDR capabilities — managed 24/7 by our SOC.',
    link: '/solutions/guardian' // NEW LINK
  },
  {
    id: 'ir',
    icon: AlertOctagon,
    name: 'Incident Response & Forensics',
    desc: '24/7 emergency triage, malware containment, ransomware response, and digital forensics to get you back online safely. Retainers available.',
    link: '/solutions/incident-response' // IR page
  }
];

const proactiveServices = [
  {
    id: 'bluehook',
    icon: Send,
    name: 'BlueHook™ — Phishing Simulations & Awareness',
    desc: 'We measurably reduce human risk with customized weekly or monthly phishing simulations, targeted micro-training, LMS integration, risk scoring, and compliance tracking.',
    link: '/solutions/bluehook' // NEW LINK
  },
  {
    id: 'pentest',
    icon: Search,
    name: 'Penetration Testing / Red Teaming',
    desc: 'We identify real-world vulnerabilities through external, internal, wireless, and application testing. Includes our Blue Ridge DropBox for secure internal testing.',
    link: '/solutions/pentesting' // NEW LINK
  },
  {
    id: 'compliance',
    icon: FileText,
    name: 'Compliance & Reporting',
    desc: 'Board-ready compliance packages and policy creation mapped to HIPAA, FERPA, NIST CSF, CIS, and SOC 2 requirements.',
    link: '/solutions/compliance'
  },
  {
    id: 'ciso',
    icon: Briefcase,
    name: 'CISO-as-a-Service',
    desc: 'Executive-level security strategy, policy buildout, and risk management without the cost of a full-time hire.',
    link: '/solutions/ciso'
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Our Solutions | Blue Ridge Security</title>
        <meta
          name="description"
          content="Our 360° approach to security: 24/7 Managed Security, Proactive Defense, and Secure Infrastructure design."
        />
      </Head>

      {/* --- Services Hero --- */}
      <section className={styles.servicesHero}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.heroInner}>
              <div className={styles.heroContent}>
                <span className="eyebrow">Our Solutions</span>
                <h1>Security, Simplified for You</h1>
                <p className={styles.servicesSubtitle}>
                  We make cybersecurity approachable and effective for schools and businesses in our region. Explore our hands-on services below—each one is a building block for a safer, smarter organization.
                </p>

                <div className={styles.heroCTAs}>
                  <a href="/contact" className="btn btn-primary">Contact Us</a>
                  <a href="/packages" className="btn btn-ghost">View Packages</a>
                </div>
              </div>

              <div className={styles.heroGraphic} aria-hidden>
                <Image
                  src="/images/services-top.png"
                  alt="Services overview graphic"
                  width={720}
                  height={440}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Services Sections --- */}
      <section className="container">

        {/* --- Managed Security (panel) --- */}
        <ScrollReveal>
          <div className={styles.servicesPanel}>
            <div className={styles.serviceCategory}>
              <h2>Managed Security & Response</h2>
              <p>Your 24/7/365 defense. We monitor, detect, and respond to threats so you can focus on your mission.</p>
            </div>

            <div className={styles.servicesList}>
              {managedServices.map((service, i) => (
                <ServiceCard key={service.id} service={service} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* --- Proactive Defense (panel) --- */}
        <ScrollReveal>
          <div className={styles.servicesPanel}>
            <div className={styles.serviceCategory}>
              <h2>Proactive & Human Defense</h2>
              <p>We test your defenses and train your people, turning your weakest links into your strongest assets.</p>
            </div>

            <div className={styles.servicesList}>
              {proactiveServices.map((service, i) => (
                <ServiceCard key={service.id} service={service} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </ScrollReveal>

      </section>
    </motion.div>
  );
}

// ServiceCard is now imported from components/ServiceCard.js