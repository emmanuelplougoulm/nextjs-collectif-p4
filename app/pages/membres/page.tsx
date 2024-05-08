"use client";
import Image from "next/image";
import config from "./config";
import styles from "./membres.module.css";
import DefaultLayout from "../../layouts/DefaultLayout";
import List from "../../components/list/list";

import { useState } from "react";

// choose type over interface here
// interface are meant to be extended

interface Membre {
  name: string;
  position: string[];
  cie: string[];
  imageName: string;
}

export default function Membres() {
  const [current, setCurrent] = useState<Membre>(config[0]);

  // make it a custom hook
  const handleMouseEnter = (item: Membre) => {
    setCurrent(item);
  };

  const BASE_LOAD_URL = `/assets/webp/members/`;

  return (
    <DefaultLayout>
      <div className={styles["page-container"]}>
        <div className={styles["text-container"]}>
          <div className={styles[""]}>
            <div className={styles["section-title"]}>membres</div>
            <List className={styles["names-list"]}>
              {config.map((item) => (
                <li onMouseEnter={() => handleMouseEnter(item)} key={item.name}>
                  {item.name}
                </li>
              ))}
            </List>
          </div>
          <div className={styles[""]}>
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
          </div>
        </div>

        <div className={styles["img-container"]}>
          <Image
            priority={true}
            src={`${BASE_LOAD_URL}${current.imageName}`}
            layout="fill"
            objectFit="cover"
            alt={current.name}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
