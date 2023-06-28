import { styled } from "styled-components";

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
