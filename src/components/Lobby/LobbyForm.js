import React, { Component } from "react";

const LobbyForm = props => {
  // console.log(props);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Lobby Name:
          <input
            onChange={props.handleChange}
            type="text"
            name="name"
            value={props.values.name}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LobbyForm;
