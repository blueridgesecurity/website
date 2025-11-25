// pages/contact.js
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, AlertOctagon } from 'react-feather';
import ScrollReveal from '../components/ui/ScrollReveal';
import styles from '../styles/Contact.module.css';

// Recommended: Use react-leaflet for an interactive map
// For this build, we'll use a placeholder
const MapPlaceholder = () => (
  <div className={styles.mapPlaceholder}>
    {/* */}
    <p>Map Area</p>
  </div>
);

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Contact | Blue Ridge Security</title>
        <meta
          name="description"
          content="Get in touch with the Blue Ridge Security team for a consultation on your cybersecurity and IT needs."
        />
      </Head>

      {/* --- Contact Hero --- */}
      <section className={styles.contactHero}>
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Contact Us</span>
            <h1>Let's Secure Your Future</h1>
            <p className={styles.contactSubtitle}>
              Whether you have a question, need a quote, or are facing an
              active incident, we're here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Contact Grid --- */}
      <section className="container">
        <ScrollReveal>
          <div className={styles.contactGrid}>
            {/* --- Contact Form --- */}
            <div className={styles.contactForm}>
              <h3>Send Us a Message</h3>
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}> {/* TYPO FIX */}
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company / School District</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">How can we help?</label>
                  <textarea id="message" name="message" rows="6"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Request
                </button>
              </form>
            </div>

            {/* --- Contact Info --- */}
            <div className={styles.contactInfo}>
              <h3>Contact Details</h3>
              <p>
                Reach out to us directly or use the form. For 24/7 Incident
                Response, call our emergency hotline.
              </p> {/* TYPO FIX */}
              <ul className={styles.infoList}>
                <li>
                  <Phone size={20} />
                  <span>
                    <strong>Sales & Support:</strong> (800) 555-1234
                  </span>
                </li>
                <li>
                  <AlertOctagon size={20} /> {/* Use a different icon for IR */}
                  <span>
                    <strong>24/7 IR Hotline:</strong> (800) 555-HELP
                  </span>
                </li>
                <li>
                  <Mail size={20} />
                  <span>
                    <strong>Email:</strong> info@blueridgesecurity.com
                  </span>
                </li>
                <li>
                  <MapPin size={20} />
                  <span>
                    <strong>Headquarters:</strong> 123 Mountain View Rd,
                    Asheville, NC 28801
                  </span>
                </li>
              </ul>

              <div className={styles.mapContainer}>
                <MapPlaceholder />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </motion.div>
  );
}