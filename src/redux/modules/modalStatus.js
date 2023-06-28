const OPEN_MODAL = "App/modalStatus/OPEN";
const CLOSE_MODAL = "App/modalStatus/CLOSE";

export const mainOpenModal = payload => {
  return { type: OPEN_MODAL, payload };
};

// export const globalOpenModal = payload => {
//   return { type: OPEN_MODAL, payload };
// };
export const mainCloseModal = payload => {
  return { type: CLOSE_MODAL, payload };
};

export const globalCloseModal = payload => {
  return { type: CLOSE_MODAL, payload };
};

const initialState = {
  name: "",
  status: false,
  component: <></>
};

const modalStatus = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, ...action.payload };
    case CLOSE_MODAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default modalStatus;
