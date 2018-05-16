/**
 * Created by Jordan3D on 5/15/2018.
 */
import React from 'react';
import './index.scss';
import {Item} from '../../';
import PropTypes from 'prop-types'

const months = new Array(12).fill({});

const Year = (props) => (
  <div className="c-year">
    {months.map((d, i) => {
      return (
        <Item key={i} cName={'month'} onClick={()=> {props.onClick.call(null,i+1)}}>
          {i+1}
        </Item>)
    })}
  </div>
);


Year.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Year;
