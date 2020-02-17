import React from "react";
import axios from "axios";
import LobbyForm from "./LobbyForm";

class LobbyFormContainer extends React.Component {
  state = {
    lobbies: [],
    lobby: {
      name: ""
    }
  };

  url = "https://neelagiri-kuong-game.herokuapp.com" || "http://localhost:4000";
  stream = new EventSource(`${url}/stream`);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    console.log("WHAT IS THIS PROPS DISPATCH", this.props.dispatch);
    this.props.dispatch(lobbyRegistration(this.state.lobby.name));
    this.setState({
      lobby: { name: "" }
    });
  };

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;

      const action = JSON.parse(data);
      console.log("action test:", action);

      const { type, payload } = action;

      if (type === "ALL_LOBBIES") {
        this.setState({ lobbies: payload });
      }

      if (type === "ONE_LOBBY") {
        const lobbies = [...this.state.lobbies, payload];

        this.setState({ lobbies });
      }
    };
  }

  pick = (name, id) => {
    this.setState({
      lobby: name,
      lobbyId: id
    });
  };

  render() {
    console.log("render state test:", this.state);
    const buttons = this.state.lobbies.map(lobby => (
      <button key={lobby.id} onClick={() => this.pick(lobby.name, lobby.id)}>
        {lobby.name}
      </button>
    ));

    const lobby = this.state.lobbies.find(
      lobby => lobby.name === this.state.lobby
    );

    const players = lobby
      ? lobby.users.map(user => <p key={user.id}>{user.name}</p>)
      : null;

    return (
      <div>
        <LobbyForm
          text="lobbyName"
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state.lobby}
        />

        {buttons}

        {paragraphs}
      </div>
    );
  }
}

export default LobbyFormContainer;
