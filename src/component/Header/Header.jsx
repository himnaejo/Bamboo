// import styled from "styled-components";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = auth.currentUser;
  useEffect(() => {
    console.log(user);
  });
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <header>
      <Link to="/">로고를 넣어주세요</Link>
      <h1>Bamboo</h1>
      {user === null ? (
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
    </header>
  );
};

export default Header;
