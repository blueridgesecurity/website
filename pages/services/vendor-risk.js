// pages/services/vendor-risk.js - Vendor & Third-Party Risk Review
import Head from 'next/head';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, TrendingUp, Cloud, Lock, Users, FileText, Shield } from 'react-feather';
import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';

export default function VendorRiskService() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>Blue Ridge Vendor & Third-Party Risk Review</title>
        <meta name="description" content="Vendor security evaluation, API risk analysis, data flow mapping, contract review, exposure mapping, privacy impact assessment." />
      </Head>

      {/* HERO - Vendor Risk Management - PREMIUM ENHANCED */}
      <section id="hero" className={styles.solutionHero} style={{background:'linear-gradient(135deg, rgba(156,39,176,0.08) 0%, rgba(123,31,162,0.04) 100%)', position:'relative', overflow:'hidden'}}>
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
            background:'radial-gradient(circle, rgba(156,39,176,0.15) 0%, transparent 70%)',
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
            background:'radial-gradient(circle, rgba(123,31,162,0.1) 0%, transparent 70%)',
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
                  animate={{rotate:[0, -360]}}
                  transition={{duration:30, repeat:Infinity, ease:'linear'}}
                  style={{display:'flex', alignItems:'center', justifyContent:'center'}}
                >
                  <AlertTriangle size={100} style={{color:'#9c27b0'}} strokeWidth={1.5} />
                </motion.div>
              </motion.div>
              <h1 className={styles.heroTitle} style={{fontSize:'3.8rem', letterSpacing:'-1.5px', textShadow:'0 10px 30px rgba(156,39,176,0.2)'}}>
                <span style={{color:'#9c27b0'}}>Your Vendors Are Your Risk.</span>
                <span className={styles.heroTitlePlain}> Let Us Audit Them.</span>
              </h1>
              <h2 className={styles.heroSubtitle} style={{fontSize:'1.4rem', fontWeight:500}}>Comprehensive vendor security assessment and third-party risk management.</h2>
              <p className={styles.heroDescription} style={{fontSize:'1.05rem', lineHeight:1.8}}>Evaluate security posture, data flows, API risks, and contractual obligations before integration.</p>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary" style={{display:'inline-flex', alignItems:'center', gap:'0.7rem', padding:'1.2rem 3rem', fontSize:'1.08rem'}} onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'hero'}}))}>Start Vendor Assessment <Shield size={22} /></a>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VENDOR ASSESSMENT AREAS */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Comprehensive Vendor Risk Assessment</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              We evaluate every dimension of vendor risk — security, contractual, operational, and reputational.
            </p>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1.5rem', maxWidth:'1200px', margin:'0 auto'}}>
            {[
              {
                icon:Shield,
                title:'Security Evaluation',
                items:[
                  'SOC 2 Type II certification status',
                  'Penetration test history',
                  'Incident disclosure practices',
                  'Security training documentation',
                  'Vulnerability management process',
                  'Encryption standards & implementation'
                ]
              },
              {
                icon:Cloud,
                title:'Data Flow Analysis',
                items:[
                  'What data flows to vendor?',
                  'Storage location & jurisdiction',
                  'Encryption in transit & at rest',
                  'Sub-processor chains',
                  'Data retention policies',
                  'Deletion & sanitization procedures'
                ]
              },
              {
                icon:Lock,
                title:'API & Integration Risk',
                items:[
                  'API authentication strength',
                  'Rate limiting & DDoS protection',
                  'Data exposure risk',
                  'Webhook security',
                  'OAuth/OIDC implementation',
                  'API version deprecation plans'
                ]
              },
              {
                icon:FileText,
                title:'Contractual Review',
                items:[
                  'Service level agreements (SLAs)',
                  'Data processing agreements (DPA)',
                  'Liability & indemnification',
                  'Termination & data retrieval',
                  'Audit rights & access',
                  'Change notification procedures'
                ]
              },
              {
                icon:Users,
                title:'Access & Controls',
                items:[
                  'Employee background checks',
                  'Access control policies',
                  'Segregation of duties',
                  'Admin account logging',
                  'Offboarding procedures',
                  'Third-party vendor chains'
                ]
              },
              {
                icon:TrendingUp,
                title:'Operational Resilience',
                items:[
                  'Disaster recovery plan',
                  'Business continuity testing',
                  'Incident response procedure',
                  'Financial stability assessment',
                  'Insurance & cybersecurity coverage',
                  'Backup & restoration testing'
                ]
              }
            ].map((area, i) => (
              <ScrollReveal key={i}>
                <motion.div
                  whileHover={{y:-8}}
                  style={{
                    background:'linear-gradient(135deg, rgba(156,39,176,0.08) 0%, rgba(123,31,162,0.04) 100%)',
                    border:'1px solid rgba(156,39,176,0.15)',
                    borderRadius:'12px',
                    padding:'1.5rem'
                  }}
                >
                  <area.icon size={36} style={{color:'#9c27b0', marginBottom:'1rem'}} />
                  <h3 style={{fontSize:'1.1rem', fontWeight:700, marginBottom:'1rem'}}>{area.title}</h3>
                  <ul style={{listStyle:'none', padding:0, margin:0}}>
                    {area.items.map((item, j) => (
                      <li key={j} style={{marginBottom:'0.5rem', fontSize:'0.9rem'}}>
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

      {/* RISK SCORING - Quantify vendor risk */}
      <section className={styles.solutionSection} style={{background:'rgba(156,39,176,0.02)'}}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Vendor Risk Scoring & Comparison</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              Compare vendors on security posture, not just feature set or price.
            </p>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', maxWidth:'1100px', margin:'0 auto', alignItems:'center'}}>
            <ScrollReveal>
              <div>
                <h3 style={{fontSize:'1.2rem', fontWeight:700, marginBottom:'1.5rem'}}>Scoring Methodology</h3>
                {[
                  {category:'Security Maturity', weight:'30%', desc:'Certifications, testing, practices'},
                  {category:'Data Handling', weight:'25%', desc:'Encryption, storage, retention'},
                  {category:'Compliance Alignment', weight:'20%', desc:'Standards, audit rights, agreements'},
                  {category:'Operational Risk', weight:'15%', desc:'Financial stability, disaster recovery'},
                  {category:'Incident History', weight:'10%', desc:'Breaches, disclosures, response time'}
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{x:8}}
                    style={{
                      marginBottom:'1.2rem',
                      paddingLeft:'1.5rem',
                      borderLeft:'3px solid #9c27b0',
                      background:'rgba(156,39,176,0.05)',
                      padding:'1rem 1rem 1rem 1.5rem',
                      borderRadius:'6px'
                    }}
                  >
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.3rem'}}>
                      <div style={{fontWeight:700, color:'#9c27b0'}}>{item.category}</div>
                      <div style={{fontSize:'0.85rem', fontWeight:700, color:'#9c27b0'}}>{item.weight}</div>
                    </div>
                    <p style={{fontSize:'0.9rem', color:'var(--color-text-muted-dark)', margin:0}}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                animate={{scale:[1, 1.02, 1]}}
                transition={{duration:3, repeat:Infinity}}
                style={{
                  background:'linear-gradient(135deg, rgba(156,39,176,0.1) 0%, rgba(123,31,162,0.05) 100%)',
                  border:'2px solid rgba(156,39,176,0.2)',
                  borderRadius:'12px',
                  padding:'2rem',
                  textAlign:'center'
                }}
              >
                <div style={{marginBottom:'1.5rem'}}>
                  <div style={{fontSize:'0.85rem', fontWeight:700, letterSpacing:'1px', marginBottom:'1rem', color:'#9c27b0'}}>EXAMPLE VENDOR COMPARISON</div>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
                    {[
                      {name:'Vendor A', score:'92', color:'#4caf50'},
                      {name:'Vendor B', score:'76', color:'#ff9900'},
                      {name:'Vendor C', score:'61', color:'#ff5252'}
                    ].map((vendor, i) => (
                      <div key={i} style={{background:'rgba(0,0,0,0.2)', borderRadius:'6px', padding:'1rem'}}>
                        <div style={{fontSize:'0.9rem', fontWeight:700, marginBottom:'0.5rem'}}>{vendor.name}</div>
                        <div style={{fontSize:'2rem', fontWeight:700, color:vendor.color}}>{vendor.score}</div>
                        <div style={{fontSize:'0.8rem', color:'var(--color-text-muted-dark)', marginTop:'0.5rem'}}>
                          {vendor.score >= 85 ? 'Approved' : vendor.score >= 70 ? 'Review Risk' : 'High Risk'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* EXPOSURE MAPPING - Data connections */}
      <section className={styles.solutionSection}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Exposure & Data Flow Mapping</h2>
            <p style={{textAlign:'center', fontSize:'0.95rem', color:'var(--color-text-muted-dark)', marginBottom:'2rem', maxWidth:'800px', margin:'0 auto 2rem'}}>
              Visualize where your data goes and what risks come with it.
            </p>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', maxWidth:'1100px', margin:'0 auto'}}>
            <ScrollReveal>
              <div style={{background:'linear-gradient(135deg, rgba(156,39,176,0.08) 0%, rgba(123,31,162,0.04) 100%)', border:'1px solid rgba(156,39,176,0.15)', borderRadius:'12px', padding:'2rem'}}>
                <h3 style={{fontSize:'1.1rem', fontWeight:700, marginBottom:'1.5rem'}}>What We Map</h3>
                <ul style={{listStyle:'none', padding:0, margin:0}}>
                  {[
                    'Customer data (PII, account info)',
                    'Financial records & payment info',
                    'Healthcare records (if applicable)',
                    'Intellectual property & source code',
                    'Employee data & credentials',
                    'System logs & monitoring data',
                    'Configuration & API keys',
                    'Sub-vendor dependencies'
                  ].map((item, i) => (
                    <li key={i} style={{marginBottom:'0.8rem', display:'flex', gap:'0.6rem'}}>
                      <CheckCircle size={18} style={{color:'#9c27b0', flexShrink:0, marginTop:'2px'}} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{background:'linear-gradient(135deg, rgba(156,39,176,0.08) 0%, rgba(123,31,162,0.04) 100%)', border:'1px solid rgba(156,39,176,0.15)', borderRadius:'12px', padding:'2rem'}}>
                <h3 style={{fontSize:'1.1rem', fontWeight:700, marginBottom:'1.5rem'}}>Risk Questions We Answer</h3>
                <ul style={{listStyle:'none', padding:0, margin:0}}>
                  {[
                    'Can vendor store our data outside approved regions?',
                    'Who has admin access to our data?',
                    'What happens if vendor is hacked?',
                    'Can we retrieve our data easily?',
                    'What sub-vendors access our data?',
                    'Is encryption enforced in transit?',
                    'What retention policies apply?',
                    'Is audit trail available?'
                  ].map((item, i) => (
                    <li key={i} style={{marginBottom:'0.8rem', display:'flex', gap:'0.6rem'}}>
                      <AlertTriangle size={18} style={{color:'#9c27b0', flexShrink:0, marginTop:'2px'}} />
                      <span style={{fontSize:'0.95rem'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* REMEDIATION & ONGOING */}
      <section className={styles.solutionSection} style={{background:'rgba(156,39,176,0.02)'}}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Remediation & Ongoing Monitoring</h2>
          </ScrollReveal>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', maxWidth:'1000px', margin:'0 auto'}}>
            <ScrollReveal>
              <motion.div
                whileHover={{y:-4}}
                style={{
                  background:'linear-gradient(135deg, rgba(156,39,176,0.08) 0%, rgba(123,31,162,0.04) 100%)',
                  border:'1px solid rgba(156,39,176,0.15)',
                  borderRadius:'12px',
                  padding:'1.5rem'
                }}
              >
                <h3 style={{fontSize:'1.1rem', fontWeight:700, marginBottom:'1rem', color:'#9c27b0'}}>If High Risk Found</h3>
                <ol style={{listStyle:'none', padding:0, margin:0}}>
                  {[
                    'Document specific findings & evidence',
                    'Negotiate security improvements',
                    'Establish remediation timeline',
                    'Define fallback options (alternate vendors)',
                    'Monitor remediation progress',
                    'Re-assess after improvements'
                  ].map((item, i) => (
                    <li key={i} style={{marginBottom:'0.8rem', display:'flex', gap:'0.6rem'}}>
                      <span style={{fontWeight:700, color:'#9c27b0', width:'24px', flexShrink:0}}>{i+1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal>
              <motion.div
                whileHover={{y:-4}}
                style={{
                  background:'linear-gradient(135deg, rgba(156,39,176,0.08) 0%, rgba(123,31,162,0.04) 100%)',
                  border:'1px solid rgba(156,39,176,0.15)',
                  borderRadius:'12px',
                  padding:'1.5rem'
                }}
              >
                <h3 style={{fontSize:'1.1rem', fontWeight:700, marginBottom:'1rem', color:'#9c27b0'}}>Ongoing Monitoring</h3>
                <ul style={{listStyle:'none', padding:0, margin:0}}>
                  {[
                    'Quarterly risk rescoring',
                    'Incident monitoring',
                    'Contract compliance checks',
                    'New vendor assessment',
                    'Sub-vendor tracking',
                    'Industry threat updates'
                  ].map((item, i) => (
                    <li key={i} style={{marginBottom:'0.8rem', display:'flex', gap:'0.6rem'}}>
                      <span style={{color:'#9c27b0', fontWeight:700}}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.solutionSection} style={{background:'linear-gradient(135deg, rgba(156,39,176,0.04) 0%, rgba(123,31,162,0.02) 100%)'}}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.contentNarrow + ' ' + styles.centerText}>
              <h2 style={{fontSize:'1.6rem', fontWeight:700, marginBottom:'1rem'}}>Know Your Vendor Risk</h2>
              <p style={{fontSize:'1rem', lineHeight:1.7, marginBottom:'1.5rem', color:'var(--color-text-muted-dark)'}}>
                Before you integrate a new vendor, let us assess their security posture and data handling practices.
              </p>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'final'}}))}>Start Vendor Assessment</a>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
