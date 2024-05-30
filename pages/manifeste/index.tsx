import { Metadata } from "next";
import React, { Suspense } from "react";

import styles from "@/pages/manifeste/manifeste.module.css";

import DefaultLayout from "@/layouts/default-layout";
import Image from "next/image";
import { Title, Container, TriangleIcon } from "@/components/index";

import manifestePic from "@/public/images/manifeste/manifeste.webp";
import text from "@/locales/fr/all.json";

const { manifeste } = text;

export const metadata: Metadata = {
  title: manifeste.metadata.title,
  description: manifeste.metadata.description,
};

export default function Manifeste() {
  return (
    <DefaultLayout>
      <main className={styles["main"]}>
        <section className={styles["content-section"]}>
          <Container className={styles["title-container"]}>
            <Title tag="h3" className="section-title">
              {text.manifeste.title}
            </Title>
            <Image
              priority
              src={TriangleIcon}
              width={15}
              height={15}
              alt="triangle_icon"
            />
          </Container>
          <p className={styles["paragraph"]}>{text.manifeste.paragraph}</p>
          <Container className={styles["quote"]}>
            <blockquote>{text.manifeste.quote}</blockquote>
            <cite>{text.manifeste.quoteAuthor}</cite>
          </Container>
        </section>

        <section className={styles["img-section"]}>
          <Suspense fallback={<div>Loading...</div>}>
            <Image
              fill
              priority
              placeholder="blur"
              src={manifestePic}
              style={{ objectFit: "cover" }}
              alt="lightbeams_trees"
            />
          </Suspense>
        </section>
      </main>
    </DefaultLayout>
  );
}
