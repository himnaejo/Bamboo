import { Inner, Outer } from "./Modal.style";
import { useSelector } from "react-redux";

const Modal = () => {
  console.log("모달 렌더링");
  const { modalStatus, component } = useSelector(state => state.modalStatus);

  return (
    <>
      {modalStatus && (
        <Outer>
          <Inner>{component}</Inner>
        </Outer>
      )}
    </>
  );
};

export default Modal;
