import "../../style/App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const InputBamboo = ({ auth, db, bamboos, setBamboos }) => {
  const navigator = useNavigate();
  // 유저 정보 리덕스로 전역 관리
  const user = auth.currentUser;

  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요합니다.");
      // issue. 로그인을 안했을 경우 게시글을 볼 수가 없습니다.
      navigator("/signin");
    } else {
      setUserId(user.uid);
      setUserEmail(user.email);
    }
  }, [navigator, user]);

  const addBamboo = async () => {
    const newBamboo = { title, contents, uid: userId, userEmail };
    setBamboos(prev => {
      return [...bamboos, newBamboo];
    });
    setTitle("");
    setContents("");

    const collectionRef = collection(db, "bamboos");
    await addDoc(collectionRef, newBamboo);
  };
  return (
    <>
      <p>제목</p>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
      <p>내용</p>
      <textarea type="text" value={contents} onChange={e => setContents(e.target.value)}></textarea>
      <button
        onClick={() => {
          addBamboo();
        }}
      >
        확인
      </button>
    </>
  );
};

export default InputBamboo;
