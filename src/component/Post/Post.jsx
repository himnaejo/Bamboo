import * as St from "./Post.style";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import EditModal from "component/Modal/EditModal";
import basic from "assets/basic.jpg";
import { db } from "modules/firebase";

// @Todo 유저 프로필 사진 가져오기
const Post = ({ title, content, contentId, uid, displayName, photoURL }) => {
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    setProfileImg(photoURL);
  }, [photoURL]);

  const [contentsData, setContentsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const initialValue = [];

      const q = query(collection(db, "feeds"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(doc => {
        initialValue.push({ id: doc.id, ...doc.data() });
      });

      setContentsData(initialValue);
    };
    fetchData();
  }, []);

  const bamboo = contentsData.find(data => data.uid === uid);

  const contentEditOpenModal = () => setContentEditOpen(true);
  const [contentEditOpen, setContentEditOpen] = useState(false);

  return (
    <St.BambooCard id={contentId}>
      <St.Flex>
        {profileImg === null ? (
          <St.ProfilePhoto src={basic} alt="프로필이미지" />
        ) : (
          <St.ProfilePhoto src={profileImg} alt="프로필이미지" />
        )}
        <St.P fontSize={20}>{displayName}</St.P>
        <St.Button onClick={contentEditOpenModal}>{/* 모달 버튼 */}</St.Button>
        {contentEditOpen && (
          <EditModal
            SetIsOpen={setContentEditOpen}
            bamboo={bamboo}
            // contentsData={contentsData}
            setContentsData={setContentsData}
          />
        )}
      </St.Flex>
      <St.P fontSize={30}>{title}</St.P>
      <St.P fontSize={20}>{content}</St.P>
    </St.BambooCard>
  );
};

export default Post;
