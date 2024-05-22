"use client";
import styles from "@/app/pages/spectacles/spectacles.module.css";
import config from "@/app/pages/spectacles/config";
import { useState } from "react";

import ImageList from "@/app/components/imageList/imageList";
import MediaQuote from "@/app/components/media-quote/media-quote";
import PlayDescription from "@/app/components/play-description/play-description";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import List from "@/app/components/shared/list/list";
import Container from "@/app/components/shared/container/container";
import Iframe from "@/app/components/shared/iframe/iframe";
import ImageSlider from "@/app/components/imageSlider/image-slider";

import Button from "@/app/components/shared/button/button";

import text from "@/locales/fr/all.json";

export default function Spectacles() {
  const [current, setCurrent] = useState<any>(config[0]);
  const [isFirstClicked, setFirstClic] = useState<boolean>(false);
  const [content, setContent] = useState<any>("images");

  const handleOnClick = (item: any) => {
    setFirstClic(true);
    setCurrent(item);
    setContent("demo");
  };

  const showDemoButton = current.demoUrl ? true : false;
  const displayDemo = content === "demo" && current.demoUrl ? true : false;

  // console.log("current", current);

  return (
    <DefaultLayout>
      <main className={styles["main"]}>
        <section className={styles["left-section"]}>
          <Container className={styles["section-title-container"]}>
            <div className="section-title"> {text.spectacles.title}</div>
          </Container>

          <List className={styles["plays"]}>
            {config.map((item) => (
              <li key={item.name} onClick={() => handleOnClick(item)}>
                {item.name}
              </li>
            ))}
          </List>

          {isFirstClicked && (
            <>
              <PlayDescription item={current} />

              <Container className={styles["buttons-container"]}>
                {showDemoButton && (
                <Button
                  className={styles["content-btn"]}
                  onClick={() => setContent("demo")}
                >
                  Demo
                </Button>
                )}
                <Button
                  className={styles["content-btn"]}
                  onClick={() => setContent("images")}
                >
                  Images
                </Button>
                <Button
                  className={styles["content-btn"]}
                  onClick={() => setContent("quotes")}
                >
                  Quotes
                </Button>
              </Container>
            </>
          )}
        </section>

        <section className={styles["right-section"]}>
          {displayDemo && <Iframe demoUrl={current.demoUrl} />}
          {/* {displayImages && <ImageSlider images={current.images} />} */}
                <MediaQuote key={index} quote={quote} />
              ))}
            </div>
          )} */}
        </section>
      </main>
    </DefaultLayout>
  );
}
