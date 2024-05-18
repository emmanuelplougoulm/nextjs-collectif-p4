import Image from "next/image";

import styles from "./landing.module.css";
import DefaultLayout from "../../layouts/DefaultLayout";
import pic from "@/public/assets/webp/landing.webp";

import Container from "../../components/shared/container/container";
import Title from "../../components/shared/title/title";
import Triangle from "../../components/icons/triangle.svg";

export default function Landing() {
  return (
    <DefaultLayout>
      <Container className={styles["page-container"]}>
        <section className={styles["content-top"]}>
          <Title tag="h2" className={styles["small-title"]}>
            Collectif tout-terrain racontant des histoires avec un filtre <br />
            de poésie, d&apos;humour, de rage et de folie.
          </Title>
          <Image src={Triangle} width={15} height={15} alt="triangle-icon" />
        </section>
        <section className={styles["content-middle"]}>
          <Container className={styles["large-title-container"]}>
            <Title tag="h1" className={styles["large-title"]}>
              Pour un théâtre <br /> en salle et ailleurs,
              <br /> pour tout le monde
            </Title>
          </Container>
          <Container className={styles["img-container"]}>
            <Image
              fill
              src={pic}
              style={{ objectFit: "cover" }}
              className={styles["shift-down"]}
              alt="two_comedians_laughing"
            />
          </Container>
        </section>
        <section className={styles["content-bottom"]}>
          <div className={styles["copyright"]}>@2024 - Collectif P4</div>
          {/* <div className={styles["img-container"]}>
            <Image src={Circle} width={15} height={15} alt="triangle-icon" />
          </div> */}
        </section>
      </Container>
    </DefaultLayout>
  );
}
