/**
 * Created by Jordan3D on 5/15/2018.
 */
import uniqid from 'uniqid';

const root = {
  entities: {}
};

export function constructEntity (sample,type, nid) {
  const result = {...root};
  const id = nid? nid : uniqid();

  if(result.entities[type]){
    result.entities[type][id] = {...sample};
  } else {
    result.entities[type] = {};
    result.entities[type][id] = {...sample};
  }

  return {
    id,
    result
  };
}

