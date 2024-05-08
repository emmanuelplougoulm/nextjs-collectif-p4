"use client";
import styles from "./spectacles.module.css";
import DefaultLayout from "../../layouts/DefaultLayout";
import config from "./config";

import { useState } from "react";

export default function Spectacles() {
  const [current, setCurrent] = useState(config[0]);

  const handleMouseEnter = (item: any) => {
    setCurrent(item);
  };

  return (
    <DefaultLayout>
      <div className={styles["page-container"]}>
        <div className={styles["list-container"]}>
          <div className={styles["section-title"]}>spectacles</div>
          <div className={styles["shows-list"]}>
            <ul>
              <li onMouseEnter={handleMouseEnter}>
                J’aurais voulu être Jeff Bezos
              </li>
              <li>Le dernier ferme la porte</li>
              <li> Seule la queue du castor peut tarir la rivière</li>
              <li>Ma soeur, tes lèvres sont de porcelaine</li>
              <li> Insoutenables longues étreintes</li>
            </ul>
          </div>
        </div>
        <div className={styles["content-container"]}>
          <div className={styles["zone-c"]}>{current.name}</div>
        </div>
      </div>
    </DefaultLayout>
  );
}
