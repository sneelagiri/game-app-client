import { LOBBY_CREATED } from "../actions/lobby";

const initialState = [];

export default (state = initialState, action = {}) => {
  // console.log("ACTION:??, guessing sucks", action);
  switch (action.type) {
    case LOBBY_CREATED:
      return [...state, action.payload];

    default:
      return state;
  }
};
