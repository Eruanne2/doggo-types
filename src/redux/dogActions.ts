import * as DogApi from '../util/dogsApiUtil';
import { AppDispatchType } from './store';

// kinds of actions
export const RECEIVE_ALL_DOGS = 'RECEIVE_ALL_DOGS';
export const RECEIVE_BREED_IMAGES = 'RECEIVE_BREED_NAMES';

// define payload type (more specific than object!)

// pojo action creators
export const receiveAllDogs = (breeds: Array<string>) => ({
  type: RECEIVE_ALL_DOGS, breeds
});

export const receiveBreedImages = (payload: object) => ({
  type: RECEIVE_BREED_IMAGES, payload
});

// thunk creators
export const getAllDogs = () => (dispatch: AppDispatchType)=> {
  return DogApi.fetchAllDogs()
    .then(res => res.json()).then(res => dispatch(receiveAllDogs(Object.keys(res.message))));
};

export const getBreedImages = (breed: string) => (dispatch: AppDispatchType)=> {
  return DogApi.fetchBreedImages(breed)
  .then(res => res.json()).then(res => dispatch(receiveBreedImages({breed, images: res.message})));
};