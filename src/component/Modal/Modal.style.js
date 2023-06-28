import { styled } from "styled-components";

export const Outer = styled.div`
  position: absolute;
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
  width: 900px;
  height: 800px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 110px 90px;

  /* 포탈 사용시 제거 */
  z-index: 6;

  background-color: var(--color-main2);
  border-radius: 70px;
`;
