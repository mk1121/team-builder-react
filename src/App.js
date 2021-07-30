import { useEffect, useState } from "react";
import "./App.css";
import User from "./component/User/User";
function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((da) => {
        setUser(da.results);
      });
  }, []);
  return (
    <div className="App">
      {user.map((usr) => (
        <User data={usr}></User>
      ))}
    </div>
  );
}

export default App;
