import React from "react";
import styled from "styled-components";

const TeammateDiv = styled.div`
  max-width: 300px;
  background-color: white;
  margin: 4%;
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
  padding: 2%;
`;

const Teammate = props => {
  return (
    <TeammateDiv>
      {props.teammateList.map(teammate => (
        <div key={teammate.id}>
          <h3>{teammate.name}</h3>
          <h6>{teammate.email}</h6>
          <h6>{teammate.role}</h6>
        </div>
      ))}
    </TeammateDiv>
  );
};

export default Teammate;
