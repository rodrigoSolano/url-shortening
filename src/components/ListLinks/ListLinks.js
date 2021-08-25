import React, { useContext } from "react";
import LinkCard from "../LinkCard/LinkCard";
import LinkContext from "../../context/LinkContext";
import SyncLoader from "react-spinners/SyncLoader";
import { ListLinks as ListLinksContainer, Loader } from "./LiskLinks.elements";
import colors from "../../constants/colors";

const ListLinks = () => {
  const { shortenedLinks, loading, error, errorMessage } =
    useContext(LinkContext);

  return (
    <ListLinksContainer>
      {error && <p>{errorMessage}</p>}
      {loading && (
        <Loader>
          <SyncLoader color={`${colors.primary}`} />
        </Loader>
      )}
      {shortenedLinks?.map((link) => (
        <LinkCard key={link.code} link={link} />
      ))}
    </ListLinksContainer>
  );
};

export default ListLinks;
