import { DropdownMenu } from "components";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="text-gray-400 text-center text-xs">
        <div className="py-1">
          <a className="px-2" href="">
            Meta
          </a>
          <a className="px-2" href="">
            소개
          </a>
          <a className="px-2" href="">
            블로그
          </a>
          <a className="px-2" href="">
            채용 정보
          </a>
          <a className="px-2" href="">
            도움말
          </a>
          <a className="px-2" href="">
            API
          </a>
          <a className="px-2" href="">
            개인정보처리방침
          </a>
          <a className="px-2" href="">
            약관
          </a>
          <a className="px-2" href="">
            위치
          </a>
          <a className="px-2" href="">
            Instagram Lite
          </a>
          <a className="px-2" href="">
            Threads
          </a>
          <a className="px-2" href="">
            연락처 업로드 & 비사용자
          </a>
          <a className="px-2" href="">
            Meta Verified
          </a>
        </div>
        <div className="py-1">
          <DropdownMenu
            menuItems={[
              { href: "#", text: "한국어" },
              { href: "#", text: "english" },
            ]}
          />
          <span>ⓒ 2024 Instagram from Meta</span>
        </div>
      </div>
    </>
  );
};
export { Footer };
