"use client";
import styles from './Contact.module.css';
import {
  Linkedin,
  Instagram
} from 'lucide-react';

export default function ContactSection() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>contact<span className={styles.dot}>.</span></h2>
        <p className={styles.subtitle}>Get in touch with me via social media or send me an email.</p>

        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/guilherme-brasil-47791216b/" target="_blank" rel="noopener noreferrer" className={styles.social}>
            <Linkedin className={styles.icon} />
            LinkedIn
          </a>
          <a href="https://www.instagram.com/guibrasill_/" target="_blank" rel="noopener noreferrer" className={styles.social}>
            <Instagram className={styles.icon} />
            Instagram
          </a>
        </div>

        <div className={styles.links}>
          <p>Or send me an email:</p>
          <a href="mailto:guilhermebbrasill@gmail.com">guilhermebbrasill@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
