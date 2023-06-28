import { styled } from "styled-components";

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

  font-size: 30px;
`;

export const Input = styled.input`
  width: 570px;
  height: 50px;

  align-self: center;

  margin: 20px;

  border-radius: 45px;
  background-color: var(--color-main2);
  opacity: 0.4;
`;
