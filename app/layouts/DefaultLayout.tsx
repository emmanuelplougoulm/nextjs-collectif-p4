import styles from "./default-layout.module.css";

import Header from "@/app/components/header/header";
import Container from "@/app/components/container/container";
import BurgerMenu from "@/app/components/burgerMenu/burgerMenu";

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
