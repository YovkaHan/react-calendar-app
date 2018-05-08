/**
 * Created by Jordan3D on 5/7/2018.
 */
import React from 'react';
import './index.scss';
import Day from '../Day';

const days = [{ value:'mo'}, { value:'tu'}, { value:'we'}, { value:'th'}, { value:'fr'}, { value:'sa'}, { value:'su'}];

const Week = () => (
  <div className="c-week">
    {days.map( (d, i) => <Day key={i} data={d} />)}
  </div>
);

export default Week;
