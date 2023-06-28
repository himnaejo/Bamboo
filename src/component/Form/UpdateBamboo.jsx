import "../../style/App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const UpdateBamboo = ({ auth, db, bamboos, setBamboos, bamboo }) => {
  const navigator = useNavigate();
  // 유저 정보 리덕스로 전역 관리
  const user = auth.currentUser;

  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      if (user !== null) {
        setUserId(user.uid);
        setUserEmail(user.email);
      }
    });
  }, [auth]);

  //   const deleteBamboo = async event => {
  //     if (user === null) {
  //       alert("로그인이 필요합니다.");
  //       // issue. 로그인을 안했을 경우 게시글을 볼 수가 없습니다.
  //       navigator("/signin");
  //     } else {
  //       const bambooRef = doc(db, "Bamboos", bamboo.id);
  //       await deleteDoc(bambooRef);

  //       setTodos(prev => {
  //         return prev.filter(element => element.id !== bamboo.id);
  //       });
  //     }
  //   };
  return (
    <>
      <p>제목</p>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
      <p>내용</p>
      <textarea type="text" value={contents} onChange={e => setContents(e.target.value)}></textarea>
      {/* <button
        onClick={() => {
          addBamboo();
        }}
      >
        확인
      </button> */}
      {/* <button
        onClick={() => {
          deleteBamboo();
        }}
      >
        삭제
      </button> */}
    </>
  );
};

export default UpdateBamboo;
