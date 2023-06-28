import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 190px;
`;

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

export const SampleProfile = styled.p`
  width: 90px;
  height: 90px;

  grid-column: 1/3;
  grid-row: 1/3;

  background-color: #ffffff;
  border-radius: 100%;
`;

export const Title = styled.h3`
  grid-column: 4/10;
  grid-row: 2/3;

  font-size: 48px;
  transform: translateY(-50%);
`;

export const Content = styled.p`
  width: 100%;
  height: 100%;

  grid-column: 2/12;
  grid-row: 4/12;

  font-size: 48px;
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
