import styles from "./spectacles.module.css";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Spectacles() {
  return (
    <DefaultLayout>
      <div className={styles["zone-a"]}>spectacles</div>
      <div className={styles["zone-b"]}>liste spectacles</div>
      <div className={styles["zone-c"]}>spectacle content</div>
    </DefaultLayout>
  );
}
