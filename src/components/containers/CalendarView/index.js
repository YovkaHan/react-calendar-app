/**
 * Created by Jordan3D on 5/11/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createObject} from '../../../actions'
import Day from '../Day';
import './index.scss';

// const mapStateToProps = (state, ownProps) => {
//   const {entities} = state;
//   const children = entities[ownProps.type][ownProps.id];
//   return ({
//     children
//   });
//}

export default connect(
  //mapStateToProps
)(Day)
