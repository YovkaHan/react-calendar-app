/**
 * Created by Jordan3D on 5/7/2018.
 */
import React from 'react';
import './index.scss';
import moment from 'moment';
import Item from '../Item';
import PropTypes from 'prop-types'


function days(date) {
 const daysCount =  moment(date).daysInMonth();

 return new Array(daysCount).fill({});
}

const Month = (props) => {
  return (
    <div className="c-month">
      {days(props.date).map((d, i) => {
        return (
          <Item key={i} cName={'day'} onClick={() => {
            props.onClick.call(null, i + 1)
          }}>
            {i + 1}
          </Item>)
      })}
    </div>
  );
}

Month.propTypes = {
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Month;
