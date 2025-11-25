// pages/services/bluehook.js — Clean, redesigned BlueHook service page
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Target, Mail, FileText, Lock, Zap, Users, BarChart, Layers, ArrowRight } from 'react-feather';
import Link from 'next/link';
import { useState } from 'react';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';

export default function BlueHookService() {
  const [showExample, setShowExample] = useState(false);

  const features = [
    { icon: Mail, title: 'Simulated phishing campaigns' },
    { icon: Target, title: 'Targeted spear-phishing exercises' },
    { icon: Lock, title: 'Credential-prompt testing' },
    { icon: FileText, title: 'Attachment-based phishing simulations' },
    { icon: BarChart, title: 'Link-tracking & click-through analysis' },
    { icon: Users, title: 'Per-user risk scoring' },
    { icon: Layers, title: '“Repeat-clicker” identification' },
    { icon: BarChart, title: 'Department trend analytics' },
    { icon: Target, title: 'Role-based phishing targeting' },
    { icon: Target, title: 'Executive-level phishing test scenarios' },
    { icon: BarChart, title: 'Month-to-month improvement tracking' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <Head>
        <title>BlueHook™ — Phishing Simulation & Human Security Training</title>
        <meta name="description" content="BlueHook™ trains staff to recognize and resist real phishing attacks using controlled, data-driven simulations." />
      </Head>

      {/* HERO */}
      <section className={styles.solutionHero} style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18, alignItems: 'center' }}>
            <div style={{ maxWidth: 920 }}>
              <motion.h1 className={styles.heroTitle} style={{ fontSize: 40, marginBottom: 10 }} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.55 } }}>
                BlueHook™ — Real-World Phishing Simulation & Human Security Training
              </motion.h1>
              <motion.p className={styles.heroSubtitle} style={{ fontSize: 17, marginBottom: 18, color: 'var(--color-text-muted-dark)' }} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.05 } }}>
                Train your staff to recognize and resist real phishing attacks using controlled, data-driven simulations.
              </motion.p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" legacyBehavior>
                  <a className="btn btn-primary" style={{ padding: '12px 22px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Request a Demo <ArrowRight size={14} /></a>
                </Link>

                <button className="btn btn-secondary" onClick={() => setShowExample(true)} style={{ padding: '12px 18px' }}>
                  See Sample Reports
                </button>
              </div>
            </div>

            <div style={{ justifySelf: 'end', alignSelf: 'center' }} aria-hidden>
              <motion.div initial={{ scale: 0.98, opacity: 0.9 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }} style={{ width: 220, height: 140, borderRadius: 12, background: 'linear-gradient(90deg, rgba(0,110,220,0.06), rgba(0,160,255,0.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(0,110,220,0.06)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted-dark)' }}>Average improvement</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-accent)' }}>30–50%</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted-dark)' }}>reduction in risky clicks (90 days)</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What BlueHook Does */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>What BlueHook Does</h2>
            <p style={{ color: 'var(--color-text-muted-dark)', maxWidth: 760 }}>A focused phishing simulation and staff-training platform designed to turn everyday interactions into learning opportunities.</p>
          </ScrollReveal>

          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <ScrollReveal key={i}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 14, borderRadius: 10, background: '#fff', border: '1px solid rgba(10,30,60,0.04)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 8, background: 'rgba(0,130,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div style={{ fontWeight: 700 }}>{f.title}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Behavioral Education & Training */}
      <section className={styles.solutionSection} style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18 }}>
            <div>
              <ScrollReveal>
                <h2 className={styles.sectionTitle}>Behavioral Education & Training</h2>
                <p style={{ color: 'var(--color-text-muted-dark)', maxWidth: 760 }}>BlueHook teaches through real interactions — short, actionable learning delivered when it matters.</p>
              </ScrollReveal>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                          <div style={{ flex: '1 1 420px' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.9 }}>
                              <li><strong>On-click instant educational pop-ups</strong> — immediate explanation of what made the message suspicious.</li>
                              <li><strong>Micro-courses</strong> — 1–3 minute modules that explain key phishing indicators.</li>
                              <li><strong>Real-world phishing examples</strong> — contextualized samples that employees can relate to.</li>
                              <li><strong>Plain-language explanations</strong> — avoid jargon so learning is effective and fast.</li>
                              <li><strong>Visual pattern recognition</strong> — teach employees to spot layout, domain, and context clues.</li>
                              <li><strong>Optional follow-up quizzes</strong> — short checks to measure comprehension.</li>
                            </ul>
                            <p style={{ marginTop: 12, fontWeight: 700 }}>Goal: Reduce risk by educating employees through real interactions, not lectures.</p>
                          </div>

                          <div style={{ flex: '0 0 320px' }} aria-hidden>
                            <div style={{ borderRadius: 12, padding: 14, background: '#fff', border: '1px solid rgba(10,30,60,0.04)' }}>
                              <div style={{ fontSize: 13, color: 'var(--color-text-muted-dark)', marginBottom: 8 }}>Example on-click popup</div>
                              <div style={{ borderRadius: 8, padding: 12, background: 'linear-gradient(180deg,#fbfdff,#fff)', boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.02)' }}>
                                <div style={{ fontWeight: 800, marginBottom: 6 }}>Did you mean to enter credentials?</div>
                                <div style={{ color: 'var(--color-text-muted-dark)', fontSize: 13 }}>This site asked for your login. Look for mismatched domains, unexpected urgency, or requests outside normal processes.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting & Analytics */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Reporting & Analytics</h2>
            <p style={{ color: 'var(--color-text-muted-dark)', maxWidth: 760 }}>Clear, executive-ready reporting that shows exactly how behavior changes over time.</p>
          </ScrollReveal>

          <div style={{ marginTop: 18, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 360px', minWidth: 260, borderRadius: 12, padding: 16, background: '#fff', border: '1px solid rgba(10,30,60,0.04)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-muted-dark)' }}>Per-user performance logs</div>
              <div style={{ fontWeight: 800, fontSize: 20, marginTop: 8 }}>Individual timelines</div>
            </div>

            <div style={{ flex: '1 1 360px', minWidth: 260, borderRadius: 12, padding: 16, background: '#fff', border: '1px solid rgba(10,30,60,0.04)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-muted-dark)' }}>Department-level heatmaps</div>
              <div style={{ fontWeight: 800, fontSize: 20, marginTop: 8 }}>Heatmap & hotspots</div>
            </div>

            <div style={{ flex: '1 1 360px', minWidth: 260, borderRadius: 12, padding: 16, background: '#fff', border: '1px solid rgba(10,30,60,0.04)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-muted-dark)' }}>Organization-wide risk profile</div>
              <div style={{ fontWeight: 800, fontSize: 20, marginTop: 8 }}>Risk score & trends</div>
            </div>
          </div>

          <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
            <div style={{ color: 'var(--color-text-muted-dark)' }}>Behavioral improvement metrics • Executive-ready summaries • Trend visualization over time</div>
          </div>
        </div>
      </section>

      {/* Why BlueHook Works */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Why BlueHook Works</h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 12 }}>
            <div style={{ padding: 16, borderRadius: 10, background: '#fff', border: '1px solid rgba(10,30,60,0.04)' }}>
              <div style={{ fontWeight: 800 }}>Human-focused</div>
              <div style={{ color: 'var(--color-text-muted-dark)' }}>Builds intuition & pattern recognition through real interactions.</div>
            </div>

            <div style={{ padding: 16, borderRadius: 10, background: '#fff', border: '1px solid rgba(10,30,60,0.04)' }}>
              <div style={{ fontWeight: 800 }}>Realistic & adaptive</div>
              <div style={{ color: 'var(--color-text-muted-dark)' }}>Campaigns evolve to reflect current threats and adversary techniques.</div>
            </div>

            <div style={{ padding: 16, borderRadius: 10, background: '#fff', border: '1px solid rgba(10,30,60,0.04)' }}>
              <div style={{ fontWeight: 800 }}>Continuous improvement</div>
              <div style={{ color: 'var(--color-text-muted-dark)' }}>Measurable reduction in risky behavior month over month.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Rollout */}
      <section className={styles.solutionSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Integration & Rollout</h2>
          <div style={{ marginTop: 8 }}>
            <ul>
              <li>Works with Google Workspace</li>
              <li>Works with Microsoft 365</li>
              <li>Supports SSO environments</li>
              <li>No agent required on endpoints</li>
              <li>No user credentials stored or accessed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className={styles.solutionSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Engagement Model</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginTop: 12 }}>
            {['Kickoff briefing', 'Baseline phishing test', 'Ongoing campaign scheduling', 'Training micro-lessons delivered', 'Report & review with leadership'].map((s, i) => (
              <div key={i} style={{ padding: 14, borderRadius: 10, background: '#fff', border: '1px solid rgba(10,30,60,0.04)' }}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing placement */}
      <section className={styles.solutionSection}>
        <div className="container">
          <h3>Pricing</h3>
          <p style={{ color: 'var(--color-text-muted-dark)' }}>Contact us for organization-specific cost and pilot options.</p>
          <div style={{ marginTop: 12 }}>
            <Link href="/contact" legacyBehavior>
              <a className="btn btn-primary">Contact us for organization-specific cost</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.solutionSection} style={{ paddingTop: 30, paddingBottom: 40 }}>
        <div className="container">
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h2 style={{ marginBottom: 8 }}>Ready to Strengthen Your First Line of Defense?</h2>
            <p style={{ color: 'var(--color-text-muted-dark)' }}>Start a BlueHook assessment or speak with our security engineers to design a program that fits your organization.</p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary">Start a BlueHook Assessment</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-secondary">Talk to Security Engineering</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
