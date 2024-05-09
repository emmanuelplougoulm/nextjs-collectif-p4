import Image from "next/image";
import Link from "next/link";

import styles from "./styles/home.module.css";
import friendsPic from "../public/assets/webp/motoki.webp";
import carPic from "../public/assets/webp/remi.webp";

import TriangleIcon from "@/app/components/icons/triangle.svg";
import CircleIcon from "@/app/components/icons/circle.svg";

// add a "collective" title component - extract it from page
// add a TITLE component that you will use for every titles

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["page-container"]}>
        <section>
          <Image
            src={friendsPic}
            layout="fill"
            objectFit="cover"
            alt="friends_photo"
          />
        </section>
        <section>
          <span className={styles["top-item-container"]}>
            <Image
              src={TriangleIcon}
              width={15}
              height={15}
              alt="triangle-icon"
            />
          </span>
          <div className={styles["title-box"]}>
            <h1>collectif p4</h1>
            <h2>collectif joyeusement foutraque</h2>
          </div>
          <span>
            <Image src={CircleIcon} width={15} height={15} alt="circle_icon" />
          </span>
        </section>

        <section>
          <aside className={styles["top-item-container"]}>
            <ul>
              <li>Paris</li>
              <li>St-Étienne</li>
              <li>Marseille</li>
            </ul>
          </aside>

          <div className={styles["image-container"]}>
            <Image
              src={carPic}
              layout="fill"
              objectFit="cover"
              alt="Picture of the author"
            />
          </div>

          <div>
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
        </section>
      </div>
    </main>
  );
}
