import Counter from "./components/Counter/Counter";
import Todo from "./components/Todo/Todo";
import store from "./redux";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Counter />
        </div>
        <div>
          <Todo />
        </div>
      </Provider>
    </div>
  );
}

export default App;
