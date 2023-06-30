import "../../style/App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const InputBamboo = ({ auth, db, bamboos, setBamboos }) => {
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

  const addBamboo = async () => {
    if (user === null) {
      alert("로그인이 필요합니다.");
      // issue. 로그인을 안했을 경우 게시글을 볼 수가 없습니다.
      navigator("/signin");
    } else {
      const newBamboo = { title, contents, uid: userId, userEmail };
      setBamboos(prev => {
        return [...bamboos, newBamboo];
      });
      setTitle("");
      setContents("");

      const collectionRef = collection(db, "bamboos");
      await addDoc(collectionRef, newBamboo);
    }
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
