import React, { useEffect, useState } from "react";

const Loading = ({ load }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!load) {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [load]);
  return (
    <>
      {fadeOut ? null : (
        <div
          class={`absolute w-screen h-screen top-0 left-0 bg-white-A700 z-[999]
      transition duration-500 ease-in-out ${
        load ? "opacity-100" : "opacity-0"
      }`}
        >
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img class="w-[80px]" src="images/insta-logo-tumyong.png" />
          </div>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
            <img class="w-[80px] mb-10" src="images/insta-frommeta.png" />
          </div>
        </div>
      )}
    </>
  );
};
export { Loading };
