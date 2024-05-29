"use client";

import {
  Container,
  ContentButtons,
  Iframe,
  List,
  ListItem,
  Media,
  PlayDescription,
  Title,
} from "@/components/index";
import type { MediaType, SpectacleType } from "@/types/index";

import DefaultLayout from "@/layouts/default-layout";
import ImageSlider from "@/components/image-slider/image-slider";
import config from "@/config/spectacles.config";
import styles from "@/pages/spectacles/spectacles.module.css";
import text from "@/locales/fr/all.json";
import { useState } from "react";

export default function SpectaclesClient() {
  const [current, setCurrent] = useState<SpectacleType>(config[0]);
  const [isFirstClicked, setFirstClic] = useState<boolean>(false);
  const [content, setContent] = useState<string>("photos");

  const handleOnClick = (item: SpectacleType) => {
    setFirstClic(true);
    setCurrent(item);
    setContent("demo");
  };

  const renderContent = (current: any) => {
    switch (content) {
      case "demo":
        return current.demoUrl && <Iframe demoUrl={current.demoUrl} />;
      case "photos":
        return <ImageSlider images={current.images} />;
      case "media":
        return (
          <Container className={styles["media-container"]}>
            {current?.media?.map((item: MediaType, index: number) => (
              <Media key={index} media={item} />
            ))}
          </Container>
        );
      default:
        return null;
    }
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
          {/* {renderContent(current)} */}
        </section>
      </main>
    </DefaultLayout>
  );
}
