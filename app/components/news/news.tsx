import React from "react";
import styles from "./news.module.css";

type NewsProps = {
  item: Record<string, any>;
};

const News: React.FC<NewsProps> = ({ item }) => {
  return (
    <span>
      <div className={styles["news-title"]}>{item.title}</div>
      <ul>
        {item.infos.map((info: any) => (
          <li key={info} className={styles["info"]}>
            {info}
          </li>
        ))}
      </ul>
    </span>
  );
};

export default News;
