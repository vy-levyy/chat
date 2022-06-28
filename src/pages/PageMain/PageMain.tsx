import { LOGIN_CACHE_KEY, useLoginMutation } from 'api/user';
import { Chat, FormLogin } from 'components';
import { FC } from 'react';
import styled from 'styled-components';
import { Page } from '../shared/Page';

type Props = {};

const FormLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  flex-wrap: wrap;
  height: 170px;
  margin-top: 20vh;
`;

const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 545px;
  flex-wrap: wrap;
  height: calc(100% - 40px);
  padding: 20px 20px;
`;

export const PageMain: FC<Props> = () => {
  const [, { user }] = useLoginMutation({
    fixedCacheKey: LOGIN_CACHE_KEY,
    selectFromResult: (state) => ({
      user: state.data,
    }),
  });

  const isLoggedIn = !!user;

  return (
    <Page>
      {!isLoggedIn && (
        <FormLoginContainer>
          <FormLogin />
        </FormLoginContainer>
      )}
      {isLoggedIn && (
        <ChatContainer>
          <Chat />
        </ChatContainer>
      )}
    </Page>
  );
};
