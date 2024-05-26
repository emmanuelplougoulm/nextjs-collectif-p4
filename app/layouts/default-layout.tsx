import styles from "./default-layout.module.css";

import Head from "next/head";
import Header from "@/app/components/header/header";
import Container from "@/app/components/shared/container/container";
import BurgerMenu from "@/app/components/burger-menu/burger-menu";

export default function Defaultlayout({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <Container className={`${styles["layout-container"]}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BurgerMenu />
      <Container className={`${styles["header-container"]}`}>
        <Header />
      </Container>
      {children}
    </Container>
  );
}
