import Link from "next/link";
import styles from "./header.module.css";

import Title from "../title/title";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <nav className={styles.nav}>
        <ol>
          <Link href="/pages/manifeste">Manifeste</Link>
          <Link href="/pages//membres">Membres</Link>
          <Link href="/pages//actualites">Actualités</Link>
          <Link href="/pages//spectacles">Spectacles</Link>
          <Link href="/pages//contact">Contact</Link>
        </ol>
      </nav>

      <div className={styles.logo}>
        <Link href="/pages//landing">collectif p4</Link>
      </div>
    </header>
  );
}
