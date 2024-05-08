import Image from "next/image";

import styles from "./landing.module.css";
import DefaultLayout from "../../layouts/DefaultLayout";
import pic from "@/public/assets/webp/landing.webp";

import Title from "../../components/title/title";
import Container from "../../components/container/container";
import TriangleIcon from "../../components/icons/triangle.svg";

export default function Home() {
  return (
    <DefaultLayout>
      <div className={styles["page-container"]}>
        <div className={styles["content-top"]}>
          <Title tag="h2" className={styles["h2"]}>
            <div>{`Collectif tout-terrain racontant des histoires avec un filtre`}</div>
            <div>{`de poésie, d'humour, de rage et de folie.`}</div>
          </Title>
          <Image
            src={TriangleIcon}
            width={15}
            height={15}
            alt="triangle-icon"
          />
        </div>

        <div className={styles["middle"]}>
          <Title tag="h1" className="test">
            <div className={styles["grid___big-quote"]}>
              Pour un théâtre <br /> en salle et ailleurs,
              <br /> pour tout le monde
            </div>
          </Title>
          <div className={styles["img-container"]}>
            <Image
              className={styles["shift-down"]}
              src={pic}
              layout="fill"
              objectFit="cover"
              alt="group of people photo"
            />
          </div>
        </div>
        <div className={styles["bottom"]}>
          <div className={styles["zone-f"]}>@2024 - Collectif P4</div>
          <div className={styles["triangle-container"]}>
            <div className={styles["circle"]} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
