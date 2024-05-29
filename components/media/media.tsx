import React from "react";
import Link from "next/link";
import styles from "./media.module.css";
import Container from "@/components/shared/container/container";

import text from "@/locales/fr/all.json";
import type { MediaType } from "@/types/index";

type MediaPropsType = {
  media: MediaType;
  className?: string;
};

const Media: React.FC<MediaPropsType> = ({ media, className }) => {
  const displayLink = media.webUrl !== undefined;

  return (
    <blockquote className={`${className} ${styles.container}`}>
      <p className={styles.text}>{media.text}</p>
      <Container className={styles.infos}>
        <cite className={styles.media}>{media.name}</cite>
        {displayLink && (
          <Link
            className={styles["media-btn"]}
            href={media.webUrl as string}
            target="blank"
          >
            {text.actions.readArticle}
          </Link>
        )}
      </Container>
    </blockquote>
  );
};

export default Media;
