import { Inner, Outer } from "./Modal.style";

const Modal = ({ form, position, children, column }) => {
  const openModal = () => {};
  console.log("🚀 ~ file: Modal.jsx:14 ~ openModal ~ openModal:", openModal);

  return (
    <>
      <Outer>
        <Inner>{form}</Inner>
      </Outer>
    </>
  );
};

export default Modal;
