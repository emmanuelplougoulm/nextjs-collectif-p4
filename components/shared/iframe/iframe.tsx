import React from "react";

import styles from "./iframe.module.css";

type IframePropsType = {
  demoUrl: string;
};

const Iframe: React.FC<IframePropsType> = ({ demoUrl }) => {
  return (
    <div className={styles["container"]}>
      <iframe
        src={demoUrl}
        width={"100%"}
        height={"100%"}
        title="video_player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Iframe;
