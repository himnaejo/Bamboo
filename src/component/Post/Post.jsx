import * as St from "./Post.style";
import React, { useEffect, useState } from "react";
import EditModal from "component/Modal/EditModal";
import basic from "assets/basic.jpg";

// @Todo 유저 프로필 사진 가져오기
const Post = ({ key, photoURL, bamboo, setBamboos }) => {
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    setProfileImg(photoURL);
  }, [photoURL]);

  const contentEditOpenModal = () => setContentEditOpen(true);
  const [contentEditOpen, setContentEditOpen] = useState(false);

  return (
    <St.BambooCard>
      <St.Flex>
        {profileImg === null ? (
          <St.ProfilePhoto src={basic} alt="프로필이미지" />
        ) : (
          <St.ProfilePhoto src={profileImg} alt="프로필이미지" />
        )}
        <St.P fontSize={20}>{bamboo.displayName}</St.P>
        <St.Button onClick={contentEditOpenModal}>{/* 모달 버튼 */}</St.Button>
        {contentEditOpen && (
          <EditModal SetIsOpen={setContentEditOpen} bamboo={bamboo} setBamboos={setBamboos} />
        )}
      </St.Flex>
      <St.P fontSize={30}>{bamboo.title}</St.P>
      <St.P fontSize={20}>{bamboo.content}</St.P>
    </St.BambooCard>
  );
};

export default Post;
