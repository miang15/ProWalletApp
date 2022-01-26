import initialState from './InitialStates.js';
import {SIGN_UP_DATA, LOGIN_DATA} from './actions/type';

export const reducer = (state = initialState, action) => {
  console.log('dispatch', action.payLoad);
  switch (action.type) {
    case SIGN_UP_DATA:
      return {
        ...state,
        signUp: action.payLoad,
      };
    case LOGIN_DATA:
      return {
        ...state,
        logIn: action.payLoad,
      };
  }
  return state;
};
