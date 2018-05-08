/**
 * Created by Jordan3D on 5/7/2018.
 */
import React from 'react';
import './index.scss';
import Item from '../Item';

const days = new Array(31).fill({});

const Month = () => (
  <div className="c-month">
    {days.map((d, i) => {
      return (
        <Item key={i} cName={'day'}>
          {i+1}
        </Item>)
    })}
  </div>
);

export default Month;
