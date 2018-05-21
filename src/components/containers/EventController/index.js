/**
 * Created by Jordan3D on 5/17/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ChromePicker} from 'react-color';
import Item from '../../presentational/Item'
import {constructEntity} from '../../../data/config'
import {doInitEntities, doChangeEntity, doComponentPropertyCreate, doEventListGenerate} from '../../../actions'
import PropTypes from 'prop-types'
//import {doCreateObject} from '../../../actions'
import './index.scss';
// import PropTypes from 'prop-types'

class EventController extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    component: PropTypes.string.isRequired
  }
  static type = "eventControllers";
  static sample = {
    id: "",
    list: null,
    intervals: null
  };
  constructor(props) {
    super(props);

    const initObject = {...EventController.sample};

    initObject.id = props.id;
    this.id = props.id;

    const entity = constructEntity(initObject, EventController.type, props.id);

    props.dispatch(doInitEntities(entity.result));
    props.dispatch(doComponentPropertyCreate(props.component, 'eventController', this.id));

    // Event fetch and create event list
    props.dispatch(doEventListGenerate(this.id));
   // props.dispatch(doIntervalsGenerate(this.id));
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
