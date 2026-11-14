import PageHead from "@/components/shared/page-head/page-head";
import styles from "@/pages/contact/contact.module.css";
import text from "@/locales/fr/all.json";
import picture from "@/public/images/contact/contact.webp";

import Image from "next/image";
import DefaultLayout from "@/layouts/default-layout";
import { Title, Container } from "@/components/index";

const { contact } = text;

const Contact: React.FC = () => {
  return (
    <>
      <PageHead {...contact.metadata} />
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
                Visiter
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
              priority
              style={{ objectFit: "contain" }}
              src={picture}
              alt="members_pointing_at_contacts"
            />
          </Container>
        </main>
      </DefaultLayout>
    </>
  );
};

export default Contact;
