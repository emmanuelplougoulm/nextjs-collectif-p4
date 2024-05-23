import styles from "@/app/pages/manifeste/manifeste.module.css";

import DefaultLayout from "@/app/layouts/default-layout";
import Image from "next/image";
import Title from "@/app/components/shared/title/title";
import Container from "@/app/components/shared/container/container";
import TriangleIcon from "@/app/components/icons/triangle.svg";

import manifestePic from "@/public/assets/webp/manifeste.webp";
import text from "@/locales/fr/all.json";

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
          <Image
            src={manifestePic}
            fill
            style={{ objectFit: "cover" }}
            alt="lightbeams_trees"
          />
        </section>
      </main>
    </DefaultLayout>
  );
}
