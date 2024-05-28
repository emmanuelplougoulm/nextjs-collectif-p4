"use client";

import { useState } from "react";
import type { MediaType, SpectacleType } from "@/app/types/index";

import text from "@/locales/fr/all.json";
import styles from "@/app/pages/spectacles/spectacles.module.css";
import config from "@/app/pages/spectacles/config";

import DefaultLayout from "@/app/layouts/default-layout";
import ImageSlider from "@/app/components/image-slider/image-slider";

import {
  Title,
  List,
  ListItem,
  Container,
  Iframe,
  Button,
  PlayDescription,
  Media,
} from "@/app/components/index";

export default function SpectaclesClient() {
  const [current, setCurrent] = useState<SpectacleType>(config[0]);
  const [isFirstClicked, setFirstClic] = useState<boolean>(false);
  const [content, setContent] = useState<string>("photos");

  const handleOnClick = (item: SpectacleType) => {
    setFirstClic(true);
    setCurrent(item);
    setContent("demo");
  };

  const renderContentButtons = () => (
    <Container className={styles["buttons-container"]}>
      {current.demoUrl && (
        <Button
          className={styles["content-btn"]}
          onClick={() => setContent("demo")}
        >
          Demo
        </Button>
      )}
      {current.images.length > 0 && (
        <Button
          className={styles["content-btn"]}
          onClick={() => setContent("photos")}
        >
          Images
        </Button>
      )}
      {current.media && (
        <Button
          className={styles["content-btn"]}
          onClick={() => setContent("media")}
        >
          Media
        </Button>
      )}
    </Container>
  );

  const renderContent = () => {
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
              {renderContentButtons()}
            </>
          )}
        </section>

        <section className={styles["right-section"]}>{renderContent()}</section>
      </main>
    </DefaultLayout>
  );
}
