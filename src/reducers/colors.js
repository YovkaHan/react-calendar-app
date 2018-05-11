/**
 * Created by Jordan3D on 5/8/2018.
 */
import { SET_COLOR_LOGIC } from '../actions';

import uniqid from 'uniqid';
const initialSet = {};

const editLogic = (entity, logic) => {
  const result = {}
}

const entityEdit = (entity, action, set) => {
  const result = {...entity};
  switch(set){
    case 'set-logic': {
      return editLogic(entity, action.logic);
    }
  }
}

const colorsEdit = (state, action) => {
  const result = {...state};
  result[action.id] = entityEdit(result, action);
  return result;
}

const colors = (state = initialSet, action) => {
  switch (action.type) {
    case SET_COLOR_LOGIC :
      return colorsEdit(state, action, 'set-logic');
    default:
      return state
  }
};

export default colors;

const example_colors = {
  a123456: {
    logic: {
      a123451: {
        name: "red",
        buttons: {
          a1234b1: {
            value: 'on'
          },
          a1234b6: {
            value: 'on'
          },
          a1234b4: {
            value: 'off'
          }
        }
      },
      a123452: {
        name: "blue",
        buttons: {
          a1234b1: {
            value: 'on'
          },
          a1234b6: {
            value: 'on'
          },
          a1234b2: {
            value: 'off'
          },
          a1234b3: {
            value: 'on'
          },
        }
      },
      a123453: {
        name: "green",
        buttons: {
          a1234b2: {
            value: 'on'
          },
          a1234b5: {
            value: 'on'
          },
          a1234b3: {
            value: 'off'
          },
          a1234b6: {
            value: 'off'
          },
        }
      },
      a123454: {
        name: "yellow",
        buttons: {
          a1234b2: {
            value: 'off'
          },
          a1234b3: {
            value: 'on'
          },
          a1234b4: {
            value: 'on'
          },
          a1234b6: {
            value: 'on'
          },
        }
      },
    }
  }
};
