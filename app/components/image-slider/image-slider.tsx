"useClient";
import React, { useState } from "react";
import "./image-slider.css";

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
    <div className="slider">
      {displayArrows && (
        <div className="nav-content">
          <div>
            <button onClick={goToPrevious} className="left-arrow">
              ❮
            </button>
            <button onClick={goToNext} className="right-arrow">
              ❯
            </button>
          </div>

          <div className="dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={currentIndex === idx ? "dot active" : "dot"}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      )}
      <div className="slider-content">
        <div className="slider-image">
          <img src={images[currentIndex]} alt="slider" />
          {/* <Image
            priority
            fill
            src={images[currentIndex]}
            style={{ objectFit: "cover" }}
            alt="slider"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
