import React from "react";
import * as St from "./Post.style";
// import { useSelector } from "react-redux";

// @Todo 유저 프로필 사진 가져오기
const Post = ({ title, content }) => {
  return (
    <St.BambooCard>
      <St.Title>{title}</St.Title>
      <St.Content>{content}</St.Content>
    </St.BambooCard>
  );
};

export default Post;
