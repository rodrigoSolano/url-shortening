import styled from "styled-components";

const padding = "0.5rem 2rem";

export const Button = styled.button`
  width: ${({ size }) => (size ? "auto" : "100%")};
  height: auto;
  padding: ${padding};
  background-color: hsl(180, 66%, 49%);
  color: #fff;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  border-radius: 10rem;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
