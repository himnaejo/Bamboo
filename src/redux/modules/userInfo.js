const CURRENT_USER = "App/userInfo/CURRENT";
export const currentUser = payload => {
  return { type: CURRENT_USER, payload };
};
// const LOG_OUT = "App/userInfo/LOGOUT";

// export const logOut = payload => {
//   return { type: LOG_OUT, payload };
// };

const initialState = {
  uid: null,
  displayName: null,
  photoURL: null
};

// 리덕스
const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      console.log("리덕스 로그인 작동");
      return action.payload;
    // case LOG_OUT:
    //   console.log("리덕스 로그아웃 작동");
    //   return initialState;
    default:
      return state;
  }
};

export default userInfo;
