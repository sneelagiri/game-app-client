import { USER_CREATED, LOGIN_SUCCESS } from "../actions/users";

const initialState = { userCreated: false, token: null, currentUserId: null };

export default (state = initialState, action = {}) => {
  // console.log("ACTION:??, guessing sucks", action);
  switch (action.type) {
    case USER_CREATED:
      return { ...state, userCreated: true };

    case LOGIN_SUCCESS:
      // console.log("What is the action.payload", action.payload);
      return {
        ...state,
        token: action.payload.token,
        currentUserId: action.payload.currentUserId
      };
    default:
      return state;
  }
};
