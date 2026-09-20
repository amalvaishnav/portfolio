import { identity, education, photos } from '../../data/content.js';
import useReveal from '../../hooks/useReveal.js';
import styles from './About.module.scss';

export default function About() {
  const ref = useReveal();
  const [lead, ...rest] = identity.bio;
  const photo = photos.about;

  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.inner} ref={ref}>
        <figure className={styles.photo}>
          <span className={`${styles.shape} ${styles.sun}`} aria-hidden="true" />
          <span className={`${styles.shape} ${styles.aqua}`} aria-hidden="true" />
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>About</p>
          <h2 id="about-title" className={styles.title}>
            A little about <em>me</em>
          </h2>

          <div className={styles.bio}>
            <p className={styles.lead}>{lead}</p>
            {rest.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <h3 className={styles.subhead}>Education</h3>
          <ul className={styles.education}>
            {education.map((item) => (
              <li key={item.school} className={styles.card}>
                <span className={styles.years}>
                  {item.start} – {item.end}
                </span>
                <span className={styles.degree}>{item.degree}</span>
                <span className={styles.school}>{item.school}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
