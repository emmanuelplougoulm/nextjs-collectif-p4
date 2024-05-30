import React from "react";
import { Container, Iframe, Media, ImageSlider } from "@/components/index";
import type { MediaType, SpectacleType } from "@/types/index";
import styles from "./content-display.module.css";

type ContentDisplayType = {
  content: string;
  current: SpectacleType;
  className?: string;
};

const ContentDisplay: React.FC<ContentDisplayType> = ({ content, current }) => {
  const displayIframe = content === "demo" ? true : false;
  const displaySlider = content === "photos" ? true : false;
  const displayMedia = content === "media" ? true : false;

  return (
    <div className={styles["container"]}>
      {displayIframe && current.demoUrl && <Iframe demoUrl={current.demoUrl} />}
      {displaySlider && <ImageSlider images={current.images} />}
      {displayMedia && (
        <Container>
          {current?.media?.map((item: MediaType, index: number) => (
            <Media key={index} media={item} />
          ))}
        </Container>
      )}
    </div>
  );
};

export default ContentDisplay;
