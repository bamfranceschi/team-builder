import React, { useState } from "react";
import Form from "./components/Form";
import Teammate from "./components/Teammate";
import "./App.css";

function App() {
  const [teammateList, setTeammateList] = useState([
    {
      id: 1,
      name: "",
      email: "",
      role: ""
    }
  ]);

  const addNewTeammate = teammate => {
    const newTeammate = {
      id: Date.now(),
      name: teammate.name,
      email: teammate.email,
      role: teammate.role
    };
    setTeammateList([...teammateList, newTeammate]);
  };

  return (
    <div className="App">
      <h1>The Fellowship</h1>
      <Form addNewTeammate={addNewTeammate} />
      <Teammate teammateList={teammateList} />
    </div>
  );
}

export default App;
