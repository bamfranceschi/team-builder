import React from "react";

const Form = props => {
  const [teammate, setTeammate] = useState({ name: "", email: "", role: "" });

  const handleChanges = event => {
    setTeammate({ ...teammate, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewTeammate(teammate);
    setTeammate({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="nameField">Name:</label>
      <input
        id="teammateName"
        type="text"
        name="nameField"
        placeholder="Teammate's Name"
        value={teammate.name}
        onChange={handleChanges}
      />
      <label htmlFor="emailField">Email:</label>
      <input
        id="teammateEmail"
        type="text"
        name="emailField"
        placeholder="Teammate's Email"
        value={teammate.email}
        onChange={handleChanges}
      />
      <label htmlFor="roleField">Role:</label>
      <input
        id="teammateRole"
        type="text"
        name="roleField"
        placeholder="Teammate's Role"
        value={teammate.role}
        onChange={handleChanges}
      />
      <button type="submit">Add Teammate</button>
    </form>
  );
};

export default Form;
