import styles from "@/pages/actualites/news.module.css";
import config from "@/config/news.config";
import pic from "@/public/images/news/laib-khaled.webp";
import text from "@/locales/fr/all.json";

import Image from "next/image";
import DefaultLayout from "@/layouts/default-layout";
import { Title, Container, News } from "@/components/index";

const NewsClient: React.FC = () => {
  return (
    <DefaultLayout>
      <main className={styles["main"]}>
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
            alt="group_of_people_photo"
          />
        </section>
      </main>
    </DefaultLayout>
  );
};

export default NewsClient;
