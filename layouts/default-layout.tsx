import styles from "./default-layout.module.css";

import Header from "@/components/header/header";
import Container from "@/components/shared/container/container";
import { BurgerMenu } from "@/components/index";

export default function Defaultlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className={`${styles["layout-container"]}`}>
      <BurgerMenu />
      <Container className={`${styles["header-container"]}`}>
        <Header />
      </Container>
      {children}
    </Container>
  );
}
