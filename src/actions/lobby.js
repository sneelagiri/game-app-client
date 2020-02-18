import axios from "axios";

export const LOBBY_CREATED = "LOBBY_CREATED";

const databaseUrl = "http://localhost:4000";

//  "https://neelagiri-kuong-game.herokuapp.com" ||
// function createLobbySuccess() {
//   return {
//     type: LOBBY_CREATED,

//   };
// }

export function createLobby(name) {
  return async function(dispatch, getState) {
    const token = getState().user.token;
    console.log("Token", token);

    const response = await axios({
      method: "POST",
      url: `${databaseUrl}/lobby`,
      headers: {
        authorization: `Bearer ${token}`
      },
      data: {
        name
      }
    });
    console.log(response);

    // if (response.status === 201) {
    //   dispatch(createLobbySuccess(name));
    // }
  };
}

export function joinLobby(userId, lobbyId) {
  return async function(dispatch, getState) {
    const token = getState().user.token;
    console.log("Token", token);

    const response = await axios({
      method: "POST",
      url: `${databaseUrl}/user/${userId}`,
      headers: {
        authorization: `Bearer ${token}`
      },
      data: {
        lobbyId: lobbyId
      }
    });
  };
}
