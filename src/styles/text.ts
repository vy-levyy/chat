import { css } from 'styled-components';

export const textStyle = css`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue,
    'Noto Sans Armenian', 'Noto Sans Bengali', 'Noto Sans Cherokee', 'Noto Sans Devanagari',
    'Noto Sans Ethiopic', 'Noto Sans Georgian', 'Noto Sans Hebrew', 'Noto Sans Kannada',
    'Noto Sans Khmer', 'Noto Sans Lao', 'Noto Sans Osmanya', 'Noto Sans Tamil', 'Noto Sans Telugu',
    'Noto Sans Thai', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.palette.white100};
`;
