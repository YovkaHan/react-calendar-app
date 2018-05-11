/**
 * Created by Jordan3D on 5/9/2018.
 */

import { INIT_FLAGS_ENTITIES, CHANGE_ENTITY } from '../actions';

const changeEntity = (entity, id, object) => {
  return {...entity, [id]: object};
}

const changeEntities = (state,  action) => {
  return {...state, [action.configs.type]: changeEntity(state[action.configs.type], action.configs.id, action.object)};
}

const addEntities = (state, logic) => {
  return Object.assign({},state,logic.entities);
}

const entities = (state = {}, action) => {
  switch (action.type) {
    case INIT_FLAGS_ENTITIES : {
      return addEntities(state, action.logic)
    }
    case CHANGE_ENTITY : {
      return changeEntities(state, action)
    }
    default:
      return state
  }
};

export default entities;
