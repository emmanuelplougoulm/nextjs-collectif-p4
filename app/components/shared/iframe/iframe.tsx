import React from "react";

import styles from "./iframe.module.css";

type IframeProps = {
  demoUrl: string;
  className?: string;
};

const Container: React.FC<IframeProps> = ({ demoUrl, className }) => {
  return (
    <div className={styles["container"]}>
      <iframe
        width={"100%"}
        height={"100%"}
        src={demoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Container;
