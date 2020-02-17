import axios from "axios";

export const LOBBY_CREATED = "LOBBY_CREATED";

const databaseUrl =
  "https://neelagiri-kuong-game.herokuapp.com" || "http://localhost:4000";

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
