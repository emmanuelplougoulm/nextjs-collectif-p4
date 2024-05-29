import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/home.module.css";
import friendsPic from "@/public/images/home/motoki.webp";
import carPic from "@/public/images/home/remi.webp";
import {
  Title,
  List,
  ListItem,
  Container,
  TriangleIcon,
  CircleIcon,
} from "@/app/components/index";

type HomeProps = {
  text: {
    collectiveName: string;
    home: {
      collectiveQuote: string;
      collectiveCities: string[];
    };
    actions: {
      enter: string;
    };
  };
};

async function getData(): Promise<HomeProps["text"]> {
  const filePath = path.join(process.cwd(), "locales", "fr", "all.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return data;
}

export const metadata: Metadata = {
  title: "Homepage du site du collectif p4",
  description:
    "COLLECTIF P4, collectif joyeusement foutraque, Paris, Marseille, Saint-Étienne",
};

const Home: React.FC<HomeProps> = async () => {
  const text = await getData();
  return (
    <main className={styles.main}>
      <Container className={styles["page-container"]}>
        <section>
          <Image
            priority
            fill
            src={friendsPic}
            style={{ objectFit: "cover" }}
            alt="friends_photo"
          />
        </section>
        <section>
          <span className={styles["top-item-container"]}>
            <Image
              className={styles["top-triangle"]}
              src={TriangleIcon}
              width={15}
              height={15}
              alt="triangle-icon"
            />
          </span>
          <div className={styles["title-box"]}>
            <Title tag="h1" className="section-title">
              {text.collectiveName}
            </Title>
            <Title tag="h2">{text.home.collectiveQuote}</Title>
          </div>
          <span>
            <Image src={CircleIcon} width={15} height={15} alt="circle_icon" />
          </span>
        </section>

        <section>
          <aside className={styles["top-item-container"]}>
            <List tag="ul">
              {text.home.collectiveCities.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </aside>

          <div className={styles["image-container"]}>
            <Image
              fill
              priority
              src={carPic}
              style={{ objectFit: "cover" }}
              alt="picture_of_a_car"
            />
          </div>

          <div>
            <Image
              src={TriangleIcon}
              width={15}
              height={15}
              alt="triangle_icon"
            />
            <Link className={styles["enter-button"]} href="/pages/landing">
              {text.actions.enter}
            </Link>
          </div>
        </section>
      </Container>
      <Container className={styles["mobile-container"]}>
        <Title tag="h1" className="section-title">
          {text.collectiveName}
        </Title>
        <Link className={styles["enter-button"]} href="/pages/landing">
          {text.actions.enter}
        </Link>
        <div className={styles["mobile-menu-container"]}></div>
      </Container>
    </main>
  );
};

export default Home;
