import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: auto;
  @media (max-width: 799px) {
    transform: translate(0, -50%);
  }
  @media (min-width: 800px) {
    transform: translate(0, -50%);
  }
`;

export const ShortenFormWrapper = styled.div`
  width: 100%;
  height: auto;
  background: ${colors.secondary};
  border-radius: 0.5rem;
  position: relative;
  z-index: 10;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: "3rem 3rem";
  gap: 1.5rem;
  padding: 1.2rem;
  z-index: 30;
  background-image: url("/images/bg-shorten-mobile.svg");
  background-position: top right;
  background-repeat: no-repeat;
  background-size: fill;

  @media (min-width: 800px) {
    height: 100%;
    grid-template-columns: 70% auto;
    grid-template-rows: 3rem;
    padding: 3rem;
    background-image: url("/images/bg-shorten-desktop.svg");
    background-size: cover;
  }
`;
