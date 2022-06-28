import { MessageItem } from 'components';
import { IMessage } from 'models/message';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Input, Paper } from 'ui';
import { getUserMessageMock, messagesMock } from './mock';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const CustomPaper = styled(Paper)`
  flex-direction: column;
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 100px;
  overflow-y: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${(props) => props.theme.palette.black100};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.palette.gray200};
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
  border-top: 1px solid ${(props) => props.theme.palette.gray200};
`;

const CustomInput = styled(Input)`
  padding: 13px;
`;

const CustomButtom = styled(Button)`
  width: 70px;
  margin-left: 20px;
`;

export const Chat = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const messageAnchorDivRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>(messagesMock);

  const messagesComs = messages.map((message) => (
    <MessageItem key={message.id} message={message} />
  ));

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    messageAnchorDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const sendMessage = () => {
    if (!text) {
      return;
    }

    setMessages((prev) => [...prev, getUserMessageMock(text)]);
    setText('');
    inputRef.current?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const onSendMessageButtonClick = () => {
    sendMessage();
  };

  return (
    <Container>
      <CustomPaper>
        <Header />
        <Body>
          {messagesComs}
          <div ref={messageAnchorDivRef} />
        </Body>
        <Footer>
          <CustomInput
            placeholder="Write a message..."
            ref={inputRef}
            onChange={onTextChange}
            value={text}
            onKeyDown={onKeyDown}
          />
          <CustomButtom onClick={onSendMessageButtonClick}>Send</CustomButtom>
        </Footer>
      </CustomPaper>
    </Container>
  );
};
