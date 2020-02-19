import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { joinLobby } from "../../actions/lobby";
import Button from "react-bootstrap/Button";

class DisplayLobby extends Component {
  render() {
    const { lobbyData } = this.props;
    console.log("displayLobby", this.props);
    return (
      <div key={lobbyData.name} className="displayLobby">
        <h2>Room: {lobbyData.name}</h2>
        <h3>Number of Players: {lobbyData.users.length}</h3>
        <Link
          to={`/lobby/${lobbyData.id}`}
          onClick={() => {
            this.props.dispatch(joinLobby(this.props.userId, lobbyData.id));
          }}
        >
          {lobbyData.users.length >= 3 ? (
            <Button variant="secondary" disabled>
              Join Room
            </Button>
          ) : (
            <Button variant="secondary">Join Room</Button>
          )}
        </Link>
      </div>
    );
  }
}

export default connect(null)(DisplayLobby);
