import { identity, links } from '../../data/content.js';
import styles from './Hero.module.scss';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 8.4 22.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.8v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.8h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2h-4V9.75Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.sticker}>
            <span aria-hidden="true">📍</span> {identity.location}
          </p>

          <h1 id="hero-title" className={styles.title}>
            <span className={styles.first}>Amal</span>{' '}
            <span className={styles.last}>
              Vaishnav
              <svg className={styles.squiggle} viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 12c22-14 40 12 62 0s40-12 62 0 40 12 62 0 40-12 62 0 30 6 44 0" pathLength="1" />
              </svg>
            </span>
          </h1>

          <p className={styles.role}>
            {identity.role} at <strong>{identity.company}</strong>
          </p>
          <p className={styles.tagline}>{identity.tagline}</p>

          <div className={styles.actions}>
            <a className={styles.cta} href={`mailto:${links.email}`}>
              Say hello <ArrowIcon />
            </a>
            <ul className={styles.social}>
              <li>
                <a href={links.github} aria-label="Amal on GitHub" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a href={links.linkedin} aria-label="Amal on LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.art} aria-hidden="true">
          <span className={`${styles.shape} ${styles.sun}`} />
          <span className={`${styles.shape} ${styles.arch}`} />
          <span className={`${styles.shape} ${styles.blob}`} />
          <span className={`${styles.shape} ${styles.pip}`} />
          <span className={`${styles.shape} ${styles.ring}`} />
        </div>
      </div>
    </section>
  );
}
