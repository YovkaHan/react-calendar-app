/**
 * Created by Jordan3D on 5/15/2018.
 */
import uniqid from 'uniqid';

const root = {
  entities: {}
};

export function constructEntity (object,type, nid) {
  const result = {...root};
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

