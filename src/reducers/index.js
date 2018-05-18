// Set up your root reducer here...
 import { combineReducers } from 'redux';
// import { objects } from './objects';
import entities from './entities';
import colors from './colors';
import components from './components'

const rootReducer = combineReducers({
  // objects,
  colors,
  entities,
  components
});

export default rootReducer;
