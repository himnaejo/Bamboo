import * as St from "./Header.style";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom/dist";
import { auth } from "modules/firebase";
import { signOut } from "firebase/auth";
import bamboo_logo from "assets/bamboo_logo.png";
import { Button } from "component/Button/Button.style";
import SignInModal from "component/Modal/SignInModal";
import SignUpModal from "component/Modal/SignUpModal";
import UserDataEditModal from "component/Modal/UserDataEditModal";

// @Todo 모달 공통 컴포넌트로 만들기
const Header = () => {
  const navigate = useNavigate();
  const { uid, photoURL } = useSelector(state => state.userInfo);
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    setProfileImg(photoURL);
  }, [photoURL]);

  const signInOpenModal = () => SetSignInOpen(true);
  const [signInOpen, SetSignInOpen] = useState(false);

  const signUpOpenModal = () => setSignUpOpen(true);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const userEditOpenModal = () => setUserEditOpen(true);
  const [userEditOpen, setUserEditOpen] = useState(false);

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <St.Header>
      <h1 style={{ display: "none" }}>&lt;&gt;Bamboo&lt;&#47;&gt;</h1>

      <Link to="/" style={{ gridColumn: "2/3" }}>
        <St.Logo src={bamboo_logo} alt="Logo" />
      </Link>
      {profileImg === null ? (
        <h2 style={{ fontSize: "20px", alignSelf: "center" }}>이미지가 없습니다.</h2>
      ) : (
        <img
          style={{ borderRadius: "100%", alignSelf: "center" }}
          src={profileImg}
          alt="Profile"
        ></img>
      )}

      <Button position={"header"} column={"5/6"} onClick={userEditOpenModal}>
        수정하기
      </Button>
      {uid === null ? (
        <Button position={"header"} column={"9/10"} onClick={signInOpenModal}>
          로그인
        </Button>
      ) : (
        <Button position={"header"} column={"9/10"} onClick={logOut}>
          로그아웃
        </Button>
      )}
      {uid === null ? (
        <Button position={"header"} column={"10/11"} onClick={signUpOpenModal}>
          회원가입
        </Button>
      ) : (
        <Button position={"header"} column={"10/11"} onClick={() => navigate(`/profile${uid}`)}>
          마이페이지
        </Button>
      )}

      {signInOpen && <SignInModal SetIsOpen={SetSignInOpen} />}
      {signUpOpen && <SignUpModal SetIsOpen={setSignUpOpen} />}
      {userEditOpen && <UserDataEditModal SetIsOpen={setUserEditOpen} />}
    </St.Header>
  );
};

export default Header;
