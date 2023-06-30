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

  /* 포탈 사용시 제거 */
  z-index: 5;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Inner = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 70px;

  /* 포탈 사용시 제거 */
  z-index: 6;

  background-color: var(--color-main2);
  border-radius: 70px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(15, 50px);
  grid-template-rows: repeat(13, 50px);
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};

  text-align: center;
  font-weight: 600;
  font-size: 22px;
`;

export const Input = styled.input`
  height: 100%;

  grid-column: ${props => props.column};
  grid-row: ${props => props.row};

  padding: 10px;

  background-color: var(--color-gray1);
  border-radius: 30px;

  font-size: 20px;
  letter-spacing: 0.5px;

  &:focus {
    background-color: var(--color-gray0);
  }
`;
