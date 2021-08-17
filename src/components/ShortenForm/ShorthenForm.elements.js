import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1rem;
`;

export const ShortenFormWrapper = styled.div`
  width: 100%;
  height: auto;
  background: hsl(257, 27%, 26%);
  border-radius: 0.5rem;
  position: relative;
  margin-top: 5rem;
  margin-bottom: 5rem;
  z-index: 10;
`;

export const Image = styled.div`
  width: 14rem;
  height: 8rem;
  background-image: url("/images/bg-shorten-mobile.svg");
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  border-radius: 0 0.5rem 0 0;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 3rem;
  gap: 1rem;
  padding: 1.2rem;
  z-index: 30;
  button {
    z-index: 40;
    border-radius: 0.3rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: #fff;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  color: hsl(0, 0%, 60%);
  padding: 0.5rem 1rem;
  margin: 0;
  z-index: 40;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  color: hsl(257, 7%, 63%);
  font-size: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  display: ${({ show }) => (show ? "flex" : "none")};
`;

export const Input = styled.input`
  display: ${({ show }) => (show ? "inherit" : "none")};
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin: 0;
  z-index: 40;
`;
