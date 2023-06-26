import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Header from "component/Header/Header";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = event => {
    const {
      target: { name, value }
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const signIn = async event => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header></Header>
      <h2>로그인 페이지</h2>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label>이메일 : </label>
          <input type="email" value={email} name="email" onChange={onChange} required></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            required
          ></input>
        </div>
        <button onClick={signIn}>로그인</button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </button>
      </form>
    </>
  );
};

export default Signin;
