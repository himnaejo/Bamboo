import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const BambooCard = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(12, 50px);
  grid-template-rows: repeat(12, 50px);

  width: 650px;
  height: 650px;

  margin: 50px;
  padding: 25px;

  background-color: var(--color-main2);
  border-radius: 70px;
`;

export const DefaultPhoto = styled.img`
  width: 90px;
  height: 90px;

  grid-column: 1/3;
  grid-row: 1/3;

  background-color: #ffffff;
  border-radius: 100%;
`;

export const ProfilePhoto = styled.img`
  width: 90px;
  height: 90px;

  background-color: #ffffff;
  border-radius: 100%;
`;

export const TitleLink = styled(Link)`
  grid-column: 4/10;
  grid-row: 2/3;

  color: var(--color-black);
  font-size: 48px;
  transform: translateY(-50%);

  &:hover {
    opacity: 0.8;
  }
`;

export const ContentLink = styled(Link)`
  width: 100%;
  height: 100%;

  grid-column: 2/12;
  grid-row: 4/12;

  color: var(--color-black);

  font-size: 30px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ProfileLink = styled(Link)`
  grid-column: 1/3;
  grid-row: 1/3;

  &:hover {
    opacity: 0.8;
  }
`;
