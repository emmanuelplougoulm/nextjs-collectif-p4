import Image from "next/image";

import styles from "./landing.module.css";
import DefaultLayout from "../../layouts/DefaultLayout";
import pic from "@/public/assets/webp/landing.webp";

import Title from "../../components/title/title";
import Triangle from "../../components/icons/triangle.svg";
import Circle from "../../components/icons/circle.svg";

export default function Home() {
  return (
    <DefaultLayout>
      <div className={styles["page-container"]}>
        <section className={styles["content-top"]}>
          <Title tag="h2" className={styles["small-title"]}>
            <div>{`Collectif tout-terrain racontant des histoires avec un filtre`}</div>
            <div>{`de poésie, d'humour, de rage et de folie.`}</div>
          </Title>
          <Image src={Triangle} width={15} height={15} alt="triangle-icon" />
        </section>

        <section className={styles["content-middle"]}>
          <div className={styles["large-title-container"]}>
            <Title tag="h1" className={styles["large-title"]}>
              Pour un théâtre <br /> en salle et ailleurs,
              <br /> pour tout le monde
            </Title>
          </div>
          <div className={styles["img-container"]}>
            <Image
              className={styles["shift-down"]}
              src={pic}
              layout="fill"
              objectFit="cover"
              alt="group of people photo"
            />
          </div>
        </section>

        <section className={styles["content-bottom"]}>
          <div className={styles["copyright"]}>@2024 - Collectif P4</div>
          <Image src={Circle} width={15} height={15} alt="triangle-icon" />
        </section>
      </div>
    </DefaultLayout>
  );
}
