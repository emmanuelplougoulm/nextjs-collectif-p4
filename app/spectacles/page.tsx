// import Image from "next/image";
import styles from "./spectacles.module.css";

export default function Spectacles() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles["nav"]}></div>
        <div className={styles["logo"]}>collectif p4</div>
        <div className={styles["zone-a"]}>spectacles</div>
        <div className={styles["zone-b"]}>liste spectacles</div>
        <div className={styles["zone-c"]}>spectacle content</div>
      </div>
    </main>
  );
}
