import { textStyle } from 'src/styles';
import styled from 'styled-components';

export const Input = styled.input`
  ${textStyle}
  background-color: ${(props) => props.theme.palette.gray200};
  border-radius: 4px;
  border: 1px solid rgb(66, 66, 66);
  padding: 9px 13px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
