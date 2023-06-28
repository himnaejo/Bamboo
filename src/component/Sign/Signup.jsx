import { useState } from "react";

import { auth } from "modules/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { StLabel, StInput, StFrom } from "./StSign";
import { Button } from "component/Button/Button.style";

const Signup = () => {
  const [user, setUser] = useState({});
  console.log("🚀 user:", user);

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
    <div className="App">
      <StFrom>
        <StLabel htmlFor="email">이메일 {point}</StLabel>
        <StInput {...inputCaption("email", "email", "required")}></StInput>
        <StLabel htmlFor="password">비밀번호 {point}</StLabel>
        <StInput {...inputCaption("password", "password", "required")}></StInput>
        <StLabel htmlFor="password">비밀번호 확인 {point}</StLabel>
        <StInput {...inputCaption("password", "password", "required")}></StInput>
        <StLabel htmlFor="nickname">닉네임 {point}</StLabel>
        <StInput {...inputCaption("text", "displayName", "required")}></StInput>
        <StLabel htmlFor="info">자기소개</StLabel>
        <StInput {...inputCaption("text", "info")}></StInput>
        <Button position={"sign"} onClick={signUp}>
          회원가입
        </Button>
      </StFrom>
    </div>
  );
};

export default Signup;
