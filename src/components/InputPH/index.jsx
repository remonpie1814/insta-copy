import React, { useState } from "react";

const InputPH = ({ placeholder, setValue, ispwd }) => {
  const [isShow, setShow] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="relative bg-gray-100 w-[270px] h-[40px] mx-auto text-sm rounded-sm border-[1px] border-gray-300 focus-within:border-gray-500">
      <input
        type={`${!ispwd ? "text" : isShow ? "text" : "password"}`}
        onChange={(e) => {
          setValue(e.target.value);
          e.target.value ? setActive(true) : setActive(false);
        }}
        className={`absolute top-0 left-0 transform border-none hover:border-none focus:border-none bg-transparent
        ${ispwd ? (isShow ? "w-[230px]" : "w-[180px]") : "w-[270px]"} 
        ${active ? "text-xs transform translate-y-2" : "h-full"}`}
      />

      <label
        htmlFor="myInput"
        className={` text-gray-400 origin-left pl-3.5 w-full text-left pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-0 transition-all duration-200 ${
          active ? "transform  translate-y-[-120%] scale-75" : ""
        }`}
      >
        {placeholder}
      </label>
      {ispwd && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2 w-fit font-bold"
          onClick={() => {
            isShow ? setShow(false) : setShow(true);
          }}
        >
          {active ? (isShow ? "숨기기" : "비밀번호표시") : null}
        </button>
      )}
    </div>
  );
};
export { InputPH };
