/**
 * Created by Jordan3D on 5/14/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types'
import {constructEntity} from '../../../data/config'
import {doInitEntities, doChangeEntity} from '../../../actions'

import './index.scss';

const dayHeight = '60px';

const countChar = (str, char) => {
  let i = 0;
  let count = -1;
  do {
    i = str.indexOf(char, i) + 1;
    count++;

    if (count > str.length) {
      break;
    }
  } while (i !== 0)
  return count;
}

const defineSet = (dateStr) => {
  const count = countChar(dateStr, '_');
  try {
    if (count === 0) {
      return 'year';
    } else if (count === 1) {
      return 'month';
    } else if (count === 2) {
      return 'day';
    } else {
      throw new Error('Invalid string')
    }
  } catch (e) {
    console.log(e.message);
    return 'day';
  }
}

const changeSet = (action, dateStr) => {
  const count = countChar(dateStr, '_');

  if (action === 'up') {
    return count === 2 ? 'month' : 'year'
  } else if (action === 'down') {
    return count === 0 ? 'month' : 'day'
  } else {
    return count === 0 ? 'year' : count === 1 ? 'month' : 'day'
  }
}

export function dateTransform(dateStr) {
  return dateStr.split('_').join('.');
}

const dateFormation = (command, dateStr) => {
  const date = dateTransform(dateStr);
  const set = defineSet(dateStr);
  const newSet = changeSet(command, dateStr);

  const timeFormats = {
    year: 'YYYY',
    month: `YYYY_MM`,
    day: `YYYY_MM_DD`
  };

  switch (command) {
    case 'up' : {
      return {
        set: newSet,
        now: moment(date).format(timeFormats[newSet]),
        prev: moment(date).subtract(1, newSet + 's').format(timeFormats[newSet]),
        next: moment(date).add(1, newSet + 's').format(timeFormats[newSet]),
      }
    }
    // case 'down' : {
    //   return {
    //     set: set,
    //     now: moment(date).format(timeFormats[set]),
    //     prev: moment(date).subtract(1, set + 's').format(timeFormats[set]),
    //     next: moment(date).add(1, set + 's').format(timeFormats[set]),
    //   }
    // }
    case 'prev' : {
      return {
        set,
        now: moment(date).subtract(1, set + 's').format(timeFormats[set]),
        prev: moment(date).subtract(2, set + 's').format(timeFormats[set]),
        next: moment(date).format(timeFormats[set]),
      }
    }
    case 'next' : {
      return {
        set,
        now: moment(date).add(1, set + 's').format(timeFormats[set]),
        prev: moment(date).format(timeFormats[set]),
        next: moment(date).add(2, set + 's').format(timeFormats[set]),
      }
    }
    case 'init' :
    default : {
      return {
        set: set,
        now: moment(date).format(timeFormats[set]),
        prev: moment(date).subtract(1, set + 's').format(timeFormats[set]),
        next: moment(date).add(1, set + 's').format(timeFormats[set]),
      }
    }
  }
}

export const performChange = (type, id, dispatch, inputDate, set) => {
  const date =  dateFormation(set, inputDate);
  dispatch(
    doChangeEntity(
      type,
      id,
      date
    )
  );
}

class DateSwitcher extends Component {
  static propTypes = {
    initDate: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    object: PropTypes.object.isRequired
  };
  static sample = {
    set: "",
    now: "",
    prev: "",
    next: "",
  };

  constructor(props) {
    super(props);
    const initObject = {...DateSwitcher.sample};

    const entity = constructEntity(initObject, props.type, props.id);
    this.id = props.id;

    this.props.dispatch(doInitEntities(entity.result));

    performChange(props.type, this.id, props.dispatch, props.initDate, 'init')
  }

  componentDidMount() {

  }

  onUpClick = () => {
    performChange(
      this.props.type,
      this.id,
      this.props.dispatch,
      this.props.object.now,
      'up');
  }
  onPrevClick = () => {
    performChange(
      this.props.type,
      this.id,
      this.props.dispatch,
      this.props.object.now,
      'prev');
  }
  onNextClick = () => {
    performChange(
      this.props.type,
      this.id,
      this.props.dispatch,
      this.props.object.now,
      'next');
  }

  render() {
    return (
      <div className="c-panel" style={{height: dayHeight}}>
        <div className="arrow arrow-left" onClick={this.onPrevClick}></div>
        <div className="view-title" onClick={this.onUpClick}>{this.props.object.now}</div>
        <div className="arrow arrow-right" onClick={this.onNextClick}></div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {entities} = state;
  let object = null;
  if(entities[ownProps.type]){
    object = entities[ownProps.type][ownProps.id];
  }
  return ({
    object : object?object:{}
  });
}

export default connect(
  mapStateToProps
)(DateSwitcher);
