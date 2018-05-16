/**
 * Created by Jordan3D on 5/8/2018.
 */
import React from 'react';
import './index.scss';
import PropTypes from 'prop-types'

const Button = ({ value, onClick }) => {
  return (
    <button className="c-button" onClick={onClick}>
      <span className="value">{value}</span>
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button;
