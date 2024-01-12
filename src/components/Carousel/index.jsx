import React, { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const Carousel = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute top-0 left-0 w-full h-full
           bg-no-repeat bg-contain -z-[1]"
        style={{
          backgroundImage: "url(" + images[currentIndex] + ")",
        }}
      ></div>
      {currentIndex > 0 && (
        <button
          className="absolute left-1 top-1/2 -translate-y-1/2
              w-[25px] h-[25px] flex justify-center items-center
              bg-white-A700 rounded-full shadow-[0_0_5px_rgb(0,0,0,0.3)]"
          onClick={prevSlide}
        >
          <FaLessThan size={12} color="rgb(0,0,0,0.2)" />
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2
              w-[25px] h-[25px] flex justify-center items-center
              bg-white-A700 rounded-full shadow-[0_0_5px_rgb(0,0,0,0.3)]"
          onClick={nextSlide}
        >
          <FaGreaterThan size={12} color="rgb(0,0,0,0.2)" />
        </button>
      )}
      <div className="w-full z-10 absolute bottom-4 flex justify-center space-x-1 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-[5px] h-[5px] rounded-full bg-white-A700 ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export { Carousel };
