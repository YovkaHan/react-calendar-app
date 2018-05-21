/**
 * Created by Jordan3D on 5/8/2018.
 */

import {eventsSchema} from '../data/normalize'
import {normalize} from 'normalizr';

export const CREATE_OBJECT = 'CREATE_OBJECT';
export const SET_COLOR_LOGIC = 'SET_COLOR_LOGIC';
export const INIT_ENTITIES = 'INIT_ENTITIES';
export const EDIT_ENTITY = 'EDIT_ENTITY';
export const NEW_ENTITY_OBJECT = 'NEW_ENTITY_OBJECT';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const PROPERTY_CREATE = 'PROPERTY_CREATE';
export const CREATE_COMPONENT = 'CREATE_COMPONENT';

export const doCreateComponent = (componentType, id) => ({
  type: CREATE_COMPONENT,
  componentType,
  id
});

export const doComponentPropertyCreate = (parentId, property, id) => ({
  type: PROPERTY_CREATE,
  id: parentId,
  propertyName: property,
  propertyValue: id
});


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

export const doAddToParent = (parent, property, id) => ({
  type: PARENT_PLUS,
  property,
  id
})

export const doEventListGenerate = (eventControllerId) => dispatch => {
  dispatch(fetchData())
    .then(json => dispatch(doNormalizeData(json)))
    .then(res => dispatch(doChangeEntity('eventControllers', eventControllerId, {list: res.result})))
}

export const doNormalizeData = (json) => {
  const data = normalize(json, eventsSchema);
  return ({
    type: RECEIVE_DATA,
    result: data.result,
    logic: data
  });
}


export const fetchData = (data) => dispatch => {
  if (data) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return fetch('http://localhost:4000/events', {
      method: 'post',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => console.log(json))
  }
  return fetch(`http://localhost:4000/events`)
    .then(response => response.json())
}
