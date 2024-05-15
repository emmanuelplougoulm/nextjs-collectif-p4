import styles from "@/app/pages/manifeste/manifeste.module.css";

import DefaultLayout from "@/app/layouts/DefaultLayout";
import Image from "next/image";
import Title from "@/app/components/title/title";
import Container from "@/app/components/container/container";
import TriangleIcon from "@/app/components/icons/triangle.svg";

import manifestePic from "@/public/assets/webp/manifeste.webp";

export default function Manifeste() {
  return (
    <DefaultLayout>
      <Container className={styles["page-container"]}>
        <section className={styles["text-content"]}>
          <Container className={styles["title-container"]}>
            <Title tag="h3" className="section-title">
              manifeste
            </Title>
            <Image
              src={TriangleIcon}
              width={15}
              height={15}
              alt="triangle-icon"
            />
          </Container>

          <div className={styles["paragraph"]}>
            {`P4 pour un paquet de cigarette oublié sur le bitume renfermant un mot
        d’amour, pour un laboratoire de recherche sur la liberté. Pour ne jamais
        avoir à chanter « tiens, voilà du boudin ». C’est une quête de lumière.
        C’est rouler en vieille décapotable en faisant l'avion avec ton bras .
        C’est aussi croire en l'esprit de camaraderie et à la confrontation
        d'idées. C’est dedans et dehors, pour vous et pour nous. C’est raconter
        des histoires, hors des sentiers rebattus, avec générosité et appétit
        pour le jeu.`}
          </div>

          <div className={styles["quote"]}>
            {`"Le fossé entre le théâtre pauvre et le théâtre riche est encore élargi,
        la classe moyenne du théâtre disparaît, un peu d’argent ne suffit plus,
        il en faut beaucoup ou alors, quoi, rien. Il faut trouver l’esthétique
        de ce rien. Qui n’est pas du tout rien, puisqu’il y a les acteurs,
        porteurs de la totalité des signes du spectacle"`}
            <div>A. Vittez</div>
          </div>
        </section>
        <section className={styles["img-content"]}>
          <Image
            src={manifestePic}
            fill
            style={{ objectFit: "cover" }}
            alt="lightbeams_trees"
          />
        </section>
      </Container>
    </DefaultLayout>
  );
}
