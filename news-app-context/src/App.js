import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AppRouter></AppRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
