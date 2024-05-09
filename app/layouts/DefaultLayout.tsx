import styles from "./default-layout.module.css";
import Header from "@/app/components/header/header";

export default function Defaultlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles["layout-container"]}`}>
      <Header />
      {children}
    </div>
  );
}
