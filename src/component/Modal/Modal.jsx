import styled from "styled-components";
import "../../style/App.css";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const Modal = ({ db, bamboos, setBamboos }) => {
  // 유저 로그인 안됬을 시 작성 로그인 모달로 이동
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isOpen, SetIsOpen] = useState(false);

  const openModal = () => {
    SetIsOpen(true);
  };

  const closeModal = () => {
    SetIsOpen(false);
  };

  const addBamboo = async () => {
    const newBamboo = { title, contents };
    setBamboos(prev => {
      return [...bamboos, newBamboo];
    });
    setTitle("");
    setContents("");

    // Firestore에서 'bamboos' 컬렉션에 대한 참조 생성하기
    const collectionRef = collection(db, "bamboos");
    // 'bamboos' 컬렉션에 newBamboo 문서를 추가합니다.
    await addDoc(collectionRef, newBamboo);
    SetIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => {
          openModal();
        }}
      >
        모달
      </button>
      {isOpen && (
        <StModalBox>
          <StModalContents>
            <p>제목</p>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
            <p>내용</p>
            <textarea
              type="text"
              value={contents}
              onChange={e => setContents(e.target.value)}
            ></textarea>
            <button
              onClick={() => {
                closeModal();
              }}
            >
              닫기
            </button>
            <button
              onClick={() => {
                addBamboo();
              }}
            >
              확인
            </button>
          </StModalContents>
        </StModalBox>
      )}
    </>
  );
};

const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContents = styled.div`
  background-color: var(--color-main3);
  padding: 20px;
  width: 70%;
  height: 50%;
  border-radius: 12px;
`;

export default Modal;
