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

  margin: 10px;

  font-size: 20px;
  font-weight: 600;
`;
