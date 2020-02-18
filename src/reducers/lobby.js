import { LOBBY_CREATED } from "../actions/lobby";

const initialState = [];

export default (state = initialState, action = {}) => {
  // console.log("ACTION:??, guessing sucks", action);
  switch (action.type) {
    case "ALL_LOBBIES":
      console.log("happens when clickin on lobby?");
      return action.payload;
    case "ONE_LOBBY":
      // console.log("reducer reached", action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};
