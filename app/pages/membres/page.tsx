import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./membres.module.css";

export default function Membres() {
  return (
    <DefaultLayout>
      <div className={styles["zone-a"]}>image membre</div>
      <div className={styles["zone-b"]}>membres</div>
      <div className={styles["zone-c"]}>
        <ol>
          <li>Chloé Chicky</li>
          <li>Pauline Laurendeau</li>
          <li>Mathias Minne</li>
          <li>Arthur Viadieu</li>
          <li>Roma Blanchard</li>
          <li>Marie-Line Vergnaux</li>
          <li>Bob Levasseur</li>
          <li>Anaïs Ancel</li>
          <li>Claire Olier</li>
          <li>Régis Fortino</li>
          <li>Sarah Calcine</li>
          <li>Antoine Mermet</li>
        </ol>
      </div>
      <div className={styles["zone-d"]}>
        <div className={styles["roles"]}>
          <div>comédienne</div>
          <div>metteuse en scène</div>
        </div>
        <div className={styles["cie"]}>
          <div>Conservatoire du 11e (Paris)</div>
          <div>Cie Luce</div>
          <div>Cie 5ème acte</div>
        </div>
        <div></div>
      </div>
    </DefaultLayout>
  );
}
