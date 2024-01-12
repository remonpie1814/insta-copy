import React from "react";
import styles from "./ProfileImg.module.css"; // Import the custom CSS module

const profileImgStyleNotActive = {
  position: "relative",
  width: "57px",
  height: "57px",
  margin: "10px",
  border: "3px solid transparent",
  borderRadius: "50%",
  backgroundImage: "",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
};

const profileImgStyleActive = {
  position: "relative",
  width: "57px",
  height: "57px",
  margin: "10px",
  border: "3px solid transparent",
  borderRadius: "50%",
  backgroundImage:
    "linear-gradient(#fff, #fff), linear-gradient(to right, red 0%, blue 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
};

const ProfileImg = ({ src, isNewPost }) => {
  return (
    <div
      className={`flex justify-center items-center`}
      style={isNewPost ? profileImgStyleActive : profileImgStyleNotActive}
    >
      <div
        className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] overflow-hidden
        bg-center bg-cover rounded-full border-[1px] border-neutral-300"
        style={{ backgroundImage: `url("${src}")` }}
      ></div>
    </div>
  );
};

export { ProfileImg };
