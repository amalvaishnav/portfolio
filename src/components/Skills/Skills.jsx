import { skills } from '../../data/content.js';
import useReveal from '../../hooks/useReveal.js';
import styles from './Skills.module.scss';

const TONES = ['turquoise', 'aqua', 'teal'];

function Group({ group, items, tone }) {
  const ref = useReveal();
  return (
    <li className={styles.group} ref={ref}>
      <h3 className={styles.groupTitle}>
        <span className={`${styles.dot} ${styles[tone]}`} aria-hidden="true" />
        {group}
      </h3>
      <ul className={styles.chips}>
        {items.map((item) => (
          <li key={item} className={`${styles.chip} ${styles[tone]}`}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Skills</p>
        <h2 id="skills-title" className={styles.title}>
          What's in the <em>toolbox</em>
        </h2>

        <ul className={styles.grid}>
          {skills.map((s, i) => (
            <Group key={s.group} group={s.group} items={s.items} tone={TONES[i % TONES.length]} />
          ))}
        </ul>
      </div>
    </section>
  );
}
