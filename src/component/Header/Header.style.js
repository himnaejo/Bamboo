import { Link } from "react-router-dom";
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
  /* background-color: var(--color-white); */
  /* border: 2px solid; */

  z-index: 3;
`;

export const HomeLink = styled(Link)`
  align-self: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const ProfileImg = styled.img`
  width: 70px;
  height: 70px;

  margin-left: 10px;

  border-radius: 100%;
`;

export const ProfileLink = styled(Link)`
  grid-column: 10/11;
  align-self: center;
`;
