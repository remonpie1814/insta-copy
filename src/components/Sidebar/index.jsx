import { useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { PiFilmReel } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
const Sidebar = () => {
  return (
    <>
      <div
        className="w-[230px] h-screen px-2
           border-r-[1px] border-gray-400
           flex flex-col
           overflow-x-visible
           overflow-y-clip
           lg:w-[70px]"
      >
        <div className="flex-shrink-0 gap-3">
          <div className="w-[200px] py-4 flex justify-start items-center scale-75 lg:hidden">
            <i
              data-visualcompletion="css-img"
              class="w-[175px] h-[51px] inline-block bg-no-repeat bg-auto"
              role="img"
              style={{
                backgroundImage: 'url("images/icons-1.png")',
                backgroundPosition: "0px -52px",
              }}
            ></i>
          </div>
          <div
            className="hidden items-center
            w-[200px] min-w-[200px] h-[50px] px-2 py-8 rounded-2xl
            bg-white-A700
            lg:flex lg:w-[50px] lg:min-w-[50px] lg:justify-center
            hover:bg-gray-300"
          >
            <FaInstagram size={30} />
          </div>
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
          <TooltipButton text="메시지">
            <FaRegPaperPlane size={30} />
          </TooltipButton>
          <TooltipButton text="알림">
            <FaRegHeart size={30} />
          </TooltipButton>
          <TooltipButton text="만들기">
            <FaRegPlusSquare size={30} />
          </TooltipButton>
          <TooltipButton text="프로필" description={"프로필·remonpie1234"}>
            <CgProfile size={30} />
          </TooltipButton>
        </div>
        <div className="flex-grow flex flex-col items-end justify-end">
          <TooltipButton className="tall:hidden" text="Threads">
            <FaThreads size={30} />
          </TooltipButton>
          <TooltipButton text="더 보기">
            <IoMdMenu size={30} />
          </TooltipButton>
        </div>
      </div>
    </>
  );
};

const TooltipButton = ({ children, text, description, className }) => {
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
    <div className={`relative w-full flex flex-row items-center ${className}`}>
      <button
        className="flex flex-row items-center group
        w-[200px] min-w-[200px] h-[50px] px-2 py-2 rounded-2xl
        bg-white-A700
        lg:w-[50px] lg:min-w-[50px] lg:justify-center
        hover:bg-gray-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="transform origin-center duration-500 group-hover:scale-110">
          {children}
        </span>
        <span className="pl-2 lg:hidden">{text}</span>
      </button>
      <span
        className={`
          absolute top-0 right-0 transform translate-x-full
          min-w-[100px] min-h-[40px]
          w-max
          justify-center items-center text-center
        bg-white-A700
          px-2 rounded-xl
          shadow-2xl shadow-slate-800
          transition-all duration-500 ease-in-out
          hidden z-[999]
          ${showTooltip ? "lg:flex scale-100 " : "scale-50"}
          `}
      >
        {description ? description : text}
      </span>
    </div>
  );
};

export { Sidebar, TooltipButton };
