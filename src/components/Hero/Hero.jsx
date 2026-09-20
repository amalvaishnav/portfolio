import { identity, links, photos } from '../../data/content.js';
import { GitHubIcon, LinkedInIcon, ArrowIcon } from '../Icons/Icons.jsx';
import EmailReveal from '../EmailReveal/EmailReveal.jsx';
import styles from './Hero.module.scss';

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
            <a className={styles.cta} href="#contact">
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
              <li>
                <EmailReveal />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.art}>
          <div className={styles.shapes} aria-hidden="true">
            <span className={`${styles.shape} ${styles.sun}`} />
            <span className={`${styles.shape} ${styles.blob}`} />
            <span className={`${styles.shape} ${styles.pip}`} />
            <span className={`${styles.shape} ${styles.ring}`} />
          </div>
          <img
            className={styles.photo}
            src={photos.hero.src}
            alt={photos.hero.alt}
            width={photos.hero.width}
            height={photos.hero.height}
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
