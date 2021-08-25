import { Navbar } from "./components";
import { Home } from "./pages";
import GlobalStyles from "./styles/GlobalStyles";
import {LinkProvider} from "./context/LinkContext";

function App() {
  return (
    <>
      <Navbar />
      <LinkProvider>
        <Home />
      </LinkProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
