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

export const From = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  margin: 50px;
`;

export const Label = styled.label`
  width: 570px;

  align-self: center;

  margin-top: 20px;

  font-size: 1.5rem;
`;

export const Input = styled.input`
  width: 600px;
  height: 30px;

  align-self: center;

  margin: 10px;
  padding: 10px;

  border-radius: 45px;
  background-color: var(--color-gray1);

  font-size: 20px;
  letter-spacing: 0.5px;
  &:focus {
    background-color: var(--color-gray0);
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 20px;
`;
