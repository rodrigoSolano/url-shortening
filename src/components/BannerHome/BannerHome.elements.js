import styled from "styled-components";
import colors from "../../constants/colors";
import fontsizes from "../../constants/fontsizes";
import { Container } from "../../styles/GlobalStyles";

export const BannerHome = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "info image";
    margin-top: 2rem;
  }
  @media (min-width: 1024px) {
    gap: 5rem;
    margin-top: 4rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  @media (min-width: 768px) {
    grid-area: image;
    padding: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
  object-position: left top;
  @media (min-width: 1366px) {
    transform: translate(10%, 0);
  }
`;

export const Info = styled(Container)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1.2rem;
  grid-area: info;
  @media (min-width: 768px) {
    padding-right: 0;
    button {
      align-self: flex-start;
    }
  }
`;

export const Slogan = styled.h3`
  width: 100%;
  height: auto;
  font-size: ${fontsizes.medium};
  font-family: inherit;
  line-height: 1.1;
  color: ${colors.veryDarkBlue};
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    font-size: ${fontsizes.large};
  }
  @media (min-width: 1024px) {
    font-size: ${fontsizes.xlarge};
  }
`;

export const P = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: hsl(0, 0%, 75%);
  @media (min-width: 768px) {
    text-align: left;
  }
`;
