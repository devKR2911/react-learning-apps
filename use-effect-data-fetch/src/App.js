import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";

function App() {
  const [user, setUser] = useState("");

  const fetchUserData = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  const fetchUserDataAsync = async () => {
    try {
      const data = await fetch("https://randomuser.me/api/");
      const userInfo = await data.json();
      setUser(userInfo.results[0]);
    } catch (err) {
      console.error("Error");
    }
  };

  useEffect(() => {
    fetchUserDataAsync();
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Main {...user} />
    </div>
  );
}

export default App;
