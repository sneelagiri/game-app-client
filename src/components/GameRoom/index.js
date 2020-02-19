import React from "react";
import { connect } from "react-redux";

class GameRoom extends React.Component {
  componentDidMount() {
    // console.log("Stage 1", this.props.match.params);
    // console.log("Now let's fetch this post:", post_id);
    // this.props.dispatch(fetchPost(post_id));
  }
  render() {
    // console.log("params match", this.props.match.params.id);
    const loading = !this.props.lobbies;
    return (
      <div>
        <h1>Game Room</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {this.props.lobbies.map(lobby => {
              if (lobby.id === parseInt(this.props.match.params.id)) {
                // console.log(lobby);
                return lobby.users.map(user => {
                  return <h3>{user.playerName}</h3>;
                });
              } else {
                return null;
              }
            })}
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  // console.log(reduxState);
  return {
    lobbies: reduxState.lobby
  };
}
export default connect(mapStateToProps)(GameRoom);
