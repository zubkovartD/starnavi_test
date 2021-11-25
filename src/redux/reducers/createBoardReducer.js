import {CREATE_BOARD} from '../actions'

const INITIAL_STATE = {
  mode: 0,
};

const createBoardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state, mode: action.payload
      };
    default: 
      return state;
  };
};

export default createBoardReducer;