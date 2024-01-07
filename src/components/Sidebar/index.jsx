import { useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { PiFilmReel } from "react-icons/pi";
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <TooltipButton text="홈">
          <MdHomeFilled size={30} />
        </TooltipButton>
        <TooltipButton text="검색">
          <IoMdSearch size={30} />
        </TooltipButton>
        <TooltipButton text="탐색">
          <FaRegCompass size={30} />
        </TooltipButton>
        <TooltipButton text="릴스">
          <PiFilmReel size={30} />
        </TooltipButton>
      </div>
    </>
  );
};

const TooltipButton = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowTooltip(false);
  };

  return (
    <div className="flex flex-row items-center">
      <button
        className="flex flex-row items-center
        w-[200px] px-2 py-2 rounded-2xl
        md:w-[50px] md:justify-center
        hover:bg-gray-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <span className="pl-2 font-bold md:hidden">{text}</span>
      </button>
      <span
        className={`
          px-2 rounded-xl
          shadow-2xl shadow-slate-800
            transition-all duration-500 ease-in-out
            opacity-0
            ${showTooltip ? "md:opacity-100 scale-100" : "scale-50"}
            `}
      >
        {text}
      </span>
    </div>
  );
};

export { Sidebar, TooltipButton };
