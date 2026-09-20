import { identity } from '../../data/content.js';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} {identity.name} · {identity.location}
      </p>
    </footer>
  );
}
