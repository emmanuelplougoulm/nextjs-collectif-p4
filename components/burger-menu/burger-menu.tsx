"use client";
import React, { useState } from "react";
import styles from "./burger-menu.module.css";

import Link from "next/link";

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles.burger} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </div>
      <nav className={`${styles.menu} ${open ? styles.open : ""}`}>
        <Link href="/manifeste">Manifeste</Link>
        <Link href="/membres">Membres</Link>
        <Link href="/actualites">Actualités</Link>
        <Link href="/spectacles">Spectacles</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </>
  );
};

export default BurgerMenu;
