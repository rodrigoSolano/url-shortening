import React from "react";
import { Button as ButtonContainer } from "./Button.elements";

const Button = ({ children, size }) => {
  return <ButtonContainer size={size}>{children}</ButtonContainer>;
};

export default Button;
