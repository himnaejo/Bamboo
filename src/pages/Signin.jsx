// App.js
import "style/App.css";
import { useEffect, useState } from "react";
import { auth } from "firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import Header from "component/Header/Header";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log("user", user);
    });
  }, []);

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

  const signUp = async event => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user", userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error with signUp", errorCode, errorMessage);
    }
  };
  const signIn = async event => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("user with signIn", userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error with signIn", errorCode, errorMessage);
    }
  };
  const logOut = async event => {
    event.preventDefault();
    await signOut(auth);
  };

  return (
    <>
      <Header />
      <div className="App">
        <h2>로그인 페이지</h2>
        <form>
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
          <button onClick={signUp}>회원가입</button>
          <button onClick={signIn}>로그인</button>
          <button onClick={logOut}>로그아웃</button>
        </form>
      </div>
    </>
  );
};

export default Signin;