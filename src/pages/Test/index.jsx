import { Post, ProfileImg } from "components";
import { Sidebar } from "components/Sidebar";
import React from "react";

const Test = () => {
  return (
    <>
      <div className="w-full flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div
          className="flex-grow h-screen ml-8 overflow-y-auto
        flex flex-row justify-center gap-4 mx-4"
        >
          <div className="w-[600px] flex shrink-0 justify-center">
            <Post images={["images/screenshot1.png"]} />
          </div>
          <div
            className="w-[360px] flex flex-col gap-2
            lg:hidden"
          >
            <div className="w-full flex flex-row gap-2 items-center">
              <ProfileImg src={"images/black.png"} />
              <div className="w-[200px] flex flex-col h-full justify-center">
                <span className="font-bold">username</span>
                <span className="text-neutral-500">userintro</span>
              </div>
              <button className="flex-grow text-right font-bold text-cyan-400 hover:text-cyan-700">
                전환
              </button>
            </div>
            <div className="flex flex-row ">
              <span className="text-neutral-600 font-bold">
                회원님을 위한 추천
              </span>
              <button
                className="flex-grow
              text-right font-bold text-neutral-700 hover:text-neutral-400"
              >
                모두보기
              </button>
            </div>
            {[1, 2, 3, 4, 5].map((a, i) => {
              return (
                <div className="w-full flex flex-row gap-2 items-center">
                  <ProfileImg src={"images/black.png"} />
                  <div className="w-[200px] flex flex-col h-full justify-center">
                    <span className="font-bold">username</span>
                    <span className="text-neutral-500">
                      user님을 팔로우합니다
                    </span>
                  </div>
                  <button className="flex-grow text-right font-bold text-cyan-400 hover:text-cyan-700">
                    팔로우
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
