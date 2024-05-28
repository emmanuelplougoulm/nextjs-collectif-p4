import { Metadata } from "next";
import styles from "@/app/pages/contact/contact.module.css";

import Image from "next/image";
import DefaultLayout from "@/app/layouts/default-layout";
import { Title, Container } from "@/app/components/index";
// TODO
import Picture from "@/public/assets/webp/contact-2.webp";
import text from "@/locales/fr/all.json";

const { contact } = text;

export const metadata: Metadata = {
  title: contact.metadata.title,
  description: contact.metadata.description,
};

export default function Contact() {
  return (
    <DefaultLayout>
      <main className={styles["main"]}>
        <Container className={styles["title-container"]}>
          <Title tag="h3" className="section-title">
            {text.contact.title}
          </Title>
        </Container>
        <Container className={styles["contacts-container"]}>
          <div>
            <Title tag="h4" className={styles["contact-title"]}>
              {text.contact.instagram}
            </Title>
            <a
              href={text.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lien
            </a>
          </div>
          <div>
            <Title tag="h4" className={styles["contact-title"]}>
              {text.contact.phone}
            </Title>
            <div>{text.contact.arthur}</div>
            <div>{text.contact.bob}</div>
          </div>
          <div>
            <Title tag="h4" className={styles["contact-title"]}>
              {text.contact.email}
            </Title>
            <div>{text.contact.mail}</div>
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
      </main>
    </DefaultLayout>
  );
}
