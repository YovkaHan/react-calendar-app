/**
 * Created by Jordan3D on 5/7/2018.
 */
import React from 'react';
import './index.scss';
import PropTypes from 'prop-types'

const Item = ({children, cName, onClick}) => {
  return (
    <div className={`c-item ${cName? cName: ''}`} onClick={onClick}>
      {children}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.node,
  cName: PropTypes.string,
  onClick: PropTypes.func
};

export default Item;
