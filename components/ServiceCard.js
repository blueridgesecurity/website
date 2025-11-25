import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertCircle } from 'react-feather';
import ScrollReveal from './ui/ScrollReveal.js';
import styles from '../styles/Services.module.css';

export default function ServiceCard({ service, delay }) {
  const IconComponent = service?.icon;
  const Icon = IconComponent || AlertCircle;

  if (!IconComponent) {
    // Non-fatal: log which service is missing an icon so we can fix data
    // (This will appear in the browser console.)
    if (typeof window !== 'undefined') {
      // client-side log
      console.error(`ServiceCard: missing icon for service id="${service?.id}" name="${service?.name}"`);
    } else {
      // server-side log
      // eslint-disable-next-line no-console
      console.error(`ServiceCard (SSR): missing icon for service id="${service?.id}" name="${service?.name}"`);
    }
  }

  return (
    <ScrollReveal delay={delay}>
      <Link href={service.link} legacyBehavior>
        <a className={styles.serviceLinkWrapper}>
          <motion.div
            className={styles.serviceItem}
            id={service.id}
            whileHover={{
              borderColor: 'var(--color-primary)',
              boxShadow: '0 10px 30px rgba(0, 170, 255, 0.06)'
            }}
          >
            <div className={styles.serviceItemIcon}>
              <Icon size={28} />
            </div>
            <div className={styles.serviceItemContent}>
              <h3>{service.name}</h3>
            </div>
          </motion.div>
        </a>
      </Link>
    </ScrollReveal>
  );
}
