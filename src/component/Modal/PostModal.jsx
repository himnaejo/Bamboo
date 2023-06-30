import * as St from "./PostModal.style";
import { useState } from "react";
import { db } from "modules/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Button } from "component/Button/Button.style";
import { useSelector } from "react-redux";

const PostModal = ({ bamboos, setBamboos, setIsOpen }) => {
  //redux 유저 정보 불러오기
  const { uid, displayName, photoURL } = useSelector(state => state.userInfo);

  const closeModal = () => {
    setIsOpen(false);
  };

  const INITIAL = {
    // postData: Date.now(),
    title: "",
    content: ""
  };
  const [content, setContent] = useState({});
  const onChangeHandler = event => {
    const { name, value } = event.target;
    setContent({ ...content, [name]: value });
  };

  const onSubmitHandler = async event => {
    event.preventDefault();

    if (uid === null) {
      alert("로그인이 필요합니다.");
      // @Todo 로그인 모달 불러오기
      // navigator("/signin");
    } else {
    }
    const newBamboo = { ...content, uid, displayName, photoURL };
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
