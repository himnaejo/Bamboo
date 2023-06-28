import { styled } from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 150px;

  background-color: var(--color-main3);

  z-index: 3;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`;
