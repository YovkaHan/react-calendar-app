/**
 * Created by Jordan3D on 5/6/2018.
 */
import React from 'react';
import Calendar from '../Calendar';
import Flags from '../../presentational/Flags';


const App = () => (
  <div>
    <h1 className="main-title">Set schedule</h1>
    <Calendar component="calendar1"/>
    {/*<Flags/>*/}
  </div>
);

export default App;
