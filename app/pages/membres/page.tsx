"use client";
import styles from "@/app/pages/membres/membres.module.css";
import config from "@/app/pages/membres/config";
import { useState } from "react";

import Image from "next/image";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import List from "@/app/components/list/list";
import Title from "@/app/components/title/title";
import Container from "@/app/components/container/container";

type Membre = {
  name: string;
  position: string[];
  cie: string[];
  imageName: string;
};

export default function Membres() {
  const [current, setCurrent] = useState<Membre>(config[0]);

  // make it a custom hook
  const handleMouseEnter = (item: Membre) => {
    setCurrent(item);
  };

  const BASE_LOAD_URL = `/assets/webp/members/`;

  return (
    <DefaultLayout>
      <Container className={styles["page-container"]}>
        <section className={styles["text-section"]}>
          <Title tag="h2" className={styles["section-title"]}>
            membres
          </Title>

          <Container className={styles["lists-container"]}>
            <List className={styles["names-list"]}>
              {config.map((item) => (
                <li onMouseEnter={() => handleMouseEnter(item)} key={item.name}>
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

        <Container className={styles["img-container"]}>
          <Image
            priority={true}
            src={`${BASE_LOAD_URL}${current.imageName}`}
            layout="fill"
            objectFit="cover"
            alt={current.name}
          />
        </Container>
      </Container>
    </DefaultLayout>
  );
}
