"use client";
import styles from './Contact.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2>Contato</h2>
        <p>Quer conversar sobre oportunidades ou trocar ideias? Envie uma mensagem!</p>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Mensagem enviada! (simulação)');
          }}
        >
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea name="message" placeholder="Sua mensagem" rows={5} required />
          <button type="submit">Enviar</button>
        </form>

        <div className={styles.links}>
          <p>Ou entre em contato diretamente:</p>
          <a href="mailto:guilhermebbrasill@gmail.com">guilhermebbrasill@gmail.com</a>
          <a href="https://github.com/GuilhermeBatBrasil" target="_blank" rel="noopener noreferrer">
            GitHub: @GuilhermeBatBrasil
          </a>
        </div>
      </div>
    </section>
  );
}
