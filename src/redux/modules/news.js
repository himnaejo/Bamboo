// 액션 상수
const ADD_NEWS = "App/news/ADD";
const DELETE_NEWS = "App/news/DELETE";
const EDIT_NEWS = "App/news/DONE";

// 액션 함수
export const addNews = payload => {
  return { type: ADD_NEWS, payload };
};
export const deleteNews = payload => {
  return { type: DELETE_NEWS, payload };
};
export const editNews = payload => {
  return { type: EDIT_NEWS, payload };
};

// 초기 값
const initialState = [];

// 리덕스
const news = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, ...action.payload };
    case DELETE_NEWS:
      return { ...state, ...action.payload };
    case EDIT_NEWS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default news;
