/**
 * Created by Jordan3D on 5/15/2018.
 */
import uniqid from 'uniqid';

export function constructEntity (object,type, nid) {
  const result = {
    entities: {}
  };
  const id = nid? nid : uniqid();

  if(result.entities[type]){
    result.entities[type][id] = {...object};
  } else {
    result.entities[type] = {};
    result.entities[type][id] = {...object};
  }

  return {
    id,
    result
  };
}

