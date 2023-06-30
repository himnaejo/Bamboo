import React, { useEffect, useState } from "react";
import * as St from "./Post.style";
import basic from "assets/basic.jpg";

// @Todo 유저 프로필 사진 가져오기
const Post = ({ title, content, contentId, uid, displayName, photoURL }) => {
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    setProfileImg(photoURL);
  }, [photoURL]);

  return (
    <St.BambooCard id={contentId}>
      {profileImg === null ? (
        <St.ProfileLink to={`profile/${uid}`}>
          <St.DefaultPhoto src={basic} alt="프로필이미지" />
        </St.ProfileLink>
      ) : (
        <St.ProfileLink to={`profile/${uid}`}>
          <St.ProfilePhoto src={profileImg} alt="프로필이미지" />
        </St.ProfileLink>
      )}
      {/* 닉네임 스타일컴포넌트 */}
      <p>{displayName}</p>
      <St.TitleLink to={`/content/${contentId}`}>{title}</St.TitleLink>
      <St.ContentLink to={`/content/${contentId}`}>{content}</St.ContentLink>
    </St.BambooCard>
  );
};

export default Post;
