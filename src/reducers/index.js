// Set up your root reducer here...
 import { combineReducers } from 'redux';
import { objects } from './objects';
import entities from './entities';
import colors from './colors';

const rootReducer = combineReducers({
  objects,
  colors,
  entities
});

export default rootReducer;
