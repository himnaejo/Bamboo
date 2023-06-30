import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 190px;
`;

export const Button = styled.button`
  position: relative;
  grid-column: 12/13;
  grid-row: 1/2;

  width: 45px;
  height: 45px;

  border-radius: 100%;
  &::after {
    position: absolute;

    font-size: 24px;
    font-weight: 700;

    transform: translate(-50%, -75%);
    content: "...";
  }
`;
