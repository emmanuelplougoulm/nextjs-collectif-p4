import styles from "./default-layout.module.css";

import Header from "@/app/components/header/header";
import Container from "@/app/components/shared/container/container";
import BurgerMenu from "@/app/components/burger-menu/burger-menu";

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
