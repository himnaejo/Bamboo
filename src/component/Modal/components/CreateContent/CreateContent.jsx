import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { addDoc, collection } from "firebase/firestore";
import { db } from "modules/firebase";

import { globalCloseModal } from "redux/modules/modalStatus";

import * as St from "./CreateContent.style";
import { Button } from "component/Button/Button.style";

const INITIAL = { title: "", content: "" };

const CreateContent = () => {
  console.log("글작성 모달 렌더링");
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(globalCloseModal(false));
  };

  const [article, setArticle] = useState("");

  const onChangeHandler = event => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const titleRef = useRef("");
  const contentRef = useRef("");
  const onSubmitHandler = async event => {
    event.preventDefault();
    if (titleRef.current.value === "" || contentRef.current.value === "")
      return alert("글을 적어주세요");

    await addDoc(collection(db, "bamboos"), article);

    setArticle(INITIAL);
  };

  const inputCaption = name =>
    name === "title"
      ? {
          name,
          column: "3/15",
          row: "3/4",
          ref: titleRef,
          value: article[name],
          onChange: onChangeHandler
        }
      : {
          as: "textarea",
          name,
          column: "3/15",
          row: "4/11",
          ref: contentRef,
          value: article[name],
          onChange: onChangeHandler
        };

  // common: name, column: "3/15", value: article[name], onChange: onChangeHandler
  return (
    <>
      <St.Form onSubmit={onSubmitHandler}>
        <St.Label htmlFor="title" column={"2/3"} row={"3/4"}>
          제목
        </St.Label>
        <St.Input {...inputCaption("title")} />
        <St.Label htmlFor="content" column={"2/3"} row={"4/5"}>
          내용
        </St.Label>
        <St.Input {...inputCaption("content")} />
        <Button position={"modal"} column={"3/4"} row={"12/13"}>
          작성하기
        </Button>
        <Button
          position={"modal"}
          column={"13/14"}
          row={"12/13"}
          type={"button"}
          onClick={() => closeModal()}
        >
          닫기
        </Button>
      </St.Form>
    </>
  );
};

export default CreateContent;
