import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }
`;

export const lightTheme = {
  bg: '#ffffff',
  text: '#000000',
};

export const darkTheme = {
  bg: '#121212',
  text: '#ffffff',
};
