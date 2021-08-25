import { useState } from "react";
import Button from "../Button/Button";
import {
  LinkCard as LinkCardContainer,
  NormalLink,
  LinkWithButton,
} from "./LinkCard.elements";

const LinkCard = ({ link }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(link.shortedUrl);
      setCopySuccess("Copied");
    } catch (err) {
      setCopySuccess("Failed to copy");
    }
  };

  return (
    <LinkCardContainer>
      <NormalLink>
        <a href={link.originalURL} target="_blank" rel="noreferrer">
          {link.originalURL}
        </a>
      </NormalLink>
      <LinkWithButton variant="button" button>
        <a href={link.shortedUrl} target="_blank" rel="noreferrer">
          {link.shortedUrl}
        </a>
        {copySuccess === "Copied" ? (
          <Button secondary medium>
            Copied
          </Button>
        ) : (
          <Button medium onClick={copyToClipBoard}>
            Copy
          </Button>
        )}
      </LinkWithButton>
    </LinkCardContainer>
  );
};

export default LinkCard;
