import { Button, Container } from "@/components/index";

import React from "react";
import type { SpectacleType } from "@/types/index";
import styles from "@/components/spectacles/content-buttons/content-buttons.module.css";

type ContentButtonsProps = {
  current: SpectacleType;
  onClick: (value: string) => void;
};

const ContentButtons: React.FC<ContentButtonsProps> = ({
  onClick,
  current,
}) => {
  return (
    <Container className={styles["buttons-container"]}>
      {current.demoUrl && (
        <button
          className={styles["content-btn"]}
          onClick={() => onClick("demo")}
        >
          Demo
        </button>
      )}
      {current.images.length > 0 && (
        <button
          className={styles["content-btn"]}
          onClick={() => onClick("photos")}
        >
          Images
        </button>
      )}
      {current.media && (
        <button
          className={styles["content-btn"]}
          onClick={() => onClick("media")}
        >
          Media
        </button>
      )}
    </Container>
  );
};

export default ContentButtons;
