// import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      setLogin(user);
    });
  }, []);
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <header>
      <Link to="/">로고를 넣어주세요</Link>
      <h1>Bamboo</h1>
      {login === null ? (
        <button
          onClick={() => {
            navigate("/signin");
          }}
        >
          로그인
        </button>
      ) : (
        <button onClick={logOut}>로그아웃</button>
      )}
      <p>------------------------</p>
    </header>
  );
};

export default Header;
