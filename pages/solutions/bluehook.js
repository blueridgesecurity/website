// pages/solutions/bluehook.js — BlueHook phishing simulation & staff awareness training
import Head from 'next/head';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Target, Zap, BarChart2, Users, Eye, TrendingUp, FileText, Anchor, Grid, Mail, Shield, Database, Settings, TrendingDown, Link2 } from 'react-feather';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';

// Blue Hook Logo Component
function BlueHookLogo({ size = 64 }) {
  return (
    <motion.div 
      animate={{ y: [0, -12, 0] }} 
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Anchor size={size} style={{ color: '#0099ff', strokeWidth: 1.5 }} />
    </motion.div>
  );
}

export default function BlueHook() {
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
        <title>BlueHook™ — Phishing Simulation & Staff Awareness Training</title>
        <meta name="description" content="BlueHook™: controlled phishing simulations, immediate micro-learning feedback, per-user risk scoring, and compliance-ready reporting to reduce human risk at scale." />
      </Head>

      {/* HERO */}
      <section id="hero" className={styles.solutionHero}>
        <div className="container">
          <ScrollReveal>
            <motion.div className={styles.contentNarrow + ' ' + styles.centerText} variants={containerVariants} initial="hidden" animate="show">
              <motion.div variants={itemVariants}>
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                  <BlueHookLogo size={72} />
                </motion.div>
              </motion.div>
              <motion.h1 className={styles.heroTitle} variants={itemVariants}>
                <span className={styles.heroTitleGradient}>BlueHook™ —</span>
                <span className={styles.heroTitlePlain}> Reduce Human Risk Through Phishing Awareness</span>
              </motion.h1>
              <motion.h2 className={styles.heroSubtitle} variants={itemVariants}>Phishing simulations and staff awareness training that measures and improves security culture in real time.</motion.h2>
              <motion.p className={styles.heroDescription} variants={itemVariants}>Controlled, data-driven campaigns. Immediate micro-learning feedback. Risk scoring and compliance evidence — all in one platform.</motion.p>
              <motion.div variants={itemVariants}>
                <Link href="/contact" legacyBehavior>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Talk to a BlueHook Specialist" className="btn btn-primary">Talk to a BlueHook Specialist</motion.a>
                </Link>
              </motion.div>
              <motion.p variants={itemVariants} style={{margin:'0.6rem 0 0', fontSize:'0.7rem', letterSpacing:'0.4px', color:'var(--color-text-muted-dark)'}}>Measurable reduction in click rates. Executive-ready reporting included.</motion.p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Makes BlueHook Different */}
      <section id="why-different" className="container" style={{padding:'3.5rem 0 3.5rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h3 className={styles.centerHeading} style={{margin:'0 0 2rem', color:'var(--color-primary-light)'}}>What Makes BlueHook Different</h3>
            <motion.div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem'}} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}}>
              {[
                'Controlled phishing campaigns reduce risk without malice',
                'Immediate feedback converts failures into learning moments',
                'Per-user risk scoring identifies high-exposure staff',
                'Compliance evidence automatically collected and exportable',
                'Proven 30-50% reduction in click rates within 90 days'
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} style={{display:'flex', gap:'0.75rem', alignItems:'flex-start', padding:'1.2rem', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(0,180,255,0.15)', borderRadius:'8px', textAlign:'left'}}>
                  <CheckCircle size={20} style={{color:'var(--color-accent)', flexShrink:0, marginTop:'0.1rem'}} />
                  <span style={{fontSize:'0.95rem', color:'var(--color-white)', lineHeight:'1.6'}}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <p style={{margin:'2rem 0 0', fontSize:'0.85rem', letterSpacing:'0.3px', color:'var(--color-text-muted-dark)', fontStyle:'italic'}}>Staff training that measures culture. Not HR theater, not compliance checkbox.</p>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* How BlueHook Changes the Game */}
      <section id="how-bluehook-works" className="container" style={{padding:'3rem 0 3.5rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h3 className={styles.centerHeading} style={{margin:'0 0 3rem', color:'var(--color-primary-light)'}}>How BlueHook Changes the Game</h3>
            
            {/* 3-Column Problem → Solution → Outcome */}
            <motion.div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'2rem', marginBottom:'3rem'}} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}}>
              
              {/* Column 1: THE PROBLEM */}
              <motion.div variants={itemVariants} style={{padding:'2rem', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', textAlign:'left'}}>
                <div style={{fontSize:'2.5rem', marginBottom:'1rem'}}>⚠️</div>
                <h4 style={{margin:'0 0 1rem', fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>The Human Risk Reality</h4>
                <ul style={{textAlign:'left', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', margin:0, paddingLeft:'1.2rem', listStyle:'none'}}>
                  <li>• 91% of breaches start with phishing</li>
                  <li>• 25% average staff click rate (industry baseline)</li>
                  <li>• No visibility into who is at risk</li>
                  <li>• Annual training doesn't reduce risk</li>
                  <li>• One click can cost millions</li>
                </ul>
              </motion.div>

              {/* Column 2: THE SOLUTION */}
              <motion.div variants={itemVariants} style={{padding:'2rem', background:'linear-gradient(135deg, rgba(0,180,255,0.1), rgba(0,140,200,0.05))', border:'1px solid rgba(0,180,255,0.3)', borderRadius:'12px', textAlign:'left'}}>
                <div style={{fontSize:'2.5rem', marginBottom:'1rem'}}>🎯</div>
                <h4 style={{margin:'0 0 1rem', fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>BlueHook's Approach</h4>
                <ul style={{textAlign:'left', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', margin:0, paddingLeft:'1.2rem', listStyle:'none'}}>
                  <li>• Controlled phishing campaigns</li>
                  <li>• Immediate, contextual micro-learning</li>
                  <li>• Real-time per-user risk scoring</li>
                  <li>• Repeatable, measurable improvement</li>
                  <li>• Compliance evidence on demand</li>
                </ul>
              </motion.div>

              {/* Column 3: THE OUTCOME */}
              <motion.div variants={itemVariants} style={{padding:'2rem', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', textAlign:'left'}}>
                <div style={{fontSize:'2.5rem', marginBottom:'1rem'}}>✓</div>
                <h4 style={{margin:'0 0 1rem', fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>What You Actually Get</h4>
                <ul style={{textAlign:'left', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', margin:0, paddingLeft:'1.2rem', listStyle:'none'}}>
                  <li>• 30-50% click rate reduction (90 days)</li>
                  <li>• Human defenses measurable and trackable</li>
                  <li>• Board-ready compliance reporting</li>
                  <li>• Fewer successful phishing attacks</li>
                  <li>• Staff confidence and engagement</li>
                </ul>
              </motion.div>

            </motion.div>

            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} viewport={{once:true}}>
              <Link href="/contact" legacyBehavior>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary">Start Your BlueHook Assessment</motion.a>
              </Link>
              <p style={{fontSize:'0.75rem', margin:'0.8rem 0 0', color:'var(--color-text-muted-dark)', letterSpacing:'0.3px'}}>90-day measurable improvement guarantee.</p>
            </motion.div>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* Core Capabilities Deep Dive */}
      <section id="core-capabilities" className="container" style={{padding:'3rem 0 3.5rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h3 className={styles.centerHeading} style={{margin:'0 0 2.5rem', color:'var(--color-primary-light)'}}>Core Capabilities of BlueHook™</h3>
            
            <motion.div style={{display:'grid', gridTemplateColumns:'1fr', gap:'2.5rem'}} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}}>
              
              {/* Capability 1: Real-World Phishing Simulations */}
              <motion.div variants={itemVariants} style={{textAlign:'left', padding:'2rem', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(0,180,255,0.15)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.8rem', alignItems:'flex-start', marginBottom:'1rem'}}>
                  <Target size={24} style={{color:'var(--color-accent)', flexShrink:0, marginTop:'-0.2rem'}} />
                  <h4 style={{margin:0, fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Real-World Phishing Simulations</h4>
                </div>
                <p style={{margin:'0 0 1rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>BlueHook™ sends safe but realistic phishing-style emails to employees to measure actual risk exposure:</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', listStyle:'none'}}>
                  <li>• Fully customizable phishing templates</li>
                  <li>• Targeted and organization-specific email campaigns</li>
                  <li>• Scheduled simulations over weeks or months</li>
                  <li>• Dynamic tests that adapt to user behavior</li>
                  <li>• Support for spear-phishing style simulations</li>
                </ul>
                <p style={{margin:'1rem 0 0', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', fontStyle:'italic'}}>Every simulation provides measurable insight into employee vulnerability and behavioral response.</p>
              </motion.div>

              {/* Capability 2: Automated Security Awareness Training */}
              <motion.div variants={itemVariants} style={{textAlign:'left', padding:'2rem', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(0,180,255,0.15)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.8rem', alignItems:'flex-start', marginBottom:'1rem'}}>
                  <Eye size={24} style={{color:'var(--color-accent)', flexShrink:0, marginTop:'-0.2rem'}} />
                  <h4 style={{margin:0, fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Automated Security Awareness Training</h4>
                </div>
                <p style={{margin:'0 0 1rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>When an employee interacts with a simulated threat, BlueHook™ can automatically:</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', listStyle:'none'}}>
                  <li>• Assign immediate "failure-awareness" micro-training</li>
                  <li>• Enroll them in structured security education modules</li>
                  <li>• Track and verify training completion</li>
                  <li>• Reinforce key topics like email safety, link inspection, and password handling</li>
                </ul>
                <p style={{margin:'1rem 0 0.5rem', fontSize:'0.85rem', color:'var(--color-accent)', fontWeight:'600'}}>Training materials delivered as:</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', listStyle:'none'}}>
                  <li>• Video and animation-based learning</li>
                  <li>• Interactive modules</li>
                  <li>• SCORM-compatible training programs</li>
                  <li>• Custom curated security courses designed by Blue Ridge Security</li>
                </ul>
              </motion.div>

              {/* Capability 3: Employee Risk-Scoring & Behavioral Analytics */}
              <motion.div variants={itemVariants} style={{textAlign:'left', padding:'2rem', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(0,180,255,0.15)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.8rem', alignItems:'flex-start', marginBottom:'1rem'}}>
                  <BarChart2 size={24} style={{color:'var(--color-accent)', flexShrink:0, marginTop:'-0.2rem'}} />
                  <h4 style={{margin:0, fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Employee Risk-Scoring & Behavioral Analytics</h4>
                </div>
                <p style={{margin:'0 0 1rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>BlueHook™ builds a risk profile over time for each employee and the organization as a whole:</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', listStyle:'none'}}>
                  <li>• Click-through tracking</li>
                  <li>• Credential-submission attempts</li>
                  <li>• Repeat-offender monitoring</li>
                  <li>• Learning progress history</li>
                  <li>• User-level and department-level risk metrics</li>
                </ul>
                <p style={{margin:'1rem 0 0', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', fontStyle:'italic'}}>This allows organizations to prioritize remediation for high-risk users and departments.</p>
              </motion.div>

              {/* Capability 4: Suspicious-Email Reporting */}
              <motion.div variants={itemVariants} style={{textAlign:'left', padding:'2rem', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(0,180,255,0.15)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.8rem', alignItems:'flex-start', marginBottom:'1rem'}}>
                  <Mail size={24} style={{color:'var(--color-accent)', flexShrink:0, marginTop:'-0.2rem'}} />
                  <h4 style={{margin:0, fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Suspicious-Email Reporting From Inside the Inbox</h4>
                </div>
                <p style={{margin:'0 0 1rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>Employees receive a mailbox button that enables them to:</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', listStyle:'none'}}>
                  <li>• Instantly report suspicious emails</li>
                  <li>• Send them to security reviewers</li>
                  <li>• Receive immediate feedback</li>
                </ul>
                <p style={{margin:'1rem 0 0', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', fontStyle:'italic'}}>This turns every employee into a proactive security participant — rather than a passive recipient.</p>
              </motion.div>

              {/* Capability 5: Security Inbox Review Console */}
              <motion.div variants={itemVariants} style={{textAlign:'left', padding:'2rem', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(0,180,255,0.15)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.8rem', alignItems:'flex-start', marginBottom:'1rem'}}>
                  <Shield size={24} style={{color:'var(--color-accent)', flexShrink:0, marginTop:'-0.2rem'}} />
                  <h4 style={{margin:0, fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Security Inbox Review Console</h4>
                </div>
                <p style={{margin:'0 0 1rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>Reported emails flow into a centralized analysis dashboard where your security team can:</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', listStyle:'none'}}>
                  <li>• Inspect suspicious messages</li>
                  <li>• Classify real vs simulated threats</li>
                  <li>• Identify patterns of attack</li>
                  <li>• Generate security insights</li>
                </ul>
                <p style={{margin:'1rem 0 0', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', fontStyle:'italic'}}>This makes BlueHook™ not just a testing tool — but a live threat-response augmentation system.</p>
              </motion.div>

              {/* Capability 6: Directory & Identity Integration */}
              <motion.div variants={itemVariants} style={{textAlign:'left', padding:'2rem', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(0,180,255,0.15)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.8rem', alignItems:'flex-start', marginBottom:'1rem'}}>
                  <Database size={24} style={{color:'var(--color-accent)', flexShrink:0, marginTop:'-0.2rem'}} />
                  <h4 style={{margin:0, fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Directory & Identity Integration</h4>
                </div>
                <p style={{margin:'0 0 1rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>BlueHook™ allows seamless user onboarding through:</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', listStyle:'none'}}>
                  <li>• Microsoft 365 sync</li>
                  <li>• Google Workspace sync</li>
                  <li>• HR directory import</li>
                  <li>• API-driven provisioning</li>
                </ul>
                <p style={{margin:'1rem 0 0', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', fontStyle:'italic'}}>Users can be grouped by department, role, seniority, or custom segmentation for targeted training and simulations.</p>
              </motion.div>

              {/* Capability 7: Executive Reporting */}
              <motion.div variants={itemVariants} style={{textAlign:'left', padding:'2rem', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(0,180,255,0.15)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.8rem', alignItems:'flex-start', marginBottom:'1rem'}}>
                  <TrendingUp size={24} style={{color:'var(--color-accent)', flexShrink:0, marginTop:'-0.2rem'}} />
                  <h4 style={{margin:0, fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Executive Reporting & Progress Tracking</h4>
                </div>
                <p style={{margin:'0 0 1rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>Administrators and leadership receive:</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', listStyle:'none'}}>
                  <li>• Monthly human-risk reports</li>
                  <li>• Phishing failure trends</li>
                  <li>• Improvement metrics over time</li>
                  <li>• Organizational scorecards</li>
                  <li>• Compliance & audit documentation</li>
                </ul>
                <p style={{margin:'1rem 0 0', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', fontStyle:'italic'}}>These reports make risk visible — and improvement measurable.</p>
              </motion.div>

              {/* Capability 8: Fully Managed Service */}
              <motion.div variants={itemVariants} style={{textAlign:'left', padding:'2rem', background:'linear-gradient(135deg, rgba(0,180,255,0.1), rgba(0,140,200,0.05))', border:'1px solid rgba(0,180,255,0.3)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.8rem', alignItems:'flex-start', marginBottom:'1rem'}}>
                  <Settings size={24} style={{color:'var(--color-accent)', flexShrink:0, marginTop:'-0.2rem'}} />
                  <h4 style={{margin:0, fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Fully Managed by Blue Ridge Security (or Co-Managed)</h4>
                </div>
                <p style={{margin:'0 0 1rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>You choose the model:</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', listStyle:'none'}}>
                  <li>• Blue Ridge Security runs BlueHook™ entirely as a white-glove managed service (recommended)</li>
                  <li>• Alternatively, organizations can operate it internally with our assistance and oversight</li>
                </ul>
                <p style={{margin:'1rem 0 0', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', fontStyle:'italic'}}>This flexibility supports small IT teams, enterprise SOC units, or hybrid models.</p>
              </motion.div>

            </motion.div>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* Compliance, Evidence & Deployment */}
      <section id="compliance-deploy" className="container" style={{padding:'3rem 0 3.5rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h3 className={styles.centerHeading} style={{margin:'0 0 0.65rem', color:'var(--color-primary-light)'}}>Compliance, Evidence & Deployment</h3>
            <p style={{margin:'0 0 2rem', fontSize:'1rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>BlueHook automates compliance evidence collection and supports flexible deployment — cloud, on-prem, or hybrid — so you get proof of security culture improvement without tool sprawl or surprise costs.</p>
            
            {/* Compliance Cards Grid */}
            <div style={{marginBottom:'2.5rem'}}>
              <h4 style={{margin:'0 0 1rem', fontSize:'0.95rem', fontWeight:'600', letterSpacing:'0.4px', color:'var(--color-accent)', textTransform:'uppercase'}}>Compliance Frameworks</h4>
              <motion.div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1.25rem'}} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} role="list" aria-label="Supported compliance frameworks">
                {[
                  {label:'SOC 2 Type II', desc:'Continuous monitoring & evidence packs', icon:'🔐'},
                  {label:'ISO 27001', desc:'Staff awareness control mapping', icon:'✓'},
                  {label:'HIPAA', desc:'Clinical staff training & audit trails', icon:'⚕️'},
                  {label:'NIST CSF', desc:'Human risk assessment & trending', icon:'🛡️'}
                ].map((c,i)=>(
                  <motion.div key={i} variants={itemVariants} whileHover={{y:-4, boxShadow:'0 12px 24px rgba(0,180,255,0.15)'}} style={{padding:'1.25rem', background:'linear-gradient(135deg, rgba(0,180,255,0.04), rgba(0,140,200,0.01))', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'8px', textAlign:'center', transition:'all 200ms ease', cursor:'default'}} role="listitem">
                    <div style={{fontSize:'1.8rem', marginBottom:'0.35rem'}}>{c.icon}</div>
                    <h5 style={{margin:'0 0 0.25rem', fontSize:'0.95rem', fontWeight:'700', color:'var(--color-primary-light)'}}>{c.label}</h5>
                    <p style={{margin:0, fontSize:'0.8rem', color:'var(--color-text-muted-dark)', lineHeight:'1.4'}}>{c.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Key Benefits 2-Column */}
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', marginBottom:'2rem'}}>
              {/* Left Column: Evidence & Auditing */}
              <div style={{textAlign:'left', padding:'1.5rem', background:'linear-gradient(135deg, rgba(0,180,255,0.05), rgba(0,140,200,0.02))', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.6rem', alignItems:'center', marginBottom:'0.8rem'}}>
                  <FileText size={24} style={{color:'var(--color-accent)'}} />
                  <h4 style={{margin:0, fontSize:'1.05rem', fontWeight:'700', color:'var(--color-white)'}}>Compliance Evidence</h4>
                </div>
                <p style={{margin:'0 0 0.85rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.5'}}>Exportable evidence packs with role-based access. Consistent compliance proof ready for auditors, board reviews, and assessments.</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', lineHeight:'1.7'}}>
                  <li>Real-time posture dashboards</li>
                  <li>Audit-ready report exports</li>
                  <li>Evidence chain of custody</li>
                  <li>Executive summaries</li>
                </ul>
              </div>

              {/* Right Column: Deployment & Integration */}
              <div style={{textAlign:'left', padding:'1.5rem', background:'linear-gradient(135deg, rgba(0,140,220,0.05), rgba(0,100,180,0.02))', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.6rem', alignItems:'center', marginBottom:'0.8rem'}}>
                  <Users size={24} style={{color:'var(--color-accent)'}} />
                  <h4 style={{margin:0, fontSize:'1.05rem', fontWeight:'700', color:'var(--color-white)'}}>Integration & Deployment</h4>
                </div>
                <p style={{margin:'0 0 0.85rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.5'}}>Simple integration with Microsoft 365, Google Workspace, and SSO. No endpoint agent required. Flat-fee pricing — no per-alert surprises.</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', lineHeight:'1.7'}}>
                  <li>Microsoft 365 & Google Workspace</li>
                  <li>SSO environments supported</li>
                  <li>No endpoint agent</li>
                  <li style={{padding:'0.5rem 0.8rem', background:'linear-gradient(135deg, rgba(0,180,255,0.15), rgba(0,140,200,0.08))', borderLeft:'3px solid var(--color-accent)', borderRadius:'4px', marginLeft:'-1.2rem', paddingLeft:'1rem', fontWeight:'600', color:'var(--color-accent)'}}>Predictable per-user pricing</li>
                </ul>
              </div>
            </div>

            {/* Deployment Badges with Logos */}
            <div style={{marginTop:'2rem'}}>
              <h4 style={{margin:'0 0 1.5rem', fontSize:'0.95rem', fontWeight:'600', letterSpacing:'0.4px', color:'var(--color-accent)', textTransform:'uppercase'}}>Email Integration</h4>
              <div style={{display:'flex', gap:'1.2rem', flexWrap:'wrap', justifyContent:'center'}}>
                {/* Microsoft 365 */}
                <div style={{padding:'1.2rem 1.6rem', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', display:'flex', alignItems:'center', gap:'0.9rem', transition:'all 200ms ease'}}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="12" height="12" fill="#0078D4" />
                    <rect x="18" y="2" width="12" height="12" fill="#107C10" />
                    <rect x="2" y="18" width="12" height="12" fill="#FFB900" />
                    <rect x="18" y="18" width="12" height="12" fill="#F7630C" />
                  </svg>
                  <div>
                    <div style={{fontWeight:'700', color:'var(--color-white)', fontSize:'0.95rem'}}>Microsoft 365</div>
                    <div style={{fontSize:'0.75rem', color:'var(--color-text-muted-dark)', marginTop:'0.2rem'}}>Full tenant integration</div>
                  </div>
                </div>

                {/* Google Workspace */}
                <div style={{padding:'1.2rem 1.6rem', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', display:'flex', alignItems:'center', gap:'0.9rem', transition:'all 200ms ease'}}>
                  <img src="/images/Google__G__logo.svg" alt="Google Workspace" style={{width:'32px', height:'32px'}} />
                  <div>
                    <div style={{fontWeight:'700', color:'var(--color-white)', fontSize:'0.95rem'}}>Google Workspace</div>
                    <div style={{fontSize:'0.75rem', color:'var(--color-text-muted-dark)', marginTop:'0.2rem'}}>Full tenant integration</div>
                  </div>
                </div>

                {/* Hybrid Environments */}
                <div style={{padding:'1.2rem 1.6rem', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', display:'flex', alignItems:'center', gap:'0.9rem', transition:'all 200ms ease'}}>
                  <Link2 size={32} style={{color:'var(--color-accent)', strokeWidth:1.5}} />
                  <div>
                    <div style={{fontWeight:'700', color:'var(--color-white)', fontSize:'0.95rem'}}>Hybrid Environments</div>
                    <div style={{fontSize:'0.75rem', color:'var(--color-text-muted-dark)', marginTop:'0.2rem'}}>Multi-tenant support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* Pricing Highlight - FEATURED SECTION */}
      <section style={{padding:'4rem 0', background:'linear-gradient(135deg, rgba(0,180,255,0.12), rgba(0,140,200,0.06))', border:'1px solid rgba(0,180,255,0.2)', borderRadius:'16px', margin:'4rem 0', boxShadow:'0 20px 60px rgba(0,180,255,0.1)'}}>
        <div className="container">
          <ScrollReveal>
            <motion.div style={{textAlign:'center', maxWidth:'720px', margin:'0 auto'}} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true, amount:0.5}}>
              <motion.div variants={itemVariants}>
                <h3 style={{margin:'0 0 1rem', fontSize:'2rem', fontWeight:'800', color:'var(--color-white)'}}>Predictable Per-User Pricing</h3>
              </motion.div>
              <motion.p variants={itemVariants} style={{margin:'0 0 2rem', fontSize:'1rem', color:'var(--color-text-muted-dark)', lineHeight:'1.7'}}>No surprise per-alert costs. No hidden fees. Simple, transparent, per-user annual or monthly billing that scales with your organization.</motion.p>
              <motion.div variants={itemVariants} style={{display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap'}}>
                <motion.div whileHover={{y:-4, boxShadow:'0 8px 24px rgba(0,180,255,0.15)'}} style={{padding:'1.4rem 2rem', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(0,180,255,0.2)', borderRadius:'8px', transition:'all 200ms ease'}}>
                  <div style={{fontSize:'0.75rem', color:'var(--color-accent)', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.6rem'}}>Flexible Billing</div>
                  <div style={{fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Annual or Monthly</div>
                </motion.div>
                <motion.div whileHover={{y:-4, boxShadow:'0 8px 24px rgba(0,180,255,0.15)'}} style={{padding:'1.4rem 2rem', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(0,180,255,0.2)', borderRadius:'8px', transition:'all 200ms ease'}}>
                  <div style={{fontSize:'0.75rem', color:'var(--color-accent)', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.6rem'}}>No Surprise Costs</div>
                  <div style={{fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>All-Inclusive Pricing</div>
                </motion.div>
                <motion.div whileHover={{y:-4, boxShadow:'0 8px 24px rgba(0,180,255,0.15)'}} style={{padding:'1.4rem 2rem', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(0,180,255,0.2)', borderRadius:'8px', transition:'all 200ms ease'}}>
                  <div style={{fontSize:'0.75rem', color:'var(--color-accent)', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.6rem'}}>Scales With You</div>
                  <div style={{fontSize:'1.1rem', fontWeight:'700', color:'var(--color-white)'}}>Grow Without Penalties</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Engagement Model */}
      <section id="engagement" className="container" style={{padding:'3rem 0 3.5rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h3 className={styles.centerHeading} style={{margin:'0 0 1.5rem', color:'var(--color-primary-light)'}}>How We Engage</h3>
            
            {/* 5-Step Engagement Model with Animation */}
            <motion.div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'1rem', textAlign:'center'}} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}}>
              {[
                {step:'1', title:'Kickoff', desc:'Scoping, account setup, admin enablement'},
                {step:'2', title:'Baseline Test', desc:'Initial phishing campaign to measure starting point'},
                {step:'3', title:'Campaign Execution', desc:'Monthly phishing tests with immediate staff feedback'},
                {step:'4', title:'Learning & Remediation', desc:'Micro-lessons on failure, recognition on reporting'},
                {step:'5', title:'Reporting & Review', desc:'Monthly metrics, executive summaries, next-month planning'}
              ].map((e,i)=>(
                <motion.div key={i} variants={itemVariants} whileHover={{y:-8, boxShadow:'0 12px 32px rgba(0,180,255,0.2)'}} style={{padding:'1.5rem', background:'linear-gradient(135deg, rgba(0,180,255,0.05), rgba(0,140,200,0.02))', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'8px', transition:'all 200ms ease'}}>
                  <motion.div animate={{scale:[1,1.15,1]}} transition={{duration:2, repeat:Infinity, delay:i*0.15}} style={{fontSize:'1.8rem', fontWeight:800, color:'var(--color-accent)', marginBottom:'0.4rem'}}>{e.step}</motion.div>
                  <h5 style={{margin:'0 0 0.4rem', fontSize:'0.9rem', fontWeight:'700', color:'var(--color-white)'}}>{e.title}</h5>
                  <p style={{margin:0, fontSize:'0.75rem', color:'var(--color-text-muted-dark)', lineHeight:'1.4'}}>{e.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* CTA SECTION */}
      <section className={styles.solutionSection} style={{background:'linear-gradient(135deg, rgba(0,180,255,0.04) 0%, rgba(0,140,220,0.02) 100%)'}}>
        <div className="container">
          <ScrollReveal>
            <motion.div className={styles.contentNarrow + ' ' + styles.centerText} variants={containerVariants} initial="hidden" whileInView="show" viewport={{once:true, amount:0.5}}>
              <motion.h2 variants={itemVariants} style={{fontSize:'1.6rem', fontWeight:700, marginBottom:'1rem', lineHeight:1.3}}>BlueHook™ — Measure, Train, Improve.</motion.h2>
              <motion.p variants={itemVariants} style={{fontSize:'1rem', lineHeight:1.7, marginBottom:'1.5rem', color:'var(--color-text-muted-dark)'}}>Transform human risk into human strength. Start with a baseline assessment and see measurable improvement in 90 days.</motion.p>
              <motion.div variants={itemVariants}>
                <Link href="/contact" legacyBehavior>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary">Schedule Your Assessment</motion.a>
                </Link>
              </motion.div>
              <motion.p variants={itemVariants} style={{margin:'0.6rem 0 0', fontSize:'0.7rem', letterSpacing:'0.4px', color:'var(--color-text-muted-dark)'}}>30-50% average click-rate reduction in 90 days. Executive reporting included.</motion.p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
