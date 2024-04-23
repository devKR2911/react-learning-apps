import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
