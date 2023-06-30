// import { useCallback, useEffect, useState } from "react";

// 커스텀 훅 만들기

// const usePrintError = error => {
//   const [errMsg, setErrMsg] = useState();

//   const printErr = useCallback(() => {
//     switch (error) {
//       case "auth/user-not-found" || "auth/wrong-password":
//         return setErrMsg("이메일 혹은 비밀번호가 일치하지 않습니다.");
//       case "auth/email-already-in-use":
//         return setErrMsg("이미 사용하는 이메일입니다.");
//       case "auth/weak-password":
//         return setErrMsg("비밀번호를 6자 이상 입력해주세요");
//       case "auth/missing-password":
//         return setErrMsg("비밀번호가 틀립니다.");
//       case "auth/invalid-email":
//         return setErrMsg("유효하지 않은 이메일 입니다.");
//       case "auth/admin-restricted-operation":
//         return setErrMsg("필수입력 사항을 작성해주세요.");
//       case "auth/internal-error":
//         return setErrMsg("잘못된 요청입니다.");
//       case "auth/network-request-failed":
//         return setErrMsg("네트워크 연결에 실패 하였습니다.");
//       case undefined:
//         return setErrMsg("언디파인.");
//       default:
//         console.log("New Error code:", error);
//     }
//   }, []);

//   return [errMsg, printErr];
// };

// export default usePrintError;
