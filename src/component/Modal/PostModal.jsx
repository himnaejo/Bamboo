import * as St from "./PostModal.style";
import { useState } from "react";
import { db } from "modules/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Button } from "component/Button/Button.style";

const PostModal = ({ bamboos, setBamboos, SetIsOpen }) => {
  const INITIAL = { title: "", content: "" };
  const [content, setContent] = useState({});

  const closeModal = () => {
    SetIsOpen(false);
  };

  const onChangeHandler = event => {
    const { name, value } = event.target;
    setContent({ ...content, [name]: value });
  };

  const onSubmitHandler = async event => {
    event.preventDefault();

    const newBamboo = { ...content };

    setBamboos(() => [...bamboos, newBamboo]);
    setContent(INITIAL);

    const collectionRef = collection(db, "bamboos");
    await addDoc(collectionRef, newBamboo);
    closeModal();
  };

  const inputCaption = name =>
    name === "title"
      ? {
          name,
          column: "3/15",
          row: "3/4",
          value: content[name],
          required: "required",
          onChange: onChangeHandler
        }
      : {
          as: "textarea",
          name,
          column: "3/15",
          row: "4/11",
          value: content[name],
          required: "required",
          onChange: onChangeHandler
        };

  return (
    <>
      <St.Outer>
        <St.Inner>
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
        </St.Inner>
      </St.Outer>
    </>
  );
};

export default PostModal;
