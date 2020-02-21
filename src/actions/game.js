// import axios from "axios";

// const databaseUrl = "http://localhost:4000";

// async questions() {
//     const lobbyId = parseInt(this.props.match.params.id);
//     let numPlayers = 0;
//     this.props.lobbies.map(lobby => {
//       if (lobby.id === lobbyId) {
//         numPlayers = lobby.users.length;
//         return null;
//       } else {
//         return null;
//       }
//     });
//     await axios.post(`${url}/questions`, {
//       lobbyId,
//       numPlayers
//     });
//     // need to check type first
//     // this.setState({questions: action})
//   }
