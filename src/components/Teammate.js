import React from "react";

const Teammate = props => {
  return (
    <div>
      {props.teammateList.map(teammate => (
        <div key={teammate.id}>
          <h3>{teammate.name}</h3>
          <h6>{teammate.email}</h6>
          <h6>{teammate.role}</h6>
        </div>
      ))}
    </div>
  );
};

export default Teammate;
