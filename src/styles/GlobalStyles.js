import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html{
    font-size: 100%;
  }

  body{
    font-family: "Poppins",sans-serif;
    font-size: 1.125rem;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  *,*:before,*:after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 992px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: 1200px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media (min-width: 1366px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  @media (min-width: 1600px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

export default GlobalStyles;
