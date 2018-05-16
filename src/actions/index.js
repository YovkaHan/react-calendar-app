/**
 * Created by Jordan3D on 5/8/2018.
 */

export const CREATE_OBJECT = 'CREATE_OBJECT';
export const SET_COLOR_LOGIC = 'SET_COLOR_LOGIC';
export const INIT_ENTITIES = 'INIT_ENTITIES';
export const EDIT_ENTITY = 'EDIT_ENTITY';
export const NEW_ENTITY_OBJECT = 'NEW_ENTITY_OBJECT';

export const doCreateObject = (promise) => ({
  type: CREATE_OBJECT,
  promise
});


export const doSetColorLogic = (logic, id) => ({
  type: SET_COLOR_LOGIC,
  logic,
  id
});

export const doInitEntities = (logic) => ({
  type: INIT_ENTITIES,
  logic
});

export const doNewEntityObject = (type, id) => ({
  type: NEW_ENTITY_OBJECT,
  configs: {
    type,
    id
  }
})

export const doChangeEntity = (type, id, object) => ({
  type: EDIT_ENTITY,
  configs: {
    type,
    id
  },
  object
})
