import { useState } from "react";

import { auth } from "modules/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { StLabel, StInput, StFrom } from "./StSign";
import { Button } from "component/Button/Button.style";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  console.log("회원가입 렌더링");
  const [user, setUser] = useState({});
  const [errMsg, setErrMsg] = useState();

  const navigate = useNavigate();

  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const signUp = async event => {
    event.preventDefault();

    switch (false) {
      case user.password === user.passwordConfirm:
        return setErrMsg("비밀번호가 일치하지 않습니다.");
      default:
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password,
            user.displayName,
            user.info
          );
          navigate("/singin");
          console.log("가입한 유저 정보", userCredential);
        } catch (error) {
          switch (error.code) {
            case "auth/invalid-email":
              return setErrMsg("유효하지 않은 이메일 입니다.");
            case "auth/weak-password":
              return setErrMsg("비밀번호를 6자 이상 입력해주세요");
            case "auth/email-already-in-use":
              return setErrMsg("이미 존재하는 이메일입니다.");
            case "auth/missing-password":
              return setErrMsg("비밀번호가 틀립니다.");
            default:
              console.log("🚀 error:", error.code);
              setErrMsg("새로운 오류");
              break;
          }
        }
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
        <StInput {...inputCaption("password", "passwordConfirm", "required")}></StInput>
        <StLabel htmlFor="nickname">닉네임 {point}</StLabel>
        <StInput {...inputCaption("text", "displayName", "required")}></StInput>
        <StLabel htmlFor="info">자기소개</StLabel>
        <StInput {...inputCaption("text", "info")}></StInput>
        {errMsg && <p>{errMsg}</p>}
        <Button position={"sign"} onClick={signUp}>
          회원가입
        </Button>
      </StFrom>
    </div>
  );
};

export default Signup;
