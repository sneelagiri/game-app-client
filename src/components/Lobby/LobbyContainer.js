import React from "react";
import LobbyForm from "./LobbyForm";
import { createLobby, joinLobby, fetchLobbies } from "../../actions/lobby";
// import { updateUser } from "../../actions/users";
import { connect } from "react-redux";

import DisplayLobby from "./DisplayLobby";
const url = "http://localhost:4000";
// const url =
//   "https://neelagiri-kuong-game.herokuapp.com" || "http://localhost:4000";

class LobbyContainer extends React.Component {
  state = {
    lobbies: [],
    lobby: {
      name: ""
    },
    updatedLobby: []
  };

  stream = new EventSource(`${url}/stream`);

  handleChange = event => {
    this.setState({ lobby: { [event.target.name]: event.target.value } });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    console.log("WHAT IS THIS PROPS DISPATCH", this.props.dispatch);
    this.props.dispatch(createLobby(this.state.lobby.name));
    this.setState({
      lobby: { name: "" }
    });
  };

  lobbiesGlobal = array => {
    this.props.dispatch(fetchLobbies(array));
  };

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      // console.log("action test:", action);
      const { type, payload } = action;
      if (type === "ALL_LOBBIES") {
        // this.setState({ lobbies: payload });
        this.lobbiesGlobal(payload);
      }
      if (type === "ONE_LOBBY") {
        const lobbies = [...this.props.lobbies, payload];
        // this.setState({ lobbies });
        this.lobbiesGlobal(lobbies);
      }
    };
  }

  render() {
    return (
      <div>
        <LobbyForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state.lobby}
        />

        {this.props.lobbies.map(lobby => {
          return <DisplayLobby lobbyData={lobby} userId={this.props.userId} />;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { userId: state.user.currentUserId, lobbies: state.lobby };
}

export default connect(mapStateToProps)(LobbyContainer);
