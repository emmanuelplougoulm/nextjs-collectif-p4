import styles from "./landing.module.css";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <p className={styles["quote"]}>
        Collectif tout-terrain racontant des histoires avec un filtre de poésie,
        d'humour, de rage et de folie.
      </p>
      <div className={styles["big-quote"]}>
        Pour un théâtre en salle et ailleurs, pour tout le monde
      </div>
      <div className={styles["zone-e"]}>Image</div>
      <div className={styles["zone-f"]}>text</div>
      <div className={styles["zone-g"]}>Image</div>
      <div className={styles["zone-h"]}>Image</div>
    </DefaultLayout>
  );
}
