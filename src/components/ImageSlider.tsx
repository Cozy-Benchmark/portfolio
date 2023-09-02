import { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ISlide {
  slides: Array<{
    src: string;
    width: number;
    height: number;
  }>;
}

const ImageSlider = ({ slides }: ISlide) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconContext.Provider value={{ color: "#36f336", size: "30px" }}>
        <div onClick={goToPreviousSlide}>
          <IoIosArrowBack />
        </div>
      </IconContext.Provider>
      <div>
        <img
          key={currentIndex}
          src={slides[currentIndex].src}
          width={slides[currentIndex].width}
          height={slides[currentIndex].height}
          alt={`Image ${currentIndex + 1}`}
          className="project-img"
          style={{ borderRadius: "10px", border: "1px solid #797979" }}
        />
      </div>
      <IconContext.Provider value={{ color: "#36f336", size: "30px" }}>
        <div onClick={goToNextSlide}>
          <IoIosArrowForward />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default ImageSlider;
