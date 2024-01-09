import { Post } from "components";
import { Sidebar } from "components/Sidebar";
import React from "react";

const Test = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <Post />
      </div>
    </>
  );
};

export default Test;
