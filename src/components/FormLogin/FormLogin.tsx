import { LOGIN_CACHE_KEY, useLoginMutation } from 'api/user';
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import { textStyle } from 'styles';
import { Button, Input, Paper } from 'ui';

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  flex-wrap: wrap;
  height: 100px;
  padding: 15px;
`;

const Loader = styled.div`
  ${textStyle}
`;

const validateName = (value: string) => /^[A-Za-z0-9]+$/g.test(value);

export const FormLogin: FC = () => {
  const [name, setName] = useState<string>('');
  const [login, { isLoading }] = useLoginMutation({ fixedCacheKey: LOGIN_CACHE_KEY });

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const join = () => {
    login({ name });
  };

  const onJoinButtonClick = () => {
    join();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      join();
    }
  };

  return (
    <Paper>
      <Content>
        {isLoading && <Loader>Loaging...</Loader>}
        {!isLoading && (
          <>
            <Input
              placeholder="Your name"
              value={name}
              onChange={onNameChange}
              onKeyDown={onKeyDown}
            />
            <Button disabled={!validateName(name)} onClick={onJoinButtonClick}>
              Join
            </Button>
          </>
        )}
      </Content>
    </Paper>
  );
};
