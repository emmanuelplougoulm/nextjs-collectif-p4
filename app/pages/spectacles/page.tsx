"use client";
import styles from "@/app/pages/spectacles/spectacles.module.css";
import config from "@/app/pages/spectacles/config";
import { useState } from "react";

import Media from "@/app/components/media/media";
import PlayDescription from "@/app/components/play-description/play-description";
import DefaultLayout from "@/app/layouts/default-layout";
import List from "@/app/components/shared/list/list";
import Container from "@/app/components/shared/container/container";
import Iframe from "@/app/components/shared/iframe/iframe";
import ImageSlider from "@/app/components/image-slider/image-slider";
import Button from "@/app/components/shared/button/button";

import text from "@/locales/fr/all.json";

export default function Spectacles() {
  const [current, setCurrent] = useState<any>(config[0]);
  const [isFirstClicked, setFirstClic] = useState<boolean>(false);
  const [content, setContent] = useState<string>("photos");

  const handleOnClick = (item: any) => {
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
            {current.media.map((item: any, index: any) => (
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
            <div className="section-title"> {text.spectacles.title}</div>
          </Container>

          <List className={styles["plays"]}>
            {config.map((item, index) => (
              <li
                key={index}
                className={current.name === item.name ? styles["selected"] : ""}
                onClick={() => handleOnClick(item)}
              >
                {item.name}
              </li>
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
