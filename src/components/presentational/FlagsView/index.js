/**
 * Created by Jordan3D on 5/8/2018.
 */
import React from 'react';
import './index.scss';
import FlagsCore from '../../containers/FlagsCore';

const FlagsView = (id, colorsLogic) => {
  return (
    <div className="c-flags-view">
      <ButtonContainer id={id()}/>
      <ButtonContainer id={id()}/>
      <ColorsContainer id={id()}/>
      <div className="avatar">
        <ButtonContainer id={id()}/>
        <ButtonContainer id={id()}/>
        <div className="avatar">
          <ButtonContainer id={id()}/>
          <div className="avatar">
            <ButtonContainer id={id()}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlagsView
