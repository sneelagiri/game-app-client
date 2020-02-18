import React from "react";
import LobbyForm from "./LobbyForm";
import { createLobby } from "../../actions/lobby";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const url = "http://localhost:4000";
// const url =
//   "https://neelagiri-kuong-game.herokuapp.com" || "http://localhost:4000";

class LobbyFormContainer extends React.Component {
  state = {
    lobbies: [],
    lobby: {
      name: ""
    }
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

  // joinSubmit = event => {
  //   event.preventDefault();
  //   this.props.dispatch(joinLobby());
  // };

  componentDidMount() {
    console.log(this.stream);
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

    const lobbies = lobby
      ? lobby.users.map(user => <p key={user.id}>{user.name}</p>)
      : null;

    return (
      <div>
        <LobbyForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state.lobby}
        />

        {this.state.lobbies.map(lobby => {
          return (
            <div key={lobby.name}>
              <h2>Lobby Name: {lobby.name}</h2>
              <button>
                <Link to={`/lobby/${lobby.name}`}>Join Lobby</Link>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
/* {buttons}
 */
function mapStateToProps(state) {
  console.log("redux state on lobby form page", state);
  return { users: state };
}

export default connect(mapStateToProps)(LobbyFormContainer);
