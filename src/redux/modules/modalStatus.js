const OPEN_MODAL = "App/modalStatus/OPEN";
const CLOSE_MODAL = "App/modalStatus/CLOSE";

export const globalOpenModal = payload => {
  return { type: OPEN_MODAL, payload };
};
export const globalCloseModal = payload => {
  return { type: CLOSE_MODAL, payload };
};

const initialState = { modalStatus: false };

const modalStatus = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalStatus: true };
    case CLOSE_MODAL:
      return { ...state, modalStatus: false };
    default:
      return state;
  }
};

export default modalStatus;
