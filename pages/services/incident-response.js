// pages/services/incident-response.js - Incident Response & Forensics
import Head from 'next/head';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Search, Shield, TrendingDown, Lock, FileText, Users } from 'react-feather';
import Link from 'next/link';
import { useState } from 'react';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';

export default function IncidentResponseService() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>Blue Ridge Incident Response & Forensics</title>
        <meta name="description" content="Access compromise investigation, log analysis, incident containment, forensic analysis, regulatory reporting." />
      </Head>

      {/* HERO - Crisis Response - PREMIUM ENHANCED */}
      <section id="hero" className={styles.solutionHero} style={{background:'linear-gradient(135deg, rgba(244,67,54,0.08) 0%, rgba(192,57,43,0.04) 100%)', position:'relative', overflow:'hidden'}}>
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
            background:'radial-gradient(circle, rgba(244,67,54,0.15) 0%, transparent 70%)',
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
            background:'radial-gradient(circle, rgba(192,57,43,0.1) 0%, transparent 70%)',
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
                  animate={{scale:[1,1.2,1]}}
                  transition={{duration:1.8, repeat:Infinity}}
                  style={{display:'flex', alignItems:'center', justifyContent:'center'}}
                >
                  <AlertTriangle size={100} style={{color:'#f44336'}} strokeWidth={1.5} />
                </motion.div>
              </motion.div>
              <h1 className={styles.heroTitle} style={{fontSize:'3.8rem', letterSpacing:'-1.5px', textShadow:'0 10px 30px rgba(244,67,54,0.2)'}}>
                <span style={{color:'#f44336'}}>Breach Detected.</span>
                <span className={styles.heroTitlePlain}> We Take Over From Here.</span>
              </h1>
              <h2 className={styles.heroSubtitle} style={{fontSize:'1.4rem', fontWeight:500}}>Swift containment, thorough forensic analysis, and regulatory compliance.</h2>
              <p className={styles.heroDescription} style={{fontSize:'1.05rem', lineHeight:1.8}}>When every minute counts, call Blue Ridge. We respond, we investigate, we recover.</p>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary" style={{display:'inline-flex', alignItems:'center', gap:'0.7rem', padding:'1.2rem 3rem', fontSize:'1.08rem'}} onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'hero'}}))}>Get Emergency Response Number <Clock size={22} /></a>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* RESPONSE PHASES - Timeline during incident */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Incident Response Timeline</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              From detection to recovery. Every phase documented. Every action logged.
            </p>
          </ScrollReveal>

          {/* Phase Navigation */}
          <div style={{display:'flex', gap:'0.5rem', marginBottom:'2rem', justifyContent:'center', flexWrap:'wrap', overflowX:'auto'}}>
            {[
              {phase:'Detection', icon:AlertTriangle},
              {phase:'Triage', icon:Search},
              {phase:'Containment', icon:Shield},
              {phase:'Analysis', icon:Search},
              {phase:'Evidence', icon:Lock},
              {phase:'Recovery', icon:TrendingDown},
              {phase:'Reporting', icon:FileText}
            ].map((item, i) => (
              <motion.button
                key={i}
                onClick={() => setActivePhase(i)}
                whileHover={{scale:1.05}}
                style={{
                  padding:'0.7rem 1.2rem',
                  borderRadius:'6px',
                  border: activePhase === i ? '2px solid #f44336' : '1px solid rgba(244,67,54,0.3)',
                  background: activePhase === i ? 'rgba(244,67,54,0.15)' : 'rgba(244,67,54,0.05)',
                  color:'inherit',
                  cursor:'pointer',
                  transition:'all 0.3s ease',
                  fontSize:'0.85rem',
                  fontWeight: activePhase === i ? 700 : 500
                }}
              >
                <item.icon size={16} style={{display:'inline', marginRight:'0.4rem'}} />
                {item.phase}
              </motion.button>
            ))}
          </div>

          {/* Phase Details */}
          <ScrollReveal>
            <motion.div
              key={activePhase}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.3}}
              style={{
                background:'linear-gradient(135deg, rgba(244,67,54,0.08) 0%, rgba(192,57,43,0.04) 100%)',
                border:'1px solid rgba(244,67,54,0.2)',
                borderRadius:'12px',
                padding:'2rem',
                maxWidth:'1000px',
                margin:'0 auto'
              }}
            >
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', alignItems:'start'}}>
                <div>
                  <h3 style={{fontSize:'1.4rem', fontWeight:700, marginBottom:'1rem', color:'#f44336'}}>
                    {['Detection & Alert', 'Initial Triage', 'Containment & Isolation', 'Forensic Analysis', 'Evidence Preservation', 'Recovery & Restoration', 'Reporting & Remediation'][activePhase]}
                  </h3>
                  <p style={{lineHeight:1.7, marginBottom:'1.2rem', color:'var(--color-text-muted-dark)'}}>
                    {[
                      'Alert received or suspicious activity detected. Initial assessment of scope. Engage response team immediately.',
                      'Determine attack vector. Identify compromised systems. Assess data exposure. Estimate scope of breach.',
                      'Isolate affected systems from network. Block malicious traffic. Revoke credentials. Prevent further access.',
                      'Deep analysis of logs and evidence. Determine attacker entry point. Trace lateral movement. Identify all affected systems.',
                      'Secure evidence for legal & compliance. Preserve logs in immutable storage. Chain of custody documentation. Forensic timeline build.',
                      'Remediate vulnerabilities. Rebuild compromised systems. Restore from clean backups. Reinforce access controls.',
                      'Compile forensic report. Executive briefing on findings. Regulatory notification & compliance. Remediation roadmap.'
                    ][activePhase]}
                  </p>
                  <ul style={{listStyle:'none', padding:0, margin:0}}>
                    {[
                      ['Monitor email alerts', 'Review suspicious logins', 'Check IDS/IPS alerts', 'Analyze network traffic'],
                      ['Interview affected users', 'Review access logs', 'Identify account compromise', 'Determine timeline'],
                      ['Disconnect systems', 'Block IP addresses', 'Revoke session tokens', 'Enable additional monitoring'],
                      ['Parse system logs', 'Analyze network captures', 'Examine file system', 'Check for persistence'],
                      ['Copy log files', 'Export forensic images', 'Secure server access', 'Document chain of custody'],
                      ['Apply patches', 'Reset credentials', 'Restore systems', 'Validate security controls'],
                      ['Timeline creation', 'Root cause analysis', 'Regulatory notification', 'Security improvements']
                    ][activePhase].map((item, i) => (
                      <li key={i} style={{marginBottom:'0.6rem', fontSize:'0.9rem'}}>
                        ✓ {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  animate={{y:[0, 10, 0]}}
                  transition={{duration:3, repeat:Infinity}}
                  style={{
                    background:'rgba(244,67,54,0.05)',
                    border:'2px dashed rgba(244,67,54,0.3)',
                    borderRadius:'12px',
                    padding:'2rem',
                    textAlign:'center'
                  }}
                >
                  <div style={{fontSize:'0.85rem', fontWeight:700, letterSpacing:'1px', marginBottom:'1rem', color:'#f44336'}}>
                    PHASE {activePhase + 1} OF 7
                  </div>
                  <div style={{fontSize:'1.8rem', fontWeight:700, color:'#f44336', marginBottom:'1rem'}}>
                    {['< 1 hour', '2-4 hours', '4-12 hours', '12-48 hours', 'Continuous', '24-72 hours', '3-5 days'][activePhase]}
                  </div>
                  <div style={{fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:1.6}}>
                    Typical duration. Timeline varies based on breach complexity and scope.
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* INVESTIGATION CAPABILITIES */}
      <section className={styles.solutionSection} style={{background:'rgba(244,67,54,0.02)'}}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Forensic Investigation Capabilities</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              We find what happened. How it happened. And how to prevent it next time.
            </p>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'1.5rem', maxWidth:'1200px', margin:'0 auto'}}>
            {[
              {icon:Users, title:'Access Review', items:['Compromised account timeline', 'Lateral movement tracking', 'Privilege escalation analysis', 'Session hijacking detection']},
              {icon:Search, title:'Log Analysis', items:['Event correlation', 'Timeline reconstruction', 'Anomaly detection', 'Pattern matching']},
              {icon:Lock, title:'Credential Compromise', items:['Password reset vectors', 'Credential harvesting methods', 'MFA bypass attempts', 'Account takeover analysis']},
              {icon:Shield, title:'Vector Analysis', items:['Initial entry point', 'Phishing indicators', 'Vulnerability exploitation', 'Social engineering tactics']},
              {icon:TrendingDown, title:'Containment', items:['Threat actor tracking', 'Access removal', 'Malware cleanup', 'Backdoor elimination']},
              {icon:Clock, title:'Timeline Build', items:['First access determination', 'Compromise detection', 'Lateral movement phases', 'Data exfiltration window']}
            ].map((area, i) => (
              <ScrollReveal key={i}>
                <motion.div
                  whileHover={{y:-8}}
                  style={{
                    background:'linear-gradient(135deg, rgba(244,67,54,0.08) 0%, rgba(192,57,43,0.04) 100%)',
                    border:'1px solid rgba(244,67,54,0.15)',
                    borderRadius:'12px',
                    padding:'1.5rem'
                  }}
                >
                  <area.icon size={36} style={{color:'#f44336', marginBottom:'1rem'}} />
                  <h3 style={{fontSize:'1rem', fontWeight:700, marginBottom:'1rem'}}>{area.title}</h3>
                  <ul style={{listStyle:'none', padding:0, margin:0}}>
                    {area.items.map((item, j) => (
                      <li key={j} style={{marginBottom:'0.5rem', fontSize:'0.85rem'}}>
                        ◆ {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* POST-INCIDENT DELIVERABLES */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Post-Incident Deliverables</h2>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', maxWidth:'1100px', margin:'0 auto'}}>
            <ScrollReveal>
              <motion.div
                animate={{borderColor:['rgba(244,67,54,0.2)', 'rgba(244,67,54,0.5)', 'rgba(244,67,54,0.2)']}}
                transition={{duration:2, repeat:Infinity}}
                style={{
                  background:'rgba(244,67,54,0.05)',
                  border:'2px solid rgba(244,67,54,0.2)',
                  borderRadius:'12px',
                  padding:'2rem'
                }}
              >
                <h3 style={{fontSize:'1.2rem', fontWeight:700, marginBottom:'1.5rem'}}>Forensic Report</h3>
                <ul style={{listStyle:'none', padding:0, margin:0}}>
                  {[
                    'Executive summary (non-technical)',
                    'Detailed attack timeline',
                    'Root cause analysis',
                    'Attack path visualization',
                    'Forensic evidence & logs',
                    'Indicator of compromise (IOCs)',
                    'Recommendations & remediation',
                    'Lessons learned & improvements'
                  ].map((item, i) => (
                    <li key={i} style={{marginBottom:'0.8rem', display:'flex', gap:'0.6rem'}}>
                      <span style={{color:'#f44336', fontWeight:700}}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                animate={{borderColor:['rgba(244,67,54,0.2)', 'rgba(244,67,54,0.5)', 'rgba(244,67,54,0.2)']}}
                transition={{duration:2, repeat:Infinity, delay:0.3}}
                style={{
                  background:'rgba(244,67,54,0.05)',
                  border:'2px solid rgba(244,67,54,0.2)',
                  borderRadius:'12px',
                  padding:'2rem'
                }}
              >
                <h3 style={{fontSize:'1.2rem', fontWeight:700, marginBottom:'1.5rem'}}>Executive Briefing</h3>
                <ul style={{listStyle:'none', padding:0, margin:0}}>
                  {[
                    'What happened (plain language)',
                    'Data exposed & affected users',
                    'Regulatory notification requirements',
                    'Business impact assessment',
                    'Insurance claim documentation',
                    'Investor/board communications',
                    'Customer notification template',
                    'Media response guidance'
                  ].map((item, i) => (
                    <li key={i} style={{marginBottom:'0.8rem', display:'flex', gap:'0.6rem'}}>
                      <span style={{color:'#f44336', fontWeight:700}}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* REGULATORY COMPLIANCE */}
      <section className={styles.solutionSection} style={{background:'rgba(244,67,54,0.02)'}}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Regulatory Compliance & Notification</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              We handle the legal and compliance requirements so you can focus on recovery.
            </p>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1.5rem', maxWidth:'1200px', margin:'0 auto'}}>
            {[
              {std:'GDPR', requirements:['Breach notification within 72 hours', 'Data subject notification', 'Regulator reporting', 'Privacy impact assessment']},
              {std:'CCPA / CPRA', requirements:['Consumer notification', 'Credit monitoring offer', 'Regulatory notice', 'Timeline compliance']},
              {std:'HIPAA', requirements:['Breach risk assessment', 'Individual notification', 'Media notification', 'HHS reporting']},
              {std:'PCI-DSS', requirements:['Breach investigation', 'Forensic analysis', 'Notification requirements', 'Remediation plan']},
              {std:'SOC 2', requirements:['Incident documentation', 'Audit trail preservation', 'Remediation tracking', 'Corrective actions']},
              {std:'State Laws', requirements:['Notification requirements', 'Timeline compliance', 'Notice content rules', 'Media notification']}
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <motion.div
                  whileHover={{scale:1.02}}
                  style={{
                    background:'linear-gradient(135deg, rgba(244,67,54,0.08) 0%, rgba(192,57,43,0.04) 100%)',
                    border:'1px solid rgba(244,67,54,0.15)',
                    borderRadius:'12px',
                    padding:'1.5rem'
                  }}
                >
                  <h3 style={{fontSize:'1.1rem', fontWeight:700, marginBottom:'1rem', color:'#f44336'}}>{item.std}</h3>
                  <ul style={{listStyle:'none', padding:0, margin:0}}>
                    {item.requirements.map((req, j) => (
                      <li key={j} style={{marginBottom:'0.6rem', fontSize:'0.9rem'}}>
                        ✓ {req}
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
      <section className={styles.solutionSection} style={{background:'linear-gradient(135deg, rgba(244,67,54,0.04) 0%, rgba(192,57,43,0.02) 100%)'}}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.contentNarrow + ' ' + styles.centerText}>
              <h2 style={{fontSize:'1.6rem', fontWeight:700, marginBottom:'1rem'}}>When Incident Strikes</h2>
              <p style={{fontSize:'1rem', lineHeight:1.7, marginBottom:'1.5rem', color:'var(--color-text-muted-dark)'}}>
                We respond within the hour. We investigate thoroughly. We get you compliant and recovered.
              </p>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'final'}}))}>Get Emergency Response Plan</a>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
