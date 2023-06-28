import { useState } from "react";
import { styled } from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import List from "component/List/List";

const Form = () => {
  // 인풋 관련
  const INIT_VALUE = { title: "", contents: "", postData: Date.now(), writer: "email" };
  const [news, setNews] = useState(INIT_VALUE);

  const onChangeHandler = event => {
    const { name, value } = event.target;
    setNews({ ...news, [name]: value });
  };

  // 뉴스 추가 관련
  const [feeds, setFeeds] = useState([]);

  const onSubmitAddHandler = async e => {
    e.preventDefault();
    if (news.title === "" || news.contents === "") return;

    // 인풋 입력값을 파이어베이스에 추가
    try {
      const docRef = await addDoc(collection(db, "bamboos"), news);
      const newNews = { ...news, id: docRef.id };
      setFeeds(prevFeeds => [...prevFeeds, newNews]);
      setNews(INIT_VALUE);
      console.log("뉴스가 성공적으로 추가되었습니다!");
    } catch (error) {
      console.error("뉴스 추가 중 오류가 발생했습니다: ", error);
    }
  };

  return (
    <>
      <StForm onSubmit={onSubmitAddHandler}>
        <StDiv>
          <label>제목</label>
          <StInput
            type="text"
            name="title"
            value={news.title}
            onChange={onChangeHandler}
            required
          />
          <label>내용</label>
          <StText
            type="text"
            name="contents"
            value={news.contents}
            onChange={onChangeHandler}
            required
          />
          <StButton type="submit">추가</StButton>
        </StDiv>
      </StForm>
      <List feeds={feeds} setFeeds={setFeeds} />
    </>
  );
};

export default Form;

const StForm = styled.form`
  background: none;
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
  border: 0.1rem solid var(--color-main2);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: none;
    box-shadow: 0 0 15px 5px var(--color-main2);
  }
`;
