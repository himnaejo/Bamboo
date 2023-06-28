import { useState } from "react";
import { useDispatch } from "react-redux";

import { globalCloseModal } from "redux/modules/modalStatus";

import * as St from "./User.style";
import { Button } from "component/Button/Button.style";

const UserDataEdit = () => {
  console.log("모달 유저 수정 렌더링");
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(globalCloseModal(false));
  };

  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const inputCaption = (type, name, required) => ({
    type,
    name,
    value: user[name],
    onChange,
    required
  });

  const point = <span style={{ color: "red" }}>*</span>;

  return (
    <St.From>
      <St.Label htmlFor="email">이메일 {point}</St.Label>
      <St.Input {...inputCaption("email", "email", "required")}></St.Input>
      <St.Label htmlFor="password">비밀번호 {point}</St.Label>
      <St.Input {...inputCaption("password", "password", "required")}></St.Input>
      <St.Label htmlFor="password">비밀번호 확인 {point}</St.Label>
      <St.Input {...inputCaption("password", "password", "required")}></St.Input>
      <St.Label htmlFor="nickname">닉네임 {point}</St.Label>
      <St.Input {...inputCaption("text", "displayName", "required")}></St.Input>
      <St.Label htmlFor="info">자기소개</St.Label>
      <St.Input {...inputCaption("text", "info")}></St.Input>
      <Button position={"sign"}>수정</Button>
      <Button position={"modal"} type={"button"} onClick={() => closeModal()}>
        닫기
      </Button>
    </St.From>
  );
};

export default UserDataEdit;
