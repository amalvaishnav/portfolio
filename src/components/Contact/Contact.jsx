import { links, testimonial } from '../../data/content.js';
import { GitHubIcon, LinkedInIcon, ArrowIcon } from '../Icons/Icons.jsx';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <>
      {testimonial.approved && (
        <section className={styles.quoteSection} aria-label="A kind word from a colleague">
          <figure className={styles.quote}>
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption>
              {testimonial.name}, <span>{testimonial.role}</span>
            </figcaption>
          </figure>
        </section>
      )}

      <section id="contact" className={styles.contact} aria-labelledby="contact-title">
        <div className={styles.panel}>
          <span className={`${styles.shape} ${styles.one}`} aria-hidden="true" />
          <span className={`${styles.shape} ${styles.two}`} aria-hidden="true" />

          <p className={styles.eyebrow}>Contact</p>
          <h2 id="contact-title" className={styles.title}>
            Let's say <em>hello</em>
          </h2>
          <p className={styles.lead}>Email is the easiest way to reach me.</p>

          <a className={styles.email} href={`mailto:${links.email}`}>
            {links.email} <ArrowIcon />
          </a>

          <ul className={styles.social}>
            <li>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}
