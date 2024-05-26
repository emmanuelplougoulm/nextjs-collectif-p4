import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import styles from "@/app/styles/home.module.css";
import friendsPic from "@/public/assets/webp/motoki.webp";
import carPic from "@/public/assets/webp/remi.webp";

import Title from "@/app/components/shared/title/title";
import List from "@/app/components/shared/list/list";
import Container from "@/app/components/shared/container/container";

import TriangleIcon from "@/app/components/icons/triangle.svg";
import CircleIcon from "@/app/components/icons/circle.svg";

type HomeProps = {
  text: {
    collectiveName: string;
    home: {
      collectiveQuote: string;
      collectiveCities: string[];
    };
    actions: {
      enter: string;
    };
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const filePath = path.join(process.cwd(), "locales", "fr", "all.json");
  const text = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    props: {
      text,
    },
  };
};

const Home: React.FC<HomeProps> = ({ text }) => {
  return (
    <>
      <Head>
        <title>Homepage du site du collectif p4</title>
        <meta
          name="description"
          content="COLLECTIF P4, collectif joyeusement foutraque, Paris, Marseille, Saint-Étienne"
        />
        {/* optimiser le chargement des fonts */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <Container className={styles["page-container"]}>
          <section>
            <Image
              priority
              fill
              src={friendsPic}
              style={{ objectFit: "cover" }}
              alt="friends_photo"
            />
          </section>
          <section>
            <span className={styles["top-item-container"]}>
              <Image
                className={styles["top-triangle"]}
                src={TriangleIcon}
                width={15}
                height={15}
                alt="triangle-icon"
              />
            </span>
            <div className={styles["title-box"]}>
              <Title tag="h1" className="section-title">
                {text.collectiveName}
              </Title>
              <Title tag="h2">{text.home.collectiveQuote}</Title>
            </div>
            <span>
              <Image
                src={CircleIcon}
                width={15}
                height={15}
                alt="circle_icon"
              />
            </span>
          </section>

          <section>
            <aside className={styles["top-item-container"]}>
              <List>
                {text.home.collectiveCities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </List>
            </aside>

            <div className={styles["image-container"]}>
              <Image
                fill
                priority
                src={carPic}
                style={{ objectFit: "cover" }}
                alt="picture_of_a_car"
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
                {text.actions.enter}
              </Link>
            </div>
          </section>
        </Container>
        <Container className={styles["mobile-container"]}>
          <Title tag="h1" className="section-title">
            {text.collectiveName}
          </Title>
          <Link className={styles["enter-button"]} href="/pages/landing">
            {text.actions.enter}
          </Link>
          <div className={styles["mobile-menu-container"]}></div>
        </Container>
      </main>
    </>
  );
};

export default Home;
