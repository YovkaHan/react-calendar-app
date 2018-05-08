/**
 * Created by Jordan3D on 5/7/2018.
 */
import React from 'react';
import './index.scss';
import Item from '../Item';
// import PropTypes from 'prop-types'

const hours = new Array(24).fill({});

const Timetable = () => {
  return (
    <div className="c-timetable">
      {hours.map( (h,i) => <Item key={i}/>)}
    </div>
  );
};

// Timetable.propTypes = {
//
// };

export default Timetable;
