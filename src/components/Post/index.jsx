import { Carousel, Modal, ProfileImg } from "components";
import { IoIosMore } from "react-icons/io";
import {
  FaRegPaperPlane,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { useState } from "react";

const Post = ({
  children,
  userName,
  date,
  images,
  imageRatio,
  likeCount,
  commentCount,
  isLiked,
  isChecked,
}) => {
  const [comment, setComment] = useState("");
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="w-[468px] flex flex-col gap-1 border-b-[1px] border-neutral-400">
        <div className="relative flex flex-row items-center justify-start">
          <div className="w-[50px] h-[50px] flex justify-center items-center mr-2">
            <div className="scale-75 origin-left w-0 h-0 flex justify-center items-center">
              <ProfileImg
                src="images/button-google.png"
                isNewPost={!isChecked}
              />{" "}
            </div>
          </div>
          <span className="text-gray-700 font-bold">notemanshop</span>
          <span className="text-gray-500 px-2"> · 1일</span>{" "}
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              <IoIosMore size={20} />
            </button>
          </div>
        </div>
        <div
          className="w-full h-auto my-2 
                    rounded-md border-[1px] border-neutral-300"
        >
          <Carousel
            className={`w-[468px] 
            ${imageRatio ? "aspect-[" + imageRatio + "]" : "aspect-square"}`}
            images={[
              "images/home-phones.png",
              "images/screenshot4.png",
              "images/black.png",
            ]}
          />
        </div>
        <div className="relative w-full flex flex-row gap-4 justify-start">
          <button className="hover:opacity-50">
            <FaRegHeart size={25} />
          </button>
          <button className="hover:opacity-50">
            <FaRegComment size={25} />
          </button>
          <button className="hover:opacity-50">
            <FaRegPaperPlane size={25} />
          </button>
          <button className="absolute right-0 hover:opacity-50">
            <FaRegBookmark size={25} />
          </button>
        </div>
        <div className="w-full py-3 text-base text-black-900 font-bold">
          좋아요 {likeCount} 개
        </div>
        <div className="w-full">{children}</div>
        <div className="w-full text-sm text-gray-500 cursor-pointer hover:opacity-50">
          댓글 {commentCount}개 모두 보기
        </div>
        <div className="w-full flex flex-row items-center">
          <AutoResizingTextarea setValue={setComment} />

          <button
            className={`text-blue-400 text-sm font-bold
            ${comment === "" ? "hidden" : null}`}
          >
            게시
          </button>
          <button title="이모티콘" className="hover:opacity-50">
            <BsEmojiSmile size={12} />
          </button>
        </div>
        <Modal
          isOpen={modal}
          onClose={() => {
            setModal(false);
          }}
        >
          <div
            className="w-[400px] h-auto
            md:h-3/4 md:w-[300px] sm:w-auto
            flex flex-col gap-4
            text-center overflow-y-auto py-4"
          >
            <button className="text-red-500 font-bold">신고</button>
            <hr />
            <button className="text-red-500 font-bold">팔로우 취소</button>
            <hr />
            <button>즐겨찾기에 추가</button>
            <hr />
            <button>게시물로 이동</button>
            <hr />
            <button>공유대상...</button>
            <hr />
            <button>링크복사</button>
            <hr />
            <button>퍼가기</button>
            <hr />
            <button>이 계정 정보</button>
            <hr />
            <button
              onClick={() => {
                setModal(false);
              }}
            >
              취소
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

const AutoResizingTextarea = ({ setValue }) => {
  const handleInput = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    setValue(event.target.value);
  };

  return (
    <textarea
      className="flex-grow px-0 py-0 resize-none overflow-hidden
      text-sm border-0"
      rows={1}
      placeholder="댓글 달기..."
      onInput={(e) => {
        handleInput(e);
      }}
    />
  );
};

export { Post, AutoResizingTextarea };
