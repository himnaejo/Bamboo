import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";

import { auth } from "modules/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Modal from "component/Modal/Modal";
import UserSignIn from "component/Modal/components/UserData/UserSignIn";

import bamboo_logo from "assets/bamboo_logo.png";
import * as St from "./Header.style";
import { Button } from "component/Button/Button.style";

const Header = () => {
  console.log("헤더 렌더링");
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
    <St.Header>
      <h1 style={{ display: "none" }}>&lt;&gt;Bamboo&lt;&#47;&gt;</h1>

      <Link to="/" style={{ gridColumn: "2/3" }}>
        <St.Logo src={bamboo_logo} alt="Logo" />
      </Link>

      {user === null ? (
        <Link to={"/signin"}>
          <Button position={"header"} column={"9/10"}>
            로그인
          </Button>
        </Link>
      ) : (
        // <Modal form={<UserSignIn />} position={"header"} column={"9/10"}>로그인</Modal>
        <Button position={"header"} onClick={logOut}>
          로그아웃
        </Button>
      )}
    </St.Header>
  );
};

export default Header;
