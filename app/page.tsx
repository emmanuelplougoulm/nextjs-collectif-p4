import Image from "next/image";
import Link from "next/link";

import styles from "./styles/home.module.css";
import friendsPic from "@/public/assets/webp/motoki.webp";
import carPic from "@/public/assets/webp/remi.webp";

import TriangleIcon from "@/public/assets/icons/triangle.svg";
import CircleIcon from "@/public/assets/icons/circle.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["grid"]}>
        <section className={styles["grid__friends-pic"]}>
          <Image
            src={friendsPic}
            layout="fill"
            objectFit="cover"
            alt="friends_photo"
          />
        </section>

        <aside className={styles["grid__cities-container"]}>
          <div>Paris</div>
          <div>St-Étienne</div>
          <div>Marseille</div>
        </aside>

        <div className={styles["arrow-icon-one"]}>
          <Image
            src={TriangleIcon}
            width={15}
            height={15}
            alt="triangle-icon"
          />
        </div>

        <section className={styles["grid__title-container"]}>
          <h1>collectif p4</h1>
          <h2>Collectif joyeusement foutraque</h2>
        </section>

        <div className={styles["circle-icon"]}>
          <Image
            src={CircleIcon}
            width={15}
            height={15}
            alt="group of people photo"
          />
        </div>

        <div className={styles["grid__car-pic"]}>
          <Image
            src={carPic}
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
          />
        </div>
        <div className={styles["grid__menu"]}>
          <Image
            src={TriangleIcon}
            width={15}
            height={15}
            alt="triangle_icon"
          />
          <Link className={styles["enter-button"]} href="/pages/landing">
            Entrer
          </Link>
        </div>
      </div>
    </main>
  );
}
