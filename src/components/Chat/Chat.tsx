import { sendMessage as sendMessageThunk } from 'actions';
import {
  LOGIN_CACHE_KEY,
  messagesInitialState,
  messagesSelectors,
  useGetMessagesQuery,
  useLoginMutation,
} from 'api';
import { MessageItem } from 'components';
import { ChangeEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import { CHANNEL_ID } from 'src/consts';
import { useAppDispatch } from 'store';
import styled from 'styled-components';
import { Button, Input, Paper } from 'ui';

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
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesAnchorDivRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState<string>('');

  const {
    data: entityMessages = messagesInitialState,
    isLoading,
    isUninitialized,
  } = useGetMessagesQuery(CHANNEL_ID);

  const messages = messagesSelectors.selectAll(entityMessages);

  const initialMessagesLoaded = !isUninitialized && !isLoading;

  const messagesElements = useMemo(
    () => messages.map((message) => <MessageItem key={message.id} message={message} />),
    [messages],
  );

  const [, { user }] = useLoginMutation({
    fixedCacheKey: LOGIN_CACHE_KEY,
    selectFromResult: (state) => ({
      user: state.data,
    }),
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (initialMessagesLoaded) {
      messagesAnchorDivRef.current?.scrollIntoView({ behavior: 'auto' });
    }
  }, [initialMessagesLoaded]);

  useEffect(() => {
    messagesAnchorDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const sendMessage = () => {
    if (!text || !user) {
      return;
    }

    dispatch(sendMessageThunk({ userId: user.id, message: text }));

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
          {messagesElements}
          <div ref={messagesAnchorDivRef} />
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
