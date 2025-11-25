// pages/solutions/guardian.js (enhanced for trust, pricing, lead-gen)
import Head from 'next/head';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Monitor, Zap, Cloud, FileText, Activity, Server, Cpu, BarChart2, Layers, Tool } from 'react-feather';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ui/ScrollReveal';
import styles from '../../styles/SolutionPage.module.css';
// Using plain <img> for gallery to avoid loader issues

export default function Guardian() {
  const [leadOpen, setLeadOpen] = useState(false);
  const leadNameRef = useRef(null);
  useEffect(()=>{
    if(leadOpen && leadNameRef.current){ leadNameRef.current.focus(); }
    const onKey=(e)=>{ if(e.key==='Escape'){ setLeadOpen(false); } };
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[leadOpen]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Head>
        <title>Guardian™ — Local SOC Defense. Enterprise Outcomes.</title>
        <meta name="description" content="Guardian™ managed SOC-as-a-Service (MDR / XDR / SIEM / NDR): 24/7 U.S.-based monitoring, automated containment playbooks, compliance evidence, executive reporting, affordable per-device subscription." />
      </Head>

      {/* HERO */}
      <section id="hero" className={styles.solutionHero}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <Shield size={64} className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGradient}>Guardian™ —</span>
              <span className={styles.heroTitlePlain}> Local SOC Defense. Enterprise Outcomes.</span>
            </h1>
            <h2 className={styles.heroSubtitle}>24/7 U.S.-based SOC, automated containment, and audit-ready reporting — delivered via an affordable per-device subscription.</h2>
            <p className={styles.heroDescription}>Affordable per-device subscription. No surprise incident, per‑alert, or data egress fees.</p>
            <Link href="/contact" legacyBehavior>
              <a aria-label="Talk to a Guardian Specialist" className="btn btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'hero'}}))}>Talk to a Guardian Specialist</a>
            </Link>
            <p style={{margin:'0.6rem 0 0', fontSize:'0.7rem', letterSpacing:'0.4px', color:'var(--color-text-muted-dark)'}}>Affordable per-device subscription — no per-alert or data egress fees.</p>
            <div style={{marginTop:'2rem'}}>
              <AutoGallery
                count={10}
                basePath="/images"
                smallWidth={900}
                smallHeight={520}
                overlayTexts={[
                  'Unified SIEM + XDR correlation',
                  'Real-time threat detection',
                  'Automated containment actions',
                  'Endpoint, network & cloud telemetry',
                  'Compliance status & evidence packs',
                  'Live vulnerability & asset inventory',
                  'Behavior-based analytics mapped to MITRE',
                  'Response profiles & execution console',
                  'File integrity & change monitoring',
                  'Centralized policy & agent management'
                ]}
              />
            </div>
            {/* highlight cards removed from hero to declutter visual focus */}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Makes Guardian Different */}
      <section id="why-different" className="container" style={{padding:'2.5rem 0 2.5rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
          <h3 className={styles.centerHeading} style={{margin:'0 0 0.75rem', color:'var(--color-primary-light)'}}>What Makes Guardian Different</h3>
          <ul className={styles.checklist} style={{margin:'0.25rem 0 1rem'}}>
            <li><CheckCircle size={16} /> Single platform replaces fragmented stacks</li>
            <li><CheckCircle size={16} /> Containment speed surpasses typical SMB tools</li>
            <li><CheckCircle size={16} /> Designed for K‑12 & municipal realities</li>
            <li><CheckCircle size={16} /> Lightweight agents preserve endpoint stability</li>
            <li><CheckCircle size={16} /> Incident‑proven (ransomware, intrusion, brute‑force)</li>
          </ul>
          {/* CTA removed per instruction (only 3 total allowed) */}
          <p style={{margin:0, fontSize:'0.7rem', letterSpacing:'0.4px', color:'var(--color-text-muted-dark)'}}>Affordable per-device subscription — no per-alert or data egress fees.</p>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* The Guardian Approach: Problem → Solution → Outcome */}
      <section id="how-guardian-works" className="container" style={{padding:'3rem 0 3.5rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h3 className={styles.centerHeading} style={{margin:'0 0 2.5rem', color:'var(--color-primary-light)'}}>How Guardian Changes the Game</h3>
            
            {/* 3-Column Problem → Solution → Outcome */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'2.5rem'}}>
              
              {/* Column 1: THE PROBLEM */}
              <div style={{textAlign:'center', paddingBottom:'1.5rem', borderBottom:'2px solid rgba(255,255,255,0.08)'}}>
                <div style={{fontSize:'2.2rem', marginBottom:'0.8rem', color:'var(--color-text-muted-dark)'}}>⚠️</div>
                <h4 style={{margin:'0 0 0.8rem', fontSize:'1.05rem', fontWeight:'700', color:'var(--color-white)'}}>The Typical Enterprise Reality</h4>
                <ul style={{textAlign:'left', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', margin:0, paddingLeft:'1.2rem'}}>
                  <li>Multiple fragmented security tools</li>
                  <li>Slow incident response (hours not minutes)</li>
                  <li>Offshore SOC, no local context</li>
                  <li>Compliance burden without proof</li>
                  <li>Surprise per-alert billing</li>
                </ul>
              </div>

              {/* Column 2: THE SOLUTION */}
              <div style={{textAlign:'center', paddingBottom:'1.5rem', borderBottom:'2px solid rgba(255,255,255,0.08)', background:'linear-gradient(135deg, rgba(0,180,255,0.06), rgba(0,140,200,0.03))', padding:'1.5rem', borderRadius:'12px', borderBottom:'none'}}>
                <div style={{fontSize:'2.2rem', marginBottom:'0.8rem', color:'var(--color-accent)'}}>🛡️</div>
                <h4 style={{margin:'0 0 0.8rem', fontSize:'1.05rem', fontWeight:'700', color:'var(--color-primary-light)'}}>Guardian's Unified Platform</h4>
                <ul style={{textAlign:'left', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', margin:0, paddingLeft:'1.2rem'}}>
                  <li>Single SIEM + XDR + NDR platform</li>
                  <li>24/7 U.S.-based local SOC team</li>
                  <li>Automated response in seconds</li>
                  <li>Continuous compliance monitoring</li>
                  <li>Predictable per-device pricing</li>
                </ul>
              </div>

              {/* Column 3: THE OUTCOME */}
              <div style={{textAlign:'center', paddingBottom:'1.5rem', borderBottom:'2px solid rgba(255,255,255,0.08)'}}>
                <div style={{fontSize:'2.2rem', marginBottom:'0.8rem', color:'var(--color-accent)'}}>✓</div>
                <h4 style={{margin:'0 0 0.8rem', fontSize:'1.05rem', fontWeight:'700', color:'var(--color-white)'}}>What You Actually Get</h4>
                <ul style={{textAlign:'left', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', lineHeight:'1.8', margin:0, paddingLeft:'1.2rem'}}>
                  <li>Threats contained, not debated</li>
                  <li>Audit-ready evidence in minutes</li>
                  <li>Board confidence, not surprises</li>
                  <li>Reduced dwell time & exposure</li>
                  <li>Budget you can predict</li>
                </ul>
              </div>

            </div>

            <div style={{marginTop:'3rem'}}>
              <Link href="/contact" legacyBehavior>
                <a className="btn btn-primary" aria-label="Request a Guardian deployment consultation" onClick={()=>window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'approach-cta'}}))}>Start Your Guardian Deployment</a>
              </Link>
              <p style={{fontSize:'0.65rem', margin:'0.6rem 0 0', color:'var(--color-text-muted-dark)'}}>Per-device subscription — no per-alert or data egress fees.</p>
            </div>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* Core Capabilities Deep Dive */}
      <section id="core-capabilities" className="container" style={{padding:'0 0 3rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h3 className={styles.centerHeading} style={{margin:'0 0 1.5rem', color:'var(--color-primary-light)'}}>Built on These Capabilities</h3>
            
            {/* 3-Column Tech Stack */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'2rem', textAlign:'left'}}>
              {[
                { icon:<Monitor size={20} />, title:'SIEM Correlation', desc:'All security events normalized and correlated across endpoints, network, and cloud into one unified view for instant root-cause analysis.' },
                { icon:<Layers size={20} />, title:'XDR Telemetry', desc:'Endpoint, identity, and user behavior context linked automatically — eliminating blind spots and false positives.' },
                { icon:<Activity size={20} />, title:'NDR Detection', desc:'Network-level visibility into lateral movement, C2 communication, and anomalous data flows in real-time.' },
                { icon:<Zap size={20} />, title:'Automated Response', desc:'Response playbooks execute in seconds: isolate hosts, block C2, terminate processes, rollback changes — all orchestrated automatically.' },
                { icon:<Cpu size={20} />, title:'Asset & Vulnerability Clarity', desc:'Live inventory of every device, user, and application with continuous vulnerability tracking and contextual risk scoring.' },
                { icon:<FileText size={20} />, title:'Compliance & Drift Intelligence', desc:'Continuous monitoring against FERPA, HIPAA, NIST, and CIS with automated drift detection and audit-ready evidence collection.' }
              ].map((c,i)=>(
                <div key={i} style={{display:'flex', gap:'0.8rem', flexDirection:'column'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'0.6rem'}}>
                    <div style={{color:'var(--color-accent)', display:'flex', flexShrink:0}}>{c.icon}</div>
                    <h4 style={{margin:0, fontSize:'0.95rem', fontWeight:'700', color:'var(--color-white)'}}>{c.title}</h4>
                  </div>
                  <p style={{margin:0, fontSize:'0.8rem', color:'var(--color-text-muted-dark)', lineHeight:'1.55'}}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* Compliance, Evidence & Deployments — major visual redesign with card grid layout */}
      <section id="compliance-deploy" className="container" style={{padding:'3rem 0 3.5rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h3 className={styles.centerHeading} style={{margin:'0 0 0.65rem', color:'var(--color-primary-light)'}}>Compliance, Evidence & Deployments</h3>
            <p style={{margin:'0 0 2rem', fontSize:'1rem', color:'var(--color-text-muted-dark)', lineHeight:'1.6'}}>Guardian provides continuous compliance posture, exportable evidence packs, and flexible deployment options — all managed with predictable per-device pricing. Reduce audit friction and accelerate incident response without tool sprawl.</p>
            
            {/* Compliance Cards Grid */}
            <div style={{marginBottom:'2.5rem'}}>
              <h4 style={{margin:'0 0 1rem', fontSize:'0.95rem', fontWeight:'600', letterSpacing:'0.4px', color:'var(--color-accent)', textTransform:'uppercase'}}>Compliance Frameworks</h4>
              <div className={styles.complianceCardsGrid} role="list" aria-label="Supported compliance frameworks">
                {[
                  {label:'FERPA', desc:'Student data protection & privacy', icon:'🎓'},
                  {label:'HIPAA', desc:'Clinical data security & continuity', icon:'⚕️'},
                  {label:'NIST', desc:'Control mapping & evidence packs', icon:'🔐'},
                  {label:'CIS', desc:'Baseline drift detection & alerts', icon:'✓'}
                ].map((c,i)=>(
                  <div key={i} className={styles.complianceFrameworkCard} role="listitem">
                    <div style={{fontSize:'1.8rem', marginBottom:'0.35rem'}}>{c.icon}</div>
                    <h5 style={{margin:'0 0 0.25rem', fontSize:'0.95rem', fontWeight:'700', color:'var(--color-primary-light)'}}>{c.label}</h5>
                    <p style={{margin:0, fontSize:'0.8rem', color:'var(--color-text-muted-dark)', lineHeight:'1.4'}}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits 2-Column */}
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', marginBottom:'2rem'}}>
              {/* Left Column: Evidence & Auditing */}
              <div style={{textAlign:'left', padding:'1.5rem', background:'linear-gradient(135deg, rgba(0,180,255,0.05), rgba(0,140,200,0.02))', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.6rem', alignItems:'center', marginBottom:'0.8rem'}}>
                  <FileText size={24} style={{color:'var(--color-accent)'}} />
                  <h4 style={{margin:0, fontSize:'1.05rem', fontWeight:'700', color:'var(--color-white)'}}>Evidence & Auditing</h4>
                </div>
                <p style={{margin:'0 0 0.85rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.5'}}>Exportable evidence packs with role-based access. Consistent compliance proof ready for auditors, board reviews, and regulatory assessments.</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', lineHeight:'1.7'}}>
                  <li>Real-time posture dashboards</li>
                  <li>Configuration drift alerts</li>
                  <li>Audit-ready report exports</li>
                  <li>Evidence chain of custody</li>
                </ul>
              </div>

              {/* Right Column: Deployment & Operations */}
              <div style={{textAlign:'left', padding:'1.5rem', background:'linear-gradient(135deg, rgba(0,140,220,0.05), rgba(0,100,180,0.02))', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'12px'}}>
                <div style={{display:'flex', gap:'0.6rem', alignItems:'center', marginBottom:'0.8rem'}}>
                  <Server size={24} style={{color:'var(--color-accent)'}} />
                  <h4 style={{margin:0, fontSize:'1.05rem', fontWeight:'700', color:'var(--color-white)'}}>Deployment & Operations</h4>
                </div>
                <p style={{margin:'0 0 0.85rem', fontSize:'0.9rem', color:'var(--color-text-muted-dark)', lineHeight:'1.5'}}>Deploy on-prem, in cloud, or hybrid without tool sprawl. Our SOC team handles tuning, playbook updates, and audit support.</p>
                <ul style={{margin:0, paddingLeft:'1.2rem', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', lineHeight:'1.7'}}>
                  <li>On‑Prem, Cloud, or Hybrid models</li>
                  <li>QuickStart onboarding program</li>
                  <li>Continuous SOC tuning & management</li>
                  <li>Dedicated account support</li>
                </ul>
              </div>
            </div>

            {/* Deployment Options Badges */}
            <div style={{marginTop:'2rem'}}>
              <h4 style={{margin:'0 0 1rem', fontSize:'0.95rem', fontWeight:'600', letterSpacing:'0.4px', color:'var(--color-accent)', textTransform:'uppercase'}}>Deployment Models</h4>
              <div style={{display:'flex', gap:'0.8rem', flexWrap:'wrap', justifyContent:'center'}}>
                {[
                  {icon:<Server size={18} />, label:'On‑Prem', desc:'Private data center or edge location'},
                  {icon:<Cloud size={18} />, label:'Cloud', desc:'AWS, Azure, GCP, or private cloud'},
                  {icon:<Activity size={18} />, label:'Hybrid', desc:'Combination of on-prem and cloud'}
                ].map((d,i)=>(
                  <div key={i} style={{padding:'0.85rem 1.1rem', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'8px', display:'flex', alignItems:'center', gap:'0.55rem', fontSize:'0.85rem', color:'var(--color-text-muted-dark)', cursor:'default', transition:'all 200ms ease', minWidth:'160px'}} title={d.desc}>
                    <span style={{color:'var(--color-accent)', display:'flex', alignItems:'center'}}>{d.icon}</span>
                    <span style={{fontWeight:'600', color:'var(--color-white)'}}>{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>


      {/* Automated Response Engine */}
      <section id="response-engine" className="container" style={{padding:'0 0 3rem'}}>
        <div className={styles.contentNarrow + ' ' + styles.twoColFeature}>
          <ScrollReveal>
            <div>
              <p style={{margin:'0 0 0.75rem', fontSize:'0.85rem', color:'var(--color-text-muted-dark)'}}>Included with every subscription: automated playbooks + analyst oversight.</p>
              <span className="eyebrow">Automated Response Engine</span>
              <h2 style={{margin:'0 0 1rem'}}>Automated Response Engine</h2>
              <p style={{margin:'0 0 0.85rem', color:'var(--color-text-muted-dark)'}}>Playbooks execute within seconds to shrink dwell time and analyst load.</p>
              <p style={{margin:'0 0 1rem', color:'var(--color-text-muted-dark)'}}>Isolation, C2 blocking, process termination, file quarantine and rollback are orchestrated with optional approval controls.</p>
              <ResponseModeToggle />
              <ul className={styles.checklist} style={{marginBottom:'1rem'}}>
                <li><CheckCircle size={16} /> Block malicious IPs</li>
                <li><CheckCircle size={16} /> Isolate compromised endpoints</li>
                <li><CheckCircle size={16} /> Quarantine/remove harmful files</li>
                <li><CheckCircle size={16} /> Run environment-specific scripts</li>
              </ul>
              <h4 style={{margin:'1.25rem 0 0.6rem'}}>Response Profiles</h4>
              <div className={styles.responseProfiles}>
                <div className={styles.profileCard}>Ransomware</div>
                <div className={styles.profileCard}>Brute-Force</div>
                <div className={styles.profileCard}>Malware</div>
                <div className={styles.profileCard}>USB Lockdown</div>
                <div className={styles.profileCard}>Network Intrusion</div>
              </div>
              <p className={styles.sectionNote}>Profiles: automatic, approval‑based or alert‑only depending on policy.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div>
              <Terminal playOnVisible />
            </div>
          </ScrollReveal>
        </div>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* Built For */}
      <section id="built-for" className="container" style={{padding:'0 0 3rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
          <h3 className={styles.centerHeading} style={{margin:'0 0 0.85rem', color:'var(--color-primary-light)'}}>Built For</h3>
          <div style={{display:'grid', gap:'1.25rem'}}>
            <div className={styles.infoPanel}>
              <h4 style={{margin:'0 0 0.4rem'}}>K-12 & Education</h4>
              <ul className={styles.plainList} style={{margin:'0.2rem 0 0'}}>
                <li>Limited IT staff coverage</li>
                <li>Student data & privacy protection</li>
                <li>Rapid incident containment before disruption</li>
                <li>Audit-ready reporting for boards</li>
              </ul>
            </div>
            <div className={styles.infoPanel}>
              <h4 style={{margin:'0 0 0.4rem'}}>Healthcare</h4>
              <ul className={styles.plainList} style={{margin:'0.2rem 0 0'}}>
                <li>HIPAA evidence & drift alerts</li>
                <li>Protection of clinical continuity</li>
                <li>Detection of ransomware behaviors early</li>
                <li>Reduced false noise for lean teams</li>
              </ul>
            </div>
            <div className={styles.infoPanel}>
              <h4 style={{margin:'0 0 0.4rem'}}>Municipal & Government</h4>
              <ul className={styles.plainList} style={{margin:'0.2rem 0 0'}}>
                <li>Critical service continuity</li>
                <li>Local threat containment speed</li>
                <li>Budget-friendly predictable pricing</li>
                <li>Evidence packs for oversight</li>
              </ul>
            </div>
            <div className={styles.infoPanel}>
              <h4 style={{margin:'0 0 0.4rem'}}>Businesses & SMB</h4>
              <ul className={styles.plainList} style={{margin:'0.2rem 0 0'}}>
                <li>Lean IT team augmentation</li>
                <li>Reduced dwell time & exposure</li>
                <li>Clear executive & auditor reporting</li>
                <li>Scales without tool sprawl</li>
              </ul>
            </div>
          </div>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* Trusted By (Trust Signals moved below Built For) */}
      <section id="trusted-by" className="container" style={{padding:'0 0 3rem'}}>
        <ScrollReveal>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
          <h3 className={styles.centerHeading} style={{margin:'0 0 0.9rem', color:'var(--color-primary-light)'}}>Trusted By</h3>
          <p style={{margin:'0 0 1rem', fontSize:'0.85rem', color:'var(--color-text-muted-dark)'}}>Proven locally. Protecting critical operations across education, healthcare, government, and industry.</p>
          <div className={styles.trustedGrid} role="list" aria-label="Trusted by organizations">
            {[{sector:'K‑12 Districts',desc:'200+ schools trust Guardian to protect student data and keep operations running'},{sector:'Regional Hospitals',desc:'HIPAA-ready detection & containment ensures clinical continuity'},{sector:'City & County Governments',desc:'Critical infrastructure operators depend on local SOC partnerships'},{sector:'Manufacturing & SMB',desc:'Lean IT teams augmented with 24/7 enterprise-grade security'}].map((item,i)=>(
              <div key={i} className={styles.trustedCard} role="listitem" tabIndex={0} aria-label={`Trusted by ${item.sector}`}>
                <div className={styles.trustedIcon} aria-hidden><Shield size={32} /></div>
                <div className={styles.trustedName}>{item.sector}</div>
                <div className={styles.trustedDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
          </div>
        </ScrollReveal>
        <div className={styles.dividerThin} aria-hidden />
      </section>

      {/* Ransomware example removed per request (keeps page focused and concise) */}

      {/* Final CTAs */}
      <ScrollReveal>
        <section id="value-proposition" className={styles.finalCta}>
          <div className="container">
            <div className={styles.contentNarrow + ' ' + styles.centerText}>
            <h2>Guardian™ — Precise Defense. Local Partnership.</h2>
            <p>Enterprise‑grade detection and containment delivered with the reliability of a local SOC partner.</p>
            {/* CTA removed here to keep only final bottom CTA */}
            <p style={{margin:'0.6rem 0 0', fontSize:'0.7rem', letterSpacing:'0.4px', color:'var(--color-text-muted-dark)'}}>Flat yearly subscription — no per-alert or data egress fees.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="cta" className="container" style={{padding:'2.25rem 0 3rem', textAlign:'center'}}>
          <div className={styles.contentNarrow + ' ' + styles.centerText}>
          <h3 className={styles.centerHeading} style={{margin:'0 0 0.75rem', color:'var(--color-primary-light)'}}>Ready for Mission‑Critical Security?</h3>
          <p style={{margin:'0 0 1.1rem', fontSize:'0.85rem', color:'var(--color-text-muted-dark)'}}>Deploy Guardian™ with Blue Ridge Security for decisive visibility and rapid containment from day one.</p>
          <Link href="/contact" legacyBehavior>
            <a className="btn btn-primary" aria-label="Initiate Guardian deployment quote conversation" onClick={() => window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'bottom-cta'}}))}>Request a Quote</a>
          </Link>
          <p style={{margin:'0.6rem 0 0', fontSize:'0.7rem', letterSpacing:'0.4px', color:'var(--color-text-muted-dark)'}}>Flat yearly subscription — no per-alert or data egress fees.</p>
          </div>
        </section>
      </ScrollReveal>
      {leadOpen && (
        <div role="dialog" aria-modal="true" aria-labelledby="guardian-datasheet-title" style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000}}>
          <div style={{background:'var(--color-bg-alt)', padding:'1.5rem 1.75rem', borderRadius:'12px', width:'100%', maxWidth:'420px', boxShadow:'0 8px 24px rgba(0,0,0,0.4)', position:'relative'}}>
            <h3 id="guardian-datasheet-title" style={{margin:'0 0 0.85rem', fontSize:'1.25rem'}}>Access Technical Specs</h3>
            <p style={{margin:'0 0 1rem', fontSize:'0.8rem', color:'var(--color-text-muted-dark)'}}>Provide basic info so we can follow up with implementation guidance. PDF opens in a new tab after submission.</p>
            <form onSubmit={(e)=>{e.preventDefault(); const fd=new FormData(e.currentTarget); window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'datasheet-lead', name:fd.get('name'), email:fd.get('email')}})); setLeadOpen(false); window.open('/assets/docs/guardian-datasheet.pdf','_blank','noopener'); }} onKeyDown={(e)=>{ if(e.key==='Tab'){ const container = e.currentTarget.parentElement; const focusable = Array.from(container.querySelectorAll('input,button,a[href]')); const index = focusable.indexOf(document.activeElement); if(e.shiftKey){ if(index===0){ e.preventDefault(); focusable[focusable.length-1].focus(); } } else { if(index===focusable.length-1){ e.preventDefault(); focusable[0].focus(); } } } }}>
              <label style={{display:'block', margin:'0 0 0.65rem'}}>
                <span style={{display:'block', fontSize:'0.65rem', letterSpacing:'0.5px', marginBottom:'0.35rem'}}>Name</span>
                <input ref={leadNameRef} required name="name" type="text" aria-label="Your name" style={{width:'100%', padding:'0.55rem 0.7rem', borderRadius:'6px', border:'1px solid rgba(255,255,255,0.15)', background:'rgba(255,255,255,0.04)', color:'inherit'}} />
              </label>
              <label style={{display:'block', margin:'0 0 0.85rem'}}>
                <span style={{display:'block', fontSize:'0.65rem', letterSpacing:'0.5px', marginBottom:'0.35rem'}}>Email</span>
                <input required name="email" type="email" aria-label="Your email" style={{width:'100%', padding:'0.55rem 0.7rem', borderRadius:'6px', border:'1px solid rgba(255,255,255,0.15)', background:'rgba(255,255,255,0.04)', color:'inherit'}} />
              </label>
              <div style={{display:'flex', gap:'0.6rem', flexWrap:'wrap'}}>
                <button type="submit" className="btn btn-primary" aria-label="Submit info and open datasheet in new tab">Get Datasheet</button>
                <button type="button" className="btn btn-outline" aria-label="Cancel datasheet form" onClick={()=>setLeadOpen(false)}>Cancel</button>
                <a href="/assets/docs/guardian-datasheet.pdf" target="_blank" rel="noopener" className="btn btn-secondary" aria-label="Skip form and open Guardian datasheet PDF in new tab" onClick={()=>window.dispatchEvent(new CustomEvent('analytics.cta',{detail:{location:'datasheet-skip'}}))}>Skip Form</a>
              </div>
            </form>
            <button type="button" aria-label="Close datasheet modal" onClick={()=>setLeadOpen(false)} style={{position:'absolute', top:'8px', right:'10px', background:'none', border:'none', color:'var(--color-text-muted-dark)', fontSize:'1.1rem', cursor:'pointer'}}>×</button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ===== Helper Components ===== */
function AutoGallery({ count = 10, basePath = '/images', smallWidth, smallHeight, largeWidth, largeHeight, overlayTexts, interval = 3500 }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = Array.from({ length: count }, (_, i) => ({
    src: `${basePath}/${i + 1}.png`,
    caption: overlayTexts && overlayTexts[i] ? overlayTexts[i] : `Slide ${i+1}`
  }));
  const next = () => setIdx(i => (i + 1) % count);
  const prev = () => setIdx(i => (i - 1 + count) % count);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      next();
      window.dispatchEvent(new CustomEvent('analytics.gallery',{detail:{slide: idx+1}}));
    }, interval);
    return () => clearInterval(t);
  }, [paused, interval, count, idx]);
  const goTo = (i) => {
    setIdx(i);
    window.dispatchEvent(new CustomEvent('analytics.gallery',{detail:{slide: i+1}}));
  };
  return (
    <div className={styles.galleryContainer} style={{ width: '100%' }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, i) => (
        <div key={s.src} className={`${styles.gallerySlide} ${i === idx ? styles.galleryActive : ''}`} style={{ position: 'absolute' }}>
          <img loading="lazy" src={s.src} alt={s.caption} width={largeWidth || smallWidth || 1200} height={largeHeight || smallHeight || 720} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" />
          <div className={styles.galleryOverlay}>{s.caption}</div>
        </div>
      ))}
      <div className={styles.galleryArrows}>
        <button type="button" className={styles.galleryArrow} aria-label="Previous slide" onClick={prev}>‹</button>
        <button type="button" className={styles.galleryArrow} aria-label="Next slide" onClick={next}>›</button>
      </div>
      <div className={styles.galleryNav} role="tablist" aria-label="Guardian capability slides">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            type="button"
            role="tab"
            aria-selected={i===idx}
            aria-label={`Go to slide ${i+1}`}
            className={`${styles.galleryDot} ${i===idx?styles.galleryDotActive:''}`}
            onClick={() => goTo(i)}
            onKeyDown={(e)=>{
              if(e.key==='ArrowRight'){ goTo((i+1)%count); }
              if(e.key==='ArrowLeft'){ goTo((i-1+count)%count); }
            }}
          />
        ))}
      </div>
      <div className={styles.galleryCounter}>{idx + 1} / {count}</div>
    </div>
  );
}

function ResponseModeToggle() {
  const modes = ['Automated','Alert-Only','Approval-Based'];
  const [active, setActive] = useState(modes[0]);
  return (
    <div>
      <div className={styles.responseModeToggle} role="radiogroup" aria-label="Response Mode">
        {modes.map(m => (
          <button key={m} type="button" onClick={() => setActive(m)} aria-pressed={active===m} className={`${styles.responseModeButton} ${active===m?styles.responseModeActive:''}`}>{m}</button>
        ))}
      </div>
      <p style={{margin:'0.35rem 0 0', fontSize:'0.75rem', letterSpacing:'0.5px', color:'var(--color-text-muted-dark)'}}>Current mode: <strong style={{color:'var(--color-accent)'}}>{active}</strong></p>
    </div>
  );
}

function Terminal({ lines, speed = 28, pause = 900, playOnVisible = false }) {
  // Animated terminal with reduced-motion fallback
  const defaultLines = [
    'Detecting unusual activity on HOST-123...',
    'Isolating device HOST-123 to stop spread.',
    'Stopping suspicious process: evil.exe',
    'Blocking outgoing connection to 198.51.100.45',
    "Quarantining file 'suspicious.dll' for review",
    'Creating incident report and notifying SOC team.'
  ];
  const payload = lines && lines.length ? lines : defaultLines;
  const prefix = 'C:\\>';
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [history, setHistory] = useState([]);
  const [current, setCurrent] = useState('');
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(!playOnVisible);
  const bodyRef = useRef(null);
  const rootRef = useRef(null);

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReduced) return;
    if (!started || done) return;
    const line = payload[idx] || '';
    let t;
    if (charIdx <= line.length) {
      t = setTimeout(() => {
        setCurrent(line.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, speed);
    } else {
      t = setTimeout(() => {
        setHistory(h => [...h, line]);
        setCharIdx(0);
        if (idx === payload.length - 1) {
          setTimeout(() => setDone(true), 250);
        } else {
          setIdx(i => i + 1);
        }
      }, pause);
    }
    return () => clearTimeout(t);
  }, [charIdx, idx, started, done, payload, speed, pause, prefersReduced]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, current, done]);

  useEffect(() => {
    if (!playOnVisible) return;
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [playOnVisible]);

  if (prefersReduced) {
    return (
      <div className={styles.terminalWrap} role="log" aria-label="Automated response actions" ref={rootRef}>
        <div className={styles.terminalHeader}><span /> <span /> <span /></div>
        <div className={styles.terminalBody}>
          <pre><code>{payload.map((l,i)=>(<div key={i}><span className={styles.termPrefix}>{prefix}</span> <span>{l}</span></div>))}
          <div><span className={styles.termPrefix}>{prefix}</span> <span className={styles.finished}>All actions completed. SOC notified.</span></div>
          </code></pre>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.terminalWrap} role="log" aria-live="polite" aria-label="Automated response actions" ref={rootRef}>
      <div className={styles.terminalHeader}><span /> <span /> <span /></div>
      <div className={styles.terminalBody} ref={bodyRef}>
        <pre><code>
          {history.map((l,i)=>(
            <div key={i}><span className={styles.termPrefix}>{prefix}</span> <span>{l}</span></div>
          ))}
          {!done && (
            <div><span className={styles.termPrefix}>{prefix}</span> <span>{current}<span className={styles.cursor}>▮</span></span></div>
          )}
          {done && (
            <div><span className={styles.termPrefix}>{prefix}</span> <span className={styles.finished}>All actions completed. SOC notified.</span></div>
          )}
        </code></pre>
      </div>
    </div>
  );
}
