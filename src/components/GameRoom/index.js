import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const axios = require("axios");
class GameRoom extends React.Component {
  componentDidMount() {
    // console.log("Stage 1", this.props.match.params);
    // console.log("Now let's fetch this post:", post_id);
    // this.props.dispatch(fetchPost(post_id));
    // console.log("props", this.props);
  }

  async setReady(userId) {
    // console.log(userId);
    await axios.put(`http://localhost:4000/user/${userId}`, {
      ready: true
    });
  }
  render() {
    // console.log("params match", this.props.match.params.id);
    const thisLobby = this.props.lobbies.map(lobby => {
      if (
        lobby.id === parseInt(this.props.match.params.id) &&
        lobby.users.length > 0
      ) {
        return lobby;
      } else {
        return null;
      }
    });
    const noPlayersExist = thisLobby.length > 0 ? false : true;
    // console.log(thisLobby, noPlayersExist);
    return (
      <div>
        <h1>Game Room</h1>
        {noPlayersExist ? (
          <h2>No players in this game room...</h2>
        ) : (
          <div>
            <div className="players">
              <h2>Players in this game room</h2>
              <ol>
                {this.props.lobbies.map(lobby => {
                  if (lobby.id === parseInt(this.props.match.params.id)) {
                    // console.log(lobby);
                    return lobby.users.map(user => {
                      return <li key={user.id}>{user.playerName}</li>;
                    });
                  } else {
                    return null;
                  }
                })}
              </ol>
            </div>
            <div className="startGame">
              {this.props.lobbies.map(lobby => {
                if (lobby.id === parseInt(this.props.match.params.id)) {
                  // console.log(lobby);
                  if (lobby.users.length >= 2 && lobby.users.length < 4) {
                    return (
                      <Link
                        key={lobby.id}
                        to={`/game/${lobby.id}`}
                        onClick={() => {
                          this.setReady(this.props.user.currentUserId);
                        }}
                      >
                        <button>Start Game</button>
                      </Link>
                    );
                  } else {
                    return <h2>Not enough players to start a game</h2>;
                  }
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("WHAT DOES THE STATE LOOK LIKE?", reduxState);
  // console.log("state", reduxState.lobby[0].users[0].ready);
  // console.log("state", reduxState.lobby[0].users[1].ready);
  return {
    lobbies: reduxState.lobby,
    user: reduxState.user
  };
}

export default connect(mapStateToProps)(GameRoom);
