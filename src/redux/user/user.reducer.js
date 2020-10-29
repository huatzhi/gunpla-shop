const INITIAL_STATE = {
  currentUser: null
};

// note :: every single reducer get every single action that is fired, so handling default is always necessary

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return state;
  }
};

export default userReducer;