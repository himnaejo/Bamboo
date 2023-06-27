import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { styled } from "styled-components";
import { Button } from "component/Button/StButton";
import bamboo_logo from "assets/bamboo_logo.png";
import basic from "assets/basic.jpg";

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
      <h1 style={{ display: "none" }}>&lt;&gt;Bamboo&lt;&#47;&gt;</h1>
      {/* 로고 위치 잡기 */}
      <Link to="/">
        <Logo src={bamboo_logo} alt="" />
      </Link>
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
      <Link to={"profile/1"}>
        <ProfileImg src={basic} alt="프로필이미지" />
      </Link>
    </StHeader>
  );
};
// 스타일 컴포넌트 따로 빼기
const StHeader = styled.header`
  width: 100%;
  height: 150px;

  background-color: var(--color-main3);
`;
export default Header;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 10px;
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 10px;
  clip-path: circle(50%);
`;

// const StHeaer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: var(--color-main3);
//   color: white;
//   padding: 10px;
// `;
