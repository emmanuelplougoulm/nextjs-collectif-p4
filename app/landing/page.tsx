import Image from "next/image";
import styles from "./landing.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles["nav"]}></div>
        <div className={styles["logo"]}>collectif p4</div>
        <div className={styles["quote"]}>
          <div>
            Collectif tout-terrain racontant des histoires avec un filtre
          </div>
          <div> de poésie, d'humour, de rage et de folie.</div>
        </div>
        <div className={styles["big-quote"]}>
          Pour un théâtre en salle et ailleurs, pour tout le monde
        </div>
        <div className={styles["zone-e"]}>Image</div>
        <div className={styles["zone-f"]}>text</div>
        <div className={styles["zone-g"]}>Image</div>
        <div className={styles["zone-h"]}>Image</div>
      </div>
    </main>
  );
}
