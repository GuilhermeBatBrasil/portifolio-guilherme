"use client";
import styles from "./Contact.module.css";
import { Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      title: "Contato",
      subtitle: "Entre em contato comigo pelas redes sociais ou envie-me um e-mail.",
      emailPrompt: "Ou me envie um e-mail:",
    },
    en: {
      title: "Contact",
      subtitle: "Get in touch with me through social media or send me an email.",
      emailPrompt: "Or send me an email:",
    },
  };

  const t = texts[language];

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t.title}
          <span className={styles.dot}>.</span>
        </h2>
        <p className={styles.subtitle}>{t.subtitle}</p>

        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/guilherme-brasil-47791216b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <Linkedin className={styles.icon} />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/guibrasill_/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <Instagram className={styles.icon} />
            Instagram
          </a>
        </div>

        <div className={styles.links}>
          <p>{t.emailPrompt}</p>
          <a href="mailto:guilhermebbrasill@gmail.com">
            guilhermebbrasill@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
