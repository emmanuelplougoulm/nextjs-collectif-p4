import React from "react";
import styles from "./play-description.module.css";
import List from "@/app/components/shared/list/list";
import ListItem from "@/app/components/shared/list-item/list-item";
import type { SpectacleType } from "@/app/types/index";

type PlayPropsType = {
  item: SpectacleType;
};

const PlayDescription: React.FC<PlayPropsType> = ({ item }) => {
  return (
    <main className={styles["main"]}>
      <div className={styles["date-city"]}>{item.dateAndCity}</div>
      <List tag="ul">
        {item?.place?.map((item: string) => (
          <ListItem key={item} className={styles["place"]}>
            {item}
          </ListItem>
        ))}
      </List>

      <div className={styles["description"]}>{item.description}</div>
    </main>
  );
};

export default PlayDescription;
