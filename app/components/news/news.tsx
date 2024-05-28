import React from "react";
import styles from "./news.module.css";

import List from "@/app/components/shared/list/list";
import ListItem from "@/app/components/shared/list-item/list-item";

type NewsType = {
  title: string;
  infos: string[];
};

type NewsPropsType = {
  item: NewsType;
};

const News: React.FC<NewsPropsType> = ({ item }) => {
  return (
    <span>
      <div className={styles["news-title"]}>{item.title}</div>
      <List tag="ul">
        {item.infos.map((info: string) => (
          <ListItem key={info} className={styles["info"]}>
            {info}
          </ListItem>
        ))}
      </List>
    </span>
  );
};

export default News;
