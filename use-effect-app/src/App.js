import { useState } from "react";
import Effect from "./Effect";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Hide" : "Show"}
      </button>
      <div>{show && <Effect />}</div>
    </div>
  );
}

export default App;
