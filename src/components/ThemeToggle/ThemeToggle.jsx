import { useState } from 'react';
import styles from './ThemeToggle.module.scss';

function currentTheme() {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme);
  const isDark = theme === 'dark';

  function toggle() {
    const next = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Storage can be blocked; the theme still applies for this visit.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      data-dark={isDark}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <mask id="moon-mask">
          <rect width="24" height="24" fill="#fff" />
          <circle className={styles.bite} cx="24" cy="6" r="7" fill="#000" />
        </mask>
        <circle className={styles.body} cx="12" cy="12" r="5" mask="url(#moon-mask)" fill="currentColor" />
        <g className={styles.rays} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </g>
      </svg>
    </button>
  );
}
