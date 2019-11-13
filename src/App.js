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
    const newTeammate
  }

  return (
    <div className="App">
      <h1>The Fellowship</h1>
      <Form />
      <Teammate />
    </div>
  );
}

export default App;
