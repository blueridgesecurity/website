// pages/services/advisory.js - Managed Security Advisory & Support
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Phone, Users, Settings, Shield, Cloud, Lock, HelpCircle, Clock } from 'react-feather';
import Link from 'next/link';
import { useState } from 'react';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';

export default function AdvisoryService() {
  const [activeSupport, setActiveSupport] = useState(0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>Blue Ridge Managed Security Advisory & Support</title>
        <meta name="description" content="On-call security engineering support, Google Workspace management, Microsoft 365 / Entra / Azure AD support." />
      </Head>

      {/* HERO - Always Available Help - PREMIUM ENHANCED */}
      <section id="hero" className={styles.solutionHero} style={{background:'linear-gradient(135deg, rgba(0,150,255,0.08) 0%, rgba(0,100,200,0.04) 100%)', position:'relative', overflow:'hidden'}}>
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
            background:'radial-gradient(circle, rgba(0,150,255,0.15) 0%, transparent 70%)',
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
            background:'radial-gradient(circle, rgba(0,100,200,0.1) 0%, transparent 70%)',
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
                  transition={{duration:2.5, repeat:Infinity}}
                  style={{display:'flex', alignItems:'center', justifyContent:'center'}}
                >
                  <Phone size={100} style={{color:'var(--color-accent)'}} strokeWidth={1.5} />
                </motion.div>
              </motion.div>
              <h1 className={styles.heroTitle} style={{fontSize:'3.8rem', letterSpacing:'-1.5px', textShadow:'0 10px 30px rgba(0,180,255,0.2)'}}>
                <span className={styles.heroTitleGradient}>Expert Help. On Demand.</span>
                <span className={styles.heroTitlePlain}> No Ticket Queue.</span>
              </h1>
              <h2 className={styles.heroSubtitle} style={{fontSize:'1.4rem', fontWeight:500}}>Call anytime for security advice, emergency response, or strategic guidance.</h2>
              <p className={styles.heroDescription} style={{fontSize:'1.05rem', lineHeight:1.8}}>From confusion to confidence — our security engineers answer your questions, analyze suspicious activity, and help during incidents.</p>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary" style={{display:'inline-flex', alignItems:'center', gap:'0.7rem', padding:'1.2rem 3rem', fontSize:'1.08rem'}} onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'hero'}}))}>Activate On-Call Support <HelpCircle size={22} /></a>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ON-CALL AVAILABILITY - When you need help */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Always On. Always Ready.</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              Security doesn't stop after hours. Neither does Blue Ridge.
            </p>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1.5rem', maxWidth:'1200px', margin:'0 auto'}}>
            {[
              {icon:Phone, title:'Call Anytime', desc:'Reach our security engineers 24/7 for real-time guidance and emergency response'},
              {icon:Clock, title:'Quick Response', desc:'Average answer time under 5 minutes. Critical incidents within 1 hour'},
              {icon:HelpCircle, title:'Any Question', desc:'Suspicious email? Weird login? Policy question? We help you figure it out'},
              {icon:Shield, title:'Incident Support', desc:'During a potential breach, we help triage, contain, and remediate'},
              {icon:Users, title:'Best Practices', desc:'Guidance on policy implementation, security hygiene, and compliance'},
              {icon:Lock, title:'Emergency Escalation', desc:'Escalate to forensics or penetration testing on demand'}
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <motion.div
                  whileHover={{y:-8}}
                  style={{
                    background:'linear-gradient(135deg, rgba(0,150,255,0.08) 0%, rgba(0,100,200,0.04) 100%)',
                    border:'1px solid rgba(0,150,255,0.15)',
                    borderRadius:'12px',
                    padding:'1.5rem',
                    textAlign:'center'
                  }}
                >
                  <item.icon size={40} style={{color:'var(--color-accent)', marginBottom:'1rem', margin:'0 auto 1rem'}} />
                  <h3 style={{fontSize:'1.1rem', fontWeight:700, marginBottom:'0.8rem'}}>{item.title}</h3>
                  <p style={{fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:1.6}}>{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT AREAS - Specialized expertise */}
      <section className={styles.solutionSection} style={{background:'rgba(0,150,255,0.02)'}}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Expert Support for Your Infrastructure</h2>
          </ScrollReveal>

          {/* Support Area Tabs */}
          <div style={{display:'flex', gap:'0.8rem', marginBottom:'2rem', justifyContent:'center', flexWrap:'wrap'}}>
            {[
              {icon:Users, label:'Google Workspace'},
              {icon:Cloud, label:'Microsoft 365 / Entra'},
              {icon:Lock, label:'Azure & Cloud'},
              {icon:Shield, label:'General Security'}
            ].map((item, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveSupport(i)}
                whileHover={{scale:1.05}}
                style={{
                  padding:'0.7rem 1.2rem',
                  borderRadius:'6px',
                  border: activeSupport === i ? '2px solid var(--color-accent)' : '1px solid rgba(0,150,255,0.3)',
                  background: activeSupport === i ? 'linear-gradient(135deg, rgba(0,180,255,0.15), rgba(0,100,200,0.1))' : 'rgba(0,150,255,0.05)',
                  color:'inherit',
                  cursor:'pointer',
                  transition:'all 0.3s ease',
                  fontSize:'0.9rem',
                  fontWeight: activeSupport === i ? 700 : 500
                }}
              >
                <item.icon size={16} style={{display:'inline', marginRight:'0.4rem'}} />
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Support Details */}
          <ScrollReveal>
            <motion.div
              key={activeSupport}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.3}}
              style={{
                background:'linear-gradient(135deg, rgba(0,150,255,0.08) 0%, rgba(0,100,200,0.04) 100%)',
                border:'1px solid rgba(0,150,255,0.15)',
                borderRadius:'12px',
                padding:'2rem',
                maxWidth:'1000px',
                margin:'0 auto'
              }}
            >
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', alignItems:'start'}}>
                <div>
                  <h3 style={{fontSize:'1.3rem', fontWeight:700, marginBottom:'1.5rem', color:'var(--color-accent)'}}>
                    {['Google Workspace Administration', 'Microsoft 365 & Entra Administration', 'Azure & Cloud Configuration', 'General Security Support'][activeSupport]}
                  </h3>
                  <ul style={{listStyle:'none', padding:0, margin:0}}>
                    {[
                      [
                        'OU structure and user grouping design',
                        'Admin account controls and delegation',
                        'Enrollment and Chrome management',
                        'Domain-based mail routing',
                        'Compliance configuration',
                        'Security baselines & protection'
                      ],
                      [
                        'Conditional access policies',
                        'Device enrollment and MDM',
                        'MFA rollout and enforcement',
                        'Admin privilege oversight',
                        'Login anomaly detection & response',
                        'Exchange mail-flow configuration'
                      ],
                      [
                        'Virtual network segmentation',
                        'Identity & access management',
                        'Data encryption configuration',
                        'Logging and monitoring setup',
                        'Compliance and regulatory mapping',
                        'Cost optimization reviews'
                      ],
                      [
                        'Phishing and social engineering guidance',
                        'Incident response planning',
                        'Policy and procedure development',
                        'Security awareness recommendations',
                        'Vendor risk assessment',
                        'Compliance roadmap planning'
                      ]
                    ][activeSupport].map((item, i) => (
                      <li key={i} style={{marginBottom:'0.8rem', display:'flex', gap:'0.6rem'}}>
                        <span style={{color:'var(--color-accent)', fontWeight:700, flexShrink:0}}>✓</span>
                        <span style={{fontSize:'0.95rem'}}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  animate={{scale:[1, 1.02, 1]}}
                  transition={{duration:3, repeat:Infinity}}
                  style={{
                    background:'rgba(0,150,255,0.05)',
                    border:'2px dashed rgba(0,150,255,0.3)',
                    borderRadius:'12px',
                    padding:'2rem',
                    textAlign:'center'
                  }}
                >
                  <div style={{fontSize:'0.85rem', fontWeight:700, marginBottom:'1rem', color:'var(--color-accent)'}}>
                    COMMON SCENARIOS
                  </div>
                  <ul style={{listStyle:'none', padding:0, margin:0, textAlign:'left', fontSize:'0.9rem'}}>
                    {[
                      ['Suspicious login pattern', 'Password reuse at scale', 'Unusual admin activity'],
                      ['Suspicious email forwarding', 'MFA bypass attempts', 'Unusual file access'],
                      ['Unexpected resource creation', 'Data exfiltration patterns', 'Privilege escalation'],
                      ['Phishing incident', 'Ransomware discovery', 'Compliance audit']
                    ][activeSupport].map((scenario, i) => (
                      <li key={i} style={{marginBottom:'0.6rem'}}>
                        → {scenario}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* SUPPORT TIERS - SLA & response times */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Support & Response Levels</h2>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem', maxWidth:'1100px', margin:'0 auto'}}>
            {[
              {tier:'CRITICAL', time:'Within 1 Hour', desc:'Active breach, ongoing data exfiltration, ransomware infection'},
              {tier:'URGENT', time:'Within 4 Hours', desc:'Successful phishing compromise, suspected intrusion, policy violation'},
              {tier:'ADVISORY', time:'Within 24 Hours', desc:'General questions, policy guidance, best practices, routine issues'}
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <motion.div
                  whileHover={{scale:1.02, y:-4}}
                  style={{
                    background:'linear-gradient(135deg, rgba(0,150,255,0.08) 0%, rgba(0,100,200,0.04) 100%)',
                    border:'2px solid rgba(0,150,255,0.15)',
                    borderRadius:'12px',
                    padding:'2rem',
                    textAlign:'center'
                  }}
                >
                  <div style={{fontSize:'0.85rem', fontWeight:700, letterSpacing:'1px', marginBottom:'0.5rem', color:'var(--color-accent)'}}>
                    {item.tier}
                  </div>
                  <div style={{fontSize:'1.4rem', fontWeight:700, marginBottom:'0.5rem'}}>
                    {item.time}
                  </div>
                  <p style={{fontSize:'0.95rem', color:'var(--color-text-muted-dark)', lineHeight:1.6}}>
                    {item.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.solutionSection} style={{background:'linear-gradient(135deg, rgba(0,150,255,0.04) 0%, rgba(0,100,200,0.02) 100%)'}}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.contentNarrow + ' ' + styles.centerText}>
              <h2 style={{fontSize:'1.6rem', fontWeight:700, marginBottom:'1rem'}}>Ready for Expert Help?</h2>
              <p style={{fontSize:'1rem', lineHeight:1.7, marginBottom:'1.5rem', color:'var(--color-text-muted-dark)'}}>
                Put our security engineers on speed-dial. Call for advice, not just answers.
              </p>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'final'}}))}>Activate Support Plan</a>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
