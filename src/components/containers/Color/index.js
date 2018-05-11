/**
 * Created by Jordan3D on 5/9/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Button from '../../presentational/Button';
// import {entityChange} from '../../../actions';
import PropTypes from 'prop-types'
import './index.scss'

const isOnCheck = (state, logic) => {
  for (let o in logic) {
    if (state[logic[o].type][logic[o].id].value !== logic[o].value) {
      return false;
    }
  }
  return true;
};

const Color = ({color}) => {
  return (
    <div className="color" style={{backgroundColor: color}}>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const {entities} = state;
  const colorObject = entities[ownProps.type][ownProps.id];
  const colorDefault = "whitesmoke";

  return ({
    color: isOnCheck(entities, colorObject.isOn) ? colorObject.value : colorDefault,
  });
};

Color.propTypes = {
  color: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps
)(Color)
