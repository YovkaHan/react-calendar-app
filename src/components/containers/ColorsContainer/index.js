/**
 * Created by Jordan3D on 5/9/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Color from '../Color';
import {entityChange} from '../../../actions';
import PropTypes from 'prop-types'

const ColorsContainer = ({children}) => {
  return (
    <div>
      {children.map( (child) => <Color type={child.type} id={child.id} />)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const {entities} = state;
  const children = entities[ownProps.type][ownProps.id];
  return ({
    children
  });
}

ColorsContainer.propTypes = {
  children: PropTypes.array.isRequired,
}

export default connect(
  mapStateToProps
)(ColorsContainer)
