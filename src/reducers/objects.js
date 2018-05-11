/**
 * Created by Jordan3D on 5/6/2018.
 */
import { CREATE_OBJECT } from '../actions';
import uniqid from 'uniqid';
const initialSet = 'week';

const objectCreate =(state, action) => {
  const id = uniqid();
  action.promise.object = new Promise((resolve, reject) => {
    resolve(id);
  });
  return {...state, [id]:{}}
};

export const objects = (state = initialSet, action) => {
  switch (action.type) {
    case CREATE_OBJECT :
      return objectCreate(state, action);
    default:
      return state
  }
};
