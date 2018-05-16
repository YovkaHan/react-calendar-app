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

const defineSet = (dateStr, splitter) => {
  const count = countChar(dateStr, splitter);
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

const changeSet = (action, dateStr, splitter) => {
  const count = countChar(dateStr, splitter);

  if (action === 'up') {
    return count === 2 ? 'month' : 'year'
  } else if (action === 'down') {
    return count === 0 ? 'month' : 'day'
  } else {
    return count === 0 ? 'year' : count === 1 ? 'month' : 'day'
  }
}

export function dateTransform(dateStr, splitter) {
  return dateStr.split(splitter).join('.');
}

const dateFormation = (command, dateStr, splitter) => {
  const date = dateTransform(dateStr, splitter);
  const set = defineSet(dateStr, splitter);
  const newSet = changeSet(command, dateStr, splitter);

  const timeFormats = {
    year: 'YYYY',
    month: `YYYY${splitter}MM`,
    day: `YYYY${splitter}MM${splitter}DD`
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
    case 'down' : {
      return {
        set: set,
        now: moment(date).format(timeFormats[set]),
        prev: moment(date).subtract(1, set + 's').format(timeFormats[set]),
        next: moment(date).add(1, set + 's').format(timeFormats[set]),
      }
    }
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

export const performChange = (type, id, dispatch, set, inputDate, splitter) => {
  const date =  dateFormation(set, inputDate, splitter);
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
    object: PropTypes.object.isRequired,
    splitter: PropTypes.string
  };
  static sample = {
    set: "",
    now: "",
    prev: "",
    next: "",
    config: {
      splitter: '_'
    }
  };

  constructor(props) {
    super(props);
    const initObject = {...DateSwitcher.sample};

    if(props.splitter) {
      initObject.config.splitter = props.splitter;
    }

    const entity = constructEntity(initObject, props.type, props.id);
    this.id = props.id;

    this.props.dispatch(doInitEntities(entity.result));

    performChange(props.type, this.id, props.dispatch, 'init',props.initDate, props.splitter)
  }

  componentDidMount() {

  }

  onUpClick = () => {
    // const date =  dateFormation('up', this.props.object.now);
    // this.props.dispatch(
    //   doChangeEntity(
    //     this.props.type,
    //     this.id,
    //     date
    //   )
    // );
    performChange(
      this.props.type,
      this.id,
      this.props.dispatch,
      'up',
      this.props.object.now,
      this.props.splitter);
  }
  onPrevClick = () => {
    // const date =  dateFormation('prev', this.props.object.now);
    // this.props.dispatch(
    //   doChangeEntity(
    //     this.props.type,
    //     this.id,
    //     date
    //   )
    // );
    performChange(
      this.props.type,
      this.id,
      this.props.dispatch,
      'prev',
      this.props.object.now,
      this.props.splitter);
  }
  onNextClick = () => {
    performChange(
      this.props.type,
      this.id,
      this.props.dispatch,
      'next',
      this.props.object.now,
      this.props.splitter);
  }

  render() {
    return (
      <div className="c-panel" style={{height: dayHeight}}>
        <div className="arrow arrow-left" onClick={this.onPrevClick}></div>
        <div className="viewTitle" onClick={this.onUpClick}>{this.props.object.now}</div>
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
