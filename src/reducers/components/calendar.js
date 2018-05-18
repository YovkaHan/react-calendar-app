/**
 * Created by Jordan3D on 5/18/2018.
 */
import { CREATE_COMPONENT, PROPERTY_CREATE } from '../../actions'

const initState = {
  id: null,
  type: 'calendar',
  dateSwitcher : null,
  actualView: null,
  bufferEvent: null,
  eventList: null
};

function calendarCreate(state, action) {
  const result = {...state};
  result[action.id] = Object.assign({},initState,{id: action.id});
  return result;
}

function calendarPropertyCreate(state, action) {
  const result = {...state};
  result[action.propertyName] = action.propertyValue;
  return result;
}

const calendar = (state = initState, action) => {
  switch (action.type) {
    case CREATE_COMPONENT :
      return calendarCreate(state,action);
    case PROPERTY_CREATE :
      return calendarPropertyCreate(state, action);
    default:
      return state;
  }
};

export default calendar;
