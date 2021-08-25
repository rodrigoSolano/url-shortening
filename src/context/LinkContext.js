import { useState, useEffect, createContext } from "react";

const LinkContext = createContext();
const url = "https://api.shrtco.de/v2/shorten?";

const LinkProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const getShortenedLinks = () => {
    setLoading(true);
    const links = JSON.parse(localStorage.getItem("shortenedLinks"));
    if (links !== null) {
      setShortenedLinks(links);
    }
    setLoading(false);
  };

  const saveShortenedLink = () => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
  };

  const shortenLink = async (link) => {
    console.log("Shorting...");
    try {
      setLoading(true);
      const res = await fetch(`${url}url=${link}`);
      const response = await res.json();
      const newLink = {
        originalURL: response.result.original_link,
        shortedUrl: response.result.full_short_link,
        code: response.result.code,
      };
      setShortenedLinks([newLink, ...shortenedLinks]);
      saveShortenedLink();
      setLoading(false);
    } catch (error) {
      setError(true);
      setErrorMessage("An error has occurred");
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getShortenedLinks();
    saveShortenedLink();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    saveShortenedLink();
    // eslint-disable-next-line
  }, [shortenedLinks]);

  const data = { shortenedLinks, loading, shortenLink, error, errorMessage };
  return <LinkContext.Provider value={data}>{children}</LinkContext.Provider>;
};

export default LinkContext;
export { LinkProvider };
