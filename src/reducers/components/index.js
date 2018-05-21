/**
 * Created by Jordan3D on 5/18/2018.
 */
import { CREATE_COMPONENT } from '../../actions'
import calendar from './calendar'

const eventSample = {
  id: "",
  name: "",
  text: "",
  color: "",
  intervals: {

  },
  bf: true
};

// Events
// dateSwitcher

const types = {
  calendar
};


const components = (state = {}, action) => {
  // if component exist
  if(state.hasOwnProperty(action.id)){
    return {
      ...state,
      [action.id]: types[state[action.id].type]({...state[action.id]}, action)
  }
  }else {
    // if component doesn't exist
    switch (action.type) {
      case CREATE_COMPONENT :
        if (types.hasOwnProperty(action.componentType)) {
          return types[action.componentType](state, action);
        }
        return state;
      default:
        return state;
    }
  }
};

export default components;
