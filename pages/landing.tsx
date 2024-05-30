import { Metadata } from "next";
import Image from "next/image";

import styles from "@/styles/landing.module.css";
import DefaultLayout from "@/layouts/default-layout";
import comediansPic from "@/public/images/landing.jpg";

import { Title, Container, TriangleIcon, CircleIcon } from "@/components/index";

import text from "@/locales/fr/all.json";

const { landing } = text;

export const metadata: Metadata = {
  title: landing.metadata.title,
  description: landing.metadata.description,
};

const Landing: React.FC = () => {
  return (
    <DefaultLayout>
      <main className={styles["main"]}>
        <section className={styles["top-section"]}>
          <Title tag="h2" className={styles["small-title"]}>
            Collectif tout-terrain racontant des histoires avec un filtre <br />
            de poésie, d&apos;humour, de rage et de folie.
          </Title>
          <Image
            priority
            src={TriangleIcon}
            width={15}
            height={15}
            alt="triangle-icon"
          />
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
              priority
              src={comediansPic}
              style={{ objectFit: "cover" }}
              className={styles["shift-down"]}
              alt="two_comedians_laughing"
            />
          </Container>
        </section>
        <section className={styles["bottom-section"]}>
          <div className={styles["copyright"]}>{text.landing.copywrite}</div>
          <Image
            priority
            src={CircleIcon}
            width={15}
            height={15}
            alt="triangle_icon"
          />
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Landing;
