import Container from "./components/Container";
import { LanguageContextProvider } from "./context/LanguageContext";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <ThemeContextProvider>
          <Container></Container>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
