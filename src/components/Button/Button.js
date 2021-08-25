import styled, { css } from "styled-components";
import colors from "../../constants/colors"

export const Button = styled.button`
  width: auto;
  height: auto;
  color: #fff;
  background-color: ${colors.primary};
  padding: 0.5rem 2rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: ${colors.hover};
  }

  ${({ secondary }) => secondary && css`
    background-color: ${colors.secondary};
    &:hover {
      background-color: ${colors.secondary};
    }
  `}

  ${({ rounded }) => rounded && css`
    border-radius: 10rem;
  `}

  ${({medium}) => medium && css`
    width: 8rem;
  `}

`;



 export default Button;