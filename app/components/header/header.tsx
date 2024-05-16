import Link from "next/link";
import styles from "./header.module.css";

import Title from "@/app/components/title/title";
import Nav from "@/app/components/nav/nav";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <Nav className={`${styles["nav"]}`} />
      <Link href="/pages/landing">
        <Title className={`${styles["title"]}`} tag="h2">
          collectif p4{" "}
        </Title>
      </Link>
    </header>
  );
}
