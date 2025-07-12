"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleNavClick = () => setMenuOpen(false);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>GuilhermeBrasilDev</div>
        <nav ref={navRef} className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {/* <Link href="/" onClick={handleNavClick}>Menu</Link> */}
          <Link href="/about" onClick={handleNavClick}>Sobre</Link>
          <Link href="/skills" onClick={handleNavClick}>Skills</Link>
          <Link href="/projects" onClick={handleNavClick}>Projetos</Link>
          <Link href="/contact" onClick={handleNavClick}>Contato</Link>
        </nav>
        <button
          className={styles.menuButton}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
      </button>
      </div>
    </div>
  );
};

export default Navbar;
