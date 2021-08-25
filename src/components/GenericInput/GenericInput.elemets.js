import styled from "styled-components";
import colors from "../../constants/colors";

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid
    ${(props) => (props.error ? `${colors.error}` : `${colors.gray}`)};
  outline: none;
  background: #fff;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin: 0;
  z-index: 40;
  &:hover {
    cursor: pointer;
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ error }) =>
    error === true ? `${colors.errorOpacity}` : `${colors.gray}`};
  font-size: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  display: ${({ show }) => (show === true ? "flex" : "none")};
  position: relative;

  &:after {
    content: ${(props) => props.error === true ? `${props.errorMessage}` : ""};
    width: 100%;
    height: auto;
    position: absolute;
    bottom: -2.25rem;
    left: -1rem;
    text-align: left;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  margin: 0;
  background: transparent;
  display: ${({ show }) => (show ? "inherit" : "none")};
`;
