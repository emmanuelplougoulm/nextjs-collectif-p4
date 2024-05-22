"use client";
import styles from "@/app/pages/contact/contact.module.css";

import Image from "next/image";
import DefaultLayout from "@/app/layouts/default-layout";
import Title from "@/app/components/shared/title/title";
import Container from "@/app/components/shared/container/container";

import Picture from "@/public/assets/webp/contact-2.webp";
import text from "@/locales/fr/all.json";

export default function Contact() {
  return (
    <DefaultLayout>
      <Container className={styles["page-container"]}>
        <Container className={styles["title-container"]}>
          <Title tag="h3" className="section-title">
            {text.contact.title}
          </Title>
        </Container>
        <Container className={styles["contacts-container"]}>
          <div>
            <Title tag="h4" className={styles["contact-title"]}>
              Instagram
            </Title>
            <a
              href="https://www.instagram.com/collectifp4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.instagram.com/collectifp4/
            </a>
          </div>
          <div>
            <Title tag="h4" className={styles["contact-title"]}>
              Téléphone
            </Title>
            <div>Arthur Viadieu: 06 99 90 04 74</div>
            <div>Bob Levasseur: 07 69 18 94 49</div>
          </div>
          <div>
            <Title tag="h4" className={styles["contact-title"]}>
              Email
            </Title>
            <div>associationp4@gmail.com</div>
          </div>
        </Container>
        <Container className={styles["img-content"]}>
          <Image
            fill
            style={{ objectFit: "contain" }}
            src={Picture}
            alt="sea_photo"
          />
        </Container>
      </Container>
    </DefaultLayout>
  );
}
