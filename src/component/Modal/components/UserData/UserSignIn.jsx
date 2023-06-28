import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom/dist";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "modules/firebase";

// import Modal from "component/Modal/Modal";
// import UserSignUp from "./UserSignUp";
import { globalCloseModal } from "redux/modules/modalStatus";

import * as St from "./User.style";
import { Button } from "component/Button/Button.style";

const UserSignIn = () => {
  console.log("모달 로그인 렌더링");
  const [user, setUser] = useState({});
  const navigator = useNavigate();

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(globalCloseModal(false));
  };

  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  console.log("현재 유저 정보", user);

  // 인풋값 지우기
  const signIn = async event => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log("유저 로그인", userCredential);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "오류코드", errorMessage);
    }
    navigator(-1);
  };

  const inputCaption = (type, name, required) => ({
    type: type,
    name: name,
    value: user[name],
    onChange,
    required
  });

  return (
    <St.From onSubmit={signIn}>
      <St.Label htmlFor="email">이메일 </St.Label>
      <St.Input {...inputCaption("email", "email", "required")}></St.Input>
      <St.Label htmlFor="password">비밀번호 </St.Label>
      <St.Input {...inputCaption("password", "password", "required")}></St.Input>

      {/* 비밀번호 찾기 만들기 */}
      <Link to={"/"} style={{ alignSelf: "center", width: "200px", textAlign: "center" }}>
        비밀번호를 잊으셨습니까?
      </Link>

      <Button position={"sign"}>로그인</Button>
      {/* 모달 최상단으로 빼기 */}
      {/* <Modal form={<UserSignUp />}></Modal> */}
      <Button position={"modal"} type={"button"} onClick={() => closeModal()}>
        닫기
      </Button>
    </St.From>
  );
};

export default UserSignIn;
