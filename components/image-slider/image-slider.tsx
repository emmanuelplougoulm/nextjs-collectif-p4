"useClient";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./image-slider.module.css";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const displayArrows = images.length > 1 ? true : false;

  return (
    <div className={styles["slider"]}>
      {displayArrows && (
        <div className={styles["nav-content"]}>
          <div className={styles["arrows"]}>
            <button onClick={goToPrevious} className={styles["left-arrow"]}>
              ❮
            </button>
            <button onClick={goToNext} className={styles["right-arrow"]}>
              ❯
            </button>
          </div>

          <div className={styles["dots"]}>
            {images.map((_, idx) => (
              <div
                key={idx}
                className={
                  currentIndex === idx
                    ? styles["dot"] + " " + styles["active"]
                    : styles["dot"]
                }
                onClick={() => setCurrentIndex(idx)}
              ></div>
            ))}
          </div>
        </div>
      )}
      <div className={styles["slider-content"]}>
        <div className={styles["slider-image"]}>
          <Image
            priority
            fill
            src={images[currentIndex]}
            style={{ objectFit: "cover" }}
            alt="slider"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
