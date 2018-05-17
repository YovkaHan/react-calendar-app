/**
 * Created by Jordan3D on 5/17/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ChromePicker} from 'react-color';
import Item from '../../presentational/Item'
//import {doCreateObject} from '../../../actions'
import './index.scss';
// import PropTypes from 'prop-types'

class EventController extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (color, event) => {
    // save color to bufferEvent object in memory
  }

  render() {
    return (
      <div className="c-event-control">
        <input className="event-name__input input" placeholder="Event name"/>
        <textarea className="event-text__input input" placeholder="Event text"/>
        <ChromePicker onChange={ this.handleChange }/>
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const {entities} = state;
//   const children = entities[ownProps.type][ownProps.id];
//   return ({
//     children
//   });
// }

export default connect(
  //mapStateToProps
)(EventController)
