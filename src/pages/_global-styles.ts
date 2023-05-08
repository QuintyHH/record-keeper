import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-weight: 400;
    background-color: #f5f5f5;
    position: relative;
  }

  html {
    scroll-behavior: smooth;
  }

  h1 {
    font-weight: 400; 
    font-size: 32px; 
    line-height: 40px; 
    letter-spacing: 0em; 
    font-style: normal;
  }

  h2 {
    font-weight: 400; 
    font-size: 24px; 
    line-height: 28px; 
    letter-spacing: 0em; 
    font-style: normal;
  }

  h3 {
    font-weight: 400; 
    font-size: 24px; 
    line-height: 28px; 
    letter-spacing: 0em; 
    font-style: normal;
  }

  h4 {
    font-weight: 400; 
    font-size: 24px; 
    line-height: 28px; 
    letter-spacing: 0em; 
    font-style: normal;
  }

  p {
    font-weight: 400; 
    font-size: 16px; 
    line-height: 24px; 
    letter-spacing: 0em; 
    font-style: normal;
  }

  span {
    font-weight: 400; 
    font-size: 16px; 
    line-height: 24px; 
    letter-spacing: 0em; 
    font-style: normal;
  }

  a {
    font-weight: 400; 
    font-size: 16px; 
    line-height: 24px; 
    letter-spacing: 0em; 
    font-style: normal;
    color: inherit;
    text-decoration: none;
    width: max-content;
  }

  button {
    width: max-content;
  }

  * {
    box-sizing: border-box;
    font-family: Shell Font, sans-serif; 
  }

  a, button, li {
    border-radius: 2px;
    transition: 100ms !important;
    outline-offset: 2px !important;
    box-shadow: none;
  }

  input {
    border-radius: 2px;
    transition: 100ms !important;
    outline-offset: 1px !important;      
    box-shadow: none !important;
  }

  textarea {
    border-radius: 2px;
    transition: 100ms !important;
    outline-offset: 0px !important;      
    box-shadow: none !important;
  }
`;
