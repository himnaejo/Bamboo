import { styled } from "styled-components";
import "style/color.css";
import bamboo_logo from "assets/bamboo_logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState();

  const logOut = async event => {
    event.preventDefault();
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, []);

  return (
    <StHeader>
      <div>
        <Logo src={bamboo_logo} alt="" />
        <h1>&lt;&gt;Bamboo&lt;&#47;&gt;</h1>
      </div>
      <Link to={"signin"}>
        {user === null ? (
          <Btn position={"header"}>로그인</Btn>
        ) : (
          <Btn position={"header"} onClick={logOut}>
            로그아웃
          </Btn>
        )}
      </Link>
    </StHeader>
  );
};

export default Header;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 23px;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-main3);
  color: white;
  padding: 20px;
`;

const Btn = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: var(--color-main1);
`;
