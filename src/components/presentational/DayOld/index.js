/**
 * Created by Jordan3D on 5/7/2018.
 */
import React from 'react';
import './index.scss';
import Timetable from '../Timetable';
//import PropTypes from 'prop-types'

const dayHeight = '60px';

const Day = () => {
  return (
    <div className="c-day" style={{height: dayHeight}}>
      <Timetable cName="c-timetable c-timetable--full"/>
    </div>
  );
}

// Day.propTypes = {
//   set: PropTypes.string.isRequired,
//   data: PropTypes.object,
// }
// dayView1.propTypes = {
//   data: PropTypes.object
// }

export default Day;
