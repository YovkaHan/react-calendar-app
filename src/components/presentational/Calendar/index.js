/**
 * Created by Jordan3D on 5/7/2018.
 */
import React from 'react';
import './index.scss';
// import Week from '../Week';
// import ControlButtons from '../ControlButtons';
import Event from '../Event';
import Month from '../Month';

const dayHeight = '60px';

const Calendar = () => (
  <div className="c-calendar">
    <Event/>
    <div className="c-panel" style={{height: dayHeight}}>
      <div className="arrow arrow-left"></div>
      <div className="viewTitle"></div>
      <div className="arrow arrow-right"></div>
    </div>
    {/*<Week/>*/}
    {/*<ControlButtons/>*/}
    <Month/>
  </div>
);

export default Calendar;
