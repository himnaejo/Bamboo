import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";

import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { styled } from "styled-components";

import { Button } from "component/Button/StButton";

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
    <StHeather>
      <h1 style={{ display: "none" }}>&lt;&gt;Bamboo&lt;&#47;&gt;</h1>
      {/* 로고 위치 잡기 */}
      <Link to="/">로고이미지</Link>
      {/* 버튼 위치 잡기 */}
      {user === null ? (
        <Link to={"/signin"}>
          <Button position={"header"}>로그인</Button>
        </Link>
      ) : (
        <Button position={"header"} onClick={logOut}>
          로그아웃
        </Button>
      )}
    </StHeather>
  );
};
// 스타일 컴포넌트 따로 빼기
const StHeather = styled.header`
  width: 100%;
  height: 150px;

  background-color: var(--color-main3);
`;
export default Header;
