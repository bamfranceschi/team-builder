import React, { useState } from "react";
import Form from "./components/Form";
import Teammate from "./components/Teammate";
import styled from "styled-components";
import "./App.css";

const Headline = styled.h1`
  color: white;
  font-size: 5rem;
`;

function App() {
  const [teammateList, setTeammateList] = useState([
    {
      id: 1,
      name: "Gandalf",
      email: "gandalf@lotr.com",
      role: "The White Wizard"
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
      <Headline>The Fellowship</Headline>
      <Form addNewTeammate={addNewTeammate} />
      <Teammate teammateList={teammateList} />
    </div>
  );
}

export default App;
