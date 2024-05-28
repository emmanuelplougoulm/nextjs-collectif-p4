import React from "react";
import styles from "./play-description.module.css";
import List from "@/app/components/shared/list/list";
import ListItem from "@/app/components/shared/list-item/list-item";

type Spectacle = {
  name: string;
  dateAndCity: string;
  place: string[];
  description: string;
};

type Play = {
  item: Spectacle;
};

const PlayDescription: React.FC<Play> = ({ item }) => {
  return (
    <main className={styles["main"]}>
      <div className={styles["date-city"]}>{item.dateAndCity}</div>
      <List tag="ul">
        {item.place.map((item: any, index: any) => (
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
