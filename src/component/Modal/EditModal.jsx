import * as St from "./PostModal.style";
import { useState } from "react";
import { Button } from "component/Button/Button.style";
import { useSelector } from "react-redux";
import { deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { db } from "modules/firebase";

// 포탈 사용해서 최상단으로 올리기
// 수정 기능 구현하기
// 삭제 기능 구현하기
const EditModal = ({ SetIsOpen, bamboo, setContentsData }) => {
  const closeModal = () => SetIsOpen(false);

  const { uid } = useSelector(state => state.userInfo);

  const [content, setContent] = useState({});
  const onChange = event => {
    const { name, value } = event.target;
    setContent({ ...content, [name]: value });
  };

  const updateBamboo = async () => {
    if (uid === null) {
      alert("로그인이 필요합니다.");
    } else if (uid !== bamboo.uid) {
      alert("게시물을 작성한 유저가 아닙니다.");
    } else {
      const bambooRef = doc(db, "bamboos", bamboo.id);
      await updateDoc(bambooRef, { ...bamboo, ...content });

      setContentsData(prev => {
        return prev.map(element => {
          if (element.id === bamboo.id) {
            return { ...element, ...bamboo, ...content };
          } else {
            return element;
          }
        });
      });
    }
  };

  const deleteBamboo = async event => {
    // if (uid === null) {
    //   alert("로그인이 필요합니다.");
    // } else if (uid !== bamboo.uid) {
    //   alert("게시물을 작성한 유저가 아닙니다.");
    // } else {
    const bambooRef = doc(db, "bamboos", bamboo.id);
    await deleteDoc(bambooRef);
    setContentsData(prev => prev.filter(element => element.id !== bamboo.id));
  };
  // };

  const inputCaption = (type, name, required) => ({
    type,
    name,
    id: name,
    value: content[name],
    onChange,
    required
  });

  return (
    <St.Outer>
      <St.Inner>
        <St.Form>
          <St.Label htmlFor="title">제목</St.Label>
          <St.Input {...inputCaption("title")} height={40} />
          <St.Label htmlFor="content">내용</St.Label>
          <St.Input {...inputCaption("content")} height={250} as={"textarea"} />
          <St.Flex>
            <Button position={"modal"} onClick={updateBamboo}>
              수정
            </Button>
            <Button position={"modal"} onClick={deleteBamboo} marginValue={150}>
              삭제
            </Button>
            <Button position={"modal"} type={"button"} onClick={closeModal}>
              닫기
            </Button>
          </St.Flex>
        </St.Form>
      </St.Inner>
    </St.Outer>
  );
};

export default EditModal;
