import "../../style/App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const InputBamboo = ({ auth, db, bamboos, setBamboos }) => {
  const navigator = useNavigate();
  const user = auth.currentUser;

  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요합니다.");
      navigator("/signin");
    } else {
      setUserId(user.uid);
    }
  }, [navigator, user]);

  const addBamboo = async () => {
    const newBamboo = { title, contents, uid: userId };
    setBamboos(prev => {
      return [...bamboos, newBamboo];
    });
    setTitle("");
    setContents("");

    // Firestore에서 'bamboos' 컬렉션에 대한 참조 생성하기
    const collectionRef = collection(db, "bamboos");
    // 'bamboos' 컬렉션에 newBamboo 문서를 추가합니다.
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
