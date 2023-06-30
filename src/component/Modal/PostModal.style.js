import { styled } from "styled-components";

export const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  z-index: 5;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Inner = styled.div`
  padding: 70px;

  background-color: var(--color-main2);
  border-radius: 70px;

  z-index: 6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  text-align: center;
  font-weight: 600;
  font-size: 22px;
`;

export const Input = styled.input`
  width: 650px;
  min-height: ${props => props.height}px;

  margin: 20px;
  padding: 20px;

  background-color: var(--color-gray1);
  border: none;
  border-radius: 30px;

  font-size: 20px;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
    background-color: var(--color-gray0);
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
