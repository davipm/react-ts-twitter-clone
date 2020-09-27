import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
  :root {
    --primary: rgb(21, 32, 43);
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
    
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--white);
  }
  
  html {
    background-color: var(--primary);
  }
  
  html,
  body,
  #root {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 100vh;
  }

  *,
  button,
  input {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
    background: none;
    border: 0;
  }
`;
