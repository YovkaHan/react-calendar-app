/**
 * Created by Jordan3D on 5/15/2018.
 */
import React from 'react';
import './index.scss';
import {Item} from '../../';
import moment from 'moment';
import PropTypes from 'prop-types'

const months = new Array(12).fill({});

const Year = (props) => (
  <div className="c-year">
    {months.map((d, i) => {
      const date = moment(props.date).add(i, 'M').format('YYYY_MM') ;
      return (
        <Item key={i} cName={'month'} onClick={()=> {props.onClick.call(null, date)}}>
          {date}
        </Item>)
    })}
  </div>
);


Year.propTypes = {
  year: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired
}

export default Year;
