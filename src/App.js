import { useEffect, useState } from "react";
import "./App.css";
import User from "./component/User/User";
function App() {
  const [user, setUser] = useState([]);
  const [team, setTeam] = useState([]);
  const addHandler = (name) => setTeam([...team, name]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((da) => {
        setUser(da.results);
      });
  }, []);
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <ul>
        {team.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
      {user.map((usr) => (
        <User data={usr} addHandler={addHandler}></User>
      ))}
    </div>
  );
}

export default App;
