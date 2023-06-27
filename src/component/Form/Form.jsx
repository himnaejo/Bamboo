import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNews } from "redux/modules/news";
import { styled } from "styled-components";
import { db } from "firebase.js";

const Form = () => {
  // 인풋 관련
  const INIT_VALUE = { title: "", contents: "", postId: Date.now(), writer: "email" };
  const [news, setNews] = useState(INIT_VALUE);

  const onChangeHandler = event => {
    const { name, value } = event.target;
    setNews({ ...news, [name]: value });
  };

  // 뉴스 추가 관련
  const dispatch = useDispatch();

  const onSubmitAddHandler = async e => {
    e.preventDefault();
    if (news.title === "" || news.contents === "") return;

    // 인풋입력값을 파이어 베이스에 추가
    // try 블록 내에서는 예외가 발생할 수 있는 코드를 실행.
    // 예외가 발생하면 catch 블록으로 넘어가서 예외를 처리한다.
    try {
      const docRef = await addDoc(collection(db, "bamboos"), news);
      const newNews = { ...news, id: docRef.id };
      dispatch(addNews(newNews));
      setNews(INIT_VALUE);
      console.log("News added successfully!");
    } catch (error) {
      console.error("Error adding news: ", error);
    }
  };

  return (
    <StForm onSubmit={onSubmitAddHandler}>
      <StDiv>
        <label>제목</label>
        <StInput type="text" name="title" value={news.title} onChange={onChangeHandler} required />
        <label>내용</label>
        <StText
          type="text"
          name="contents"
          value={news.contents}
          onChange={onChangeHandler}
          required
        />
        <StButton type="submit">Add</StButton>
      </StDiv>
    </StForm>
  );
};

export default Form;

const StForm = styled.form`
  background: none;
  margin: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 800px;
  display: flex;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-left: 50px;
  margin-top: 10px;
`;

const StInput = styled.input`
  width: 600px;
  height: 60px;
  font-size: 15px;
  border-radius: 30px;
  border: 1px solid #aaaaaa;
  padding-left: 20px;
  background-color: white;

  &:focus {
    outline: none;

    &::placeholder {
      color: #aaaaaa;
    }
  }
`;

const StText = styled.textarea`
  width: 600px;
  height: 450px;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid #aaaaaa;
  &:focus {
    outline: none;
  }
`;

const StButton = styled.button`
  height: 40px;
  width: 50px;
  color: #424141;
  margin-left: 40px;
  border: 0.1rem solid var(--color-main2);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: none;
    box-shadow: 0 0 15px 5px var(--color-main2);
  }
`;
