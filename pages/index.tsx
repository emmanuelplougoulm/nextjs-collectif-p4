import React from "react";
import styles from "@/styles/home.module.css";
import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import friendsPic from "@/public/images/home/motoki.webp";
import carPic from "@/public/images/home/remi.webp";

import {
  Title,
  List,
  ListItem,
  Container,
  TriangleIcon,
  CircleIcon,
} from "@/components/index";

import text from "@/locales/fr/all.json";

const { home } = text;

export const metadata: Metadata = {
  title: home.metadata.title,
  description: home.metadata.description,
};

const Home: React.FC = () => {
  return (
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
              priority
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
              priority
              src={CircleIcon}
              width={15}
              height={15}
              alt="circle_icon"
            />
          </span>
        </section>

        <section>
          <aside className={styles["top-item-container"]}>
            <List tag="ul">
              {text.home.collectiveCities.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
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
            <Link className={styles["enter-button"]} href="/landing">
              {text.actions.enter}
            </Link>
          </div>
        </section>
      </Container>
      <Container className={styles["mobile-container"]}>
        <Title tag="h1" className="section-title">
          {text.collectiveName}
        </Title>
        <Link className={styles["enter-button"]} href="/landing">
          {text.actions.enter}
        </Link>
        <div className={styles["mobile-menu-container"]}></div>
      </Container>
    </main>
  );
};

export default Home;
