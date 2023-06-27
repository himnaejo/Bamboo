import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import Header from "component/Header/Header";
import { StLabel, StInput, StFrom } from "./StSign";
import { Button } from "component/Button/StButton";
import { Link } from "react-router-dom/dist";

const Signin = () => {
  const [user, setUser] = useState({});
  const navigator = useNavigate();

  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);

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
    <div className="App">
      <Header />
      <StFrom>
        <StLabel htmlFor="email">이메일 </StLabel>
        <StInput {...inputCaption("email", "email", "required")}></StInput>
        <StLabel htmlFor="password">비밀번호 </StLabel>
        <StInput {...inputCaption("password", "password", "required")}></StInput>
        {/* 비밀번호 찾기 만들기 */}
        <Link to={"/"} style={{ alignSelf: "center", width: "200px", textAlign: "center" }}>
          비밀번호를 잊으셨습니까?
        </Link>
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
