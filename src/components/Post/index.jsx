import { ProfileImg } from "components";

const Post = () => {
  return (
    <>
      <div className="w-[500px]">
        <div className="flex flex-row items-center justify-start">
          <ProfileImg src="images/button-google.png" />{" "}
          <span className="text-gray-700">yeji</span>{" "}
          <span className="text-gray-500">· 1일</span>{" "}
        </div>
      </div>
    </>
  );
};

export { Post };
