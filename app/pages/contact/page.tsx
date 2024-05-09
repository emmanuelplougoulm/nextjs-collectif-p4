"use client";
import styles from "./contact.module.css";

import Image from "next/image";
import DefaultLayout from "../../layouts/DefaultLayout";
import Title from "../../components/title/title";
import Container from "../../components/container/container";

import Picture from "../../../public/assets/webp/contact-2.webp";

export default function Contact() {
  return (
    <DefaultLayout>
      <Container className={styles["page-container"]}>
        <Title tag="h3" className={styles["title"]}>
          contact
        </Title>
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
            <span>Arthur Viadieu: 06 99 90 04 74</span>
            <span>Bob Levasseur: 07 69 18 94 49</span>
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
            src={Picture}
            layout="fill"
            objectFit="cover"
            alt="friends_photo"
          />
        </Container>
      </Container>
    </DefaultLayout>
  );
}
