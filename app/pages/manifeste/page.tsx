// import Image from "next/image";
import styles from "./manifeste.module.css";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Manifesto() {
  return (
    <DefaultLayout>
      <div className={styles["zone-a"]}>image</div>
      <div className={styles["zone-b"]}>MANIFESTE</div>
      <div className={styles["zone-c"]}>
        P4 pour un paquet de cigarette oublié sur le bitume renfermant un mot
        d’amour, pour un laboratoire de recherche sur la liberté. Pour ne jamais
        avoir à chanter « tiens, voilà du boudin ». C’est une quête de lumière.
        C’est rouler en vieille décapotable en faisant l'avion avec ton bras .
        C’est aussi croire en l'esprit de camaraderie et à la confrontation
        d'idées. C’est dedans et dehors, pour vous et pour nous. C’est raconter
        des histoires, hors des sentiers rebattus, avec générosité et appétit
        pour le jeu.
      </div>
      <div className={styles["zone-d"]}>
        "Le fossé entre le théâtre pauvre et le théâtre riche est encore élargi,
        la classe moyenne du théâtre disparaît, un peu d’argent ne suffit plus,
        il en faut beaucoup ou alors, quoi, rien. Il faut trouver l’esthétique
        de ce rien. Qui n’est pas du tout rien, puisqu’il y a les acteurs,
        porteurs de la totalité des signes du spectacle".
        <div>A. Vittez</div>
      </div>
    </DefaultLayout>
  );
}
