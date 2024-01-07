import React from "react";

import { Button, Img, Text } from "components";
import EditorRightbuttons from "components/EditorRightbuttons";

const EditorPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-2.5 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="bg-gray-300 flex md:flex-col gap-2.5 h-[72px] md:h-auto items-center justify-center px-5 w-full">
          <div className="flex flex-1 flex-col h-[72px] md:h-auto items-center justify-start p-2.5 w-full">
            <Button
              className="cursor-pointer h-[52px] leading-[normal] outline outline-[1px] outline-gray-500 text-[22px] text-center sm:text-lg md:text-xl"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              왼쪽 사이드바 버튼
            </Button>
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center md:px-10 sm:px-5 px-[116px] w-full">
            <div className="flex flex-col items-center justify-start p-[18px]">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                size="txtInterRegular28"
              >
                에디터
              </Text>
            </div>
          </div>
          <EditorRightbuttons className="flex flex-1 sm:flex-col flex-row gap-2.5 h-[72px] md:h-auto items-center justify-end p-2.5 w-full" />
        </header>
        <div className="bg-yellow-100 flex md:flex-col flex-row gap-5 h-full items-center justify-start p-5 w-full">
          <div className="bg-white-A700 flex flex-col gap-2.5 h-[958px] md:h-auto items-start justify-center md:px-5 px-8 py-[29px]">
            <Img
              className="h-[70px] w-full"
              src="images/img_buttons.svg"
              alt="buttons"
            />
            <div className="flex flex-col items-start justify-start p-3">
              <Text
                className="mb-[748px] mt-5 text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                size="txtInterRegular22"
              >
                사이드메뉴
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start pb-[843px] pr-[843px] md:px-5">
            <Text
              className="mb-[87px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
              size="txtInterRegular22"
            >
              에디터 스페이스
            </Text>
          </div>
          <div className="bg-white-A700 flex sm:flex-1 flex-col gap-2 h-[958px] md:h-auto items-start justify-start px-5 w-[425px] sm:w-full">
            <div className="flex flex-row gap-2.5 items-start justify-center py-2.5 w-full">
              <Img
                className="h-[70px] rounded-[5px] w-[70px]"
                src="images/img_button_70x70.svg"
                alt="button_Two"
              />
              <Img
                className="h-[70px] rounded-[5px] w-[70px]"
                src="images/img_button_black_900_70x70.svg"
                alt="button_Three"
              />
              <Img
                className="h-[70px] rounded-[5px] w-[70px]"
                src="images/img_button.svg"
                alt="button_Four"
              />
              <Img
                className="h-[70px] rounded-[5px] w-[70px]"
                src="images/img_button_black_900.svg"
                alt="button_Five"
              />
            </div>
            <Text
              className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
              size="txtInterRegular22"
            >
              사이드메뉴
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorPage;
