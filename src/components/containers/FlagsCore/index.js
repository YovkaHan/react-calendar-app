/**
 * Created by Jordan3D on 5/8/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import uniqid from 'uniqid';
import ButtonContainer from '../ButtonContainer';
import ColorsContainer from '../ColorsContainer';
import { decompose } from '../../../data';
import {initFlagsEntities} from '../../../actions'
import './index.scss'
// import Week from '../Week';
// import Event from '../Event';
// import Month from '../Month';

// const Button = (name, on) => {
//   this.name = name.slice();
//   this.id = uniqid();
//   this.on = on || false;
// }
//
// const Color = (name, buttons) => {
//   this.name = name.slice();
//   this.id = uniqid();
//   this.buttons = buttons.slice();
// }
//
// const board = {
//   button1: {
//     component: "ButtonContainer",
//     value: "off",
//     id: uniqid()
//   },
//   button2: {
//     component: "ButtonContainer",
//     value: "off",
//     id: uniqid()
//   },
//   colors: {
//     component: "ColorsContainer",
//     children: {},
//     id: uniqid()
//   },
//   avatar: {
//     button3: {
//       component: "ButtonContainer",
//       value: "off",
//       id: uniqid()
//     },
//     button4: {
//       component: "ButtonContainer",
//       value: "off",
//       id: uniqid()
//     },
//     avatar: {
//       button5: {
//         component: "ButtonContainer",
//         value: "off",
//         id: uniqid()
//       },
//       avatar: {
//         button6: {
//           component: "ButtonContainer",
//           value: "off",
//           id: uniqid()
//         },
//       }
//     }
//   }
// }
//
// const objects = [
//   {
//     name: "button1",
//     id: uniqid()
//   },
//   {
//     name: "button2",
//     id: uniqid()
//   },
//   {
//     name: "button3",
//     id: uniqid()
//   },
//   {
//     name: "button4",
//     id: uniqid()
//   },
//   {
//     name: "button5",
//     id: uniqid()
//   },
//   {
//     name: "button6",
//     id: uniqid()
//   },
//   {
//     name: "colors",
//     id: uniqid()
//   },
//   {
//     name: "red",
//     id: uniqid()
//   },
//   {
//     name: "blue",
//     id: uniqid()
//   },
//   {
//     name: "green",
//     id: uniqid()
//   },
//   {
//     name: "yellow",
//     id: uniqid()
//   },
// ]

class FlagsCore extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(initFlagsEntities(decompose));
  }

  render() {
    return (
      <div className="c-flags-core">
        <ButtonContainer id="buttonContainer1" type="containers"/>
        <ButtonContainer id="buttonContainer2" type="containers"/>
        <ColorsContainer id="colorsContainer1" type="containers"/>
        <div className="avatar">
          <ButtonContainer id="buttonContainer3" type="containers"/>
          <ButtonContainer id="buttonContainer4" type="containers"/>
          <div className="avatar">
            <ButtonContainer id="buttonContainer5" type="containers"/>
            <div className="avatar">
              <ButtonContainer id="buttonContainer6" type="containers"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // active: ownProps.filter === state.visibilityFilter
})

export default connect(
  mapStateToProps
)(FlagsCore)
