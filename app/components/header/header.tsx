import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <nav className={styles.nav}>
        <ol>
          <li>Manifeste</li>
          <li>Membres</li>
          <li>Actualités</li>
          <li>Spectacles</li>
          <li>Contact</li>
        </ol>
      </nav>
      <div className={styles.logo}>COLLECTIF P4</div>
    </header>
  );
}
