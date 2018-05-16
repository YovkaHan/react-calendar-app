/**
 * Created by Jordan3D on 5/11/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doCreateObject} from '../../../actions'
import {Day, Month, Year} from '../../';
import {performChange, dateTransform} from '../DateSwitcher';
import PropTypes from 'prop-types';
import './index.scss';

// Views: Day / Month / Year
class CalendarView extends Component {
  static propTypes = {
    dateSwitcher: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  goToDateClick(current, date) {
    performChange(
      'dateSwitcher',
      'dateSwitcher1',
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
      <div className="c-calendar view">
        {this.setChange(this.props.dateSwitcher.set, this.props.dateSwitcher.now)}
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const {entities} = state;
  const dateSwitcher = entities["dateSwitcher"]["dateSwitcher1"];
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
