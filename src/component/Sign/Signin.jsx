import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "modules/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { StLabel, StInput, StFrom } from "./StSign";
import { Button } from "component/Button/Button.style";

const Signin = () => {
  const [user, setUser] = useState({});
  const navigator = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태 추가

  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const signIn = async event => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log("유저 로그인", userCredential);
      navigator(-1); // 로그인 성공 시 페이지 이동
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "오류코드", errorMessage);
      setErrorMessage("일치하지 않는 로그인 정보입니다."); // 에러 메시지 설정
    }
  };

  const inputCaption = (type, name, required) => ({
    type: type,
    name: name,
    value: user[name],
    onChange,
    required
  });

  return (
    <div className="App">
      <StFrom>
        <StLabel htmlFor="email">이메일 </StLabel>
        <StInput {...inputCaption("email", "email", "required")}></StInput>
        <StLabel htmlFor="password">비밀번호 </StLabel>
        <StInput {...inputCaption("password", "password", "required")}></StInput>
        {errorMessage && <p>{errorMessage}</p>} {/* 에러 메시지 표시 */}
        <Button position={"sign"} onClick={signIn}>
          로그인
        </Button>
        <Button
          position={"sign"}
          onClick={() => {
            navigator("/signup");
          }}
        >
          회원가입
        </Button>
      </StFrom>
    </div>
  );
};

export default Signin;
