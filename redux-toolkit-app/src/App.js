import Counter from "./features/counter/Counter";
import Posts from "./features/posts/Posts";
import TodoList from "./features/todo/TodoList";

const App = () => {
  return (
    <div className="App">
      <Counter></Counter>
      <TodoList></TodoList>
      <Posts></Posts>
    </div>
  );
};

export default App;
