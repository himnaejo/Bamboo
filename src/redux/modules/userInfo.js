// 액션 상수
const ADD_USER = "App/userInfo/ADD";
const DELETE_USER = "App/userInfo/DELETE";
const EDIT_USER = "App/userInfo/DONE";

// 액션 함수
export const addUser = payload => {
  return { type: ADD_USER, payload };
};
export const deleteUser = payload => {
  return { type: DELETE_USER, payload };
};
export const editUser = payload => {
  return { type: EDIT_USER, payload };
};

// 초기 값
const initialState = { userInfo: [] };

// 리덕스
const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, ...action.payload };
    case DELETE_USER:
      return { ...state, ...action.payload };
    case EDIT_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userInfo;
