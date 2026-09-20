import { useEffect, useRef, useState } from 'react';
import { offTheClock, funFacts } from '../../data/content.js';
import useReveal from '../../hooks/useReveal.js';
import styles from './OffTheClock.module.scss';

// Which of the nine pip positions are filled for each die face
const PIPS = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

const randomInt = (n) => Math.floor(Math.random() * n);

function Die({ face, rolling }) {
  return (
    <span className={`${styles.die} ${rolling ? styles.rolling : ''}`} aria-hidden="true">
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} className={PIPS[face].includes(i) ? styles.pip : styles.noPip} />
      ))}
    </span>
  );
}

export default function OffTheClock() {
  const shelfRef = useReveal();
  const [face, setFace] = useState(5);
  const [fact, setFact] = useState(null);
  const [rolling, setRolling] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  function roll() {
    if (rolling) return;
    setRolling(true);
    timer.current = setTimeout(() => {
      setFace(randomInt(6) + 1);
      // Never repeat the fact that is already showing
      setFact((prev) => {
        let next = randomInt(funFacts.length);
        while (funFacts[next] === prev && funFacts.length > 1) next = randomInt(funFacts.length);
        return funFacts[next];
      });
      setRolling(false);
    }, 650);
  }

  return (
    <section id="off-the-clock" className={styles.section} aria-labelledby="off-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Off the clock</p>
        <h2 id="off-title" className={styles.title}>
          The <em>game shelf</em>
        </h2>

        <ul className={styles.shelf} ref={shelfRef}>
          {offTheClock.items.map((item) => (
            <li key={item.id} className={`${styles.card} ${styles[item.id.replace('-', '')]}`}>
              <span className={styles.emoji} aria-hidden="true">
                {item.emoji}
              </span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className={styles.roller}>
          <button type="button" className={styles.rollButton} onClick={roll} disabled={rolling}>
            <Die face={face} rolling={rolling} />
            <span>{rolling ? 'Rolling…' : 'Roll the dice'}</span>
          </button>
          <p className={styles.fact} aria-live="polite">
            {fact ?? 'Roll for a random fun fact about me.'}
          </p>
        </div>
      </div>
    </section>
  );
}
