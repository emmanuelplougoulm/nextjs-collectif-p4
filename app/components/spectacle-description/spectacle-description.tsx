import React from "react";
import styles from "./spectacle-description.module.css";

type showDescriptionProps = {
  item: any;
};

const showDescription: React.FC<showDescriptionProps> = ({ item }) => {
  return (
    <div className={styles["show-description-container"]}>
      <div className={styles["date"]}>{item.date}</div>
      <div className={styles["place"]}>{item.place}</div>
      <div className={styles["description"]}>{item.description}</div>
    </div>
  );
};

export default showDescription;
