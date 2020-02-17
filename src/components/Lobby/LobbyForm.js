import React, { Component } from "react";

const LobbyForm = props => {
  // console.log(props);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Email:
          <input
            onChange={props.handleChange}
            type="text"
            name="lobbyName"
            value={props.values.name}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LobbyForm;
