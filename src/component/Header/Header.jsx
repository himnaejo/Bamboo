import * as St from "./Header.style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "modules/firebase";
import { signOut } from "firebase/auth";
import bamboo_logo from "assets/bamboo_logo.png";
import basic from "assets/basic.jpg";
import { Button } from "component/Button/Button.style";
import SignInModal from "component/Modal/SignInModal";
import SignUpModal from "component/Modal/SignUpModal";
import { logoutUser } from "redux/modules/userInfo";

// @Todo 모달 공통 컴포넌트로 만들기
const Header = () => {
  const dispatch = useDispatch();
  const { uid, photoURL } = useSelector(state => state.userInfo);
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    setProfileImg(photoURL);
  }, [photoURL]);

  const signInOpenModal = () => SetSignInOpen(true);
  const [signInOpen, SetSignInOpen] = useState(false);

  const signUpOpenModal = () => setSignUpOpen(true);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const logOut = async () => {
    await signOut(auth);
    dispatch(logoutUser());
  };

  return (
    <St.Header>
      <h1 style={{ display: "none" }}>&lt;&gt;Bamboo&lt;&#47;&gt;</h1>

      <St.HomeLink to="/" style={{ gridColumn: "2/3" }}>
        <St.Logo src={bamboo_logo} alt="Logo" />
      </St.HomeLink>

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
      ) : profileImg === null ? (
        <St.ProfileLink to={`profile/${uid}`}>
          <St.ProfileImg src={basic} alt="프로필이미지" />
        </St.ProfileLink>
      ) : (
        <St.ProfileLink to={`profile/${uid}`}>
          <St.ProfileImg src={profileImg} alt="프로필이미지" />
        </St.ProfileLink>
      )}

      {signInOpen && <SignInModal SetIsOpen={SetSignInOpen} />}
      {signUpOpen && <SignUpModal SetIsOpen={setSignUpOpen} />}
    </St.Header>
  );
};

export default Header;
