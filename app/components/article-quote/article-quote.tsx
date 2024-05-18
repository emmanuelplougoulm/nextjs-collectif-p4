import React from "react";
import Link from "next/link";

import styles from "./article-quote.module.css";

type ArticleQuoteProps = {
  data: any;
  className?: string;
};

const ArticleQuote: React.FC<ArticleQuoteProps> = ({ data, className }) => {
  const displayLink = data.url ? true : false;

  return (
    <div className={`${className} ${styles.container}`}>
      <div className={styles.text}>{data.text}</div>
      <div className={styles.media}>{data.media}</div>

      {displayLink && (
        <Link className={styles["enter-button"]} href={data.url}>
          Lire l'article
        </Link>
      )}

      <div>{data.url}</div>
    </div>
  );
};

export default ArticleQuote;
