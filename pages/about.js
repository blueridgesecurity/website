// pages/about.js
import Head from 'next/head';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Zap, Target, Eye, Shield } from 'react-feather';
import ScrollReveal from '../components/ui/ScrollReveal';
import styles from '../styles/About.module.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>About Blue Ridge Security | Enterprise Cybersecurity</title>
        <meta name="description" content="Blue Ridge Security delivers practical, real-world cybersecurity built on fundamentals that actually work: targeted testing, smart monitoring, human awareness, and rapid response." />
      </Head>

      {/* HERO SECTION */}
      <section id="hero" className={styles.heroSection}>
        <div className="container">
          <ScrollReveal>
            <motion.div className={styles.heroGrid} variants={containerVariants} initial="hidden" animate="show">
              
              {/* LEFT: Headline & Intro */}
              <motion.div className={styles.heroLeft} variants={itemVariants}>
                <h1 className={styles.heroTitle}>Security Built on Fundamentals</h1>
                <p className={styles.heroSubtitle}>
                  We believe cybersecurity works best when it focuses on what actually stops attacks — not marketing fluff or checkbox compliance.
                </p>
                <p className={styles.heroDescription}>
                  Blue Ridge Security provides practical, real-world defense: targeted testing, smart threat monitoring, strong human awareness, and rapid incident response. We help you build security that's both resilient and measurable.
                </p>
                <motion.a href="/contact" className={styles.heroCta} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Start a Conversation
                </motion.a>
              </motion.div>

              {/* RIGHT: 3-Column Value Props */}
              <motion.div className={styles.heroRight} variants={containerVariants}>
                {[
                  { icon: Target, title: 'Targeted Testing', desc: 'Find vulnerabilities before attackers do.' },
                  { icon: Eye, title: 'Smart Monitoring', desc: 'Real-time threat detection with intelligent response.' },
                  { icon: Shield, title: 'Rapid Response', desc: 'Containment and recovery when incidents occur.' },
                ].map((prop, i) => {
                  const Icon = prop.icon;
                  return (
                    <motion.div key={i} className={styles.valueProp} variants={itemVariants}>
                      <Icon size={28} strokeWidth={1.5} />
                      <h4>{prop.title}</h4>
                      <p>{prop.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section id="services" className="container" style={{ padding: '3.5rem 0' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <h2 className={styles.sectionTitle}>What We Deliver</h2>
            <p className={styles.sectionSubtitle}>Our core services solve real security problems with measurable outcomes.</p>
          </div>
        </ScrollReveal>

        <motion.div className={styles.servicesGrid} variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {[
            { title: 'Penetration Testing', desc: 'Comprehensive offensive testing to find vulnerabilities before attackers do. Real-world attack scenarios. Actionable remediation plans.' },
            { title: 'BlueHook™ Phishing & Training', desc: 'Controlled phishing campaigns with immediate learning feedback. Per-user risk scoring. Measurable reduction in click rates and human risk.' },
            { title: 'ThreatWeb™ Monitoring & SIEM', desc: 'Continuous monitoring and intelligent threat detection. Real-time alerting and correlation. 24/7 visibility into your environment.' },
            { title: 'Incident Response', desc: 'Rapid containment and expert recovery. When an incident happens, we get you back on your feet. Pre-incident planning included.' },
            { title: 'Compliance & Evidence', desc: 'We help you build security that aligns with your requirements. Evidence collection. Clear reporting for auditors and boards.' },
            { title: 'Dark Web Monitoring', desc: 'Detect leaked credentials and compromised assets. Track emerging threats. Proactive intelligence gathering.' },
          ].map((service, i) => (
            <motion.div key={i} className={styles.serviceBox} variants={itemVariants}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* OUR APPROACH */}
      <section id="approach" className={styles.approachSection}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
              <h2 className={styles.sectionTitle}>How We Work</h2>
              <p className={styles.sectionSubtitle}>We're structured around a simple principle: direct communication, clear results, real partnership.</p>
            </div>
          </ScrollReveal>

          <motion.div className={styles.principlesGrid} variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {[
              { title: 'Direct, Honest Communication', desc: 'No buzzwords. No marketing-speak. You get a straight assessment of your risk and what needs to happen to address it.' },
              { title: 'Clear Reporting & Results', desc: 'Every finding is actionable. Every report is executive-ready. You know exactly what was tested and what matters.' },
              { title: 'Building Real Resilience', desc: 'We focus on fundamentals that actually work, not checkbox compliance. Security that stands up under pressure.' },
              { title: 'Long-Term Partnership', desc: 'We work with you over time, not just project-to-project. Your security improves measurably through consistent engagement.' },
            ].map((principle, i) => (
              <motion.div key={i} className={styles.principleBox} variants={itemVariants}>
                <div className={styles.principleCheck}>
                  <CheckCircle size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4>{principle.title}</h4>
                  <p>{principle.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="container" style={{ padding: '3.5rem 0' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <h2 className={styles.sectionTitle}>Why Companies Choose Us</h2>
          </div>
        </ScrollReveal>

        <motion.div className={styles.whyGrid} variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.div className={styles.whyCard} variants={itemVariants}>
            <h3>Expertise That Matters</h3>
            <p>Our team brings decades of hands-on experience in offensive security, threat monitoring, incident response, and infrastructure design. We've been on both sides — attacking and defending.</p>
          </motion.div>
          <motion.div className={styles.whyCard} variants={itemVariants}>
            <h3>Outcomes Over Activity</h3>
            <p>We measure success by your reduced risk and measurable security improvements, not by the number of activities completed or hours billed. What matters is what works.</p>
          </motion.div>
          <motion.div className={styles.whyCard} variants={itemVariants}>
            <h3>Practical & Affordable</h3>
            <p>Enterprise-grade security doesn't require enterprise-scale budgets. We deliver professional results with efficient pricing, scaling with your organization's needs.</p>
          </motion.div>
          <motion.div className={styles.whyCard} variants={itemVariants}>
            <h3>Local & Responsive</h3>
            <p>We're accessible and responsive. You work directly with decision-makers, not layers of bureaucracy. Real communication. Real support. Real availability.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaFinal}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <h2>Ready to Build Practical Security?</h2>
              <p>Let's talk about your actual security challenges and what real, measurable improvement looks like for your organization.</p>
              <motion.a href="/contact" className={styles.ctaButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Schedule a Conversation
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
