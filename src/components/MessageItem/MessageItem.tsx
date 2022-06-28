import { FC } from 'react';
import { IMessage } from 'models/message';
import { textStyle } from 'styles';
import styled, { css } from 'styled-components';

type Props = {
  message: IMessage;
};

const messageTextStyle = css`
  ${textStyle}
  color: ${(props) => props.theme.palette.white100};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  ${messageTextStyle}
  font-size: 12.5px;
  font-weight: 700;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 5px;
`;

const Body = styled.div`
  ${messageTextStyle}
  font-size: 13px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

export const MessageItem: FC<Props> = ({ message }) => (
  <Container>
    <Header>{message.user.name}</Header>
    <Body>{message.value}</Body>
  </Container>
);
