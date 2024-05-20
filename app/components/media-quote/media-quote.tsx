import React from "react";
import Link from "next/link";
import styles from "./media-quote.module.css";
import Container from "@/app/components/shared/container/container";

type Quote = {
  text: string;
  media: string;
  url?: any;
};

type QuoteProps = {
  quote: Quote;
  className?: string;
};

const Quote: React.FC<QuoteProps> = ({ quote, className }) => {
  // const displayLink = quote.url?.trim() !== "";

  return (
    <blockquote className={`${className} ${styles.container}`}>
      <p className={styles.text}>{quote.text}</p>
      <Container className={styles.infos}>
        <cite className={styles.media}>{quote.media}</cite>
        {/* {displayLink && (
          <Link className={styles["enter-button"]} href={quote.url}>
            Lire l'article
          </Link>
        )} */}
      </Container>
    </blockquote>
  );
};

export default Quote;
