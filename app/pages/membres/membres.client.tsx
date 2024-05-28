"use client";
import styles from "@/app/pages/membres/membres.module.css";
import config from "@/app/pages/membres/config";
import { useState } from "react";

import Image from "next/image";
import DefaultLayout from "@/app/layouts/default-layout";
import List from "@/app/components/shared/list/list";
import ListItem from "@/app/components/shared/list-item/list-item";
import Title from "@/app/components/shared/title/title";
import Container from "@/app/components/shared/container/container";

import initialImage from "@/public/images/masks.jpg";
import text from "@/locales/fr/all.json";

type Membre = {
  name: string;
  position: string[];
  cie: string[];
  imageName: string;
};

export default function MembresClient() {
  const [isFirstClick, setFirstClick] = useState<Boolean>(false);
  const [current, setCurrent] = useState<Membre>(config[0]);

  // make it a custom hook
  const handleOnclick = (item: Membre) => {
    setCurrent(item);
    setFirstClick(true);
  };

  const BASE_LOAD_URL = `/assets/webp/members/`;

  return (
    <DefaultLayout>
      <main className={styles["main"]}>
        <section className={styles["text-section"]}>
          <Title tag="h3" className={`${styles["title"]} section-title`}>
            {text.membres.title}
          </Title>

          <Container className={styles["lists-container"]}>
            <List tag="ul" className={styles["members"]}>
              {config.map((item) => (
                <ListItem
                  key={item.name}
                  onClick={() => handleOnclick(item)}
                  className={styles["place"]}
                >
                  {item.name}
                </ListItem>
              ))}
            </List>

            {isFirstClick && (
              <Container className={styles["infos-container"]}>
                <List tag="ul" className={styles["roles-list"]}>
                  {current?.position?.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </List>
                <List tag="ul" className={styles["cie-list"]}>
                  {current?.cie?.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </List>
              </Container>
            )}
          </Container>
        </section>

        <section className={styles["img-section"]}>
          {!isFirstClick && (
            <Image
              priority
              fill
              style={{ objectFit: "cover" }}
              src={initialImage}
              alt={current.name}
            />
          )}
          {isFirstClick && (
            <Image
              priority
              fill
              style={{ objectFit: "cover" }}
              src={`${BASE_LOAD_URL}${current.imageName}`}
              alt={current.name}
            />
          )}
        </section>
      </main>
    </DefaultLayout>
  );
}
