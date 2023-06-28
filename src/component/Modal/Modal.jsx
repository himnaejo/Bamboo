import styled from "styled-components";
import "../../style/App.css";
import React, { useState } from "react";

const Modal = props => {
  const [isOpen, SetIsOpen] = useState(false);

  const openModal = () => {
    SetIsOpen(true);
  };

  const closeModal = () => {
    SetIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => {
          openModal();
        }}
      >
        모달
      </button>
      {isOpen && (
        <StModalBox>
          <StModalContents>
            {props.children}
            <button
              onClick={() => {
                closeModal();
              }}
            >
              닫기
            </button>
          </StModalContents>
        </StModalBox>
      )}
    </>
  );
};

const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContents = styled.div`
  background-color: var(--color-main2);
  padding: 20px;
  width: 70%;
  height: 50%;
  border-radius: 70px;
`;

export default Modal;
