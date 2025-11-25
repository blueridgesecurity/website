// pages/services/hardening.js - Hardening & Security Architecture
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Globe, Users, Server, CheckCircle, AlertCircle } from 'react-feather';
import Link from 'next/link';
import { useState } from 'react';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';

export default function HardeningService() {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>Blue Ridge Hardening & Security Architecture</title>
        <meta name="description" content="MFA enforcement, email security, password policies, zero-trust segmentation, browser security policies, admin account minimization." />
      </Head>

      {/* HERO - Building Defenses - PREMIUM ENHANCED */}
      <section id="hero" className={styles.solutionHero} style={{background:'linear-gradient(135deg, rgba(76,175,80,0.08) 0%, rgba(56,142,60,0.04) 100%)', position:'relative', overflow:'hidden'}}>
        {/* Animated gradient backgrounds */}
        <motion.div
          animate={{opacity:[0.1, 0.2, 0.1]}}
          transition={{duration:4, repeat:Infinity}}
          style={{
            position:'absolute',
            top:'-50%',
            right:'-20%',
            width:'600px',
            height:'600px',
            background:'radial-gradient(circle, rgba(76,175,80,0.15) 0%, transparent 70%)',
            borderRadius:'50%',
            zIndex:0,
            filter:'blur(40px)'
          }}
        />
        <motion.div
          animate={{opacity:[0.05, 0.15, 0.05]}}
          transition={{duration:5, repeat:Infinity, delay:0.5}}
          style={{
            position:'absolute',
            bottom:'-30%',
            left:'10%',
            width:'500px',
            height:'500px',
            background:'radial-gradient(circle, rgba(56,142,60,0.1) 0%, transparent 70%)',
            borderRadius:'50%',
            zIndex:0,
            filter:'blur(40px)'
          }}
        />
        
        <div className="container" style={{position:'relative', zIndex:2}}>
          <ScrollReveal>
            <div className={styles.contentNarrow + ' ' + styles.centerText}>
              <motion.div initial={{scale:0, rotate:-180}} animate={{scale:1, rotate:0}} transition={{duration:0.8, type:'spring', stiffness:100}} style={{display:'inline-block', marginBottom:'2rem'}}>
                <motion.div
                  animate={{scale:[1,1.15,1]}}
                  transition={{duration:2.8, repeat:Infinity}}
                  style={{display:'flex', alignItems:'center', justifyContent:'center'}}
                >
                  <Shield size={100} style={{color:'#4caf50'}} strokeWidth={1.5} />
                </motion.div>
              </motion.div>
              <h1 className={styles.heroTitle} style={{fontSize:'3.8rem', letterSpacing:'-1.5px', textShadow:'0 10px 30px rgba(76,175,80,0.2)'}}>
                <span style={{color:'#4caf50'}}>Defend by Default.</span>
                <span className={styles.heroTitlePlain}> Architect for Zero-Trust.</span>
              </h1>
              <h2 className={styles.heroSubtitle} style={{fontSize:'1.4rem', fontWeight:500}}>Security controls that stop attackers at every layer.</h2>
              <p className={styles.heroDescription} style={{fontSize:'1.05rem', lineHeight:1.8}}>MFA, email security, password policy, device hardening, network segmentation — the fundamentals that work.</p>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary" style={{display:'inline-flex', alignItems:'center', gap:'0.7rem', padding:'1.2rem 3rem', fontSize:'1.08rem'}} onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'hero'}}))}>Schedule Hardening Review <Lock size={22} /></a>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HARDENING LAYERS - Security controls */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Security Hardening Across All Layers</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              Defense in depth. Every system, every account, every connection protected.
            </p>
          </ScrollReveal>

          {/* Area Selection */}
          <div style={{display:'flex', gap:'0.6rem', marginBottom:'2rem', justifyContent:'center', flexWrap:'wrap'}}>
            {[
              {icon:Key, label:'Identity & Auth'},
              {icon:Globe, label:'Email Security'},
              {icon:Lock, label:'Device & Browser'},
              {icon:Server, label:'Network & Access'},
              {icon:Shield, label:'Admin Controls'}
            ].map((item, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveArea(i)}
                whileHover={{scale:1.05}}
                style={{
                  padding:'0.7rem 1.2rem',
                  borderRadius:'6px',
                  border: activeArea === i ? '2px solid #4caf50' : '1px solid rgba(76,175,80,0.3)',
                  background: activeArea === i ? 'rgba(76,175,80,0.15)' : 'rgba(76,175,80,0.05)',
                  color:'inherit',
                  cursor:'pointer',
                  transition:'all 0.3s ease',
                  fontSize:'0.9rem',
                  fontWeight: activeArea === i ? 700 : 500
                }}
              >
                <item.icon size={16} style={{display:'inline', marginRight:'0.4rem'}} />
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Detailed Hardening Area */}
          <ScrollReveal>
            <motion.div
              key={activeArea}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.3}}
              style={{
                background:'linear-gradient(135deg, rgba(76,175,80,0.08) 0%, rgba(56,142,60,0.04) 100%)',
                border:'1px solid rgba(76,175,80,0.15)',
                borderRadius:'12px',
                padding:'2rem',
                maxWidth:'1000px',
                margin:'0 auto'
              }}
            >
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', alignItems:'start'}}>
                <div>
                  <h3 style={{fontSize:'1.3rem', fontWeight:700, marginBottom:'1.5rem', color:'#4caf50'}}>
                    {['Identity & Authentication', 'Email Security', 'Device & Browser Protection', 'Network & Access Control', 'Admin Account Security'][activeArea]}
                  </h3>
                  <ul style={{listStyle:'none', padding:0, margin:0}}>
                    {[
                      [
                        'MFA on all systems (no exemptions)',
                        'Passwordless where possible',
                        'Strong password policies (14+ chars)',
                        'Password manager mandate',
                        'Conditional access rules',
                        'Login anomaly detection'
                      ],
                      [
                        'SPF, DKIM, DMARC enforcement',
                        'TLS for all outbound mail',
                        'Email gateway filtering',
                        'Phishing detection & sandboxing',
                        'DLP (data loss prevention)',
                        'External email warnings'
                      ],
                      [
                        'Full-disk encryption (BitLocker/FileVault)',
                        'Antivirus/EDR deployment',
                        'Windows Defender hardening',
                        'Browser isolation & sandboxing',
                        'App whitelisting',
                        'USB device restrictions'
                      ],
                      [
                        'Zero-trust architecture',
                        'Network segmentation (VLANs)',
                        'Microsegmentation zones',
                        'VPN for remote access',
                        'Firewall rule audits',
                        'Internal traffic inspection'
                      ],
                      [
                        'Privileged access workstations (PAWs)',
                        'Admin account minimization',
                        'Separate admin/user accounts',
                        'Privilege escalation controls',
                        'Admin action logging',
                        'Session recording & review'
                      ]
                    ][activeArea].map((item, i) => (
                      <li key={i} style={{marginBottom:'0.8rem', display:'flex', gap:'0.6rem'}}>
                        <CheckCircle size={18} style={{color:'#4caf50', flexShrink:0, marginTop:'2px'}} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  animate={{y:[0, 10, 0]}}
                  transition={{duration:3, repeat:Infinity}}
                  style={{
                    background:'rgba(76,175,80,0.05)',
                    border:'2px dashed rgba(76,175,80,0.3)',
                    borderRadius:'12px',
                    padding:'2rem',
                    textAlign:'center'
                  }}
                >
                  <div style={{fontSize:'0.85rem', fontWeight:700, letterSpacing:'1px', marginBottom:'1rem', color:'#4caf50'}}>
                    IMPLEMENTATION
                  </div>
                  <div style={{fontSize:'2rem', fontWeight:700, color:'#4caf50', marginBottom:'0.5rem'}}>
                    {['2-4 weeks', '1-2 weeks', '3-4 weeks', '4-6 weeks', '2-3 weeks'][activeArea]}
                  </div>
                  <div style={{fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:1.7, marginBottom:'1.5rem'}}>
                    Typical deployment timeline
                  </div>
                  <ul style={{listStyle:'none', padding:0, margin:0, textAlign:'left', fontSize:'0.9rem'}}>
                    <li style={{marginBottom:'0.6rem'}}>✓ Phased rollout supported</li>
                    <li style={{marginBottom:'0.6rem'}}>✓ Testing & validation included</li>
                    <li style={{marginBottom:'0.6rem'}}>✓ User training provided</li>
                    <li>✓ Monitoring & tuning</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ZERO-TRUST ARCHITECTURE - Modern defense model */}
      <section className={styles.solutionSection} style={{background:'rgba(76,175,80,0.02)'}}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Zero-Trust Architecture Design</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              Trust nothing. Verify everything. Every access request authenticated and authorized.
            </p>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', maxWidth:'1100px', margin:'0 auto', alignItems:'center'}}>
            <ScrollReveal>
              <motion.div
                animate={{scale:[1, 1.02, 1]}}
                transition={{duration:3, repeat:Infinity}}
                style={{
                  background:'linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(56,142,60,0.05) 100%)',
                  border:'2px solid rgba(76,175,80,0.2)',
                  borderRadius:'12px',
                  padding:'2rem',
                  textAlign:'center'
                }}
              >
                <div style={{fontSize:'1.4rem', fontWeight:700, marginBottom:'1rem', color:'#4caf50'}}>
                  Zero-Trust Pillars
                </div>
                <ul style={{listStyle:'none', padding:0, margin:0, textAlign:'left', lineHeight:2}}>
                  {[
                    'Identity verification (MFA required)',
                    'Device compliance checking',
                    'Location & network analysis',
                    'Behavioral analytics',
                    'Least-privilege access',
                    'Continuous validation',
                    'Encrypted communications',
                    'Logging & monitoring'
                  ].map((item, i) => (
                    <li key={i} style={{display:'flex', gap:'0.6rem'}}>
                      <AlertCircle size={18} style={{color:'#4caf50', flexShrink:0}} />
                      <span style={{fontSize:'0.95rem'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h3 style={{fontSize:'1.2rem', fontWeight:700, marginBottom:'1.5rem'}}>Implementation Phases</h3>
                {[
                  {phase:'Phase 1: Visibility', desc:'Map all users, devices, and resources. Establish baseline traffic patterns.'},
                  {phase:'Phase 2: Identity', desc:'Deploy MFA, conditional access, and identity management everywhere.'},
                  {phase:'Phase 3: Network', desc:'Implement microsegmentation, VLANs, and internal traffic inspection.'},
                  {phase:'Phase 4: Monitoring', desc:'Enable logging, analytics, and automated response to anomalies.'},
                  {phase:'Phase 5: Optimization', desc:'Refine policies based on usage patterns and security events.'}
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{x:8}}
                    style={{
                      marginBottom:'1rem',
                      paddingLeft:'1.5rem',
                      borderLeft:'3px solid #4caf50',
                      background:'rgba(76,175,80,0.05)',
                      padding:'1rem 1rem 1rem 1.5rem',
                      borderRadius:'6px'
                    }}
                  >
                    <div style={{fontWeight:700, marginBottom:'0.3rem', color:'#4caf50'}}>{item.phase}</div>
                    <p style={{fontSize:'0.9rem', color:'var(--color-text-muted-dark)', margin:0}}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* COMPLIANCE INTEGRATION - Hardening meets standards */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Compliance Alignment</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              Hardening for security also hardening for compliance. One set of controls, multiple standards met.
            </p>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'1rem', maxWidth:'1100px', margin:'0 auto'}}>
            {[
              {std:'HIPAA', controls:['Encryption', 'MFA', 'Access logging', 'Device hardening']},
              {std:'PCI-DSS', controls:['Network segmentation', 'Strong passwords', 'Regular testing', 'Admin controls']},
              {std:'SOC 2', controls:['Monitoring & logging', 'Incident response', 'Access controls', 'Data protection']},
              {std:'ISO 27001', controls:['Policy framework', 'Risk assessment', 'Secure architecture', 'Continuous improvement']},
              {std:'GDPR', controls:['Data encryption', 'Access minimization', 'Audit trails', 'Privacy controls']},
              {std:'CIS Controls', controls:['Asset inventory', 'Access management', 'Threat detection', 'Incident response']}
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <motion.div
                  whileHover={{scale:1.02}}
                  style={{
                    background:'linear-gradient(135deg, rgba(76,175,80,0.08) 0%, rgba(56,142,60,0.04) 100%)',
                    border:'1px solid rgba(76,175,80,0.15)',
                    borderRadius:'12px',
                    padding:'1.5rem',
                    textAlign:'center'
                  }}
                >
                  <h3 style={{fontSize:'1.1rem', fontWeight:700, marginBottom:'1rem', color:'#4caf50'}}>{item.std}</h3>
                  <ul style={{listStyle:'none', padding:0, margin:0}}>
                    {item.controls.map((control, j) => (
                      <li key={j} style={{marginBottom:'0.5rem', fontSize:'0.85rem'}}>
                        ✓ {control}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.solutionSection} style={{background:'linear-gradient(135deg, rgba(76,175,80,0.04) 0%, rgba(56,142,60,0.02) 100%)'}}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.contentNarrow + ' ' + styles.centerText}>
              <h2 style={{fontSize:'1.6rem', fontWeight:700, marginBottom:'1rem'}}>Ready to Build Your Defense?</h2>
              <p style={{fontSize:'1rem', lineHeight:1.7, marginBottom:'1.5rem', color:'var(--color-text-muted-dark)'}}>
                We'll assess your current posture and design a hardening roadmap that fits your business and timeline.
              </p>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'final'}}))}>Schedule Hardening Assessment</a>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
