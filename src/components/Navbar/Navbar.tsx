"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { X, Menu } from "lucide-react";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const texts = {
    pt: {
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
    },
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>GuilhermeBrasilDev</div>
        <nav
          ref={navRef}
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
        >
          <Link href="/about" onClick={handleNavClick}>
            {texts[language].about}
          </Link>
          <Link href="/skills" onClick={handleNavClick}>
            {texts[language].skills}
          </Link>
          <Link href="/projects" onClick={handleNavClick}>
            {texts[language].projects}
          </Link>
          <Link href="/contact" onClick={handleNavClick}>
            {texts[language].contact}
          </Link>
          <div className={styles.actions}>
            <LanguageSwitch />
          </div>
        </nav>
        <button
          className={styles.menuButton}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <X size={28} color="#fff" />
          ) : (
            <Menu size={28} color="#fff" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
