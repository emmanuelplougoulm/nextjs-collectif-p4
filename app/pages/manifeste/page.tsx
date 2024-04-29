// import Image from "next/image";
import styles from "./manifeste.module.css";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Manifesto() {
  return (
    <DefaultLayout>
      <div className={styles["zone-a"]}>image</div>
      <div className={styles["zone-b"]}>titre section</div>
      <div className={styles["zone-c"]}>paragraphe</div>
      <div className={styles["zone-d"]}>paragraphe</div>
    </DefaultLayout>
  );
}
