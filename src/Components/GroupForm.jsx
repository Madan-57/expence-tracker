import React, { useState } from "react";

const GroupForm = ({ setGroupMembers, groupMembers }) => {
  const [name, setName] = useState("");

  const addMember = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setGroupMembers([...groupMembers, name]);
      setName("");
    }
  };

  return (
    <React.Fragment>
      <h2>👥 Group Members</h2>
      <form onSubmit={addMember} className="form">
        <input
          type="text"
          placeholder="Enter member name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Add
        </button>
      </form>
      <ul className="list">
        {groupMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default GroupForm;
