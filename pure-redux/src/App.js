import Counter from "./components/Counter/Counter";
import { createStore } from "redux";
import counterReducer from "./redux/reducers/counterReducer";
import { Provider } from "react-redux";

function App() {
  const store = createStore(counterReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
