import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

type Props = {
  children: React.ReactNode;
};

export const Page: FC<Props> = ({ children }) => <Container>{children}</Container>;
