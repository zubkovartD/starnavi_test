import { combineReducers } from 'redux';
import createBoardReducer from './createBoardReducer';
import squareReducer from './squareReducer';

const rootReducer = combineReducers({
  createBoard: createBoardReducer,
  square: squareReducer,
});

export default rootReducer;