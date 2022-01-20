import initialState from './InitialStates.js';
export default reducer = (state = initialState, action) => {
  console.log('dispatch', action.payLoad);
  switch (action.type) {
    case 'setSignUpData':
      return {
        ...state,
        signUp: action.payLoad,
      };
  }
  return state;
};
