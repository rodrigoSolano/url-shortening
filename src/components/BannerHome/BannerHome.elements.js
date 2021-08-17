import styled from "styled-components";

export const Info = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 1.2rem;
`;

export const BannerHome = styled.div`
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 21.2rem;
  padding: 0rem 0 0rem 1rem;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left top;
`;

export const Slogan = styled.h3`
  width: 100%;
  height: auto;
  font-size: 2.5rem;
  font-family: inherit;
  line-height: 1.1;
  color: hsl(255, 11%, 22%);
  text-align: center;
`;

export const P = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: hsl(0, 0%, 75%);
`;
