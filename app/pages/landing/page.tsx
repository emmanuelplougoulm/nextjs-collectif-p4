import { Metadata } from "next";
import Image from "next/image";

import styles from "./landing.module.css";
import DefaultLayout from "@/app/layouts/default-layout";
import comediansPic from "@/public/images/landing.jpg";

import Container from "@/app/components/shared/container/container";
import Title from "@/app/components/shared/title/title";
import Triangle from "@/app/components/icons/triangle.svg";
import Circle from "@/app/components/icons/circle.svg";

import text from "@/locales/fr/all.json";

const { landing } = text;

export const metadata: Metadata = {
  title: landing.metadata.title,
  description: landing.metadata.description,
};

export default function Landing() {
  return (
    <DefaultLayout>
      <main className={styles["main"]}>
        <section className={styles["top-section"]}>
          <Title tag="h2" className={styles["small-title"]}>
            Collectif tout-terrain racontant des histoires avec un filtre <br />
            de poésie, d&apos;humour, de rage et de folie.
          </Title>
          <Image src={Triangle} width={15} height={15} alt="triangle-icon" />
        </section>
        <section className={styles["middle-section"]}>
          <Container className={styles["large-title-container"]}>
            <Title tag="h1" className={styles["large-title"]}>
              Pour un théâtre <br /> en salle et ailleurs,
              <br /> pour tout le monde
            </Title>
          </Container>
          <Container className={styles["img-container"]}>
            <Image
              fill
              src={comediansPic}
              style={{ objectFit: "cover" }}
              className={styles["shift-down"]}
              alt="two_comedians_laughing"
            />
          </Container>
        </section>
        <section className={styles["bottom-section"]}>
          <div className={styles["copyright"]}>{text.landing.copywrite}</div>
          <Image src={Circle} width={15} height={15} alt="triangle_icon" />
        </section>
      </main>
    </DefaultLayout>
  );
}
