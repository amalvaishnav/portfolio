import { useState } from 'react';
import { links } from '../../data/content.js';
import { MailIcon } from '../Icons/Icons.jsx';
import styles from './EmailReveal.module.scss';

// An email icon that shows the address as plain text when clicked or tapped.
// Deliberately not a mailto: link, so it never opens a mail app.
export default function EmailReveal({ buttonClassName, label }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={buttonClassName}
        aria-expanded={open}
        aria-label={open ? 'Hide email address' : 'Show email address'}
        onClick={() => setOpen((v) => !v)}
      >
        <MailIcon />
        {label}
      </button>
      {open && <span className={styles.address}>{links.email}</span>}
    </>
  );
}
