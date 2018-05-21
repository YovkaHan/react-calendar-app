/**
 * Created by Jordan3D on 5/9/2018.
 */

import { INIT_ENTITIES, EDIT_ENTITY, RECEIVE_DATA } from '../actions';

const initialState = {
  components: {

  }
};

const changeEntity = (entity, id, object) => {
  return {...entity, [id]: Object.assign({},entity[id],object)};
}

const changeEntities = (state,  action) => {
  return {...state, [action.configs.type]: changeEntity(state[action.configs.type], action.configs.id, action.object)};
}

const addEntities = (state, logic) => {
  return Object.assign({},state,logic.entities);
}

const entities = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ENTITIES : {
      return addEntities(state, action.logic)
    }
    case EDIT_ENTITY : {
      return changeEntities(state, action)
    }
    case RECEIVE_DATA: {
      return addEntities(state, action.logic)
    }
    default:
      return state
  }
};

export default entities;
