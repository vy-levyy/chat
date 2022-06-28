import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      black100: string;
      gray100: string;
      gray200: string;
      white: string;
      white100: string;
      blue100: string;
    };
  }
}
