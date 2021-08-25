import React, { useState, useContext } from "react";
import LinkContext from "../../context/LinkContext";
import { Button, GenericInput as Input } from "../../components";
import {
  Container,
  ShortenFormWrapper,
  Form,
} from "./ShorthenForm.elements";

const ShortenForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [link, setLink] = useState("");

  const { shortenLink } = useContext(LinkContext);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const validateLink = () => {
    if (link === "") {
      setError(true);
      setErrorMessage("Please enter a link!");
      return false;
    } else {
      setError(false);
      setErrorMessage("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLink()) {
      shortenLink(link);
    }
  };

  return (
    <Container>
      <ShortenFormWrapper>
        <Form onSubmit={handleSubmit} error={error}>
          <Input
            placeholder="Shorten a link here..."
            onChange={handleChange}
            error={error}
            errorMessage={errorMessage}
          />
          <Button onClick={handleSubmit}>Shorten It!</Button>
        </Form>
      </ShortenFormWrapper>
    </Container>
  );
};

export default ShortenForm;
