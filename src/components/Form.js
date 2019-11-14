import React, { useState } from "react";
import styled from "styled-components";

const FormDiv = styled.div`
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 10px;
  opacity: 0.7;
  padding: 1.5%;
  background-color: black;
  margin-bottom: 5%;
  margin-left: 25%;
  margin-right: 25%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const FormStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   color: white;
// `;

// const InputStyle = styled.input`
//   font-size: 1.5rem;
//   max-width: 90%;
//   align-self: center;
//   border-radius: 10px;
// `;

// const FormLabel = styled.label`
//   font-size: 3rem;
//   padding: 1.5%;
// `;

// const FormBtn = styled.button`
//   color: brown;
//   font-size: 2.5rem;
//   padding: 2%;
//   margin: 3%;
//   border: 3px solid white;
//   align-self: center;
//   border-radius: 10px;
// `;

const Form = props => {
  const [teammate, setTeammate] = useState({
    name: " ",
    email: " ",
    role: " "
  });

  const handleChanges = event => {
    setTeammate({ ...teammate, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewTeammate(teammate);
    setTeammate({ name: " ", email: " ", role: " " });
  };

  return (
    <FormDiv>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          id="teammateName"
          type="text"
          name="name"
          value={teammate.name}
          onChange={handleChanges}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="teammateEmail"
          type="text"
          name="email"
          value={teammate.email}
          onChange={handleChanges}
        />
        <label htmlFor="role">Role:</label>
        <input
          id="teammateRole"
          type="text"
          name="role"
          value={teammate.role}
          onChange={handleChanges}
        />
        <button type="submit">Add Teammate</button>
      </form>
    </FormDiv>
  );
};

export default Form;
