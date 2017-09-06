import {OPEN_DRAWER,CLOSE_DRAWER} from '../types'

const initialState = {
  opened: true,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, opened: true };
    case CLOSE_DRAWER:
      return { ...state, opened: false };
    default:
      return state;
  }
}
