import Image from "next/image";
import Link from "next/link";

import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles["left-pic"]}>
          {/* <Image
            src="/assets/home__image_1.png"
            width={500}
            height={500}
            alt="Picture of the author"
          /> */}
        </div>
        <div className={styles["cities"]}>
          <div>Paris</div>
          <div>Sr-Étienne</div>
          <div>Marseille</div>
        </div>
        <div className={styles["collectif"]}>
          <div className={styles["title"]}>collectif p4</div>
          <div className={styles["quote"]}>Collectif joyeusement foutraque</div>
        </div>
        <div className={styles["right-pic"]}></div>
        <div className={styles["enter"]}>
          <div>
            <span className={styles["button"]}>icon</span>
            <Link className={styles[""]} href="/pages/landing">
              Entrer
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
