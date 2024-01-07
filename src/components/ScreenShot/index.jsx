import React, { useEffect, useState } from "react";

const ScreenShot = () => {
  const images = [
    "screenshot1.png",
    "screenshot2.png",
    "screenshot3.png",
    "screenshot4.png",
  ]; // 이미지 URL 배열
  const [currentImgIndex, setCurrentImgIndex] = useState(0); // 현재 이미지 상태

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentImgIndex + 1) % images.length; // 다음 이미지 인덱스
      setCurrentImgIndex(nextIndex); // 다음 이미지로 변경
    }, 5000); // 5초마다 변경

    return () => clearInterval(intervalId); // 컴포넌트가 unmount될 때 타이머 해제
  }, [currentImgIndex]);

  return (
    <>
      <div
        className="relative w-[468.32px] h-[634.15px] bg-no-repeat"
        style={{
          backgroundSize: "468.32px 634.15px",
          background: 'url("images/home-phones.png")',
        }}
      >
        {images.map((a, i) => {
          return (
            <>
              <img
                className={`absolute top-[22px] left-[155px] transition duration-1000 ease-in-out ${
                  i == currentImgIndex ? "opacity-100" : "opacity-0"
                }`}
                src={"images/" + images[i]}
                alt="changing image"
              />
            </>
          );
        })}
      </div>
    </>
  );
};
export { ScreenShot };
