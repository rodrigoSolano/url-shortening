import React from "react";
import { Button as ButtonContainer } from "./Button.elements";

const Button = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
