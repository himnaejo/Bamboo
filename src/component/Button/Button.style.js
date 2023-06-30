import { styled } from "styled-components";

import * as Styled from "./Button.constants";

export const Button = styled.button`
  ${props => `
  width: ${Styled.BUTTON_WIDTH_MAP[props.position]}px;
  height: ${Styled.BUTTON_HEIGHT_MAP[props.position]}px;
  background-color: ${Styled.BUTTON_COLOR_MAP[props.position]};
  border-radius: ${Styled.BUTTON_BORDER_MAP[props.position]}px;
  `}

  align-self: center;
  margin: ${Mg => `0px ${Mg.marginValue}px`};
  font-size: 20px;
  font-weight: 600;
  background: ${props => props.background};
  transition: 500ms;

  ${props =>
    props.hoverStyle === "shadow"
      ? `
      &:hover
      {background-color: transparent;
        box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
        font-size: 1.3rem;`
      : ""}
`;
