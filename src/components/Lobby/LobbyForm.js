import React, { Component } from "react";

const LobbyForm = props => {
  // console.log(props);
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>
          Email:
          <input
            onChange={props.onChange}
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
