// import Image from "next/image";
import styles from "./manifeste.module.css";

export default function Manifesto() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles["nav"]}></div>
        <div className={styles["logo"]}>collectif p4</div>
        <div className={styles["zone-a"]}>image</div>
        <div className={styles["zone-b"]}>titre section</div>
        <div className={styles["zone-c"]}>paragraphe</div>
        <div className={styles["zone-d"]}>paragraphe</div>
      </div>
    </main>
  );
}
