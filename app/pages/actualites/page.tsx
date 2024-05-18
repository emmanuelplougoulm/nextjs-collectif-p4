"use client";
import styles from "@/app/pages/actualites/news.module.css";
import config from "@/app/pages/actualites/config";
import pic from "@/public/assets/webp/laib-khaled.webp";

import Image from "next/image";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import Container from "@/app/components/shared/container/container";
import Title from "@/app/components/shared/title/title";
import News from "@/app/components/news/news";

import text from "@/locales/fr/all.json";

export default function news() {
  return (
    <DefaultLayout>
      <Container className={styles["page-container"]}>
        <section className={styles["text-section"]}>
          <Title tag="h3" className="section-title">
            {text.spectacles.title}
          </Title>
          <Container className={styles["news-container"]}>
            {config.map((item, index) => (
              <News key={index} item={item} />
            ))}
          </Container>
        </section>
        <section className={styles["img-section"]}>
          <Image
            fill
            priority
            src={pic}
            style={{ objectFit: "cover" }}
            className={styles["shift-down"]}
            alt="group of people photo"
          />
        </section>
      </Container>
    </DefaultLayout>
  );
}
