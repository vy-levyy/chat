import { FC } from 'react';
import { PageMain } from 'pages';
import { theme } from 'src/theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
  }

  body {
    background-color: ${(props) => props.theme.palette.black100};
    margin: 0;
    height: 100%;

    & > div {
      height: 100%;
    }
  }
`;

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <PageMain />
  </ThemeProvider>
);
