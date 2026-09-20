import { experience } from '../../data/content.js';
import useReveal from '../../hooks/useReveal.js';
import styles from './Experience.module.scss';

const TONES = ['turquoise', 'aqua', 'teal'];

function Stop({ item, index, isLast }) {
  const ref = useReveal();
  const isNow = item.roles[0].end === 'Present';
  const tone = isNow ? 'accent' : TONES[index % TONES.length];
  const meta = [item.type, item.location].filter(Boolean).join(' · ');

  return (
    <li className={styles.stop} ref={ref}>
      <div className={styles.rail}>
        {!isLast && (
          <svg className={styles.trail} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M50 0 C 100 30, 0 70, 50 100" vectorEffect="non-scaling-stroke" />
          </svg>
        )}
        <span className={`${styles.token} ${styles[tone]}`} aria-hidden="true">
          {item.company.charAt(0)}
        </span>
      </div>

      <article className={styles.card}>
        {isNow && <p className={styles.now}>Current role</p>}
        <h3 className={styles.company}>{item.company}</h3>
        {meta && <p className={styles.meta}>{meta}</p>}

        <ul className={styles.roles}>
          {item.roles.map((role) => (
            <li key={role.title + role.start}>
              <span className={styles.roleTitle}>{role.title}</span>
              <span className={styles.dates}>
                {role.start} – {role.end}
              </span>
            </li>
          ))}
        </ul>

        {item.bullets.length > 0 && (
          <ul className={styles.bullets}>
            {item.bullets.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        )}
      </article>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Experience</p>
          <h2 id="experience-title" className={styles.title}>
            The path <em>so far</em>
          </h2>
        </header>

        <ol className={styles.path}>
          {experience.map((item, i) => (
            <Stop key={item.id} item={item} index={i} isLast={i === experience.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
