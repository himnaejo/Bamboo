import { useState } from "react";
import { useDispatch } from "react-redux";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "modules/firebase";

import { globalCloseModal } from "redux/modules/modalStatus";

import * as St from "./User.style";
import { Button } from "component/Button/Button.style";

const UserSignUp = () => {
  console.log("모달 회원가입 렌더링");
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(globalCloseModal(false));
  };
  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     console.log("현재 유저 정보", user);
  //   });
  // });

  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const signUp = async event => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password,
        user.displayName
      );
      console.log("가입한 유저 정보", userCredential);
      //email과 함께 유저 정보 매치 해놓기
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "오류코드", errorMessage);
    }
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
      <St.Input {...inputCaption("password", "passwordConfirm", "required")}></St.Input>
      <St.Label htmlFor="nickname">닉네임 {point}</St.Label>
      <St.Input {...inputCaption("text", "displayName", "required")}></St.Input>
      <St.Label htmlFor="info">자기소개</St.Label>
      <St.Input {...inputCaption("text", "info")}></St.Input>
      <Button position={"sign"} onClick={signUp}>
        회원가입
      </Button>
      <Button position={"modal"} type={"button"} onClick={() => closeModal()}>
        닫기
      </Button>
    </St.From>
  );
};

export default UserSignUp;
