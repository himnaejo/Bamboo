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
        <Link to={"/"}>
          <Logo src={bamboo_logo} alt="" />
        </Link>
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
  width: 100px;
  height: 100px;
  margin-left: 10px;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-main3);
  color: white;
  padding: 10px;
`;

const Btn = styled.button`
  width: 50px;
  height: 30px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: var(--color-main1);
`;
