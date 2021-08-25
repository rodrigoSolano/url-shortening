import styled from "styled-components";
import colors from "../../constants/colors";

export const LinkCard = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 0.5rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 40% auto;
    gap: 2rem;
  }
`;

export const NormalLink = styled.div`
  width: 100%;
  height: auto;
  max-width: 1024px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  padding: 1rem 1rem;
  position: relative;

  a {
    color: #000;
    text-decoration: none;
    letter-spacing: 1.5;
    color: ${colors.veryDarkBlue};
  }

  @media (max-width: 1024px) {
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #f0f0f6;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const LinkWithButton = styled.div`
  width: 100%;
  height: auto;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  padding: 1rem 1rem;
  position: relative;

  display: grid;
  gap: 0.5rem;

  a {
    color: #000;
    text-decoration: none;
    letter-spacing: 1.5;
    color: ${colors.primary};
  }

  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
