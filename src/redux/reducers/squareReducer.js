import {CREATE_HOVER, REMOVE_HOVER} from '../actions';

const INITIAL_STATE = {
  hovers: [],
}

const hoverReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_HOVER:
      return {...state, hovers: [...state.hovers, action.payload]}
    case REMOVE_HOVER: 
      return {...state, hovers: state.hovers.filter(square => square.row !== action.payload.row || square.col !== action.payload.col)}
    default:
      return state;
  }
};

export default hoverReducer;