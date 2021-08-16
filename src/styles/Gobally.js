import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html{
    font-size: 100%;
  }

  body{
    font-family: "Poppins",sans-serif;
    font-size: 1.125rem;
  }

  *,*:before,*:after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

`;

export default GlobalStyle;
