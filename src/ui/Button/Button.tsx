import styled, { css } from 'styled-components';
import { textStyle } from 'styles';

export const Button = styled.button`
  ${textStyle}
  background-color: ${(props) => props.theme.palette.blue100};
  border-radius: 8px;
  width: 100%;
  padding: 0 16px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: ${(props) => props.theme.palette.white};
  border: none;
  filter: ${(props) => props.disabled && 'brightness(0.6)'};
  transition: all 0.1s ease-out;

  &:hover {
    ${(props) => {
      if (!props.disabled) {
        return css`
          cursor: pointer;
          filter: brightness(0.8);
        `;
      }

      return null;
    }}
  }
`;
