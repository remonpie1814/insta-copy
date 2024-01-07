import React from "react";

import { Button, Img } from "components";

const EditorRightbuttons = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[70px] rounded-[5px] w-[70px]"
          src="images/img_button.svg"
          alt="button"
        />
        <Img
          className="h-[70px] rounded-[5px] w-[70px]"
          src="images/img_button_black_900.svg"
          alt="button_One"
        />
        <Button
          className="cursor-pointer font-inter h-[52px] leading-[normal] outline outline-[1px] outline-gray-500 text-[22px] text-center sm:text-lg md:text-xl"
          shape="round"
          color="white_A700"
          size="xs"
          variant="fill"
        >
          {props?.buttontext}
        </Button>
      </div>
    </>
  );
};

EditorRightbuttons.defaultProps = { buttontext: "오른쪽 사이드바 버튼" };

export default EditorRightbuttons;
