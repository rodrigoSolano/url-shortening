import React, { useState, useEffect, useRef } from "react";
import { InputWrapper, Placeholder, InputField } from "./GenericInput.elemets";

const GenericInput = ({ onChange, error, errorMessage, placeholder }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const input = useRef(null);
  const handlePlaceHolderClick = () => {
    setShowPlaceholder(false);
  };

  const handleBlur = () => {
    const textInput = input.current.value;
    if (textInput === "") {
      setShowPlaceholder(true);
    }
  };

  useEffect(() => {
    if (!showPlaceholder) input.current.focus();
  }, [showPlaceholder]);

  return (
    <InputWrapper error={error}>
      <Placeholder
        onClick={handlePlaceHolderClick}
        show={showPlaceholder}
        error={error}
        errorMessage={errorMessage}
      >
        {placeholder}
      </Placeholder>
      <InputField
        onBlur={handleBlur}
        ref={input}
        show={!showPlaceholder}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default GenericInput;
