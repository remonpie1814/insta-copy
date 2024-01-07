import { InputPH, Spinner } from "components";

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isfecthing, setFetch] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <div
        class="text-xs w-[350px] px-[40px] py-4 flex flex-col gap-4
        items-center justify-center text-center
        border-[1px] border-neutral-300
        sm:border-none sm:w-full"
      >
        <div class="m-10">
          <i
            data-visualcompletion="css-img"
            class="w-[175px] h-[51px] inline-block bg-no-repeat bg-auto"
            role="img"
            style={{
              "background-image": 'url("images/icons-1.png")',
              "background-position": "0px -52px",
            }}
          ></i>
        </div>
        <div className="w-full flex flex-col gap-2">
          <InputPH
            setValue={setEmail}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <InputPH setValue={setPwd} placeholder={"비밀번호"} ispwd={true} />
        </div>
        <div class="w-full flex items-center justify-center">
          <button
            className={`${pwd.length > 5 ? "bg-sky-500" : "bg-sky-400"}
          rounded-md
          text-center text-sm text-white-A700 font-bold
          w-[270px] h-8 flex items-center justify-center`}
            onClick={() => {
              if (pwd.length > 5) {
                setFetch(true);
                setTimeout(() => {
                  setFetch(false);
                }, 1000);
              }
            }}
          >
            {isfecthing ? (
              <div className="scale-[0.2]">
                <Spinner />
              </div>
            ) : (
              "로그인"
            )}
          </button>
        </div>
        <div className="w-full flex gap-4 items-center justify-center">
          <div className="border-b-2 border-neutral-300 w-1/3"></div>
          <div className="text-sm text-gray-500 font-bold mx-auto">또는</div>
          <div className="border-b-2 border-neutral-300 w-1/3"></div>
        </div>
        <div className="w-full">
          <span
            className="border-0 inline-block m-0 mr-[8px] top-[2px] p-0 
            relative align-baseline
            bg-no-repeat h-[16px] w-[16px]"
            style={{
              backgroundImage: "url(images/icons-2.png)",
              backgroundPosition: "-414px -259px",
            }}
          ></span>
          <span className="text-[#385185] font-bold text-sm cursor-pointer">
            Facebook으로 로그인
          </span>
        </div>
        {errmsg && <div className="w-full text-red-500 text-sm">{errmsg}</div>}
        <div className="w-full">
          <span className="text-center cursor-pointer">
            비밀번호를 잊으셨나요?
          </span>
        </div>
      </div>
      <div
        className="text-xs w-[350px] px-[40px] py-4 flex flex-col gap-4
        items-center justify-center text-center
        border-[1px] border-neutral-300
        sm:border-none sm:w-full"
      >
        <span className="text-sm">
          계정이 없으신가요?{" "}
          <span className="text-sky-500 font-bold cursor-pointer">
            가입하기
          </span>
        </span>
      </div>
      <div
        className="text-xs w-[350px] px-[40px] py-4 flex flex-col gap-4
        items-center justify-center text-center
        "
      >
        <div className="text-sm">앱을 다운로드하세요.</div>
        <div className="h-[40px] flex flex-row gap-2 items-center justify-center">
          <img className="h-full" src="images/button-google.png" alt="" />
          <img className="h-full" src="images/button-microsoft.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export { Login };
