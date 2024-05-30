"use client";
import {
  Container,
  ContentButtons,
  ContentDisplay,
  List,
  ListItem,
  PlayDescription,
  Title,
} from "@/components/index";
import type { SpectacleType } from "@/types/index";

import DefaultLayout from "@/layouts/default-layout";
import config from "@/config/spectacles.config";
import styles from "@/pages/spectacles/spectacles.module.css";
import text from "@/locales/fr/all.json";
import { useState } from "react";

const SpectaclesClient: React.FC = () => {
  const [current, setCurrent] = useState<SpectacleType>(config[0]);
  const [isFirstClicked, setFirstClick] = useState<boolean>(false);
  const [content, setContent] = useState<string>("photos");

  const handleOnClick = (item: SpectacleType) => {
    setFirstClick(true);
    setCurrent(item);
    setContent("demo");
  };

  return (
    <DefaultLayout>
      <main className={styles["main"]}>
        <section className={styles["left-section"]}>
          <Container className={styles["section-title-container"]}>
            <Title tag="h2" className="section-title">
              {text.spectacles.title}
            </Title>
          </Container>

          <List tag="ul" className={styles["plays"]}>
            {config.map((item, index) => (
              <ListItem
                key={index}
                className={current.name === item.name ? styles["selected"] : ""}
                onClick={() => handleOnClick(item)}
              >
                {item.name}
              </ListItem>
            ))}
          </List>

          {isFirstClicked && (
            <>
              <PlayDescription item={current} />
              <ContentButtons onClick={setContent} current={current} />
            </>
          )}
        </section>

        <section className={styles["right-section"]}>
          <ContentDisplay content={content} current={current} />
        </section>
      </main>
    </DefaultLayout>
  );
};

export default SpectaclesClient;
