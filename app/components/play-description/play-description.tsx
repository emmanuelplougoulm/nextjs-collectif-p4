import React from "react";
import styles from "./play-description.module.css";
import List from "@/app/components/shared/list/list";

type Spectacle = {
  name: string;
  dateAndCity: string;
  place: string[];
  description: string;
};

type item = {
  item: Spectacle;
};

const showDescription: React.FC<item> = ({ item }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["date-city"]}>{item.dateAndCity}</div>
      <List>
        {item.place.map((item: any, index: any) => (
          <div key={index} className={styles["place"]}>
            {item}
          </div>
        ))}
      </List>

      <div className={styles["description"]}>{item.description}</div>
    </div>
  );
};

export default showDescription;
