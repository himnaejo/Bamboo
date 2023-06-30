import * as St from "./Modal.style";
import { useState } from "react";
import { Link } from "react-router-dom/dist";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth } from "modules/firebase";
import { Button } from "component/Button/Button.style";

// 깃허브 로그인 구현 안됨
const SignInModal = ({ SetIsOpen }) => {
  const closeModal = () => {
    SetIsOpen(false);
  };

  // 인풋창 렌더링
  const [user, setUser] = useState({});
  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  //에러메세지 출력
  const [errMsg, setErrMsg] = useState();
  const errorMsg = error => {
    switch (error.code) {
      case "auth/wrong-password":
        return setErrMsg("비밀번호가 틀렸습니다.");

      default:
        break;
    }
  };

  // 인풋값 지우기
  const signIn = async event => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      closeModal();
    } catch (error) {
      errorMsg(error);
    }
  };

  const googleSignIn = async () => {
    try {
      const providerGoogle = new GoogleAuthProvider();
      await signInWithPopup(auth, providerGoogle);
      closeModal();
    } catch (error) {
      errorMsg(error);
    }
  };

  const githubSignIn = async () => {
    try {
      const providerGithub = new GithubAuthProvider();
      await signInWithPopup(auth, providerGithub);
      closeModal();
    } catch (error) {
      errorMsg(error);
    }
  };

  const inputCaption = (type, name, required) => ({
    type,
    name,
    id: name,
    value: user[name],
    onChange,
    required
  });

  return (
    <St.Outer>
      <St.Inner>
        <St.Form onSubmit={signIn}>
          <St.Label htmlFor="email">이메일 </St.Label>
          <St.Input {...inputCaption("email", "email", "required")}></St.Input>
          <St.Label htmlFor="password">비밀번호 </St.Label>
          <St.Input {...inputCaption("password", "password", "required")}></St.Input>
          {errMsg && <p>{errMsg}</p>}

          {/* 비밀번호 찾기 만들기 */}
          <Link to={"/"} style={{ alignSelf: "center", width: "200px", textAlign: "center" }}>
            비밀번호를 잊으셨습니까?
          </Link>
          <St.Flex>
            <Button position={"modal"}>로그인</Button>
            {/* 버튼 > 구글이미지로 대체 */}
            <Button position={"modal"} onClick={googleSignIn}>
              google
              <br />
              로그인
            </Button>
            <Button position={"modal"} onClick={githubSignIn}>
              github
              <br />
              로그인
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

export default SignInModal;
