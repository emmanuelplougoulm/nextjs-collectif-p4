// import Image from "next/image";
import styles from "./membres.module.css";

export default function Membres() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles["nav"]}></div>
        <div className={styles["logo"]}>collectif p4</div>
        <div className={styles["zone-a"]}>image membre</div>
        <div className={styles["zone-b"]}>membres</div>
        <div className={styles["zone-c"]}>liste membres</div>
        <div className={styles["zone-d"]}>detail membres</div>
      </div>
    </main>
  );
}
