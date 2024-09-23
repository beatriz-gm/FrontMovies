import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }
  
  input, textarea, body, button {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  button, a {
    cursor: pointer;
    transition: filter .15s ease-in-out;
  }
  button:hover, a:hover {
    filter: brightness(.85);
  }
`;