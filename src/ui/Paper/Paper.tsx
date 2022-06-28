import styled from 'styled-components';

export const Paper = styled.div`
  background-color: ${(props) => props.theme.palette.gray100};
  border-radius: 4px;
  border: 1px solid rgb(66, 66, 66);
  padding: 6px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
