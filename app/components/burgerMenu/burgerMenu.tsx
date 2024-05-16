"use client";
import React, { useState } from "react";
import styles from "./burgerMenu.module.css";

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
        <Link href="/pages/manifeste">Manifeste</Link>
        <Link href="/pages//membres">Membres</Link>
        <Link href="/pages//actualites">Actualités</Link>
        <Link href="/pages//spectacles">Spectacles</Link>
        <Link href="/pages//contact">Contact</Link>
      </nav>
    </>
  );
};

export default BurgerMenu;
