"use client";
import styles from "@/app/pages/spectacles/spectacles.module.css";
import config from "@/app/pages/spectacles/config";
import { useState } from "react";

import ImageList from "@/app/components/imageList/imageList";
import ArticleQuote from "@/app/components/article-quote/article-quote";
import SpectacleDescription from "@/app/components/spectacle-description/spectacle-description";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import List from "@/app/components/shared/list/list";
import Container from "@/app/components/shared/container/container";
import Iframe from "@/app/components/shared/iframe/iframe";
import text from "@/locales/fr/all.json";

export default function Spectacles() {
  const [current, setCurrent] = useState<any>(config[0]);

  const [content, setContent] = useState<any>();

  const handleMouseEnter = (item: any) => {
    setCurrent(item);
  };

  const displayDemo = content === "demo" ? true : false;
  const displayImages = content === "photos" ? true : false;
  const displayQuotes = content === "presse" ? true : false;

  return (
    <DefaultLayout>
      <Container className={styles["page-container"]}>
        <Container className={styles["infos-container"]}>
          <Container className={styles["section-title-container"]}>
            <div className="section-title"> {text.spectacles.title}</div>
          </Container>
          <div className={styles["shows-list"]}>
            <List>
              {config.map((item) => (
                <li key={item.name} onClick={() => handleMouseEnter(item)}>
                  {item.name}
                </li>
              ))}
            </List>
          </div>
          <SpectacleDescription item={current} />
          <div className={styles["buttons-container"]}>
            <button onClick={() => setContent("demo")}>Demo</button>
            <button onClick={() => setContent("photos")}>Photos</button>
            <button onClick={() => setContent("presse")}>Presse</button>
          </div>
        </Container>

        <Container className={styles["content-container"]}>
          <div className={styles["big-title"]}>{current.name}</div>
          <div className={styles["demo"]}>
            {displayDemo && <Iframe demoUrl={current.demoUrl} />}
          </div>
          {displayImages && (
            <div className={styles["img-container"]}>
              <ImageList imagePaths={current.images} />
            </div>
          )}
          {displayQuotes && (
            <div className={styles["quotes-container"]}>
              {current.quotes.map((item: any, index: any) => (
                <ArticleQuote key={index} data={item} />
              ))}
            </div>
          )}
        </Container>
      </Container>
    </DefaultLayout>
  );
}
