import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../components";
import {
  Container,
  ShortenFormWrapper,
  Image,
  Form,
  InputWrapper,
  Placeholder,
  Input,
} from "./ShorthenForm.elements";

const ShortenForm = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const inputURL = useRef(null);
  
  const handlePlaceHolderClick = () => {
    setShowPlaceholder(!showPlaceholder);
  };

  useEffect(() => {
    if (!showPlaceholder) inputURL.current.focus();
  }, [showPlaceholder]);

  return (
    <Container>
      <ShortenFormWrapper>
        <Image />
        <Form>
          <InputWrapper>
            <Placeholder
              onClick={handlePlaceHolderClick}
              show={showPlaceholder}
            >
              Shorten a link here...
            </Placeholder>
            <Input ref={inputURL} show={!showPlaceholder} />
          </InputWrapper>
          <Button>Shorten It!</Button>
        </Form>
      </ShortenFormWrapper>
    </Container>
  );
};

export default ShortenForm;
