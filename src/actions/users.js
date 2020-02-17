import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const databaseUrl =
  "https://neelagiri-kuong-game.herokuapp.com" || "http://localhost:4000";
function signUpSuccess() {
  return { type: USER_CREATED };
}

export function signUp(firstName, lastName, playerName, email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post(`${databaseUrl}/user`, {
      firstName: firstName,
      lastName: lastName,
      playerName: playerName,
      email: email,
      password: password
    });

    if (response.status === 201) {
      dispatch(signUpSuccess());
    }
  };
}

function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: { token: token }
  };
}

export function login(email, password) {
  return async function(dispatch, getState) {
    console.log(email, password);
    const response = await axios.post(`${databaseUrl}/login`, {
      email,
      password
    });

    dispatch(loginSuccess(response.data.token));
  };
}
