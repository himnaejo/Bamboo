import { styled } from "styled-components";

export const StButton = styled.button`
  width: 240px;
  height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;
  border-radius: 30px;

  margin-bottom: 10px;

  font-size: 35px;
  text-align: center;

  transition: 200ms;

  &:hover {
    background-color: var(--color-white);
  }
`;

export const StAside = styled.aside`
  width: 280px;
  height: 100vh;

  padding: 20px;

  /* nav 바 2개 생길 경우
  position: absolute;
  ${props => props.f}: 0px; */

  background-color: var(--color-main1);
`;
