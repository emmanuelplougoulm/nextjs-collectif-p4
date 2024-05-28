import React from "react";
import styles from "./news.module.css";

import List from "@/app/components/shared/list/list";
import ListItem from "@/app/components/shared/list-item/list-item";

type NewsProps = {
  item: Record<string, any>;
};

const News: React.FC<NewsProps> = ({ item }) => {
  return (
    <span>
      <div className={styles["news-title"]}>{item.title}</div>
      <List tag="ul">
        {item.infos.map((info: any) => (
          <ListItem key={info} className={styles["info"]}>
            {info}
          </ListItem>
        ))}
      </List>
    </span>
  );
};

export default News;
