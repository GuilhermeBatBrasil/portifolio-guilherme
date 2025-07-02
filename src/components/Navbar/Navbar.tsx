"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>GuilhermeBrasilDev</div>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <Link href="/" onClick={handleNavClick}>Home</Link>
          <Link href="/about" onClick={handleNavClick}>Sobre</Link>
          <Link href="/skills" onClick={handleNavClick}>Skills</Link>
          <Link href="/projects" onClick={handleNavClick}>Projetos</Link>
          <Link href="/contact" onClick={handleNavClick}>Contato</Link>
        </nav>
        <button
          className={styles.menuButton}
          onClick={handleMenuToggle}
          aria-label="Abrir menu"
        >
          <span className={styles.menuIcon} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
