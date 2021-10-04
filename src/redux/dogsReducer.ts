import { AnyAction } from 'redux';
import { RECEIVE_ALL_DOGS, RECEIVE_BREED_IMAGES } from './dogActions';

type stateType = { [key: string]: Array<string> };

const DogsReducer = (state: stateType = {}, action: AnyAction) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ALL_DOGS:
      action.breeds.forEach((breed: string) => nextState[breed] = []);
      return nextState;
    case RECEIVE_BREED_IMAGES:
      nextState[action.payload.breed] = action.payload.images;
      return nextState;
    default:
      return state;
  }
}

export default DogsReducer;