import axios from "axios";

export const LOBBY_CREATED = "LOBBY_CREATED";

const databaseUrl = "http://localhost:4000";

//  "https://neelagiri-kuong-game.herokuapp.com" ||
function createLobbySuccess(response) {
  return {
    type: LOBBY_CREATED,
    payload: {
      id: response.data.id,
      name: response.data.name
    }
  };
}

export function createLobby(name) {
  return async function(dispatch, getState) {
    // console.log(getState());
    const token = getState().user.token;
    // console.log("Token", token);

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
    // console.log(response);

    if (response.status === 200) {
      dispatch(createLobbySuccess(response));
    }
  };
}

export function joinLobby(userId, lobbyId) {
  // console.log("User ID:", userId, "Lobby ID:", lobbyId);
  return async function(dispatch, getState) {
    const token = getState().user.token;
    // console.log("Token", token);

    const response = await axios({
      method: "PUT",
      url: `${databaseUrl}/user/${userId}`,
      headers: {
        authorization: `Bearer ${token}`
      },
      data: {
        lobbyId: lobbyId
      }
    });
    // console.log("join lobby response", response);
  };
}

function fetchLobbiesSuccess(array) {
  return {
    type: "ALL_LOBBIES",
    payload: array
  };
}

export function fetchLobbies(array) {
  return async function(dispatch, getState) {
    dispatch(fetchLobbiesSuccess(array));
  };
}
