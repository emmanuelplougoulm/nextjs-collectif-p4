import styles from "@/app/pages/manifeste/manifeste.module.css";

import DefaultLayout from "@/app/layouts/DefaultLayout";
import Image from "next/image";
import Title from "@/app/components/title/title";
import Container from "@/app/components/container/container";
import TriangleIcon from "@/app/components/icons/triangle.svg";

import manifestePic from "@/public/assets/webp/manifeste.webp";

import text from "@/locales/fr/all.json";

export default function Manifeste() {
  return (
    <DefaultLayout>
      <Container className={styles["page-container"]}>
        <section className={styles["text-content"]}>
          <Container className={styles["title-container"]}>
            <Title tag="h3" className="section-title">
              {text.manifeste.title}
            </Title>
            <Image
              src={TriangleIcon}
              width={15}
              height={15}
              alt="triangle-icon"
            />
          </Container>

          <div className={styles["paragraph"]}>{text.manifeste.paragraph}</div>

          <div className={styles["quote"]}>
            {text.manifeste.quote}
            <div>{text.manifeste.quoteAuthor}</div>
          </div>
        </section>
        <section className={styles["img-content"]}>
          <Image
            src={manifestePic}
            fill
            style={{ objectFit: "cover" }}
            alt="lightbeams_trees"
          />
        </section>
      </Container>
    </DefaultLayout>
  );
}
