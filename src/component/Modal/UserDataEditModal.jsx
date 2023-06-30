import * as St from "./Modal.style";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "modules/firebase";
import { Button } from "component/Button/Button.style";

const UserDataEditModal = ({ SetIsOpen }) => {
  const closeModal = () => {
    SetIsOpen(false);
  };

  const [user, setUser] = useState({});
  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [errMsg, setErrMsg] = useState();
  const printError = error => {
    switch (error.code) {
      case "auth/user-not-found" || "auth/wrong-password":
        return setErrMsg("이메일 혹은 비밀번호가 일치하지 않습니다.");
      case "auth/email-already-in-use":
        return setErrMsg("이미 사용하는 이메일입니다.");
      case "auth/weak-password":
        return setErrMsg("비밀번호를 6자 이상 입력해주세요");
      case "auth/missing-password":
        return setErrMsg("비밀번호가 틀립니다.");
      case "auth/invalid-email":
        return setErrMsg("유효하지 않은 이메일 입니다.");
      case "auth/admin-restricted-operation":
        return setErrMsg("필수입력 사항을 작성해주세요.");
      case "auth/internal-error":
        return setErrMsg("잘못된 요청입니다.");
      case "auth/network-request-failed":
        return setErrMsg("네트워크 연결에 실패 하였습니다.");
      default:
        console.log("New Error code:", error.code);
        setErrMsg("새로운 오류");
        break;
    }
  };

  const update = () => {
    try {
      updateProfile(auth.currentUser, {
        displayName: user.displayName,
        photoURL: user.photoURL
      });
    } catch (error) {
      printError(error);
    }
  };

  const inputCaption = (type, name, required) => ({
    type,
    name,
    id: name,
    value: user[name],
    onChange,
    required
  });
  const requiredPoint = <span style={{ color: "red" }}>*</span>;

  return (
    <St.Outer>
      <St.Inner>
        <St.From>
          <St.Label htmlFor="photoUrl">프로필 이미지</St.Label>
          <St.Input {...inputCaption("file", "photoUrl")}></St.Input>
          <St.Label htmlFor="email">이메일 {requiredPoint}</St.Label>
          <St.Input {...inputCaption("email", "email", "required")} disabled></St.Input>
          <St.Label htmlFor="password">비밀번호 {requiredPoint}</St.Label>
          <St.Input {...inputCaption("password", "password", "required")}></St.Input>
          <St.Label htmlFor="passwordConfirm">비밀번호 확인 {requiredPoint}</St.Label>
          <St.Input {...inputCaption("password", "passwordConfirm", "required")}></St.Input>
          <St.Label htmlFor="displayName">닉네임</St.Label>
          <St.Input {...inputCaption("text", "displayName", "required")}></St.Input>
          <St.Label htmlFor="info">자기소개</St.Label>
          <St.Input {...inputCaption("text", "info")}></St.Input>
          {errMsg && <p>{errMsg}</p>}
          <St.Flex>
            <Button position={"modal"} onClick={update}>
              수정하기
            </Button>
            <Button position={"modal"} type={"button"} onClick={closeModal}>
              닫기
            </Button>
          </St.Flex>
        </St.From>
      </St.Inner>
    </St.Outer>
  );
};

export default UserDataEditModal;
