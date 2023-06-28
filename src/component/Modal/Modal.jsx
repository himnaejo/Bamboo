import { Button } from "component/Button/Button.style";
import { Inner, Outer } from "./Modal.style";
import { useDispatch, useSelector } from "react-redux";
import { globalOpenModal } from "redux/modules/modalStatus";

const Modal = ({ form, position, children, column }) => {
  const dispatch = useDispatch();
  const { modalStatus } = useSelector(state => state.modalStatus);

  const openModal = () => {
    dispatch(globalOpenModal(true));
  };

  return (
    <>
      <Button position={position} column={column} onClick={() => openModal()}>
        {children}
      </Button>
      {modalStatus && (
        <Outer>
          <Inner>{form}</Inner>
        </Outer>
      )}
    </>
  );
};

export default Modal;
