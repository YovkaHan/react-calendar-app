/**
 * Created by Jordan3D on 5/8/2018.
 */

export const CREATE_OBJECT = 'CREATE_OBJECT';
export const SET_COLOR_LOGIC = 'SET_COLOR_LOGIC';
export const INIT_FLAGS_ENTITIES = 'INIT_FLAGS_ENTITIES';
export const CHANGE_ENTITY = 'CHANGE_ENTITY';

export const createObject = (promise) => ({
  type: CREATE_OBJECT,
  promise
});


export const setColorLogic = (logic, id) => ({
  type: SET_COLOR_LOGIC,
  logic,
  id
});

export const initFlagsEntities = (logic) => ({
  type: INIT_FLAGS_ENTITIES,
  logic
});

export const entityChange = (type, id, object) => ({
  type: CHANGE_ENTITY,
  configs: {
    type,
    id
  },
  object
})
