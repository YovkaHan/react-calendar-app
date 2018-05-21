/**
 * Created by Jordan3D on 5/11/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doCreateObject} from '../../../actions'
import {Day, Month, Year} from '../../';
import {constructEntity} from '../../../data/config'
import {doInitEntities, doChangeEntity, doComponentPropertyCreate} from '../../../actions'
import {performChange, dateTransform} from '../DateSwitcher';
import PropTypes from 'prop-types';
import './index.scss';

// Views: Day / Month / Year
class CalendarView extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired,
    dateSwitcher: PropTypes.object.isRequired
  };
  static type = "calendarViews";
  static sample = {
    id: ""
  };
  constructor(props) {
    super(props);

    const initObject = {...CalendarView.sample};

    initObject.id = props.id;
    this.id = props.id;

    const entity = constructEntity(initObject, CalendarView.type, props.id);

    props.dispatch(doInitEntities(entity.result));
    props.dispatch(doComponentPropertyCreate(props.component, 'calendarView', this.id));
  }

  goToDateClick(current, date) {
    performChange(
      'dateSwitchers',
      this.props.dateSwitcher.id,
      this.props.dispatch,
      date);
  }

  setChange = (set, current) => {
    switch (set) {
      case 'year': {
        return (
          <Year
            date={dateTransform(this.props.dateSwitcher.now)}
            onClick={(date) => {
              this.goToDateClick.call(this, current, date)
            }}/>
        );
      }
      case 'month': {
        return (
          <Month
            date={dateTransform(this.props.dateSwitcher.now)}
            onClick={(num) => {
              this.goToDateClick.call(this, current, num)
            }}/>
        );
      }
      case 'day':
      default: {
        return (<Day/>);
      }
    }
  }

  render() {
    return (
      <div className="c-calendar__view">
        {this.setChange(this.props.dateSwitcher.set, this.props.dateSwitcher.now)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {entities, components} = state;

  const dateSwitcherID = components[ownProps.component]["dateSwitcher"];
  const dateSwitcher = entities["dateSwitchers"][dateSwitcherID];
  return {
    dateSwitcher
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     downClick: (date) => dispatch()
//   }
// }

export default connect(
  mapStateToProps/*,
   mapDispatchToProps*/
)(CalendarView)
