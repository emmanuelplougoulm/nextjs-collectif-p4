import Image from "next/image";
import { FC } from "react";

import styles from "./imageList.module.css";

// Define the props interface
interface MyComponentProps {
  imagePaths: string[];
}

// Define the component with the props type
const MyComponent: FC<MyComponentProps> = ({ imagePaths }) => {
  return (
    <>
      {imagePaths.map((path, index) => (
        <div key={index} className={styles["image-list-container"]}>
          <Image
            key={index}
            priority
            fill
            src={path}
            style={{ objectFit: "cover" }}
            alt={`Image`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </>
  );
};

export default MyComponent;
