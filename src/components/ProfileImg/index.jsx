import React from "react";
import styles from "./ProfileImg.module.css"; // Import the custom CSS module

const ProfileImg = ({ src }) => {
  return (
    <div
      className={`${styles.profileImg} flex justify-center items-center origin-center scale-75`}
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
