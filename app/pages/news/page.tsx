"use client";
import styles from "./news.module.css";
import config from "./config";
import pic from "@/public/assets/webp/laib-khaled.webp";

import DefaultLayout from "../../layouts/DefaultLayout";
import Image from "next/image";
import Container from "../../components/container/container";
import Title from "../../components/title/title";
import News from "../../components/news/news";


export default function news() {
  return (
    <DefaultLayout>
      <Container className={styles["page-container"]}>
        <section className={styles["text-section"]}>
          <Title tag="h3" className={styles["section-title"]}>
            Actualités
          </Title>
          <Container className={styles["news-container"]}>
            {config.map((item, index) => (
              <News key={index} item={item} />
            ))}
          </Container>
        </section>
        <section className={styles["img-section"]}>
          <Image
            className={styles["shift-down"]}
            src={pic}
            layout="fill"
            objectFit="cover"
            alt="group of people photo"
          />
        </section>
      </Container>
    </DefaultLayout>
  );
}
