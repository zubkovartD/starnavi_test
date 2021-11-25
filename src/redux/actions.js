export const CREATE_BOARD = 'CREATE_BOARD';
export const CREATE_HOVER = 'CREATE_HOVER';
export const REMOVE_HOVER = 'REMOVE_HOVER';

export const createBoard = (modeValue) => {
  return {
    type: CREATE_BOARD,
    payload: modeValue
  };
};

export const createHover = (hoverAppearance) => {
  return {
    type: CREATE_HOVER,
    payload: hoverAppearance
  };
};

export const removeHover = (hoverToRemove) => {
  return {
    type: REMOVE_HOVER,
    payload: hoverToRemove
  };
};
