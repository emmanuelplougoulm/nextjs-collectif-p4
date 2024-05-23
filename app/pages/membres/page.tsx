"use client";
import styles from "@/app/pages/membres/membres.module.css";
import config from "@/app/pages/membres/config";
import { useState } from "react";

import Image from "next/image";
import DefaultLayout from "@/app/layouts/default-layout";
import List from "@/app/components/shared/list/list";
import Title from "@/app/components/shared/title/title";
import Container from "@/app/components/shared/container/container";

import text from "@/locales/fr/all.json";

type Membre = {
  name: string;
  position: string[];
  cie: string[];
  imageName: string;
};

export default function Membres() {
  const [current, setCurrent] = useState<Membre>(config[0]);

  // make it a custom hook
  const handleOnclick = (item: Membre) => {
    setCurrent(item);
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
            <List className={styles["members"]}>
              {config.map((item) => (
                <li onClick={() => handleOnclick(item)} key={item.name}>
                  {item.name}
                </li>
              ))}
            </List>

            <Container className={styles["infos-container"]}>
              <List className={styles["roles-list"]}>
                {current?.position?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </List>
              <List className={styles["cie-list"]}>
                {current?.cie?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </List>
            </Container>
          </Container>
        </section>

        <section className={styles["img-section"]}>
          <Image
            priority
            fill
            style={{ objectFit: "cover" }}
            src={`${BASE_LOAD_URL}${current.imageName}`}
            alt={current.name}
          />
        </section>
      </main>
    </DefaultLayout>
  );
}
