import { Post } from "components";
import { Sidebar } from "components/Sidebar";
import React from "react";

const Test = () => {
  return (
    <>
      <div className="w-full flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="flex-grow h-screen ml-8 overflow-y-auto">
          <div className="">
            <Post image="images/screenshot1.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
